"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUpload } from "@/components/ui/file-upload";
import { ArrowRight, RotateCw, Download } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useTryOn } from "@/hooks/use-try-on";

export default function Upload2DPage() {
  const [userImage, setUserImage] = useState<File | null>(null);
  const [clothingImage, setClothingImage] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<string>("upload");
  const { submit2DTryOn, isLoading, result, progress } = useTryOn();

  const handleGenerate = async () => {
    if (!userImage || !clothingImage) return;
    
    const response = await submit2DTryOn(userImage, clothingImage);
    
    if (response?.success) {
      // Switch to result tab after processing starts
      setActiveTab("result");
    }
  };

  return (
    <div className="container max-w-4xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">2D Virtual Try-On</h1>
        <p className="text-muted-foreground mb-6">
          Upload your photo and clothing item to see how it would look on you.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Upload Images</CardTitle>
            <CardDescription>
              We'll generate a realistic preview of how the clothing will look on you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="upload">Upload Images</TabsTrigger>
                <TabsTrigger value="result">View Result</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FileUpload
                      label="Your Photo"
                      description="Upload a full body photo of yourself"
                      onChange={(file) => setUserImage(file)}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <FileUpload
                      label="Clothing Item"
                      description="Upload an image of the clothing item"
                      onChange={(file) => setClothingImage(file)}
                    />
                  </motion.div>
                </div>
              </TabsContent>
              
              <TabsContent value="result">
                {isLoading && (
                  <div className="mb-6 space-y-4">
                    <p className="text-center font-medium">
                      Generating your virtual try-on...
                    </p>
                    <Progress value={progress} className="h-2" />
                    <p className="text-center text-sm text-muted-foreground">
                      This may take a few moments
                    </p>
                  </div>
                )}
                
                <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg">
                  {result?.success && result.resultPreviewUrl ? (
                    <div className="w-full max-w-md">
                      <div className="relative aspect-[3/4] w-full">
                        <img 
                          src={result.resultPreviewUrl} 
                          alt="Virtual try-on result" 
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="mt-4 flex justify-center">
                        <Button
                          variant="outline"
                          onClick={() => window.open(result.resultPreviewUrl, '_blank')}
                          className="flex items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Save Image
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">
                        {isLoading 
                          ? "Processing your images..."
                          : "Results will appear here after generation"
                        }
                      </p>
                      {!isLoading && (
                        <Button 
                          variant="outline" 
                          onClick={() => setActiveTab("upload")}
                        >
                          Return to Upload
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => {
                setUserImage(null);
                setClothingImage(null);
              }}
              disabled={isLoading}
            >
              Clear Images
            </Button>
            <Button 
              onClick={handleGenerate}
              disabled={!userImage || !clothingImage || isLoading}
              className="min-w-[150px]"
            >
              {isLoading ? (
                <>
                  <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  Generate Try-On
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Tips for best results</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Use a photo with good lighting and a neutral background</li>
            <li>Stand in a natural pose facing the camera</li>
            <li>For clothing items, use images with minimal background</li>
            <li>Higher resolution images will produce better results</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
