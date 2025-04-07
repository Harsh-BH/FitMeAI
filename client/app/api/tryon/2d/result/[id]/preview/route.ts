import { NextRequest, NextResponse } from 'next/server';
import { readFile, access } from 'fs/promises';
import { join } from 'path';
import { constants } from 'fs';
import { headers } from 'next/headers';

/**
 * Serve the preview image for a completed try-on
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const requestId = params.id;
    
    if (!requestId || typeof requestId !== 'string' || requestId.length < 5) {
      return NextResponse.json(
        { error: 'Invalid request ID' },
        { status: 400 }
      );
    }

    const resultDir = join(process.cwd(), 'uploads', requestId);
    const resultImagePath = join(resultDir, 'result-image.png');
    
    // For development purposes, if the result doesn't exist yet,
    // create a placeholder or use the original user image
    try {
      await access(resultImagePath, constants.R_OK);
    } catch (e) {
      // Try to use a placeholder image
      const placeholderPath = join(process.cwd(), 'public', 'placeholder-result.png');
      try {
        const placeholderImage = await readFile(placeholderPath);
        return new NextResponse(placeholderImage, {
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'no-store',
          },
        });
      } catch (placeholderError) {
        return NextResponse.json(
          { error: 'Result image not found' },
          { status: 404 }
        );
      }
    }
    
    // Read and serve the result image
    const imageBuffer = await readFile(resultImagePath);
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error: any) {
    console.error('Error serving preview image:', error);
    return NextResponse.json(
      { error: 'Failed to serve preview: ' + (error.message || 'Unknown error') },
      { status: 500 }
    );
  }
}
