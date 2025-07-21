"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Github, Mail, ArrowRight, Shield, Clock, Users, CheckCircle, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL


export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const response = await axios.post(`${BACKEND_URL}/login`,{
      username,
      password
    })
    
    if(response.data.success == true){
        alert("userlogged in")
    }
    else{
        alert(response.data.messege)
    }

  const handleSocialLogin = (provider: string) => {
    // In a real app, this would redirect to OAuth provider
    alert(`Redirecting to ${provider} login...`)
  }

  const handleForgotPassword = () => {
    alert("Password reset link would be sent to your email")
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
              <span className="text-gray-400 text-sm">New to DoubtDesk?</span>
              <Link href="/signup">
                <Button
                  variant="outline"
                  className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  Sign Up
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
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">👋 Welcome Back</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Continue Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Access your personalized dashboard, track your progress, and continue getting expert help with your
                coding challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Secure Access</h3>
                  <p className="text-gray-400">Your data is protected with enterprise-grade security</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Quick Access</h3>
                  <p className="text-gray-400">Jump right back into your conversations and projects</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Community Access</h3>
                  <p className="text-gray-400">Reconnect with your network of developer experts</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  </div>
                  <span className="text-sm text-gray-300">1000+ active developers online</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Average response time: 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Welcome Back</h2>
              <p className="text-gray-400">Sign in to your DoubtDesk account</p>
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
                <span className="bg-gray-900 px-2 text-gray-400">Or sign in with email</span>
              </div>
            </div>

            {/* Login Form */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-center text-white">Sign In</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium text-gray-300">
                      Username or Email
                    </label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username or email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 pr-10"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        className="border-gray-600 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                      />
                      <label htmlFor="remember" className="text-sm text-gray-300 cursor-pointer">
                        Remember me
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-blue-400 hover:text-blue-300 underline"
                    >
                      Forgot password?
                    </button>
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
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Sign In</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Demo Credentials */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-400 mb-2">Demo Credentials</h4>
              <div className="text-xs text-gray-300 space-y-1">
                <div>
                  Username: <span className="text-blue-400 font-mono">admin</span>
                </div>
                <div>
                  Password: <span className="text-blue-400 font-mono">password</span>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-400 hover:text-blue-300 underline font-medium">
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }}
