import { useState } from "react";

type TryOnResult = {
  success: boolean;
  resultPreviewUrl?: string;
  error?: string;
};

export function useTryOn() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<TryOnResult | null>(null);

  const simulateProgress = () => {
    // Simulate progress increases
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + Math.random() * 10;
        if (nextProgress >= 95) {
          clearInterval(interval);
          return 95; // Leave the last 5% for final processing
        }
        return nextProgress;
      });
    }, 1000);

    return interval;
  };

  const submit2DTryOn = async (userImage: File, clothingImage: File) => {
    setIsLoading(true);
    setProgress(0);
    setResult(null);

    const progressInterval = simulateProgress();

    try {
      // Create form data to send files
      const formData = new FormData();
      formData.append("userImage", userImage);
      formData.append("clothingImage", clothingImage);

      // You can replace this with your actual API endpoint
      // For now we'll simulate the API call with a timeout
      
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 5000));
      
      // Simulate API response
      clearInterval(progressInterval);
      setProgress(100);
      
      // In a real implementation, you would get the URL from the API response
      const mockResultUrl = URL.createObjectURL(userImage); // Mock result using the uploaded image
      
      const response = {
        success: true,
        resultPreviewUrl: mockResultUrl,
      };

      setResult(response);
      return response;
    } catch (error) {
      console.error("Error during try-on submission:", error);
      clearInterval(progressInterval);
      
      const errorResponse = {
        success: false,
        error: "Failed to process try-on request"
      };
      
      setResult(errorResponse);
      return errorResponse;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submit2DTryOn,
    isLoading,
    progress,
    result,
  };
}
