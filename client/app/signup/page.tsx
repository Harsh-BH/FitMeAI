"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FormField, FormButton, FormDivider, FormError, FormSuccess } from '@/components/auth/form-elements'
import { ArrowLeft, Github, Twitter } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { AuthPattern, AuthDecorations } from '@/components/auth/auth-svgs'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState('')
  const router = useRouter()
  const { signUp, loading } = useAuth()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')
    setFormSuccess('')
    
    // Form validation
    if (password !== confirmPassword) {
      setFormError('Passwords do not match')
      return
    }
    
    if (password.length < 6) {
      setFormError('Password must be at least 6 characters long')
      return
    }

    try {
      await signUp(name, email, password)
      setFormSuccess('Account created successfully!')
      
      // Clear form fields
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } catch (error: any) {
      console.error('Signup error:', error)
      setFormError(error.message || 'Failed to create account. Please try again.')
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950 flex flex-col justify-center p-4 sm:p-6 relative overflow-hidden">
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
      
      {/* Signup card */}
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
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Create an account</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Join FitMeAI and try on clothes virtually</p>
        </motion.div>
        
        <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800">
          <CardContent className="pt-6">
            <motion.form onSubmit={handleSubmit} variants={containerVariants} initial="hidden" animate="visible">
              {formError && <FormError message={formError} />}
              {formSuccess && <FormSuccess message={formSuccess} />}
              
              <FormField
                label="Full name"
                id="name"
                placeholder="John Doe"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                delay={0.1}
              />
              
              <FormField
                label="Email address"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                delay={0.2}
              />
              
              <FormField
                label="Password"
                id="password"
                type="password"
                placeholder="••••••••"
                required
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                delay={0.3}
              />
              
              <FormField
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                delay={0.4}
              />
              
              <motion.div 
                className="flex items-start mb-6"
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  I agree to the <Link href="/terms" className="text-blue-600 hover:underline dark:text-blue-400">Terms and Conditions</Link>
                </label>
              </motion.div>
              
              <FormButton 
                type="submit" 
                isLoading={loading}
                delay={0.6}
              >
                Create account
              </FormButton>
              
              <FormDivider text="OR" delay={0.7} />
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  type="button"
                  className="flex items-center justify-center gap-2 p-2.5 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  variants={fadeInUp}
                  transition={{ delay: 0.8 }}
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">Github</span>
                </motion.button>
                
                <motion.button
                  type="button"
                  className="flex items-center justify-center gap-2 p-2.5 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  variants={fadeInUp}
                  transition={{ delay: 0.9 }}
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
          transition={{ delay: 1.0 }}
        >
          Already have an account?{" "}
          <Link 
            href="/login" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Sign in
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }} 
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }} 
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </div>
  )
}
