"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FormField, FormButton, FormDivider, FormError } from '@/components/auth/form-elements'
import { ArrowLeft, Github, Twitter } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { AuthPattern, AuthDecorations } from '@/components/auth/auth-svgs'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState('')
  const router = useRouter()
  const { signIn, loading } = useAuth()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')
    
    try {
      await signIn(email, password)
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Login error:', error)
      setFormError(error.message || 'Failed to login. Please check your credentials.')
    }
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-950 dark:to-purple-950 flex flex-col justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background patterns and decorations */}
      <AuthPattern />
      <AuthDecorations />
      
      {/* Theme Toggle */}
      <div className="absolute top-5 right-5 z-50">
        <ThemeToggle />
      </div>
      
      {/* Back to home */}
      <motion.div 
        className="absolute top-5 left-5 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </motion.div>
      
      {/* Login card */}
      <motion.div 
        className="max-w-md w-full mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="FitMeAI Logo"
              width={120}
              height={40}
              className="mx-auto mb-6 dark:invert"
            />
          </Link>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Welcome back</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to continue to FitMeAI</p>
        </motion.div>
        
        <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800">
          <CardContent className="pt-6">
            <motion.form onSubmit={handleSubmit} variants={containerVariants} initial="hidden" animate="visible">
              {formError && <FormError message={formError} />}
              
              <FormField
                label="Email address"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                delay={0.1}
              />
              
              <FormField
                label="Password"
                id="password"
                type="password"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                delay={0.2}
              />
              
              <motion.div 
                className="mb-6 text-right"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  href="/reset-password" 
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Forgot password?
                </Link>
              </motion.div>
              
              <FormButton 
                type="submit" 
                isLoading={loading}
                delay={0.4}
              >
                Sign in
              </FormButton>
              
              <FormDivider text="OR" delay={0.5} />
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  type="button"
                  className="flex items-center justify-center gap-2 p-2.5 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  variants={fadeInUp}
                  transition={{ delay: 0.6 }}
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">Github</span>
                </motion.button>
                
                <motion.button
                  type="button"
                  className="flex items-center justify-center gap-2 p-2.5 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  variants={fadeInUp}
                  transition={{ delay: 0.7 }}
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">Twitter</span>
                </motion.button>
              </div>
            </motion.form>
          </CardContent>
        </Card>
        
        <motion.div 
          className="text-center mt-6 text-gray-600 dark:text-gray-400"
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          Don't have an account?{" "}
          <Link 
            href="/signup" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Sign up
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
