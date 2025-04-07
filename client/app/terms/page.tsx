"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, FileText, AlertTriangle, Scale, ClipboardCheck, Globe } from "lucide-react";

export default function TermsPage() {
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
            <TermsDocumentSvg />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Terms of Service
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Please review these terms carefully before using FitMeAI's virtual try-on services
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

        {/* Terms Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-10"
        >
          {/* Agreement to Terms */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <ClipboardCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Agreement to Terms</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                By accessing or using FitMeAI's services, you agree to be bound by these Terms of Service. If you disagree 
                with any part of these terms, you may not access or use our services.
              </p>
              <p className="text-muted-foreground">
                These terms apply to all users, including casual visitors, registered users, and paying customers.
              </p>
            </div>
          </motion.section>

          {/* Service Description */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Service Description</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                FitMeAI provides a virtual clothing try-on platform using AI technology. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Virtual 2D and 3D clothing try-on</li>
                <li>Body measurement and size estimation</li>
                <li>Personalized clothing recommendations</li>
                <li>Virtual fitting room experiences</li>
              </ul>
              <div className="py-4">
                <ClothingItemsSvg />
              </div>
              <p className="text-muted-foreground">
                We strive to provide accurate and realistic virtual try-on experiences, but users acknowledge that virtual 
                representations may vary from actual physical products.
              </p>
            </div>
          </motion.section>

          {/* User Accounts */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">User Accounts</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                Some features of FitMeAI may require you to create an account. You agree to provide accurate, current, and 
                complete information during the registration process and to update this information to maintain its accuracy.
              </p>
              <p className="text-muted-foreground">
                You are responsible for safeguarding your account credentials and for all activities that occur under your account. 
                You must notify us immediately of any unauthorized use of your account.
              </p>
            </div>
          </motion.section>

          {/* User Content */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">User Content</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                When you upload photos, measurements, or other content to FitMeAI, you grant us a non-exclusive, worldwide, 
                royalty-free license to use, store, display, and process this content for the purpose of providing our services.
              </p>
              <p className="text-muted-foreground">
                You represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>You own or have the necessary rights to your user content</li>
                <li>Your content does not infringe on anyone else's intellectual property rights</li>
                <li>Your content complies with applicable laws and these Terms of Service</li>
              </ul>
            </div>
          </motion.section>

          {/* Intellectual Property Rights */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                FitMeAI and its content, features, and functionality are owned by us, our licensors, or other providers 
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                republish, download, store, or transmit any of our material without our express prior written consent.
              </p>
            </div>
          </motion.section>

          {/* Prohibited Uses */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Prohibited Uses</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                You may use FitMeAI only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Use the service in any way that violates applicable laws</li>
                <li>Attempt to bypass any security measures</li>
                <li>Use data mining, robots, or similar data gathering tools</li>
                <li>Interfere with the proper working of the service</li>
                <li>Upload viruses, malware, or other malicious code</li>
                <li>Impersonate or attempt to impersonate FitMeAI or its employees</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
              </ul>
            </div>
          </motion.section>

          {/* Limitation of Liability */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FITMEAI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
              </p>
              <p className="text-muted-foreground">
                Our liability is limited to the amount you paid us in the last 12 months, or $100 if you haven't made any payments.
              </p>
            </div>
          </motion.section>

          {/* Governing Law */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Governing Law</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                These Terms are governed by and construed in accordance with the laws of the United States and the State of California, 
                without regard to its conflict of law principles.
              </p>
            </div>
          </motion.section>

          {/* Changes to Terms */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">Changes to Terms</h2>
            </div>
            <div className="pl-12 space-y-4">
              <p className="text-muted-foreground">
                We may revise these Terms from time to time. The most current version will always be posted on our website. 
                If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-muted-foreground">
                By continuing to access or use our service after revisions become effective, you agree to be bound by the revised terms.
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
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="font-medium">terms@fitmeai.com</p>
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
function TermsDocumentSvg() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
        d="M 30,15 L 70,15 L 70,85 L 30,85 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        d="M 40,30 L 60,30 M 40,40 L 60,40 M 40,50 L 60,50 M 40,60 L 50,60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        d="M 25,20 L 20,20 L 20,90 L 75,90 L 75,85"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        d="M 55,70 C 55,70 57,74 60,70 L 65,75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function ClothingItemsSvg() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-32">
      {/* T-shirt */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        d="M 40,20 L 60,20 L 60,60 L 40,60 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        d="M 40,20 L 35,30 L 40,35 M 60,20 L 65,30 L 60,35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        d="M 45,20 C 45,20 50,25 55,20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Pants */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        d="M 95,20 L 105,20 L 110,60 L 100,60 M 105,20 L 115,20 L 120,60 L 110,60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        d="M 100,30 L 110,30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Dress */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
        d="M 150,20 L 170,20 L 175,60 L 145,60 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        d="M 155,20 C 155,20 160,25 165,20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        d="M 160,20 L 160,60"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2,3"
        fill="none"
      />

      {/* Hanger lines */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        d="M 50,10 L 50,20 M 105,10 L 105,20 M 160,10 L 160,20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        d="M 30,10 L 180,10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
