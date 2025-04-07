"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Image, Image as ImageIcon } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Upload Your Images</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Choose the type of virtual try-on experience you want
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="h-full"
        >
          <Link href="/upload/2d" className="h-full">
            <Card className="border-2 hover:border-primary h-full transition-all duration-300 cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  2D Virtual Try-On
                </CardTitle>
                <CardDescription>Generate 2D preview images of yourself wearing the clothes</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm text-muted-foreground">
                      Perfect for quick previews and social media sharing
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          className="h-full"
        >
          <Link href="/upload/3d" className="h-full">
            <Card className="border-2 hover:border-primary h-full transition-all duration-300 cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  3D Virtual Try-On
                </CardTitle>
                <CardDescription>Generate 3D models to see the clothes from all angles</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm text-muted-foreground">
                      Get an immersive experience with 360° views and realistic fits
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
