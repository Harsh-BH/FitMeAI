import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { processImages } from '@/lib/image-processing';

// Disable body parsing, we'll handle it manually with FormData
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Handle 2D virtual try-on request
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Get the files from the form data
    const userImageFile = formData.get('userImage') as File;
    const clothingImageFile = formData.get('clothingImage') as File;
    
    // Validate files
    if (!userImageFile || !clothingImageFile) {
      return NextResponse.json(
        { error: 'Both user image and clothing image are required' },
        { status: 400 }
      );
    }
    
    // Validate file types
    if (!userImageFile.type.startsWith('image/') || !clothingImageFile.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload image files only.' },
        { status: 400 }
      );
    }
    
    // Create unique ID for this request
    const requestId = uuidv4();
    
    // Create directory for uploads if it doesn't exist
    const uploadDir = join(process.cwd(), 'uploads', requestId);
    await mkdir(uploadDir, { recursive: true });
    
    // Save the files to disk
    const userImagePath = join(uploadDir, 'user-image' + getExtension(userImageFile.name));
    const clothingImagePath = join(uploadDir, 'clothing-image' + getExtension(clothingImageFile.name));
    
    // Convert File objects to ArrayBuffer and then to Buffer for fs writing
    const userImageBuffer = Buffer.from(await userImageFile.arrayBuffer());
    const clothingImageBuffer = Buffer.from(await clothingImageFile.arrayBuffer());
    
    await writeFile(userImagePath, userImageBuffer);
    await writeFile(clothingImagePath, clothingImageBuffer);
    
    // Process images (in a real app, this would call your AI service)
    const result = await processImages(requestId, userImagePath, clothingImagePath);
    
    // In a production environment, we'd call an external API or run inference here
    // For now, simulate async processing with a success response
    return NextResponse.json({
      success: true,
      message: 'Processing started',
      requestId,
      estimatedTimeSeconds: 5,
      // For demo, just return the original paths (in production, don't expose server paths)
      resultPreviewUrl: `/api/tryon/2d/result/${requestId}/preview`,
    });
  } catch (error: any) {
    console.error('Error processing try-on request:', error);
    return NextResponse.json(
      { error: 'Failed to process images: ' + (error.message || 'Unknown error') },
      { status: 500 }
    );
  }
}

/**
 * Helper to get file extension
 */
function getExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? '.' + parts[parts.length - 1].toLowerCase() : '';
}
