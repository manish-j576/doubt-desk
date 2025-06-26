"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Star, ArrowRight, Code, BookOpen, Zap, Shield, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  DoubtDesk
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="#features"
                  className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium"
                >
                  Contact
                </Link>
                <Button
                  variant="outline"
                  className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  Login
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
                <Link href="#" className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Home
                </Link>
                <Link
                  href="#features"
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium"
                >
                  Features
                </Link>
                <Link href="#about" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium"
                >
                  Contact
                </Link>
                <Button
                  variant="outline"
                  className="w-full mt-2 bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🚀 New Platform Launch</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Tech Doubts
                  </span>{" "}
                  Solved Fast
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Connect with expert developers and get instant solutions to your coding problems. From debugging to
                  architecture advice, we've got you covered.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
                >
                  Start Solving Doubts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  </div>
                  <span className="text-sm text-gray-400">1000+ developers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-400">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img src="https://thumbs.dreamstime.com/b/innovative-digital-handshake-cyber-collaboration-futuristic-handshake-symbolizing-digital-collaboration-innovation-344297608.jpg?w=992"
                width={800}
                height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose DoubtDesk?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the fastest way to get your technical questions answered by industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Instant Solutions</h3>
                <p className="text-gray-400">
                  Get answers to your coding questions within minutes from our community of expert developers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Expert Community</h3>
                <p className="text-gray-400">
                  Connect with experienced developers from top tech companies and open-source contributors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Code Review</h3>
                <p className="text-gray-400">
                  Get your code reviewed by experts and learn best practices to improve your development skills.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Learning Resources</h3>
                <p className="text-gray-400">
                  Access curated tutorials, documentation, and learning paths tailored to your skill level.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
                <p className="text-gray-400">
                  Round-the-clock availability ensures you get help whenever you're stuck on a problem.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-indigo-500/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Quality Assured</h3>
                <p className="text-gray-400">
                  All solutions are verified by our expert moderators to ensure accuracy and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">10K+</div>
              <div className="text-gray-400">Questions Solved</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">1K+</div>
              <div className="text-gray-400">Expert Developers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">5 min</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-white">98%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Solve Your Next Challenge?</h2>
            <p className="text-xl text-gray-400">
              Join thousands of developers who trust DoubtDesk for their technical questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                DoubtDesk
              </h3>
              <p className="text-gray-400">
                The fastest way to get your technical questions answered by expert developers.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Product</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  API
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Support</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Status
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} DoubtDesk. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
