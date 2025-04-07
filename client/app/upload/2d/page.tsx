"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUpload } from "@/components/ui/file-upload";
import { ArrowRight, RotateCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Upload2DPage() {
  const { toast } = useToast();
  const [userImage, setUserImage] = useState<File | null>(null);
  const [clothingImage, setClothingImage] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!userImage || !clothingImage) {
      toast({
        title: "Missing images",
        description: "Please upload both your photo and a clothing item.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Generation complete!",
        description: "Your 2D virtual try-on has been generated successfully.",
      });
    }, 3000);
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
            <Tabs defaultValue="upload" className="w-full">
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
                <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Results will appear here after generation
                    </p>
                    <Button variant="outline" onClick={() => {}}>
                      View in Fullscreen
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => {}}>
              Save for Later
            </Button>
            <Button 
              onClick={handleGenerate}
              disabled={!userImage || !clothingImage || isGenerating}
              className="min-w-[150px]"
            >
              {isGenerating ? (
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
