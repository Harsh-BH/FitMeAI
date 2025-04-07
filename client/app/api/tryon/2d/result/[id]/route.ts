import { NextRequest, NextResponse } from 'next/server';
import { readFile, access } from 'fs/promises';
import { join } from 'path';
import { constants } from 'fs';

/**
 * Get the status or result of a try-on request
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
    const resultJsonPath = join(resultDir, 'result.json');
    
    // Check if the result file exists
    try {
      await access(resultJsonPath, constants.R_OK);
    } catch (e) {
      // Result not ready yet
      return NextResponse.json({
        status: 'processing',
        message: 'Your virtual try-on is still processing',
        requestId,
      });
    }
    
    // Read the result file
    const resultJson = await readFile(resultJsonPath, 'utf-8');
    const result = JSON.parse(resultJson);
    
    return NextResponse.json({
      status: 'completed',
      result,
      requestId,
    });
  } catch (error: any) {
    console.error('Error retrieving try-on result:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve result: ' + (error.message || 'Unknown error') },
      { status: 500 }
    );
  }
}
