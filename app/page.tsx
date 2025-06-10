"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Code,
  Brain,
  Zap,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Rocket,
  Play,
  ChevronRight,
  PlaneIcon as PaperPlane,
} from "lucide-react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [stats, setStats] = useState({ projects: 0, students: 0, placement: 0, clients: 0 })
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const statsRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      rating: 5,
      content:
        "Standeva transformed our legacy system into a modern, scalable platform. Their expertise in cloud architecture saved us months of development time.",
      author: "Sarah Johnson",
      role: "CTO at TechStart Inc.",
    },
    {
      rating: 5,
      content:
        "The Full-Stack bootcamp at Standeva was incredible. I went from zero coding experience to landing my dream job in just 4 months.",
      author: "Michael Chen",
      role: "Software Engineer at Google",
    },
    {
      rating: 5,
      content:
        "Standeva's AI training program gave me the practical skills I needed. The mentorship and project-based learning approach is unmatched.",
      author: "Emily Rodriguez",
      role: "Data Scientist at Microsoft",
    },
  ]

  // Animated counter function
  const animateCounter = (target: number, setter: (value: number) => void) => {
    let start = 0
    const increment = target / 100
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        start = target
        clearInterval(timer)
      }
      setter(Math.floor(start))
    }, 20)
  }

  // Stats animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isStatsVisible) {
            setIsStatsVisible(true)
            animateCounter(500, (val) => setStats((prev) => ({ ...prev, projects: val })))
            animateCounter(2000, (val) => setStats((prev) => ({ ...prev, students: val })))
            animateCounter(95, (val) => setStats((prev) => ({ ...prev, placement: val })))
            animateCounter(50, (val) => setStats((prev) => ({ ...prev, clients: val })))
          }
        })
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isStatsVisible])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #cadb2a 1px, transparent 1px),
                       radial-gradient(circle at 75% 75%, #cadb2a 1px, transparent 1px),
                       radial-gradient(circle at 50% 10%, #cadb2a 1px, transparent 1px),
                       radial-gradient(circle at 10% 60%, #cadb2a 1px, transparent 1px),
                       radial-gradient(circle at 90% 40%, #cadb2a 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-lime-400/20 text-lime-400 border-lime-400/30 hover:bg-lime-400/30">
            <Rocket className="w-4 h-4 mr-2" />
            Transforming Businesses Through Technology
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
            <span className="text-lime-400">TECH SOLUTIONS</span>
            <br />
            <span className="text-white">& TRAINING</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Accelerate your business with cutting-edge technology solutions and empower your team with world-class
            training programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-lg px-8 py-6">
              Explore Solutions
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900 font-bold text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-lime-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">{stats.projects}+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">{stats.students}+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Students Trained</div>
            </div>
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">{stats.placement}%</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Job Placement Rate</div>
            </div>
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">{stats.clients}+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Tech Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From custom software development to AI implementation, we deliver innovative solutions that drive business
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-500" />
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl flex items-center justify-center mb-4">
                  <Code className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-white">
                  Custom Software Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  End-to-end software solutions tailored to your business needs, from web applications to enterprise
                  systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Full-stack Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">API Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Cloud Architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Mobile Applications</span>
                  </li>
                </ul>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 mt-6">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-500" />
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl flex items-center justify-center mb-4">
                  <Brain className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-white">
                  AI & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Harness the power of AI to automate processes, gain insights, and drive innovation in your
                  organization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Predictive Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Natural Language Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Computer Vision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">MLOps Implementation</span>
                  </li>
                </ul>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 mt-6">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-500" />
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-white">
                  Digital Transformation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Modernize your business processes and technology infrastructure for the digital age.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Process Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Legacy System Migration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Cloud Migration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">DevOps Implementation</span>
                  </li>
                </ul>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 mt-6">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-lime-400 mb-4 tracking-wider uppercase">
              Training Programs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Accelerate your career with our intensive, hands-on training programs designed by industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30">Beginner to Advanced</Badge>
                  <span className="text-3xl font-black text-lime-400">$4,999</span>
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-white">
                  Full-Stack Development Bootcamp
                </CardTitle>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span>16 weeks</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Master modern web development with React, Node.js, and cloud deployment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Live Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">1-on-1 Mentoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Job Placement Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Industry Certification</span>
                  </li>
                </ul>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 mt-6">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-lime-400 transition-all duration-300 hover:-translate-y-2 relative scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-lime-400 text-slate-900">Most Popular</Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-lime-500/10 rounded-lg pointer-events-none" />
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30">Intermediate to Advanced</Badge>
                  <span className="text-3xl font-black text-lime-400">$6,999</span>
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-white">
                  AI/ML Engineering Program
                </CardTitle>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span>20 weeks</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Become an AI engineer with hands-on experience in machine learning and deep learning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Real-world Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Industry Mentors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Portfolio Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Career Guidance</span>
                  </li>
                </ul>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 mt-6">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30">Intermediate</Badge>
                  <span className="text-3xl font-black text-lime-400">$3,999</span>
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-white">
                  Cloud Architecture Certification
                </CardTitle>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span>12 weeks</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">Master cloud platforms and become a certified cloud architect.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">AWS/Azure/GCP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Hands-on Labs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Certification Prep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400" />
                    <span className="text-slate-300">Expert Instructors</span>
                  </li>
                </ul>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 mt-6">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-lime-400 mb-4 tracking-wider uppercase">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how we've helped businesses and individuals achieve their technology goals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-lime-400/20 p-8">
              <CardContent className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-lime-400 fill-lime-400" />
                  ))}
                </div>
                <blockquote className="text-xl text-slate-300 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="text-lg font-bold text-lime-400 mb-1">{testimonials[currentTestimonial].author}</div>
                  <div className="text-slate-400">{testimonials[currentTestimonial].role}</div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-lime-400" : "bg-lime-400/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lime-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-900 mb-8 max-w-3xl mx-auto">
            Let's discuss how our solutions and training programs can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-lime-400 font-bold text-lg px-8 py-6">
              Schedule Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-lime-400 font-bold text-lg px-8 py-6"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-lime-400 mb-4 tracking-wider uppercase">Get In Touch</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Ready to start your transformation journey? Contact us today for a free consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-lime-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-lime-400 uppercase tracking-wider text-sm">Email</div>
                    <div className="text-white">hello@standeva.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-lime-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-lime-400 uppercase tracking-wider text-sm">Phone</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-lime-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-lime-400 uppercase tracking-wider text-sm">Location</div>
                    <div className="text-white">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900 border-lime-400/20">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-lime-400 font-semibold uppercase tracking-wider">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        className="bg-slate-800/60 border-lime-400/30 text-white focus:border-lime-400"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-lime-400 font-semibold uppercase tracking-wider">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        className="bg-slate-800/60 border-lime-400/30 text-white focus:border-lime-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lime-400 font-semibold uppercase tracking-wider">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-slate-800/60 border-lime-400/30 text-white focus:border-lime-400"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-lime-400 font-semibold uppercase tracking-wider">
                      Company
                    </Label>
                    <Input
                      id="company"
                      className="bg-slate-800/60 border-lime-400/30 text-white focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-lime-400 font-semibold uppercase tracking-wider">
                      I'm interested in
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800/60 border-lime-400/30 text-white focus:border-lime-400">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-lime-400/30">
                        <SelectItem value="solutions">Tech Solutions</SelectItem>
                        <SelectItem value="training">Training Programs</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-lime-400 font-semibold uppercase tracking-wider">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or goals..."
                      className="bg-slate-800/60 border-lime-400/30 text-white focus:border-lime-400"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold"
                  >
                    Send Message
                    <PaperPlane className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
