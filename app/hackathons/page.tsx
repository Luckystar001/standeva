import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Calendar, MapPin, Trophy, Users } from "lucide-react"
import Image from "next/image"
import FileUploadSection from "@/components/fileuploadsection"
export default function HackathonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"%3E%3Cdefs%3E%3Cpattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"%3E%3Ccircle cx=\"25\" cy=\"25\" r=\"1\" fill=\"%23cadb2a\" opacity=\"0.1\"/%3E%3Ccircle cx=\"75\" cy=\"75\" r=\"1\" fill=\"%23cadb2a\" opacity=\"0.1\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/%3E%3C/svg%3E')] opacity-50" /> */}
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
            <span className="text-lime-400">HACKATHONS</span>{" "}
            <span className="text-white">AT STANDEVA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Collaborate, innovate, and build solutions to real-world problems. 
            Join our hackathons and showcase your skills to the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-lg px-8 py-6">
              Current Hackathon
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900 font-bold text-lg px-8 py-6">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Hackathon */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Featured Hackathon
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our current flagship event bringing together the brightest minds to solve global challenges
            </p>
          </div>
          
          <Card className="max-w-6xl mx-auto border-2 border-lime-400 shadow-2xl overflow-hidden">
            <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900">
              <Image
                src="/j383yrpjc4khbnn2urg1fnxarjsc.webp?height=320&width=800"
                alt="Global Impact Hackathon"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-lime-400 text-slate-900 mb-4">Registration Open</Badge>
                <h3 className="text-4xl font-black text-lime-400 mb-2 tracking-wider uppercase">
                  StandEvate 2025
                </h3>
                <p className="text-xl text-white">Building solutions for a sustainable future</p>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-lime-400" />
                  <span className="font-semibold text-slate-400">June 15-30, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-lime-400" />
                  <span className="font-semibold text-slate-400">Online</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-lime-400" />
                  <span className="font-semibold text-slate-400">$200K in Prizes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-lime-400" />
                  <span className="font-semibold text-slate-400">2-5 Members per Team</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-2xl font-black  mb-4 uppercase tracking-wider">
                  About the Hackathon
                </h4>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  The Global Impact Hackathon 2025 brings together developers, designers, and innovators to create 
                  solutions addressing critical global challenges. This year's focus is on digital maternal health support, 
                  data driven food security and combating digital misinformation.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Teams will have two weeks to develop their projects, with mentorship sessions, workshops, and 
                  networking opportunities throughout the event. The hackathon will conclude with a demo day where 
                  teams will present their solutions to a panel of judges from leading tech companies and venture capital firms.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-2xl font-black  mb-6 uppercase tracking-wider">
                  Challenge Tracks
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-l-4 border-l-lime-400 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-black uppercase tracking-wider text-slate-400">
                        Track A: Digital Maternal Health Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-sm">
                        Create innovative solutions to improve maternal health outcomes through digital technologies, 
                        focusing on accessibility and effectiveness.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-lime-400 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-black uppercase tracking-wider text-slate-400">
                        Track B: Data-driven Food Security
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-sm">
                        Develop data-driven applications to address food security challenges, from production 
                        optimization to distribution and waste reduction.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-lime-400 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-black uppercase tracking-wider text-slate-400">
                        Track C: Combating Digital Misinformation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-sm">
                        Build tools and platforms to identify, flag, and reduce the spread of misinformation 
                        in digital spaces, promoting information integrity.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-lg px-8 py-6">
                  Register Your Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Hackathons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Upcoming Hackathons
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mark your calendar for these exciting upcoming events
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <Image
                  src="/vgpy35mxntchpkdrr1sxob0nr1yh.webp?height=200&width=300"
                  alt="AI for Good Hackathon"
                  fill
                  className="object-cover opacity-80"
                />
                <Badge className="absolute top-4 right-4 bg-lime-400 text-slate-900">Coming Soon</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider ">
                  AI for Good Hackathon
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>August 10-12, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Online</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Develop AI solutions that address social and environmental challenges. Focus areas include 
                  climate change, healthcare accessibility, and education.
                </p>
                <Button variant="outline" className="w-full border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <Image
                  src="/p1w9ocxwqr1k3le943fkxkzynre5.webp?height=200&width=300"
                  alt="Fintech Innovation Challenge"
                  fill
                  className="object-cover opacity-80"
                />
                <Badge className="absolute top-4 right-4 bg-lime-400 text-slate-900">Coming Soon</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider ">
                  Fintech Innovation Challenge
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>September 5-7, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Online</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Create innovative financial technology solutions that promote financial inclusion, 
                  security, and efficiency in the digital economy.
                </p>
                <Button variant="outline" className="w-full border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <Image
                  src="/vosk6fpn2s5w40sazwtw3ffg7qt9.webp?height=200&width=300"
                  alt="Smart Cities Hackathon"
                  fill
                  className="object-cover opacity-80"
                />
                <Badge className="absolute top-4 right-4 bg-lime-400 text-slate-900">Coming Soon</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider ">
                  Smart Cities Hackathon
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>October 15-17, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Online</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Build solutions that make cities smarter, more sustainable, and more livable. Focus on 
                  transportation, energy, waste management, and public services.
                </p>
                <Button variant="outline" className="w-full border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-lime-400 mb-4 tracking-wider uppercase">
              Register Your Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join the Global Impact Hackathon 2025 and start your journey to innovation
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto bg-slate-800/80 border-lime-400/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="teamName" className="text-lime-400 font-semibold uppercase tracking-wider">
                    Team Name
                  </Label>
                  <Input
                    id="teamName"
                    placeholder="Enter your team name"
                    className="bg-slate-900/60 border-lime-400/30 text-white placeholder:text-slate-400 focus:border-lime-400"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="teamLeaderName" className="text-lime-400 font-semibold uppercase tracking-wider">
                      Team Leader Name
                    </Label>
                    <Input
                      id="teamLeaderName"
                      placeholder="Enter team leader's name"
                      className="bg-slate-900/60 border-lime-400/30 text-white placeholder:text-slate-400 focus:border-lime-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="teamLeaderEmail" className="text-lime-400 font-semibold uppercase tracking-wider">
                      Team Leader Email
                    </Label>
                    <Input
                      id="teamLeaderEmail"
                      type="email"
                      placeholder="Enter team leader's email"
                      className="bg-slate-900/60 border-lime-400/30 text-white placeholder:text-slate-400 focus:border-lime-400"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="teamSize" className="text-lime-400 font-semibold uppercase tracking-wider">
                    Team Size
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-slate-900/60 border-lime-400/30 text-white focus:border-lime-400">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-lime-400/30">
                      <SelectItem value="2">2 Members</SelectItem>
                      <SelectItem value="3">3 Members</SelectItem>
                      <SelectItem value="4">4 Members</SelectItem>
                      <SelectItem value="5">5 Members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="challengeTrack" className="text-lime-400 font-semibold uppercase tracking-wider">
                    Challenge Track
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-slate-900/60 border-lime-400/30 text-white focus:border-lime-400">
                      <SelectValue placeholder="Select challenge track" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-lime-400/30">
                      <SelectItem value="track-a">Track A: Digital Maternal Health Support</SelectItem>
                      <SelectItem value="track-b">Track B: Data-driven Food Security</SelectItem>
                      <SelectItem value="track-c">Track C: Combating Digital Misinformation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="projectIdea" className="text-lime-400 font-semibold uppercase tracking-wider">
                    Solution Pitch (max of 2 pages pdf)
                  </Label>
                  <main className="p-4">
      <FileUploadSection />
    </main>
           
                </div>
                
                     <Button size="lg" className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-lg py-6">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
