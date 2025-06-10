import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Lightbulb,
  Users,
  GraduationCap,
  Globe,
  Handshake,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cdefs%3E%3Cpattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="25" cy="25" r="1" fill="%23cadb2a" opacity="0.1"/%3E%3Ccircle cx="75" cy="75" r="1" fill="%23cadb2a" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23grain)"/%3E%3C/svg%3E')] opacity-50" /> */}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
            <span className="text-white">ABOUT</span>{" "}
            <span className="text-lime-400">STANDEVA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            We're on a mission to empower the next generation of tech innovators through world-class hackathons, 
            comprehensive training programs, and a vibrant global community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-wider uppercase">
                Our Mission
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                At Standeva, we believe that innovation thrives when brilliant minds come together to solve 
                real-world problems. Our mission is to create an ecosystem where developers, designers, and 
                tech enthusiasts can learn, build, and connect.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                We provide the platform, resources, and community support needed to transform ideas into 
                impactful solutions. Through our hackathons, bootcamps, and networking events, we're building 
                the future of technology, one innovator at a time.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Whether you're a beginner taking your first steps in tech or an experienced professional 
                looking to make a difference, Standeva is your launchpad to success.
              </p>
            </div>
            <div className="relative">
              <Card className="border-2 border-lime-400 shadow-2xl overflow-hidden">
                <div className="h-96 relative">
                  <Image
                    src="/vosk6fpn2s5w40sazwtw3ffg7qt9.webp?height=400&width=600"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Standeva
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-wider text-slate-400">
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  We foster creativity and encourage bold thinking. Every challenge is an opportunity to 
                  innovate and create solutions that make a real difference in the world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-wider text-slate-400">
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  We believe in the power of collaboration. Our diverse community brings together people 
                  from all backgrounds to learn from each other and grow together.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-wider text-slate-400">
                  Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Continuous learning is at the heart of what we do. We provide world-class education 
                  and mentorship to help our community members reach their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-wider text-slate-400">
                  Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  We're committed to creating positive change. Our programs focus on solving real-world 
                  problems and building solutions that benefit society.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-wider text-slate-400">
                  Integrity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  We operate with transparency, honesty, and respect. Trust is the foundation of our 
                  community, and we work hard to maintain it every day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-wider text-slate-400">
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  We strive for excellence in everything we do. From our events to our educational content, 
                  we maintain the highest standards of quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-lime-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">50K+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Community Members</div>
            </div>
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">200+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Hackathons Hosted</div>
            </div>
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">95%</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Job Placement Rate</div>
            </div>
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">500+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Partner Companies</div>
            </div>
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">$2M+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Prizes Awarded</div>
            </div>
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">50+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-lime-400 mb-4 tracking-wider uppercase">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have questions or want to partner with us? We'd love to hear from you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-black text-lime-400 mb-6 tracking-wider uppercase">
                Let's Connect
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                Whether you're interested in joining our community, partnering with us, or just want to 
                learn more about what we do, we're here to help. Reach out to us through any of the channels below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lime-400 uppercase tracking-wider">Email</h4>
                    <p className="text-slate-300">hello@standeva.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lime-400 uppercase tracking-wider">Phone</h4>
                    <p className="text-slate-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lime-400 uppercase tracking-wider">Address</h4>
                    <p className="text-slate-300">123 Innovation Street<br />Tech District, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lime-400 uppercase tracking-wider">Office Hours</h4>
                    <p className="text-slate-300">Monday - Friday<br />9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-slate-900/80 border-lime-400/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-lime-400 font-semibold uppercase tracking-wider">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="bg-slate-800/60 border-lime-400/30 text-white placeholder:text-slate-400 focus:border-lime-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-lime-400 font-semibold uppercase tracking-wider">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="bg-slate-800/60 border-lime-400/30 text-white placeholder:text-slate-400 focus:border-lime-400"
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
                      placeholder="Enter your email"
                      className="bg-slate-800/60 border-lime-400/30 text-white placeholder:text-slate-400 focus:border-lime-400"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-lime-400 font-semibold uppercase tracking-wider">
                      Subject
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800/60 border-lime-400/30 text-white focus:border-lime-400">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-lime-400/30">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="hackathon">Hackathon Question</SelectItem>
                        <SelectItem value="bootcamp">Bootcamp Information</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-lime-400 font-semibold uppercase tracking-wider">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you"
                      className="bg-slate-800/60 border-lime-400/30 text-white placeholder:text-slate-400 focus:border-lime-400"
                      rows={5}
                    />
                  </div>
                  
                  <Button size="lg" className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-lg py-6">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
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
