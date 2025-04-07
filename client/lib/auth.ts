import { useSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export type User = {
  id: string
  email?: string
  name?: string
}

export const useAuth = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  const user: User | null = session?.user ? {
    id: session.user.id || '',
    email: session.user.email || '',
    name: session.user.name || '',
  } : null

  const signUp = async (name: string, email: string, password: string) => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up')
      }
      
      // Automatically sign in after registration
      return await signIn(email, password)
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }
  
  const signIn = async (email: string, password: string) => {
    setLoading(true)
    
    try {
      const result = await nextAuthSignIn('credentials', {
        redirect: false,
        email,
        password
      })
      
      if (result?.error) {
        throw new Error(result.error || 'Failed to sign in')
      }
      
      return result
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }
  
  const signOut = async () => {
    setLoading(true)
    
    try {
      await nextAuthSignOut({ redirect: false })
      router.push('/')
    } catch (error) {
      console.error('Sign out error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }
  
  return {
    user,
    loading: loading || status === 'loading',
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
  }
}
