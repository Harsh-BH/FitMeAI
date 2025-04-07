#!/usr/bin/env python3
import os
import argparse
import subprocess
import sys
import re

def check_directory(dir_path, create=True):
    """Check if directory exists, create if specified and doesn't exist."""
    if not os.path.exists(dir_path):
        if create:
            print(f"Creating directory: {dir_path}")
            os.makedirs(dir_path, exist_ok=True)
            return True
        else:
            print(f"ERROR: Directory not found: {dir_path}")
            return False
    return True

def fix_test_pairs(test_pairs_file, test_dir):
    """Fix test_pairs.txt file to include proper file extensions."""
    print("Checking and fixing test_pairs.txt file...")
    
    # First backup original file
    backup_file = test_pairs_file + ".backup"
    if not os.path.exists(backup_file):
        with open(test_pairs_file, 'r') as f:
            original_content = f.read()
        with open(backup_file, 'w') as f:
            f.write(original_content)
        print(f"Created backup of original file: {backup_file}")
    
    # Read test pairs
    with open(test_pairs_file, 'r') as f:
        pairs = [line.strip().split() for line in f if line.strip()]
    
    # Find actual files with extensions
    cloth_dir = os.path.join(test_dir, 'cloth')
    img_dir = os.path.join(test_dir, 'image')
    
    cloth_files = {}
    for file in os.listdir(cloth_dir):
        base_name = os.path.splitext(file)[0]
        cloth_files[base_name] = file
    
    img_files = {}
    for file in os.listdir(img_dir):
        base_name = os.path.splitext(file)[0]
        img_files[base_name] = file
    
    # Create updated pairs
    updated_pairs = []
    fixed_count = 0
    missing_count = 0
    
    for img_name, cloth_name in pairs:
        img_base = os.path.splitext(img_name)[0]
        cloth_base = os.path.splitext(cloth_name)[0]
        
        img_full = img_files.get(img_base, img_name)
        cloth_full = cloth_files.get(cloth_base, cloth_name)
        
        # Check if files exist with extensions
        if img_base in img_files and cloth_base in cloth_files:
            updated_pairs.append(f"{img_full} {cloth_full}")
            fixed_count += 1
        else:
            # Add original entry but mark as potentially problematic
            updated_pairs.append(f"{img_name} {cloth_name}")
            missing_count += 1
            if img_base not in img_files:
                print(f"WARNING: Could not find image file for '{img_name}'")
            if cloth_base not in cloth_files:
                print(f"WARNING: Could not find cloth file for '{cloth_name}'")
    
    # Write updated file
    with open(test_pairs_file, 'w') as f:
        f.write('\n'.join(updated_pairs))
    
    print(f"Fixed {fixed_count} pairs with proper extensions.")
    if missing_count > 0:
        print(f"WARNING: {missing_count} pairs have missing files.")
    else:
        print("All pairs have been fixed successfully!")

def main():
    # Parse command line arguments
    parser = argparse.ArgumentParser(description='Run Virtual Try-on Model')
    parser.add_argument('--name', type=str, default='test_output', help='Name for the output directory')
    parser.add_argument('--gpu_id', type=str, default='0', help='GPU ID to use')
    parser.add_argument('--fix_pairs', action='store_true', help='Fix test_pairs.txt file to include proper extensions')
    args = parser.parse_args()

    # Define paths
    base_dir = os.path.dirname(os.path.abspath(__file__))
    dataset_dir = os.path.join(base_dir, 'datasets')
    test_dir = os.path.join(dataset_dir, 'test')
    checkpoint_dir = os.path.join(base_dir, 'checkpoints')
    test_pairs_file = os.path.join(base_dir, 'datasets/test_pairs.txt')
    
    # Check main directories
    if not all([
        check_directory(dataset_dir, False),
        check_directory(test_dir, False),
        check_directory(checkpoint_dir, False)
    ]):
        print("ERROR: Required directories are missing.")
        return 1
    
    # Fix test_pairs.txt to include file extensions if requested
    if args.fix_pairs:
        fix_test_pairs(test_pairs_file, test_dir)
    
    # Run the test script
    cmd = f"CUDA_VISIBLE_DEVICES={args.gpu_id} python test.py --name {args.name}"
    print(f"Running: {cmd}")
    
    try:
        subprocess.run(cmd, shell=True, check=True)
        print(f"\nSuccess! Results saved to: {os.path.join(base_dir, 'results', args.name)}")
        return 0
    except subprocess.CalledProcessError as e:
        print(f"Error running test script: {e}")
        return 1

if __name__ == "__main__":
    sys.exit(main())