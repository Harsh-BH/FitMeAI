"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Upload, 
  Layers, 
  Shirt, 
  Check, 
  Users 
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Define animation variants outside component for global access
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      {/* Theme Toggle Button */}
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          >
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-0">
              Virtual Fashion Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Try Before You Buy with <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Virtual Fashion</span>
            </h1>
            <p className="text-xl mb-8 text-blue-50/90 leading-relaxed max-w-lg">
              Upload your photo and instantly see how clothes fit on your body in stunning 2D and immersive 3D views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full bg-white text-purple-600 hover:bg-white/90 border-0 px-8 h-14 font-medium text-base">
                <Link href="/upload">
                  <Upload size={18} className="mr-2" />
                  Try Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10 px-8 h-14 font-medium text-base">
                <Link href="#how-it-works">
                  Learn More
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative h-[400px] w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src="/try-on-demo.png"
                  alt="Virtual try-on demonstration"
                  fill
                  className="object-contain rounded-xl shadow-2xl"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg dark:bg-black/90"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-black dark:text-white">Virtual Try-On Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <Link href="#features" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
            <span className="text-xs mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <StatItem value="10,000+" label="Happy Shoppers" />
            <StatItem value="95%" label="Sizing Accuracy" />
            <StatItem value="3D" label="Visualization" />
            <StatItem value="100+" label="Brand Partners" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-black" id="features">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Fashion Like Never Before</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our cutting-edge technology transforms the way you shop for clothes online,
              making returns a thing of the past.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="2D Virtual Try-On"
                description="See exactly how garments look on your body with our advanced 2D mapping technology."
                icon="/2d-icon.svg"
                iconComponent={<Layers className="w-10 h-10 text-purple-600" />}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="3D Model Visualization"
                description="Rotate and view outfits from all angles with our immersive 3D modeling."
                icon="/3d-icon.svg"
                iconComponent={<Shirt className="w-10 h-10 text-purple-600" />}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="Perfect Fit Guarantee"
                description="Our AI analyzes your proportions to recommend the perfect size every time."
                icon="/fit-icon.svg"
                iconComponent={<Check className="w-10 h-10 text-purple-600" />}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50" id="how-it-works">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our simple four-step process makes virtual try-on easy and seamless.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <ol className="space-y-8 relative">
                <div className="absolute top-2 left-4 bottom-2 w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-transparent"></div>
                <motion.div variants={fadeInUp} custom={0}>
                  <StepItem 
                    number="1"
                    title="Upload Your Photo"
                    description="Take a full-body photo or upload an existing one to our secure platform."
                  />
                </motion.div>
                <motion.div variants={fadeInUp} custom={1}>
                  <StepItem 
                    number="2"
                    title="Select Clothing Items"
                    description="Browse our catalog and select items you want to try on virtually."
                  />
                </motion.div>
                <motion.div variants={fadeInUp} custom={2}>
                  <StepItem 
                    number="3"
                    title="See the Perfect Fit"
                    description="Our AI instantly renders the clothing on your photo in both 2D and 3D views."
                  />
                </motion.div>
                <motion.div variants={fadeInUp} custom={3}>
                  <StepItem 
                    number="4"
                    title="Shop with Confidence"
                    description="Purchase items knowing exactly how they'll look and fit on you."
                  />
                </motion.div>
              </ol>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative h-[500px] w-full">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/process-demo.png"
                    alt="The process of virtual try-on"
                    fill
                    className="object-contain rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-2xl"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their shopping experience.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <TestimonialCard 
                quote="I saved so much time and money by trying clothes virtually before buying!"
                name="Sarah J."
                role="Fashion Enthusiast"
                image="/testimonial1.jpg"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <TestimonialCard 
                quote="The 3D view is incredible. I can actually see how clothes fit from all angles."
                name="Michael T."
                role="Online Shopper"
                image="/testimonial2.jpg"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <TestimonialCard 
                quote="Returns dropped by 80% since I started using this amazing platform!"
                name="Priya K."
                role="Style Blogger"
                image="/testimonial3.jpg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-400 mb-10"
          >
            Trusted by leading fashion brands
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 opacity-70"
          >
            <BrandLogo name="Brand 1" />
            <BrandLogo name="Brand 2" />
            <BrandLogo name="Brand 3" />
            <BrandLogo name="Brand 4" />
            <BrandLogo name="Brand 5" />
            <BrandLogo name="Brand 6" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Try On Fashion Virtually?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-50/90">
              Join thousands of satisfied shoppers who never buy ill-fitting clothes again. 
              Upload your photo and start trying on outfits in seconds.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-purple-600 hover:bg-white/90 border-0 px-8 h-14 font-medium text-base">
              <Link href="/signup">
                Get Started Free
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-4 text-sm opacity-80">No credit card required</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <Users className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">10,000+ Users</h3>
                <p className="text-blue-50/80">Join our growing community of fashion-forward shoppers.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <Check className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">95% Accuracy</h3>
                <p className="text-blue-50/80">Our AI delivers precise fit recommendations for your body type.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <Shirt className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">100+ Brands</h3>
                <p className="text-blue-50/80">Try clothes from your favorite brands before purchasing.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Image
                src="/logo.svg"
                alt="FitMeAI Logo"
                width={120}
                height={40}
                className="dark:invert"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Virtual try-on technology for perfect fits.
              </p>
            </div>
            <div className="flex gap-8">
              <FooterLink href="/about" text="About" />
              <FooterLink href="/privacy" text="Privacy" />
              <FooterLink href="/terms" text="Terms" />
              <FooterLink href="/contact" text="Contact" />
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} FitMeAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function FeatureCard({ title, description, icon, iconComponent }) {
  return (
    <Card className="overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="p-8">
        <div className="mb-6">
          {iconComponent || (
            <div className="w-16 h-16 mb-4">
              <Image src={icon} alt={title} width={64} height={64} className="dark:invert" />
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function StepItem({ number, title, description }) {
  return (
    <li className="flex gap-6 items-start">
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </li>
  );
}

function TestimonialCard({ quote, name, role, image }) {
  return (
    <Card className="overflow-hidden border border-gray-100 dark:border-gray-800 h-full">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-purple-100 dark:border-purple-900">
            <Image src={image} alt={name} width={56} height={56} className="object-cover" />
          </div>
          <div>
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
          </div>
        </div>
        <p className="italic text-gray-700 dark:text-gray-300 leading-relaxed">"{quote}"</p>
        <div className="flex mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function BrandLogo({ name }) {
  return (
    <div className="h-12 w-32 flex items-center justify-center">
      <div className="bg-gray-300 dark:bg-gray-700 h-6 w-24 rounded"></div>
    </div>
  );
}

function StatItem({ value, label }) {
  return (
    <motion.div 
      variants={fadeInUp} 
      className="flex flex-col items-center"
    >
      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">{value}</span>
      <span className="text-gray-600 dark:text-gray-400 text-sm mt-1">{label}</span>
    </motion.div>
  );
}

function FooterLink({ href, text }) {
  return (
    <Link 
      href={href} 
      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
    >
      {text}
    </Link>
  );
}
