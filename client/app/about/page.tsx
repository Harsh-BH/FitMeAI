"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="container max-w-5xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        {/* Hero Section */}
        <section className="text-center py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mb-8 mx-auto w-40 h-40"
          >
            <ClothingRackSvg />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            FitMeAI
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Revolutionizing the way you shop for clothes with AI-powered virtual try-on technology
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8"
          >
            <Button asChild size="lg">
              <Link href="/upload/2d">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* What is FitMeAI */}
        <section>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">What is FitMeAI?</h2>
              <p className="text-muted-foreground mb-4">
                FitMeAI is an innovative platform that uses advanced AI technology to create virtual try-on experiences. 
                Our solution helps shoppers visualize how clothes will look on them before making a purchase, reducing 
                returns and increasing shopping confidence.
              </p>
              <p className="text-muted-foreground">
                With our 2D and 3D virtual fitting technology, you can see how any garment fits your unique body shape 
                in seconds, all from the comfort of your home.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 relative">
                <TShirtSvg />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Key Features */}
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Features
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 w-12 h-12 flex justify-center items-center">
                    <DressSvg />
                  </div>
                  <CardTitle>2D Virtual Try-On</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    See how clothing items look on your uploaded photo with realistic draping and fitting.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 w-12 h-12 flex justify-center items-center">
                    <ModelSvg />
                  </div>
                  <CardTitle>3D Body Modeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create an accurate 3D model of yourself for precise virtual fittings and size recommendations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 w-12 h-12 flex justify-center items-center">
                    <AiSvg />
                  </div>
                  <CardTitle>AI Style Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get personalized clothing recommendations based on your body shape, style preferences, and past choices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* How It Works */}
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            How It Works
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto space-y-12"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-8"
            >
              <div className="bg-primary/10 rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center text-primary font-bold text-2xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Photo</h3>
                <p className="text-muted-foreground">
                  Take a full-body photo or upload an existing one to our secure platform.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-8"
            >
              <div className="bg-primary/10 rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center text-primary font-bold text-2xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Choose Clothing Items</h3>
                <p className="text-muted-foreground">
                  Select garments from our catalog or upload images of clothing you want to try on.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-8"
            >
              <div className="bg-primary/10 rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center text-primary font-bold text-2xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes body shape, garment characteristics, and creates realistic visualizations.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-8"
            >
              <div className="bg-primary/10 rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center text-primary font-bold text-2xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">See the Result</h3>
                <p className="text-muted-foreground">
                  View and share realistic renderings of how the clothes look on you.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Shopping Experience?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have discovered their perfect fit with FitMeAI.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/upload/2d">
                Try 2D Try-On
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/upload/3d">
                Try 3D Try-On
              </Link>
            </Button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

// SVG Components for clothing and fashion illustrations
function TShirtSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M16,21H8a1,1,0,0,1-1-1V7.6A1,1,0,0,1,7.48,6.7l3-1.5a1,1,0,0,1,.45-.11,2,2,0,0,0,2.14,0,1,1,0,0,1,.45.11l3,1.5A1,1,0,0,1,17,7.6V20A1,1,0,0,1,16,21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        d="M7,8 L3,4 L5,3 L8,5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        d="M17,8 L21,4 L19,3 L16,5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DressSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        d="M 6,4 C 6,4 8,3 12,3 C 16,3 18,4 18,4 L 20,14 L 16,14 L 16,21 L 8,21 L 8,14 L 4,14 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        d="M 12,3 L 12,10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ModelSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <motion.circle
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
        cx="12"
        cy="6"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        d="M 12,9 L 12,15 M 8,21 L 8,14 C 8,12.5 9,11.5 12,11.5 C 15,11.5 16,12.5 16,14 L 16,21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        d="M 8,17 L 16,17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AiSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        d="M 4,8 L 4,16 C 4,17 4.5,17.5 5.5,17.5 L 18.5,17.5 C 19.5,17.5 20,17 20,16 L 20,8 C 20,7 19.5,6.5 18.5,6.5 L 5.5,6.5 C 4.5,6.5 4,7 4,8 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        d="M 8,17.5 L 8,19.5 M 16,17.5 L 16,19.5 M 8,19.5 L 16,19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        d="M 8,10 L 8,14 M 12,10 L 12,14 M 16,10 L 16,14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClothingRackSvg() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        d="M 10,80 L 90,80"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        d="M 20,80 L 20,20 L 80,20 L 80,80"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        d="M 30,20 C 30,20 35,30 50,30 C 65,30 70,20 70,20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Clothing items hanging on rack */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        d="M 30,20 L 30,60 L 40,60 L 40,40 L 30,40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        d="M 50,20 C 50,20 48,25 45,30 L 55,30 C 52,25 50,20 50,20 L 50,50 L 45,50 L 55,50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
        d="M 70,20 L 70,60 Q 65,65 60,60 Q 65,70 70,60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
