import React from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const FormField = ({ 
  label, 
  id, 
  type = 'text',
  placeholder,
  required = false,
  autoComplete,
  value,
  onChange,
  error,
  className,
  delay = 0
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
  required?: boolean
  autoComplete?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  className?: string
  delay?: number
}) => {
  return (
    <motion.div 
      className={cn("mb-6", className)}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      <Label 
        htmlFor={id}
        className="block mb-2 text-sm font-medium"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full bg-white/10 dark:bg-black/10 backdrop-blur-md border-gray-200 dark:border-gray-800",
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        )}
      />
      {error && (
        <motion.p 
          className="mt-1 text-sm text-red-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  )
}

export const FormButton = ({ 
  children, 
  isLoading = false, 
  className,
  delay = 0,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  className?: string
  delay?: number
  children: React.ReactNode
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      <Button 
        className={cn(
          "w-full h-12 rounded-full font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0",
          isLoading ? "opacity-70 cursor-not-allowed" : "",
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : children}
      </Button>
    </motion.div>
  )
}

export const FormDivider = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  return (
    <motion.div 
      className="relative flex items-center my-6"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
      <span className="flex-shrink mx-4 text-sm text-gray-500 dark:text-gray-400">{text}</span>
      <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
    </motion.div>
  )
}

export const FormError = ({ message, delay = 0 }: { message: string, delay?: number }) => {
  if (!message) return null
  
  return (
    <motion.div 
      className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-3 rounded-md mb-6 text-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {message}
    </motion.div>
  )
}

export const FormSuccess = ({ message, delay = 0 }: { message: string, delay?: number }) => {
  if (!message) return null
  
  return (
    <motion.div 
      className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-3 rounded-md mb-6 text-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {message}
    </motion.div>
  )
}
