import os
import shutil
import subprocess
import time
from pathlib import Path
from typing import Dict, Optional

def prepare_test_environment(user_image_path: str, clothing_image_path: str, request_id: str) -> tuple[str, str]:
    """
    Prepare the test environment by copying images to the correct locations
    and updating the test_pairs.txt file.
    
    Returns:
        A tuple of (img_filename, cloth_filename)
    """
    base_dir = Path(os.path.dirname(os.path.abspath(__file__)))
    test_dir = base_dir / "datasets" / "test"
    
    # Create test directory structure if it doesn't exist
    test_img_dir = test_dir / "image"
    test_cloth_dir = test_dir / "cloth"
    test_img_dir.mkdir(parents=True, exist_ok=True)
    test_cloth_dir.mkdir(parents=True, exist_ok=True)
    
    # Copy images with unique names based on request_id
    img_filename = f"user_{request_id}{Path(user_image_path).suffix}"
    cloth_filename = f"cloth_{request_id}{Path(clothing_image_path).suffix}"
    
    img_dest = test_img_dir / img_filename
    cloth_dest = test_cloth_dir / cloth_filename
    
    shutil.copy(user_image_path, img_dest)
    shutil.copy(clothing_image_path, cloth_dest)
    
    # Update test_pairs.txt
    test_pairs_path = base_dir / "datasets" / "test_pairs.txt"
    with open(test_pairs_path, 'a') as f:
        f.write(f"\n{img_filename} {cloth_filename}")
    
    return img_filename, cloth_filename

def process_tryon_task(
    request_id: str, 
    user_image_path: str, 
    clothing_image_path: str,
    jobs: Dict[str, Dict[str, str]]
):
    """
    Process the try-on task in the background.
    This function runs the model and updates the job status.
    """
    try:
        result_dir = Path("results") / request_id
        result_dir.mkdir(parents=True, exist_ok=True)
        
        # Prepare test environment
        img_filename, cloth_filename = prepare_test_environment(
            user_image_path, 
            clothing_image_path, 
            request_id
        )
        
        # Run the model with our custom output name
        output_name = f"tryon_{request_id}"
        cmd = f"python run.py --name {output_name} --gpu_id 0"
        
        # Execute the model
        process = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True,
            text=True
        )
        
        if process.returncode != 0:
            print(f"Model execution failed: {process.stderr}")
            jobs[request_id] = {
                "status": "failed",
                "error": "Model execution failed"
            }
            return
        
        # Copy the result to our results directory
        base_dir = Path(os.path.dirname(os.path.abspath(__file__)))
        model_result_dir = base_dir / "results" / output_name
        
        # Find the result image (this depends on how the model output is structured)
        # Assuming the model outputs a result with the same name pattern
        result_pattern = f"*{os.path.splitext(img_filename)[0]}_{os.path.splitext(cloth_filename)[0]}*"
        result_files = list(model_result_dir.glob(result_pattern))
        
        if not result_files:
            # Fallback to find any image file
            result_files = list(model_result_dir.glob("*.png"))
        
        if result_files:
            # Copy the first matching result
            shutil.copy(str(result_files[0]), str(result_dir / "result.png"))
            jobs[request_id] = {"status": "completed"}
        else:
            jobs[request_id] = {
                "status": "failed", 
                "error": "Could not find result image"
            }
    
    except Exception as e:
        print(f"Error processing try-on task: {str(e)}")
        jobs[request_id] = {
            "status": "failed",
            "error": str(e)
        }

def check_result_exists(request_id: str) -> bool:
    """Check if a result exists for the given request ID."""
    result_path = Path("results") / request_id / "result.png"
    return result_path.exists()
