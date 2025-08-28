"use client"

import { useState } from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

interface HeaderProps {
  data: {
    name: string
    linkedin: string
    github: string
    email: string
  }
}

export default function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-black backdrop-blur-sm z-50 border-b border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#FFD700] dancing-script">{data.name[0]}{data.name[8]}</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-yellow-600 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={`${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-yellow-600 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${data.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-yellow-600 transition-colors duration-200"
            >
              <Mail size={18} />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#FFD700] hover:text-yellow-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#FFD700] hover:text-yellow-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
              <a
                href={`${data.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-yellow-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={`${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-yellow-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="text-[#FFD700] hover:text-yellow-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
