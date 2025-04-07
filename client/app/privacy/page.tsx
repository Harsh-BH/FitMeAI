"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, Shield, Lock, Eye, Database, FileCheck } from "lucide-react";

export default function PrivacyPolicy() {
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
    <div className="container max-w-4xl mx-auto pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6"
        >
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        {/* Hero Section */}
        <section className="text-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mb-8 mx-auto w-32 h-32"
          >
            <PrivacyShieldSvg />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            At FitMeAI, we take your privacy seriously. Learn how we collect, use, and protect your personal information.
          </motion.p>
        </section>

        {/* Last Updated Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card>
            <CardContent className="pt-6">
              <p className="font-medium">Last Updated: May 15, 2023</p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Privacy Policy Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-10"
        >
          {/* Introduction */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                FitMeAI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our virtual try-on platform.
              </p>
              <p className="text-muted-foreground">
                Please read this Privacy Policy carefully. By accessing or using FitMeAI, you acknowledge that you have read and 
                understood this Privacy Policy.
              </p>
            </div>
          </motion.section>

          {/* Information We Collect */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <div className="pl-12 space-y-4">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <p className="text-muted-foreground">
                We may collect personal information that you voluntarily provide when using FitMeAI, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>User account credentials</li>
                <li>Body measurements and sizing information</li>
                <li>Photos uploaded for virtual try-on purposes</li>
                <li>Payment information (when applicable)</li>
                <li>Style preferences and shopping history</li>
              </ul>
              
              <h3 className="text-xl font-semibold pt-4">Automatically Collected Information</h3>
              <p className="text-muted-foreground">
                When you access FitMeAI, our servers automatically record information including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Device information (type, operating system, browser)</li>
                <li>IP address and location data</li>
                <li>Usage patterns and interactions with the platform</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </motion.section>

          {/* How We Use Your Information */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Providing the virtual try-on experience and associated services</li>
                <li>Creating and maintaining your user profile</li>
                <li>Processing payments and completing transactions</li>
                <li>Generating personalized clothing recommendations</li>
                <li>Improving our AI algorithms and user experience</li>
                <li>Communicating with you about your account, updates, or promotions</li>
                <li>Ensuring the security and integrity of our platform</li>
              </ul>
            </div>
          </motion.section>

          {/* Data Security */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Data Security</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              <p className="text-muted-foreground">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to 
                use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              <div className="py-4">
                <DataSecuritySvg />
              </div>
            </div>
          </motion.section>

          {/* Your Choices and Rights */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Your Choices and Rights</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Access and obtain a copy of your personal information</li>
                <li>Rectify inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground pt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </div>
          </motion.section>
          
          {/* Changes to Privacy Policy */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">Changes to Privacy Policy</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated 
                "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about 
                how we protect your information.
              </p>
            </div>
          </motion.section>

          {/* Contact Us */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <p className="font-medium">privacy@fitmeai.com</p>
            </div>
          </motion.section>
        </motion.div>

        {/* Back to Home CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="py-8 text-center"
        >
          <Button asChild>
            <Link href="/">
              Return to Home
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

// SVG Components
function PrivacyShieldSvg() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        d="M 50,10 L 90,30 L 90,60 C 90,75 75,90 50,90 C 25,90 10,75 10,60 L 10,30 L 50,10 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M 35,50 L 45,60 L 65,40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function DataSecuritySvg() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-32">
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
        x="60" y="30" width="80" height="60" rx="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <motion.circle
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        cx="100" cy="50" r="15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        d="M 100,65 L 100,75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        d="M 90,50 L 110,50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Data symbols */}
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        d="M 40,40 L 45,40 M 35,50 L 50,50 M 40,60 L 47,60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        d="M 150,40 L 155,40 M 145,50 L 160,50 M 150,60 L 157,60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
