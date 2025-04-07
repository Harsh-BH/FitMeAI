"use client"

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  Users,
  Sparkles,
  Zap,
  ShoppingBag
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useRef, useState, useEffect } from "react";
import { ClothingSVGs } from "@/components/clothing-svgs";

// Define animation variants outside component for global access
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      {/* Floating Clothing SVGs - decorative elements */}
      <div className="fixed -z-10 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        {mounted && <ClothingSVGs />}
      </div>
      
      {/* Theme Toggle Button */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/20 pointer-events-none"></div>
        
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center relative z-10 h-screen justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          >
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-0 shadow-glow-sm">
              <Sparkles className="w-3 h-3 mr-1" /> Virtual Fashion Platform
            </Badge>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Try Before You Buy with{" "}
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              >
                Virtual Fashion
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-blue-50/90 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Upload your photo and instantly see how clothes fit on your body in stunning 2D and immersive 3D views.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button asChild size="lg" className="rounded-full bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all border-0 px-8 h-14 font-medium text-base shadow-glow-md">
                <Link href="/upload">
                  <Upload size={18} className="mr-2" />
                  Try Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10 hover:scale-105 transition-all px-8 h-14 font-medium text-base backdrop-blur-sm">
                <Link href="#how-it-works">
                  Learn More
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
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
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="relative z-10"
              >
                <Image
                  src="/try-on-demo.png"
                  alt="Virtual try-on demonstration"
                  fill
                  className="object-contain rounded-xl shadow-2xl"
                  priority
                />
                {/* Add decorative elements around the image */}
                <div className="absolute -top-5 -left-5 w-12 h-12 text-purple-300 animate-float-slow">
                  <SvgDress />
                </div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 text-blue-300 animate-float-medium">
                  <SvgShirt />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-glow-lg dark:bg-black/90"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-black dark:text-white">Virtual Try-On Active</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute top-12 -left-10 bg-gradient-to-br from-purple-500 to-blue-500 text-white p-3 rounded-lg shadow-glow-md rotate-6 transform"
              >
                <ShoppingBag className="w-5 h-5" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute bottom-20 -left-10 bg-gradient-to-br from-yellow-500 to-amber-600 text-white p-3 rounded-lg shadow-glow-md -rotate-6 transform"
              >
                <Zap className="w-5 h-5" />
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
      <section className="py-12 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white/5 pointer-events-none dark:from-transparent dark:to-black/5"></div>
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <StatItem value="10,000+" label="Happy Shoppers" icon={<Users className="w-6 h-6" />} />
            <StatItem value="95%" label="Sizing Accuracy" icon={<Check className="w-6 h-6" />} />
            <StatItem value="3D" label="Visualization" icon={<Layers className="w-6 h-6" />} />
            <StatItem value="100+" label="Brand Partners" icon={<Shirt className="w-6 h-6" />} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-black relative" id="features">
        <div className="absolute top-10 right-10 w-32 h-32 text-purple-100 dark:text-purple-900 opacity-20 transform rotate-12">
          <SvgJacket className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 left-10 w-24 h-24 text-blue-100 dark:text-blue-900 opacity-20 transform -rotate-12">
          <SvgPants className="w-full h-full" />
        </div>
        
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-md">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Experience Fashion Like Never Before</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our cutting-edge technology transforms the way you shop for clothes online,
              making returns a thing of the past.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="2D Virtual Try-On"
                description="See exactly how garments look on your body with our advanced 2D mapping technology."
                icon="/2d-icon.svg"
                iconComponent={<Layers className="w-12 h-12 text-gradient-purple" />}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="3D Model Visualization"
                description="Rotate and view outfits from all angles with our immersive 3D modeling."
                icon="/3d-icon.svg"
                iconComponent={<Shirt className="w-12 h-12 text-gradient-blue" />}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard 
                title="Perfect Fit Guarantee"
                description="Our AI analyzes your proportions to recommend the perfect size every time."
                icon="/fit-icon.svg"
                iconComponent={<Check className="w-12 h-12 text-gradient-green" />}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/10" id="how-it-works">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-md">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our simple four-step process makes virtual try-on easy and seamless.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:w-1/2"
            >
              <ol className="space-y-8 relative">
                <div className="absolute top-2 left-4 bottom-2 w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-transparent"></div>
                <AnimatePresence>
                  <motion.div 
                    key="step-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <StepItem 
                      number="1"
                      title="Upload Your Photo"
                      description="Take a full-body photo or upload an existing one to our secure platform."
                      icon={<Upload className="w-5 h-5" />}
                    />
                  </motion.div>
                  <motion.div 
                    key="step-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <StepItem 
                      number="2"
                      title="Select Clothing Items"
                      description="Browse our catalog and select items you want to try on virtually."
                      icon={<ShoppingBag className="w-5 h-5" />}
                    />
                  </motion.div>
                  <motion.div 
                    key="step-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <StepItem 
                      number="3"
                      title="See the Perfect Fit"
                      description="Our AI instantly renders the clothing on your photo in both 2D and 3D views."
                      icon={<Shirt className="w-5 h-5" />}
                    />
                  </motion.div>
                  <motion.div 
                    key="step-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <StepItem 
                      number="4"
                      title="Shop with Confidence"
                      description="Purchase items knowing exactly how they'll look and fit on you."
                      icon={<Check className="w-5 h-5" />}
                    />
                  </motion.div>
                </AnimatePresence>
              </ol>
            </motion.div>
            <motion.div 
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:w-1/2"
            >
              <div className="relative h-[500px] w-full">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="relative"
                >
                  <Image
                    src="/process-demo.png"
                    alt="The process of virtual try-on"
                    fill
                    className="object-contain rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-2xl"></div>
                  
                  {/* Decoration elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 text-purple-400 dark:text-purple-600 transform rotate-12 animate-float-slow">
                    <SvgHat />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-10 h-10 text-blue-400 dark:text-blue-600 transform -rotate-12 animate-float-medium">
                    <SvgShoe />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-black relative">
        <div className="absolute top-20 left-10 w-16 h-16 text-pink-100 dark:text-pink-900 opacity-20 transform rotate-12 animate-float-slow">
          <SvgDress />
        </div>
        <div className="absolute bottom-20 right-10 w-16 h-16 text-blue-100 dark:text-blue-900 opacity-20 transform -rotate-12 animate-float-medium">
          <SvgShirt />
        </div>
        
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-md">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">What Our Users Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their shopping experience.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
      <section className="py-16 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-blue-900/10">
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
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mesh-pattern.svg')] opacity-20"></div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'] 
          }}
          transition={{ 
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="absolute -top-10 right-40 w-24 h-24 text-blue-300 opacity-30 transform rotate-12 animate-float-slow">
          <SvgShirt />
        </div>
        <div className="absolute bottom-10 left-20 w-32 h-32 text-purple-300 opacity-30 transform -rotate-12 animate-float-medium">
          <SvgDress />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              animate={{ 
                textShadow: ['0 0 8px rgba(255,255,255,0)', '0 0 16px rgba(255,255,255,0.3)', '0 0 8px rgba(255,255,255,0)'] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            >
              Ready to Try On Fashion Virtually?
            </motion.h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-50/90">
              Join thousands of satisfied shoppers who never buy ill-fitting clothes again. 
              Upload your photo and start trying on outfits in seconds.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button asChild size="lg" className="rounded-full bg-white text-purple-600 hover:bg-white/90 hover:shadow-glow-xl transition-all border-0 px-8 h-14 font-medium text-base">
                <Link href="/signup">
                  Get Started Free
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <p className="mt-4 text-sm opacity-80">No credit card required</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div variants={pulseAnimation} initial="initial" animate="animate">
                  <Users className="h-12 w-12 mb-4 text-blue-200" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">10,000+ Users</h3>
                <p className="text-blue-50/80">Join our growing community of fashion-forward shoppers.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div variants={pulseAnimation} initial="initial" animate="animate">
                  <Check className="h-12 w-12 mb-4 text-blue-200" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">95% Accuracy</h3>
                <p className="text-blue-50/80">Our AI delivers precise fit recommendations for your body type.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div variants={pulseAnimation} initial="initial" animate="animate">
                  <Shirt className="h-12 w-12 mb-4 text-blue-200" />
                </motion.div>
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
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image
                  src="/logo.svg"
                  alt="FitMeAI Logo"
                  width={120}
                  height={40}
                  className="dark:invert"
                />
              </motion.div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Virtual try-on technology for perfect fits.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
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
    <Card className="overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-glow-md transition-all duration-300 h-full">
      <CardContent className="p-8">
        <motion.div 
          className="mb-6"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {iconComponent || (
            <div className="w-16 h-16 mb-4">
              <Image src={icon} alt={title} width={64} height={64} className="dark:invert" />
            </div>
          )}
        </motion.div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function StepItem({ number, title, description, icon }) {
  return (
    <motion.li 
      className="flex gap-6 items-start"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 shadow-glow-sm relative">
        {number}
        <motion.div
          className="absolute inset-0 rounded-full bg-white opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className="text-purple-500 dark:text-purple-400">{icon}</span>}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.li>
  );
}

function TestimonialCard({ quote, name, role, image }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <Card className="overflow-hidden border border-gray-100 dark:border-gray-800 h-full shadow-sm hover:shadow-glow-md transition-all duration-300">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-purple-100 dark:border-purple-900 shadow-sm">
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
              <motion.div
                key={star}
                initial={{ opacity: 0.7 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function BrandLogo({ name }) {
  return (
    <motion.div 
      className="h-12 w-32 flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 h-6 w-24 rounded"></div>
    </motion.div>
  );
}

function StatItem({ value, label, icon }) {
  return (
    <motion.div 
      variants={fadeInUp} 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icon && <div className="mb-2 text-purple-500 dark:text-purple-400">{icon}</div>}
      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">{value}</span>
      <span className="text-gray-600 dark:text-gray-400 text-sm mt-1">{label}</span>
    </motion.div>
  );
}

function FooterLink({ href, text }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Link 
        href={href} 
        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
      >
        {text}
      </Link>
    </motion.div>
  );
}

// SVG Components for clothing items
function SvgShirt({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M3 7L9 3M9 3L12 6L15 3M15 3L21 7M21 7L21 21H3L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgDress({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M6 3.5H18M6 3.5C5.5 5.5 5 7.5 6.5 9.5C8 11.5 8 14 8 15.5C8 17 8 18 8 18.5C8 19 9 19.5 9.5 20C10 20.5 10.5 21 12 21C13.5 21 14 20.5 14.5 20C15 19.5 16 19 16 18.5C16 18 16 17 16 15.5C16 14 16 11.5 17.5 9.5C19 7.5 18.5 5.5 18 3.5M6 3.5C6 3.5 7.5 2.5 12 2.5C16.5 2.5 18 3.5 18 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgPants({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M5.5 3H18.5M5.5 3V21H9.5L12 13L14.5 21H18.5V3M5.5 3H18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgJacket({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M3 7L9 3M9 3L12 6L15 3M15 3L21 7M21 7L21 21H16V15M3 7L3 21H8V15M8 15H16M8 15V11M16 15V11M16 11H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgHat({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M4 14.5C4 13.0999 4 12.3998 4.27248 11.8312C4.54496 11.2626 5.05479 10.8419 6.07446 10.0007C7.09412 9.15946 7.60396 8.73886 8.22064 8.53336C8.83732 8.32785 9.50966 8.36215 10.8543 8.43076C11.284 8.45359 11.6402 8.5 12 8.5C12.3598 8.5 12.716 8.45359 13.1457 8.43076C14.4903 8.36215 15.1627 8.32785 15.7794 8.53336C16.396 8.73886 16.9059 9.15946 17.9255 10.0007C18.9452 10.8419 19.455 11.2626 19.7275 11.8312C20 12.3998 20 13.0999 20 14.5V14.5C20 16.3856 20 17.3284 19.4142 17.9142C18.8284 18.5 17.8856 18.5 16 18.5H8C6.11438 18.5 5.17157 18.5 4.58579 17.9142C4 17.3284 4 16.3856 4 14.5V14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 8.5C15 6.84315 13.6569 5.5 12 5.5C10.3431 5.5 9 6.84315 9 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgShoe({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full"} {...props}>
      <path d="M3 10.5V12.5C3 13.6046 3.89543 14.5 5 14.5H19C20.1046 14.5 21 13.6046 21 12.5V11.5C21 10.3954 20.1046 9.5 19 9.5H16.5C16.1989 9.5 15.9 9.42098 15.6343 9.26827L13.5 8C12.1869 7.18933 11.5303 6.77899 10.7716 6.63951C10.013 6.50003 9.24141 6.64389 7.69825 6.9316L5.83471 7.29088C4.19511 7.59146 3.37531 7.74175 3.18766 8.37087C3 9 3 9.83333 3 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 9.5L7.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 9.5L10.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
