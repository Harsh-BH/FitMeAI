"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  MessageSquare, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin,
  CheckCircle,
  Home,
  ArrowLeft
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your API
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    
    // Reset form after submission (in real app, do this after successful API response)
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="py-4"
      >
        <Button variant="ghost" size="sm" asChild className="gap-1 hover:gap-2 transition-all">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </motion.div>
      
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
            <ContactSvg />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Have questions about FitMeAI? We're here to help you find the perfect fit.
          </motion.p>
        </section>

        {/* Contact Form and Info */}
        <section>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Send Us a Message
                  </h2>
                  
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center text-center py-8 space-y-4"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500" />
                      <h3 className="text-xl font-medium">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="Jane Smith"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Tell us how we can help you"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <ul className="space-y-4">
                    <motion.li 
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">support@fitmeai.com</p>
                      </div>
                    </motion.li>
                    
                    <motion.li 
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </motion.li>
                    
                    <motion.li 
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Office</h3>
                        <p className="text-muted-foreground">
                          123 Fashion Street<br />
                          Suite 456<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </motion.li>
                  </ul>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <h3 className="font-medium mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <motion.a 
                        href="#" 
                        whileHover={{ y: -3 }}
                        className="bg-muted p-2 rounded-full"
                      >
                        <Instagram className="h-5 w-5" />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        whileHover={{ y: -3 }}
                        className="bg-muted p-2 rounded-full"
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        whileHover={{ y: -3 }}
                        className="bg-muted p-2 rounded-full"
                      >
                        <Facebook className="h-5 w-5" />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        whileHover={{ y: -3 }}
                        className="bg-muted p-2 rounded-full"
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="relative h-48 overflow-hidden rounded-lg">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute inset-0 flex justify-center items-center"
                >
                  <StylizedClothingSvg />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Frequently Asked Questions */}
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto space-y-6"
          >
            <FaqItem 
              question="How accurate is the virtual try-on technology?"
              answer="Our AI-powered virtual try-on technology achieves up to 95% accuracy in garment visualization. It accounts for body proportions, fabric draping, and lighting to create realistic representations."
              variants={fadeInUp}
            />
            
            <FaqItem 
              question="Is my body data secure and private?"
              answer="Absolutely. We take privacy seriously. Your body measurements and photos are encrypted, stored securely, and never shared with third parties. You can delete your data at any time."
              variants={fadeInUp}
            />
            
            <FaqItem 
              question="What clothing brands are supported?"
              answer="We currently support over 200 major clothing brands and retailers. We're continuously expanding our partnerships to include more options for our users."
              variants={fadeInUp}
            />
            
            <FaqItem 
              question="How do I get the most accurate results?"
              answer="For best results, take photos in well-lit environments with neutral backgrounds, wear form-fitting clothing for body scans, and provide accurate body measurements when prompted."
              variants={fadeInUp}
            />
            
            <FaqItem 
              question="Is FitMeAI available internationally?"
              answer="Yes! FitMeAI is available worldwide. Our platform supports multiple languages and integrates with international clothing brands and sizing standards."
              variants={fadeInUp}
            />
          </motion.div>
        </section>

        {/* Support Banners */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center h-full relative">
                <div className="absolute right-0 top-0 opacity-10">
                  <HangerSvg />
                </div>
                <h3 className="text-2xl font-bold mb-2 mt-4">Customer Support</h3>
                <p className="mb-6">Our support team is available 24/7 to assist with any questions</p>
                <Button variant="secondary" size="lg" className="mt-auto">
                  Chat with Support
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-muted overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center h-full relative">
                <div className="absolute right-0 top-0 opacity-10">
                  <MeasureTapeSvg />
                </div>
                <h3 className="text-2xl font-bold mb-2 mt-4">Fitting Help</h3>
                <p className="mb-6 text-muted-foreground">Need assistance with measurements or fitting?</p>
                <Button size="lg" className="mt-auto">
                  Fitting Guide
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}

// FAQ Item Component
function FaqItem({ question, answer, variants }: { 
  question: string; 
  answer: string; 
  variants: any;
}) {
  return (
    <motion.div variants={variants} className="border-b pb-4">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </motion.div>
  );
}

// SVG Components
function ContactSvg() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
        x="20" y="20" width="60" height="40" rx="2"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        d="M20 25L50 45L80 25"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        d="M40 70L40 80L60 80L60 70"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        cx="50" cy="80" r="5"
        stroke="currentColor" strokeWidth="2"
      />
    </svg>
  );
}

function StylizedClothingSvg() {
  return (
    <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        d="M30,20 C30,20 40,10 50,10 C60,10 70,20 70,20 L80,50 L60,60 L60,90 L40,90 L40,60 L20,50 Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        d="M100,30 L120,20 L150,30 L170,20 L170,70 L120,70 Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        d="M50,10 C50,10 60,5 70,10"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        d="M120,20 L120,70"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

function HangerSvg() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-64 h-64">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        d="M50,10 L50,20 L20,60 L80,60 Z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        d="M50,20 C50,20 40,20 35,30 C30,40 50,50 50,50 C50,50 70,40 65,30 C60,20 50,20 50,20"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        x1="50" y1="10" x2="50" y2="5"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  );
}

function MeasureTapeSvg() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-64 h-64">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        d="M10,30 C10,25 15,20 20,20 L80,20 C85,20 90,25 90,30 L90,70 C90,75 85,80 80,80 L20,80 C15,80 10,75 10,70 Z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        d="M20,50 L80,50"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        d="M30,40 L30,60 M40,40 L40,60 M50,40 L50,60 M60,40 L60,60 M70,40 L70,60"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round"
      />
    </svg>
  );
}
