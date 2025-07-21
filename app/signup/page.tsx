"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, ArrowRight, Code, Users, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function SignupPage() {
  const [step, setStep] = useState<"username" | "password">("username")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleUsernameSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      console.log("handleusername summit pressed")
    if (!username.trim()) {
      setError("Username is required")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate API call to check if username exists
    console.log("backedn rout",BACKEND_URL)
    const response = await axios.post(`${BACKEND_URL}/checkuser`,{
        username : username
    })
    
    const length = Object.keys(response.data).length;
    console.log(length)
    // returning null from the backend if it is a new user hence if the length is 0 its a new user else it is an existing user


    // For demo purposes, let's say usernames starting with 'existing' are already taken
    if (length == 1) {
      setError("Username already exists. Please choose a different one.")
      setIsLoading(false)
      return
    }

    setStep("password")
    setIsLoading(false)
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim()) {
      setError("Password is required")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate account creation

    await new Promise((resolve) => setTimeout(resolve, 1500))
    const response = await axios.post(`${BACKEND_URL}/signup`,{
      username,
      password
    })
    // Success - in a real app, you'd redirect to dashboard
    alert(`Account created successfully for ${username}!`)
    setIsLoading(false)
  }

  const handleSocialLogin = (provider: string) => {
    // In a real app, this would redirect to OAuth provider
    alert(`Redirecting to ${provider} login...`)
  }

  const goBack = () => {
    setStep("username")
    setPassword("")
    setError("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                DoubtDesk
              </h1>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Already have an account?</span>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Left Section - Marketing Content */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-12 flex-col justify-center">
          <div className="max-w-lg space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🚀 Join Our Community</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Start Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Developer Journey
                </span>{" "}
                Today
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of developers who trust DoubtDesk to solve their technical challenges and accelerate
                their learning.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Instant Solutions</h3>
                  <p className="text-gray-400">Get answers within minutes from expert developers</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Expert Community</h3>
                  <p className="text-gray-400">Connect with developers from top tech companies</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Code Reviews</h3>
                  <p className="text-gray-400">Improve your skills with expert code feedback</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Free to join • No credit card required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Create Your Account</h2>
              <p className="text-gray-400">
                {step === "username" ? "Choose a username to get started" : `Welcome ${username}! Set your password`}
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                onClick={() => handleSocialLogin("GitHub")}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 flex items-center justify-center space-x-2 py-3"
              >
                <Github className="h-5 w-5" />
                <span>Continue with GitHub</span>
              </Button>

              <Button
                onClick={() => handleSocialLogin("Google")}
                className="w-full bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 flex items-center justify-center space-x-2 py-3"
              >
                <Mail className="h-5 w-5" />
                <span>Continue with Google</span>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-900 px-2 text-gray-400">Or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-center text-white">
                  {step === "username" ? "Step 1: Choose Username" : "Step 2: Set Password"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {step === "username" ? (
                  <form onSubmit={handleUsernameSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="username" className="text-sm font-medium text-gray-300">
                        Username
                      </label>
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        disabled={isLoading}
                      />
                      <p className="text-xs text-gray-400">This will be your unique identifier on DoubtDesk</p>
                    </div>

                    {error && (
                      <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded p-2">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Checking...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>Continue</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      )}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium text-gray-300">
                        Password
                      </label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        disabled={isLoading}
                      />
                      <p className="text-xs text-gray-400">Must be at least 6 characters long</p>
                    </div>

                    {error && (
                      <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded p-2">
                        {error}
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <Button
                        type="button"
                        onClick={goBack}
                        variant="outline"
                        className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                        disabled={isLoading}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Creating...</span>
                          </div>
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="text-center text-sm text-gray-400">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
