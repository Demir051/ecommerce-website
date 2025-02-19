"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  quickLinks: [
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  customerService: [
    { href: "/shipping", label: "Shipping Information" },
    { href: "/returns", label: "Returns Policy" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
}

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "support@modernshop.com",
    href: "mailto:support@modernshop.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Shopping Street, NY 10001",
    href: "https://maps.google.com",
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Footer() {
  return (
    <footer className="bg-theme-background border-t">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="text-2xl font-bold gradient-text">
              ModernShop
            </Link>
            <p className="text-theme-muted">
              Your one-stop destination for all your shopping needs. We provide quality
              products at competitive prices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-theme-muted hover:text-theme-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-theme-muted hover:text-theme-primary transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              {footerLinks.customerService.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-theme-muted hover:text-theme-primary transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-start gap-3 text-theme-muted hover:text-theme-primary transition-colors"
                >
                  <contact.icon className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-sm">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-theme-muted text-sm">
                Subscribe to our newsletter for updates and exclusive offers.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t text-center text-sm text-theme-muted"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} ModernShop. All rights reserved.</p>
            <ul className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-theme-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 