"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUpload } from "@/components/ui/file-upload";
import { ArrowRight, Box, RotateCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Upload3DPage() {
  const { toast } = useToast();
  const [userImage, setUserImage] = useState<File | null>(null);
  const [clothingImage, setClothingImage] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressStage, setProgressStage] = useState(0);
  const stages = ["Processing images", "Creating 3D model", "Applying textures", "Final rendering"];

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
    setProgressStage(0);
    
    // Simulate multi-stage processing with increasing delays
    setTimeout(() => {
      setProgressStage(1);
      setTimeout(() => {
        setProgressStage(2);
        setTimeout(() => {
          setProgressStage(3);
          setTimeout(() => {
            setIsGenerating(false);
            toast({
              title: "3D Generation complete!",
              description: "Your 3D virtual try-on has been generated successfully.",
            });
          }, 1500);
        }, 1500);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="container max-w-4xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">3D Virtual Try-On</h1>
        <p className="text-muted-foreground mb-6">
          Upload your images to create an interactive 3D model with the clothing item.
        </p>

        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>3D processing takes longer</AlertTitle>
          <AlertDescription>
            3D generation requires more processing time than 2D images. Please be patient while we create your model.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Box className="h-5 w-5" />
              3D Model Generation
            </CardTitle>
            <CardDescription>
              We'll create a 3D model that you can rotate and view from all angles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="upload">Upload Images</TabsTrigger>
                <TabsTrigger value="result">View 3D Model</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FileUpload
                      label="Your Photos"
                      description="Upload 1-3 photos from different angles"
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
                      description="Upload images of the clothing item"
                      onChange={(file) => setClothingImage(file)}
                    />
                  </motion.div>
                </div>
              </TabsContent>
              
              <TabsContent value="result">
                <div className="flex flex-col items-center justify-center p-16 border-2 border-dashed rounded-lg">
                  <div className="text-center">
                    <Box className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Your 3D model will appear here after generation
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      You'll be able to rotate and zoom to see the fit from all angles
                    </p>
                    <Button variant="outline" onClick={() => {}}>
                      View in AR (if available)
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {isGenerating && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 border rounded-lg bg-muted/50"
              >
                <div className="space-y-2">
                  <p className="font-medium">Processing your 3D model...</p>
                  
                  <div className="space-y-1">
                    {stages.map((stage, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className={`w-4 h-4 rounded-full mr-2 ${
                            progressStage >= index ? 'bg-primary' : 'bg-muted-foreground/30'
                          }`}
                        />
                        <span 
                          className={progressStage >= index ? 'text-foreground' : 'text-muted-foreground'}
                        >
                          {stage}
                          {progressStage === index && "..."}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
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
                  Generate 3D Model
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">3D Modeling Requirements</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Multiple angles help create a more accurate 3D model</li>
            <li>Ensure your entire body is visible in the photos</li>
            <li>Clothing items should be photographed flat and well-lit</li>
            <li>3D generation takes 2-5 minutes to complete</li>
            <li>Higher resolution images will produce better quality 3D models</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
