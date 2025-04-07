"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FileUploadProps {
  label: string;
  description: string;
  accept?: string;
  maxSize?: number; // in MB
  onChange: (file: File | null) => void;
}

export function FileUpload({
  label,
  description,
  accept = "image/*",
  maxSize = 5, // Default 5MB
  onChange
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFile: File | null) => {
    setError(null);
    
    if (!selectedFile) {
      setFile(null);
      setPreview(null);
      onChange(null);
      return;
    }
    
    // Check file size
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds maximum limit of ${maxSize}MB`);
      return;
    }
    
    // Check file type
    if (!selectedFile.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }
    
    setFile(selectedFile);
    onChange(selectedFile);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
      
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setUploadProgress(progress);
        if (progress >= 100) clearInterval(interval);
      }, 100);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files?.length) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
    setUploadProgress(0);
    onChange(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full">
      <p className="text-sm font-medium mb-2">{label}</p>
      
      {!file ? (
        <motion.div
          whileHover={{ scale: 1.01 }}
          className={cn(
            "border-2 border-dashed rounded-lg p-6 transition-colors duration-200 cursor-pointer",
            isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept={accept}
            onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          />
          
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium">Drop your {label.toLowerCase()} here or click to browse</p>
            <p className="text-sm text-muted-foreground">{description}</p>
            <p className="text-xs text-muted-foreground mt-2">
              Max file size: {maxSize}MB • Supported formats: JPG, PNG, WEBP
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative border rounded-lg overflow-hidden"
        >
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img 
              src={preview!} 
              alt="Preview" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-lg"
              onClick={removeFile}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-3 bg-muted/50">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium truncate max-w-[80%]">{file.name}</span>
              <span className="text-xs text-muted-foreground">
                {(file.size / (1024 * 1024)).toFixed(2)}MB
              </span>
            </div>
            <Progress value={uploadProgress} className="h-1" />
          </div>
        </motion.div>
      )}
      
      {error && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-destructive mt-2"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
