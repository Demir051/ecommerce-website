"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Building, 
  ArrowRight,
  Headphones,
  MessagesSquare,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User
} from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: "+90 (555) 123-4567",
    description: "24/7 Customer Support",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "support@modernshop.com",
    description: "We'll respond within 24 hours",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: MapPin,
    title: "Visit Our Store",
    details: "123 Shopping Street",
    description: "New York, NY 10001",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 - 18:00",
    description: "Weekend: 10:00 - 15:00",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
]

const faqItems = [
  {
    icon: Headphones,
    question: "How can I track my order?",
    answer: "You can track your order using the tracking number provided in your shipping confirmation email.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: MessagesSquare,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: HelpCircle,
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs vary by location.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: AlertCircle,
    question: "How can I change my order?",
    answer: "You can modify your order within 1 hour of placing it by contacting our customer service.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-600" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-sky-500" },
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-600" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-700" },
]

export default function ContactPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-theme-primary/10">
              <Headphones className="w-12 h-12 text-theme-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            We're Here to Help
          </h1>
          <p className="text-lg text-theme-muted mb-8">
            Have questions or need assistance? Our team is ready to help you.
            Choose your preferred way to reach us.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover-card h-full">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 ${item.bgColor} ${item.color} rounded-full flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="font-medium mb-1">{item.details}</p>
                  <p className="text-theme-muted">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-theme-primary" />
                <div>
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  <p className="text-theme-muted">We'll get back to you soon</p>
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-theme-muted">
                      Full Name
                    </label>
                    <div className="relative">
                      <Input placeholder="John Doe" className="pl-10" />
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-theme-muted">
                      Email
                    </label>
                    <div className="relative">
                      <Input type="email" placeholder="john@example.com" className="pl-10" />
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-theme-muted">
                    Subject
                  </label>
                  <div className="relative">
                    <Input placeholder="How can we help?" className="pl-10" />
                    <HelpCircle className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-theme-muted">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary h-32 resize-none"
                      placeholder="Type your message here..."
                    ></textarea>
                    <MessageSquare className="w-4 h-4 absolute left-3 top-4 text-theme-muted" />
                  </div>
                </div>
                <Button className="w-full gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Map & Store Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-6 h-6 text-theme-primary" />
                <div>
                  <h2 className="text-2xl font-bold">Visit Our Store</h2>
                  <p className="text-theme-muted">Come say hello in person</p>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.232710472921!2d28.97766091744385!3d41.037138700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1708371547223!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-theme-muted">
                  <MapPin className="w-5 h-5" />
                  <span>123 Shopping Street, NY 10001</span>
                </div>
                <div className="flex items-center gap-3 text-theme-muted">
                  <Clock className="w-5 h-5" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-theme-muted">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`text-theme-muted ${social.color} transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-theme-primary/10">
              <HelpCircle className="w-8 h-8 text-theme-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-theme-muted max-w-2xl mx-auto">
            Find quick answers to common questions about our services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg hover:brightness-105 transition-all duration-300 h-full">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                    <p className="text-theme-muted">{item.answer}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <Card className="p-12 text-center gradient-bg">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-white/10 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust ModernShop.
              We're here to help you every step of the way.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="gap-2">
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-white">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
} 