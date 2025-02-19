"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users2, Trophy, Heart, Star, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Building2,
    title: "Güvenilir Marka",
    description: "2024'ten beri müşterilerimize en kaliteli ürünleri sunuyoruz.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Users2,
    title: "Uzman Ekip",
    description: "Alanında uzman ekibimizle size en iyi hizmeti veriyoruz.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Trophy,
    title: "Ödüllü Hizmet",
    description: "E-ticaret sektöründe birçok ödülün sahibiyiz.",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: Heart,
    title: "Müşteri Odaklı",
    description: "Müşteri memnuniyeti bizim için her şeyden önemli.",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
]

const stats = [
  { value: "50K+", label: "Mutlu Müşteri" },
  { value: "10K+", label: "Ürün Çeşidi" },
  { value: "24/7", label: "Destek" },
  { value: "150+", label: "Ülke" },
]

const values = [
  {
    title: "Kalite",
    description: "En kaliteli ürünleri en uygun fiyatlarla sunuyoruz.",
  },
  {
    title: "Güven",
    description: "Güvenli alışveriş deneyimi için çalışıyoruz.",
  },
  {
    title: "Hız",
    description: "Siparişlerinizi en hızlı şekilde teslim ediyoruz.",
  },
  {
    title: "İnovasyon",
    description: "Teknolojiyi yakından takip ediyor ve uyguluyoruz.",
  },
]

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Düzenli Müşteri",
    content: "ModernShop ile alışveriş yapmak çok keyifli. Ürünler kaliteli ve teslimat hızlı.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Ayşe Demir",
    role: "İş Ortağı",
    content: "Profesyonel yaklaşımları ve müşteri odaklı hizmetleri ile sektörde fark yaratıyorlar.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Mehmet Kaya",
    role: "Tedarikçi",
    content: "İş ortağı olarak çalışmaktan çok memnunuz. Şeffaf ve güvenilir bir firma.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
]

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Modern Alışverişin Adresi
          </h1>
          <p className="text-lg text-theme-muted mb-8">
            ModernShop olarak amacımız, müşterilerimize en kaliteli ürünleri
            en uygun fiyatlarla sunmak ve mükemmel bir alışveriş deneyimi yaşatmak.
          </p>
          <Button size="lg" className="hover-card">
            <a href="/products" className="gap-2 inline-flex items-center">
              Ürünleri Keşfet
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg hover:brightness-105 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 ${feature.iconBg} rounded-full mb-4`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-theme-muted">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <Card className="gradient-bg p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Card>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Değerlerimiz</h2>
          <p className="text-theme-muted max-w-2xl mx-auto">
            ModernShop olarak değerlerimiz, her zaman müşterilerimize en iyi hizmeti
            sunmak ve güvenilir bir alışveriş deneyimi yaşatmak üzerine kurulu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover-card h-full">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-theme-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-theme-muted">{value.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-theme-muted max-w-2xl mx-auto">
            Müşterilerimizin memnuniyeti bizim için en önemli başarı göstergesi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg hover:brightness-105 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-theme-muted">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-theme-muted">{testimonial.content}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <Card className="p-12 text-center gradient-bg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hemen Alışverişe Başlayın
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            ModernShop'ta binlerce ürün sizi bekliyor. Hemen üye olun,
            fırsatları kaçırmayın!
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="lg" className="hover-card">
              <a href="/products" className="gap-2 inline-flex items-center">
                Ürünleri İncele
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white hover-card">
              <a href="/contact" className="gap-2 inline-flex items-center">
                Bize Ulaşın
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
} 