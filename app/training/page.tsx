import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Users, GraduationCap, Trophy } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #cadb2a 1px, transparent 1px),
                       radial-gradient(circle at 75% 75%, #cadb2a 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-lime-400/20 text-lime-400 border-lime-400/30 hover:bg-lime-400/30">
            <Trophy className="w-4 h-4 mr-2" />
            Transforming Tech Education
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
            <span className="text-lime-400">BUILD.</span> <span className="text-white">LEARN.</span>{" "}
            <span className="text-lime-400">CONNECT.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join the ultimate platform for developers, innovators, and tech enthusiasts. Participate in hackathons,
            access world-class training, and connect with a vibrant community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-lg px-8 py-6">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900 font-bold text-lg px-8 py-6"
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-lime-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-slate-900">
              <div className="text-4xl md:text-5xl font-black mb-2">50K+</div>
              <div className="text-lg font-semibold uppercase tracking-wider">Active Learners</div>
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From cutting-edge hackathons to comprehensive training programs, we provide the tools and community to
              accelerate your tech journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-wider text-slate-400 ">
                  Epic Hackathons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center">
                  Participate in exciting hackathons with real-world challenges, amazing prizes, and opportunities to
                  showcase your skills to top companies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl text-slate-400 font-black uppercase tracking-wider ">
                  World-Class Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center">
                  Access comprehensive bootcamps and courses in web development, AI, data science, and emerging
                  technologies taught by industry experts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-2xl font-black text-slate-400  uppercase tracking-wider ">
                  Vibrant Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center">
                  Connect with like-minded developers, mentors, and industry leaders. Build lasting relationships and
                  grow your professional network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-lime-400 mb-4 tracking-wider uppercase">
              Join a Career-Changing Bootcamp
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Our transformative training courses have helped students launch new careers in tech.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30 px-4 py-2">
                <span className="mr-2">✓</span> 200-400 hours
              </Badge>
              <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30 px-4 py-2">
                <span className="mr-2">✓</span> Live classes
              </Badge>
              <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30 px-4 py-2">
                <span className="mr-2">✓</span> Flexible - 2 to 7 months
              </Badge>
              <Badge className="bg-lime-400/20 text-lime-400 border-lime-400/30 px-4 py-2">
                <span className="mr-2">✓</span> online
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                <Image
                  src="/j383yrpjc4khbnn2urg1fnxarjsc.webp?height=200&width=300"
                  alt="Web Development Course"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  Web Development
                </CardTitle>
                <CardDescription className="text-slate-300">Build modern software & AI apps.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
                  Learn Web Development
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                <Image
                  src="/p1w9ocxwqr1k3le943fkxkzynre5.webp?height=200&width=300"
                  alt="Data Science & AI Course"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  Data Science & AI
                </CardTitle>
                <CardDescription className="text-slate-300">Build Machine learning & AI models.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
                  Learn Data Science & AI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                <Image
                  src="/vgpy35mxntchpkdrr1sxob0nr1yh.webp?height=200&width=300"
                  alt="Data Engineering Course"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  Data Engineering
                </CardTitle>
                <CardDescription className="text-slate-300">Design efficient data pipelines.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
                  Learn Data Engineering
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                <Image
                  src="/vosk6fpn2s5w40sazwtw3ffg7qt9.webp?height=200&width=300"
                  alt="Data Analytics Course"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  Data Analytics
                </CardTitle>
                <CardDescription className="text-slate-300">Turn your data into insights.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
                  Learn Data Analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Upcoming Events
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't miss out on these exciting opportunities to learn, build, and connect with the community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-lime-400" />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-lime-400 text-slate-900 mb-2">June 15-17, 2025</Badge>
                <CardTitle className="text-2xl font-black uppercase tracking-wider ">
                  AI Innovation Hackathon
                </CardTitle>
                <CardDescription>
                  48-hour hackathon focused on building AI-powered solutions for real-world problems. $50K in prizes!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <Code className="h-16 w-16 text-lime-400" />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-lime-400 text-slate-900 mb-2">June 20, 2025</Badge>
                <CardTitle className="text-2xl font-black uppercase tracking-wider ">
                  Full-Stack Bootcamp
                </CardTitle>
                <CardDescription>
                  Intensive 12-week program covering React, Node.js, databases, and deployment. Limited spots available.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <Users className="h-16 w-16 text-lime-400" />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-lime-400 text-slate-900 mb-2">June 25, 2025</Badge>
                <CardTitle className="text-2xl font-black uppercase tracking-wider ">
                  Tech Networking Event
                </CardTitle>
                <CardDescription>
                  Connect with industry leaders, startup founders, and fellow developers in a relaxed networking
                  environment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold">Join Event</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section id="community" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-lime-400 mb-6 tracking-wider uppercase">
            Join Our Global Community
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Be part of a movement that's shaping the future of technology. Connect, collaborate, and create with
            developers from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-lg px-8 py-6">
              Join Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900 font-bold text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
