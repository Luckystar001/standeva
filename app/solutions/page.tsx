import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  Code,
  Brain,
  Zap,
  CheckCircle,
  Shield,
  Database,
  Globe,
  BarChart,
  Smartphone,
  Layers,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
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

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-lime-400/20 text-lime-400 border-lime-400/30 hover:bg-lime-400/30">
            <Zap className="w-4 h-4 mr-2" />
            Enterprise-Grade Solutions
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wider">
            <span className="text-white">INNOVATIVE</span> <span className="text-lime-400">TECH SOLUTIONS</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Cutting-edge technology solutions designed to solve complex business challenges and drive digital
            transformation across your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold text-lg px-8 py-6">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900 font-bold text-lg px-8 py-6"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-400 text-slate-900">OUR SOLUTIONS</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver end-to-end technology solutions that help businesses innovate, optimize, and grow in today's
              digital landscape.
            </p>
          </div>

          <Tabs defaultValue="software" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12 h-auto p-2 bg-slate-200">
              <TabsTrigger
                value="software"
                className="text-sm md:text-lg py-4 px-2 md:px-4 data-[state=active]:bg-lime-400 data-[state=active]:text-slate-900 flex flex-col items-center gap-2"
              >
                <Code className="h-5 w-5 md:h-6 md:w-6" />
                <span className="hidden md:inline">Software Development</span>
                <span className="md:hidden">Software</span>
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="text-sm md:text-lg py-4 px-2 md:px-4 data-[state=active]:bg-lime-400 data-[state=active]:text-slate-900 flex flex-col items-center gap-2"
              >
                <Brain className="h-5 w-5 md:h-6 md:w-6" />
                <span className="hidden md:inline">AI & Data</span>
                <span className="md:hidden">AI & Data</span>
              </TabsTrigger>
              <TabsTrigger
                value="cloud"
                className="text-sm md:text-lg py-4 px-2 md:px-4 data-[state=active]:bg-lime-400 data-[state=active]:text-slate-900 flex flex-col items-center gap-2"
              >
                <Globe className="h-5 w-5 md:h-6 md:w-6" />
                <span className="hidden md:inline">Cloud Services</span>
                <span className="md:hidden">Cloud</span>
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="text-sm md:text-lg py-4 px-2 md:px-4 data-[state=active]:bg-lime-400 data-[state=active]:text-slate-900 flex flex-col items-center gap-2"
              >
                <Shield className="h-5 w-5 md:h-6 md:w-6" />
                <span className="hidden md:inline">Cybersecurity</span>
                <span className="md:hidden">Security</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="software" className="mt-6">
              <Card className="border-2 border-lime-400/20 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-80">
                    <Image
                      src="/j383yrpjc4khbnn2urg1fnxarjsc.webp?height=500&width=600"
                      alt="Custom Software Development"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                      <div>
                        <Badge className="bg-lime-400 text-slate-900 mb-2">Featured Solution</Badge>
                        <h4 className="text-xl font-bold text-white">Enterprise Application Platform</h4>
                        <p className="text-slate-200">Scalable, secure, and maintainable software solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center">
                        <Code className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-slate-400 tracking-wider">
                          Custom Software Development
                        </h3>
                        <p className="text-lime-600 font-semibold">End-to-end development solutions</p>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                      We build tailored software solutions that address your unique business challenges and help you
                      stay ahead of the competition. Our expert development team delivers high-quality, scalable
                      applications that drive efficiency and growth.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-slate-400 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-lime-400" />
                          Core Services
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-slate-300">• Enterprise application development</li>
                          <li className="text-slate-300">• Web and mobile applications</li>
                          <li className="text-slate-300">• API development and integration</li>
                          <li className="text-slate-300">• Legacy system modernization</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-400 mb-3 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-lime-400" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-slate-800">
                            React
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Node.js
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Python
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Java
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Docker
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Kubernetes
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-100 rounded-lg p-6 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">Success Metrics</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-black text-lime-600">95%</div>
                          <div className="text-sm text-slate-600">On-time Delivery</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-lime-600">40%</div>
                          <div className="text-sm text-slate-600">Cost Reduction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-lime-600">99.9%</div>
                          <div className="text-sm text-slate-600">Uptime</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-lime-400 hover:bg-lime-500 text-slate-900 flex-1">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 flex-1">
                        View Case Studies
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="ai" className="mt-6">
              <Card className="border-2 border-lime-400/20 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-80">
                    <Image
                      src="/p1w9ocxwqr1k3le943fkxkzynre5.webp?height=500&width=600"
                      alt="AI and Data Solutions"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                      <div>
                        <Badge className="bg-lime-400 text-slate-900 mb-2">AI-Powered</Badge>
                        <h4 className="text-xl font-bold text-white">Intelligent Analytics Platform</h4>
                        <p className="text-slate-200">Transform data into actionable business insights</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center">
                        <Brain className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-slate-400 tracking-wider">AI & Data Solutions</h3>
                        <p className="text-lime-600 font-semibold">Intelligent automation & insights</p>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                      Harness the power of artificial intelligence and data analytics to gain valuable insights,
                      automate processes, and make data-driven decisions that drive business growth and innovation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-slate-400 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-lime-400" />
                          AI Services
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-slate-300">• Machine learning model development</li>
                          <li className="text-slate-300">• Natural language processing</li>
                          <li className="text-slate-300">• Computer vision implementation</li>
                          <li className="text-slate-300">• Predictive analytics systems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-400 mb-3 flex items-center gap-2">
                          <Database className="h-5 w-5 text-lime-400" />
                          Data Platforms
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-slate-800">
                            TensorFlow
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            PyTorch
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Apache Spark
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Snowflake
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Databricks
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            MLflow
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-100 rounded-lg p-6 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">AI Impact Metrics</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-black text-lime-600">85%</div>
                          <div className="text-sm text-slate-600">Process Automation</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-lime-600">60%</div>
                          <div className="text-sm text-slate-600">Decision Speed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-lime-600">3x</div>
                          <div className="text-sm text-slate-600">ROI Improvement</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-lime-400 hover:bg-lime-500 text-slate-900 flex-1">
                        Explore AI Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 flex-1">
                        AI Readiness Assessment
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="cloud" className="mt-6">
              <Card className="border-2 border-lime-400/20 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-80">
                    <Image
                      src="/vgpy35mxntchpkdrr1sxob0nr1yh.webp?height=500&width=600"
                      alt="Cloud Services"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                      <div>
                        <Badge className="bg-lime-400 text-slate-900 mb-2">Cloud-Native</Badge>
                        <h4 className="text-xl font-bold text-white">Multi-Cloud Architecture</h4>
                        <p className="text-slate-200">Scalable, resilient, and cost-effective cloud solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center">
                        <Globe className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-slate-400 tracking-wider">Cloud Services</h3>
                        <p className="text-lime-600 font-semibold">Scalable infrastructure solutions</p>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                      Transform your business with our comprehensive cloud solutions that provide scalability,
                      flexibility, and cost-efficiency. We help you migrate, optimize, and manage your cloud
                      infrastructure for maximum performance.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-slate-400 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-lime-400" />
                          Cloud Services
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-slate-300">• Cloud migration and strategy</li>
                          <li className="text-slate-300">• Multi-cloud and hybrid solutions</li>
                          <li className="text-slate-300">• Cloud-native development</li>
                          <li className="text-slate-300">• Infrastructure optimization</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-400 mb-3 flex items-center gap-2">
                          <Layers className="h-5 w-5 text-lime-400" />
                          Platforms
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-slate-800">
                            AWS
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Azure
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Google Cloud
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Terraform
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Kubernetes
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            Serverless
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-100 rounded-lg p-6 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">Cloud Benefits</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-black text-lime-600">70%</div>
                          <div className="text-sm text-slate-600">Cost Savings</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-lime-600">99.99%</div>
                          <div className="text-sm text-slate-600">Availability</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-lime-600">5x</div>
                          <div className="text-sm text-slate-600">Faster Deployment</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-lime-400 hover:bg-lime-500 text-slate-900 flex-1">
                        Start Cloud Journey
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 flex-1">
                        Cloud Assessment
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <Card className="border-2 border-lime-400/20 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-80">
                    <Image
                      src="/vosk6fpn2s5w40sazwtw3ffg7qt9.webp?height=500&width=600"
                      alt="Cybersecurity Solutions"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                      <div>
                        <Badge className="bg-lime-400 text-slate-900 mb-2">Zero Trust</Badge>
                        <h4 className="text-xl font-bold text-white">Enterprise Security Framework</h4>
                        <p className="text-slate-200">Comprehensive protection for your digital assets</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-slate-400 tracking-wider">Cybersecurity Solutions</h3>
                        <p className="text-lime-600 font-semibold">Advanced threat protection</p>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                      Protect your business from evolving cyber threats with our comprehensive security solutions. We
                      help you build resilient systems, implement robust security practices, and ensure business
                      continuity.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-slate-400 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-lime-400" />
                          Security Services
                        </h4>
                        <ul className="space-y-2">
                          <li className="text-slate-300">• Security assessment & testing</li>
                          <li className="text-slate-300">• Zero-trust architecture</li>
                          <li className="text-slate-300">• Threat detection & response</li>
                          <li className="text-slate-300">• Compliance & governance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-400 mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-lime-400" />
                          Security Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-slate-800">
                            SIEM
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            EDR
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            SOAR
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            WAF
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            DLP
                          </Badge>
                          <Badge variant="outline" className="bg-slate-800">
                            IAM
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-100 rounded-lg p-6 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">Security Metrics</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-black text-lime-600">99.8%</div>
                          <div className="text-sm text-slate-600">Threat Detection</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-lime-600">15min</div>
                          <div className="text-sm text-slate-600">Response Time</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-lime-600">Zero</div>
                          <div className="text-sm text-slate-600">Data Breaches</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-lime-400 hover:bg-lime-500 text-slate-900 flex-1">
                        Security Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 flex-1">
                        Security Audit
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/30">FEATURED</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-lime-400 mb-4 tracking-wider uppercase">
              Our Core Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our flagship technology solutions designed to address the most pressing challenges faced by modern
              businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden flex items-center justify-center">
                <Code className="h-16 w-16 text-lime-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  Enterprise Application Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  A comprehensive platform for building, deploying, and managing enterprise applications with built-in
                  scalability, security, and integration capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    Microservices
                  </Badge>
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    API Gateway
                  </Badge>
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    Containerization
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden flex items-center justify-center">
                <Brain className="h-16 w-16 text-lime-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  AI-Powered Analytics Suite
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  Transform your data into actionable insights with our advanced analytics platform featuring machine
                  learning, predictive modeling, and interactive visualizations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    Predictive Analytics
                  </Badge>
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    Real-time Dashboards
                  </Badge>
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    ML Models
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden flex items-center justify-center">
                <Shield className="h-16 w-16 text-lime-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  Integrated Security Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  A comprehensive security solution that protects your digital assets across cloud, on-premises, and
                  hybrid environments with advanced threat detection and response.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    Zero Trust
                  </Badge>
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    Threat Intelligence
                  </Badge>
                  <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                    Compliance
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-400 text-slate-900">INDUSTRIES</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our technology solutions are tailored to meet the unique challenges and requirements of various
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-slate-400">
                  Financial Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Secure, compliant, and innovative solutions for banks, insurance companies, and fintech startups.
                </p>
                <ul className="mt-4 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Fraud detection systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Regulatory compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Digital banking platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-slate-400">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  HIPAA-compliant solutions that improve patient care, streamline operations, and enhance data security.
                </p>
                <ul className="mt-4 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Electronic health records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Telemedicine platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Medical imaging AI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-slate-400">Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Omnichannel solutions that enhance customer experience, optimize inventory, and drive sales growth.
                </p>
                <ul className="mt-4 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">E-commerce platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Customer analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-10 w-10 text-slate-900" />
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-slate-400">
                  Manufacturing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Smart manufacturing solutions that improve efficiency, quality, and reduce operational costs.
                </p>
                <ul className="mt-4 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">IoT integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Predictive maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span className="text-slate-300">Supply chain optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/30">SUCCESS STORIES</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-lime-400 mb-4 tracking-wider uppercase">
              Case Studies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our technology solutions have helped businesses overcome challenges and achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <Image
                  src="/j383yrpjc4khbnn2urg1fnxarjsc.webp?height=200&width=300"
                  alt="Financial Services Case Study"
                  fill
                  className="object-cover opacity-80"
                />
                <Badge className="absolute top-4 right-4 bg-lime-400 text-slate-900">Financial Services</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  Global Bank Digital Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  How we helped a leading global bank modernize their legacy systems and implement a cloud-native
                  architecture, resulting in 40% faster time-to-market and 30% cost reduction.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Enterprise</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="h-4 w-4" />
                    <span>40% ROI</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-900 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <Image
                  src="/p1w9ocxwqr1k3le943fkxkzynre5.webp?height=200&width=300"
                  alt="Healthcare Case Study"
                  fill
                  className="object-cover opacity-80"
                />
                <Badge className="absolute top-4 right-4 bg-lime-400 text-slate-900">Healthcare</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  AI-Powered Diagnostic Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  Developing an AI-powered diagnostic platform for a healthcare provider that improved diagnostic
                  accuracy by 35% and reduced patient wait times by 50%.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Mid-size</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="h-4 w-4" />
                    <span>35% Improvement</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-slate-900 border-lime-400/20 hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <Image
                  src="/vgpy35mxntchpkdrr1sxob0nr1yh.webp?height=200&width=300"
                  alt="Retail Case Study"
                  fill
                  className="object-cover opacity-80"
                />
                <Badge className="absolute top-4 right-4 bg-lime-400 text-slate-900">Retail</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-wider text-lime-400">
                  Omnichannel Retail Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  Building a unified omnichannel platform for a retail chain that increased online sales by 120% and
                  improved customer satisfaction scores by 45%.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Enterprise</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="h-4 w-4" />
                    <span>120% Growth</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-slate-900">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-400 text-slate-900">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-wider uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our technology solutions and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-slate-200">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-lime-400">
                  How do you approach custom software development projects?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We follow an agile development methodology that emphasizes collaboration, flexibility, and iterative
                  development. Our process begins with a thorough discovery phase to understand your business needs,
                  followed by design, development, testing, and deployment phases. We maintain transparent communication
                  throughout the project and provide regular updates on progress.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-slate-200">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-lime-400">
                  What technologies do you specialize in?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We specialize in a wide range of technologies including modern web frameworks (React, Angular, Vue),
                  backend technologies (Node.js, Python, Java), cloud platforms (AWS, Azure, GCP), mobile development
                  (React Native, Flutter), and emerging technologies like AI/ML, blockchain, and IoT. Our team stays
                  up-to-date with the latest advancements to ensure we deliver cutting-edge solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-slate-200">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-lime-400">
                  How do you ensure the security of your solutions?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Security is integrated into every phase of our development process. We follow industry best practices
                  like OWASP guidelines, implement secure coding practices, conduct regular security assessments and
                  penetration testing, and stay updated on emerging threats. Our solutions are designed with a
                  security-first mindset, incorporating encryption, secure authentication, and authorization mechanisms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-slate-200">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-lime-400">
                  What support and maintenance services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We offer comprehensive support and maintenance services to ensure your solutions remain operational,
                  secure, and up-to-date. Our support packages include technical support, bug fixes, security updates,
                  performance optimization, and feature enhancements. We offer flexible SLAs to meet your specific
                  needs, from basic support to 24/7 coverage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-slate-200">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-lime-400">
                  How do you handle data privacy and compliance?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We take data privacy and compliance seriously. Our solutions are designed to comply with relevant
                  regulations such as GDPR, HIPAA, PCI DSS, and CCPA. We implement data protection measures, including
                  data encryption, access controls, and data minimization principles. Our team stays informed about
                  regulatory changes to ensure ongoing compliance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
            Let's discuss how our technology solutions can help you overcome challenges and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-lime-400 font-bold text-lg px-8 py-6">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-900 text-slate-300 hover:bg-slate-900 hover:text-lime-400 font-bold text-lg px-8 py-6"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
