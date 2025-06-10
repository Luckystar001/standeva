"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-lime-400/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-lg overflow-hidden relative">
              <Image
                src="/standeva-35.png" // or a remote URL
                 alt="Your Alt Text"
                 fill
                  className="object-cover"
      />
 
              <Code className="h-6 w-6 text-slate-900" />
            </div>
            <span className="text-2xl font-black text-lime-400 tracking-wider uppercase">Standeva</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/hackathons"
              className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
            >
              Hackathons
            </Link>
            <Link
              href="/training"
              className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
            >
              Training
            </Link>
             <Link
              href="/solutions"
              className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
            >
              Solutions
            </Link>
            <Link
              href="/#community"
              className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
            >
              Community
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold">
              <Link href="/join">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-lime-400" /> : <Menu className="h-6 w-6 text-lime-400" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-lime-400/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/hackathons"
                className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Hackathons
              </Link>
              <Link
                href="/training"
                className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Training
              </Link>
              <Link
                href="/solutions"
                className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>

              <Link
                href="/#community"
                className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-lime-400 transition-colors font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-900 w-fit"
                >
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button className="bg-lime-400 hover:bg-lime-500 text-slate-900 font-bold w-fit">
                  <Link href="/join">Join Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
