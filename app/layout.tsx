import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "Standeva - Build. Learn. Connect.",
  description:
    "Join the ultimate platform for developers, innovators, and tech enthusiasts. Participate in hackathons, access world-class training, and connect with a vibrant community.",
  keywords: ["hackathons", "tech training", "coding bootcamp", "developer community", "innovation"],
  authors: [{ name: "Standeva Team" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${orbitron.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navigation />
          {children}
          <footer className="bg-slate-900 border-t border-lime-400/20 py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                      <span className="text-slate-900 font-black text-lg">S</span>
                    </div>
                    <span className="text-xl font-black text-lime-400 tracking-wider uppercase">Standeva</span>
                  </div>
                  <p className="text-slate-400">
                    Empowering the next generation of tech innovators through hackathons, training, and community.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lime-400 mb-4 uppercase tracking-wider">Programs</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <a href="/hackathons" className="hover:text-lime-400 transition-colors">
                        Hackathons
                      </a>
                    </li>
                    <li>
                      <a href="/#training" className="hover:text-lime-400 transition-colors">
                        Bootcamps
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-lime-400 transition-colors">
                        Workshops
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-lime-400 transition-colors">
                        Mentorship
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lime-400 mb-4 uppercase tracking-wider">Community</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <a href="#" className="hover:text-lime-400 transition-colors">
                        Discord
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-lime-400 transition-colors">
                        Slack
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-lime-400 transition-colors">
                        Forums
                      </a>
                    </li>
                    <li>
                      <a href="/#events" className="hover:text-lime-400 transition-colors">
                        Events
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lime-400 mb-4 uppercase tracking-wider">Support</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <a href="#" className="hover:text-lime-400 transition-colors">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="hover:text-lime-400 transition-colors">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-lime-400 transition-colors">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-lime-400 transition-colors">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-lime-400/20 mt-8 pt-8 text-center text-slate-400">
                <p>&copy; 2025 Standeva. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
