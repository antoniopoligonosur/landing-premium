"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  Calendar,
  ArrowRight,
  Award,
  Users
} from "lucide-react";

// Disciplines structured data
const disciplines = [
  {
    id: "mma",
    title: "MMA (Artes Marciales Mixtas)",
    subtitle: "El arte de la efectividad total",
    shortDesc: "Combina el golpeo de pie con el agarre y la lucha en el suelo. El deporte de combate con mayor crecimiento del mundo, adaptado para ti.",
    longDesc: "Nuestras clases de MMA en Sevilla integran de forma fluida técnicas de boxeo, muay thai, lucha olímpica y jiu-jitsu. Aprenderás las transiciones cruciales entre la distancia de golpeo, el trabajo en la jaula (clinch) y el control en el suelo.",
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800&auto=format&fit=crop",
    color: "from-red-600 to-black",
    glowColor: "rgba(239, 68, 68, 0.4)",
    borderColor: "border-red-500/30",
    hoverBorderColor: "group-hover:border-red-500/80",
    icon: Flame,
    schedule: [
      { days: "Lunes, Miércoles, Viernes", hours: "08:30 - 10:00 (Mañanas)" },
      { days: "Lunes a Jueves", hours: "19:30 - 21:00 (Tardes)" },
      { days: "Sábados (Sparring dirigido)", hours: "11:00 - 12:30" }
    ],
    features: ["Transiciones de lucha a golpeo", "Preparación física de combate", "Sparring técnico y seguro"]
  },
  {
    id: "bjj",
    title: "Brazilian Jiu-Jitsu (BJJ)",
    subtitle: "El camino de la sumisión y la inteligencia",
    shortDesc: "El arte marcial donde la técnica y el apalancamiento superan a la fuerza bruta. Controla y somete a tu oponente en el suelo.",
    longDesc: "Especialízate en BJJ en Sevilla con el Maestro Marcelo. El Jiu-Jitsu brasileño se enfoca en llevar al oponente al suelo y aplicar llaves de articulación o estrangulaciones para forzar la rendición, perfecto para defensa personal y competición.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
    color: "from-amber-500 to-black",
    glowColor: "rgba(251, 191, 36, 0.4)",
    borderColor: "border-amber-500/30",
    hoverBorderColor: "group-hover:border-amber-500/80",
    icon: Award,
    schedule: [
      { days: "Martes, Jueves", hours: "09:30 - 11:00 (Mañanas)" },
      { days: "Lunes a Viernes (Gi y No-Gi)", hours: "20:30 - 22:00 (Tardes)" },
      { days: "Sábados (Open Mat)", hours: "09:30 - 11:00" }
    ],
    features: ["Clases con Kimono (Gi) y No-Gi", "Técnicas de raspado y sumisión", "Estrategia para competidores"]
  },
  {
    id: "defense",
    title: "Defensa Personal",
    subtitle: "Preparación real para el mundo exterior",
    shortDesc: "Aprende a identificar amenazas, desescalar conflictos y actuar con máxima eficacia bajo estrés en situaciones de peligro real.",
    longDesc: "Diseñado para hombres y mujeres de todas las edades. No entrenamos para ganar medallas, sino para regresar seguros a casa. Métodos sencillos, eficientes y basados en la biomecánica corporal.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    color: "from-zinc-500 to-black",
    glowColor: "rgba(228, 228, 231, 0.4)",
    borderColor: "border-zinc-500/30",
    hoverBorderColor: "group-hover:border-zinc-500/80",
    icon: Shield,
    schedule: [
      { days: "Martes, Jueves", hours: "18:30 - 19:30 (Tardes)" },
      { days: "Viernes (Taller de escenarios reales)", hours: "18:00 - 19:30" }
    ],
    features: ["Desescalada verbal y prevención", "Técnicas de escape y golpeo rápido", "Psicología y control del estrés"]
  }
];

// FAQs structured for AI crawling (direct Q&A)
const faqs = [
  {
    question: "¿Dónde está ubicado el dojo Marcelo's School en Sevilla?",
    answer: "Nuestro dojo está ubicado en la Calle Arce, en una zona estratégica e histórica de Sevilla. Contamos con instalaciones acondicionadas de primer nivel para la práctica segura de artes marciales en Calle Arce, Sevilla."
  },
  {
    question: "¿Qué nivel de condición física necesito para empezar en MMA o BJJ?",
    answer: "No necesitas ninguna experiencia previa ni una condición física especial. En Marcelo's School, adaptamos el entrenamiento a tu nivel inicial. El Maestro Marcelo y nuestros instructores guiarán tu progreso de forma segura y progresiva, ayudándote a mejorar tu resistencia, fuerza y flexibilidad desde el primer día."
  },
  {
    question: "¿Cómo funciona la clase gratis de prueba en Sevilla?",
    answer: "Ofrecemos una clase de prueba 100% gratuita y sin compromiso en cualquiera de nuestras disciplinas (MMA Sevilla, BJJ en Sevilla o Defensa Personal). Solo tienes que rellenar el formulario en nuestra web seleccionando 'Reserva tu Clase Gratis' y nos pondremos en contacto contigo para asignarte un horario adecuado."
  },
  {
    question: "¿Cuáles son las medidas de seguridad e higiene en el dojo?",
    answer: "La seguridad es nuestra prioridad número uno. Los tatamis se desinfectan profundamente a diario. Contamos con protocolos estrictos de higiene personal y fomentamos un ambiente de entrenamiento colaborativo y respetuoso donde se cuida de los compañeros para evitar lesiones."
  },
  {
    question: "¿Qué equipamiento necesito llevar para mi primera clase en Calle Arce?",
    answer: "Para tu clase de prueba gratuita, solo necesitas traer ropa deportiva cómoda (camiseta y pantalón corto o mallas sin cremalleras metálicas) y una botella de agua. Nosotros te prestaremos el material de protección necesario en caso de que sea requerido para la sesión."
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mma");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    disciplina: "mma",
    mensaje: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setFormSubmitted(true);
      } else {
        alert(data.error || "Hubo un error al procesar tu reserva. Inténtalo de nuevo.");
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      alert("Error de conexión. Por favor, comprueba tu red e inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-grid-pattern overflow-x-hidden selection:bg-red-600 selection:text-white">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[1200px] right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[800px] left-10 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#050506]/85 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center font-bold text-lg tracking-wider text-white shadow-lg shadow-red-900/30 border border-red-500/20 group-hover:scale-105 transition-transform">
              M
            </span>
            <div>
              <span className="font-heading font-bold text-lg tracking-tight text-white block group-hover:text-red-500 transition-colors">
                MARCELO&apos;S
              </span>
              <span className="text-zinc-500 font-heading text-xs tracking-widest block uppercase -mt-1">
                SCHOOL • SEVILLA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button onClick={() => scrollToSection("disciplinas")} className="hover:text-white transition-colors cursor-pointer">
              Disciplinas
            </button>
            <button onClick={() => scrollToSection("sobre-nosotros")} className="hover:text-white transition-colors cursor-pointer">
              El Dojo
            </button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors cursor-pointer">
              Preguntas Frecuentes
            </button>
            <button onClick={() => scrollToSection("contacto")} className="hover:text-white transition-colors cursor-pointer">
              Contacto
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium rounded-lg text-sm transition-all shadow-lg shadow-red-600/20 border border-red-500/30 cursor-pointer"
            >
              Reserva tu Clase Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 w-full bg-[#050506]/98 backdrop-blur-lg border-b border-zinc-900 md:hidden flex flex-col px-6 py-8 gap-6"
          >
            <button
              onClick={() => scrollToSection("disciplinas")}
              className="text-left text-lg font-heading font-medium text-zinc-300 hover:text-red-500 transition-colors"
            >
              Disciplinas
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="text-left text-lg font-heading font-medium text-zinc-300 hover:text-red-500 transition-colors"
            >
              El Dojo
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-lg font-heading font-medium text-zinc-300 hover:text-red-500 transition-colors"
            >
              Preguntas Frecuentes
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left text-lg font-heading font-medium text-zinc-300 hover:text-red-500 transition-colors"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="w-full mt-4 py-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium rounded-lg text-center transition-all shadow-lg shadow-red-600/20"
            >
              Reserva tu Clase Gratis
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050506_80%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-500/20 text-red-500 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
              Artes Marciales en Calle Arce, Sevilla
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-none mb-6"
            >
              Templa tu Cuerpo.<br />
              <span className="text-gradient-red">Domina tu Mente.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-8 leading-relaxed"
            >
              Forma parte de la comunidad de artes marciales más respetada de Sevilla. MMA, Jiu-Jitsu Brasileño (BJJ) y Defensa Personal en un espacio premium de alto rendimiento y valores tradicionales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection("contacto")}
                className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-600/30 border border-red-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Reserva tu Clase Gratis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("disciplinas")}
                className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Explorar Disciplinas
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-8 border-t border-zinc-900 w-full max-w-lg"
            >
              <div>
                <p className="text-3xl font-heading font-bold text-white">20+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-white">500m²</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Instalaciones</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-white">100%</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Comunidad Real</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image / Premium Card Graphic */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl shadow-black/80"
            >
              {/* Overlay shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop"
                alt="MMA y BJJ entrenamiento en Sevilla"
                fill
                priority
                className="object-cover object-center brightness-[0.6] group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-xl p-4 sm:p-6 flex items-center justify-between">
                <div>
                  <span className="text-red-500 font-bold text-xs uppercase tracking-widest block mb-1">Clase Destacada</span>
                  <h3 className="font-heading font-bold text-lg text-white">BJJ en Sevilla</h3>
                  <p className="text-zinc-400 text-xs mt-0.5">Lunes a Jueves con el Maestro Marcelo</p>
                </div>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors shadow-md shadow-red-600/30 cursor-pointer"
                  aria-label="Reservar clase de BJJ"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES SECTION */}
      <section id="disciplinas" className="py-24 sm:py-32 border-t border-zinc-950 bg-gradient-to-b from-[#050506] to-[#0a0a0c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Nuestras Especialidades</h2>
            <p className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-4">
              Disciplinas de <span className="text-gradient-red">Alto Rendimiento</span>
            </p>
            <p className="text-zinc-400 text-base sm:text-lg">
              Ofrecemos programas adaptados tanto para aquellos que buscan competir al más alto nivel como para quienes desean adquirir disciplina, seguridad y salud física en Calle Arce, Sevilla.
            </p>
          </div>

          {/* Interactive tabs for Disciplines Detail & Schedules */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveTab(d.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-sm font-semibold border transition-all cursor-pointer ${
                    activeTab === d.id
                      ? "bg-red-950/40 border-red-500 text-white shadow-lg shadow-red-950/20"
                      : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  <Icon size={16} className={activeTab === d.id ? "text-red-500" : ""} />
                  {d.title.split(" (")[0]}
                </button>
              );
            })}
          </div>

          {/* Active Discipline Content */}
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-black/50">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
            
            {disciplines.map((d) => {
              if (d.id !== activeTab) return null;
              const Icon = d.icon;
              return (
                <div key={d.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column details */}
                  <div className="lg:col-span-7 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/20 flex items-center justify-center">
                        <Icon className="text-red-500" size={20} />
                      </div>
                      <span className="text-zinc-400 font-medium text-sm">{d.subtitle}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
                      {d.title}
                    </h3>

                    <p className="text-zinc-300 mb-6 text-sm sm:text-base leading-relaxed">
                      {d.longDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {d.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-red-500" size={16} />
                          <span className="text-zinc-400 text-xs sm:text-sm">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive HTML Schedule display */}
                    <div className="bg-[#09090b] border border-zinc-800/80 rounded-xl p-4 sm:p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={16} className="text-red-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-heading">Horarios de Entrenamiento</span>
                      </div>
                      <div className="space-y-3">
                        {d.schedule.map((item, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-900 pb-2 last:border-none last:pb-0">
                            <span className="text-xs font-semibold text-zinc-300">{item.days}</span>
                            <span className="text-xs text-red-400 font-mono sm:text-right mt-0.5 sm:mt-0">{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => scrollToSection("contacto")}
                      className="mt-8 self-start px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-red-600/10 cursor-pointer"
                    >
                      Reservar Horario Gratis
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Right Column Image */}
                  <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden border border-zinc-800">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      className="object-cover brightness-[0.7]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overview Cards (smaller layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.id}
                  onClick={() => setActiveTab(d.id)}
                  className={`group relative bg-[#121214] border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/75 cursor-pointer ${
                    activeTab === d.id ? "border-red-500/50" : "border-zinc-800"
                  }`}
                >
                  {/* Subtle red/gold accent bar at top */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-red-500/40 transition-colors">
                      <Icon className="text-zinc-400 group-hover:text-red-500 transition-colors" size={18} />
                    </div>
                    <ArrowRight size={14} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>

                  <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-red-400 transition-colors">
                    {d.title.split(" (")[0]}
                  </h4>

                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {d.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SOBRE EL DOJO SECTION */}
      <section id="sobre-nosotros" className="py-24 sm:py-32 bg-[#050506] border-t border-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side image collage */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-60 rounded-xl overflow-hidden border border-zinc-800 group">
                  <Image
                    src="https://images.unsplash.com/photo-1599058918144-1feabb0ab9a2?q=80&w=600&auto=format&fit=crop"
                    alt="Entrenador Marcelo de MMA Sevilla"
                    fill
                    className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <p className="font-heading font-bold text-sm text-white leading-snug">
                      Entrenador Marcelo de MMA Sevilla
                    </p>
                  </div>
                </div>
                <div className="bg-[#121214] border border-zinc-800 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                  <span className="w-12 h-12 bg-red-950/40 rounded-full flex items-center justify-center border border-red-500/20 text-red-500 mb-3">
                    <Users size={20} />
                  </span>
                  <span className="text-2xl font-bold font-heading text-white">200+</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-1">Alumnos Activos</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-red-650 to-red-900/20 border border-red-500/20 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                  <span className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center border border-white/10 text-white mb-3">
                    <Award size={20} />
                  </span>
                  <span className="text-2xl font-bold font-heading text-white">Faixa Preta</span>
                  <span className="text-[10px] text-zinc-300 uppercase tracking-widest font-semibold mt-1">BJJ Certificado</span>
                </div>
                <div className="relative h-60 rounded-xl overflow-hidden border border-zinc-800 group">
                  <Image
                    src="https://images.unsplash.com/photo-1576007161105-75a5351a4b90?q=80&w=600&auto=format&fit=crop"
                    alt="Clases de Jiu-Jitsu en Sevilla"
                    fill
                    className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <p className="font-heading font-bold text-sm text-white leading-snug">
                      Clases de Jiu-Jitsu en Sevilla
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <h2 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Historia & Valores</h2>
              <h3 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-6">
                Maestro Marcelo: <span className="text-gradient-red">Tradición y Rendimiento</span>
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Fundado bajo la visión de unificar los valores del código de honor tradicional con las técnicas modernas de combate deportivo y defensa de calle, Marcelo&apos;s School se ha convertido en el referente definitivo para el entrenamiento de artes marciales en la Calle Arce, Sevilla.
                </p>
                <p>
                  El <strong>Maestro Marcelo</strong>, cinturón negro con amplia trayectoria internacional, lidera un equipo que no solo forma atletas de competición en <strong>MMA Sevilla</strong> y <strong>BJJ en Sevilla</strong>, sino que guía a personas de cualquier edad a desarrollar autodisciplina, concentración y un carácter inquebrantable.
                </p>
                <p className="border-l-2 border-red-500 pl-4 py-1 italic text-zinc-400 bg-red-950/10 rounded-r-lg text-xs sm:text-sm">
                  &quot;En nuestro tatami en la Calle Arce, no buscamos la violencia. Buscamos el control físico y mental sobre nosotros mismos. Aquí formamos una familia que progresa junta.&quot;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-900">
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950/60 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Instrucción Certificada</h4>
                    <p className="text-zinc-500 text-xs mt-1">Clases guiadas directamente por profesores con titulaciones oficiales e internacionales.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950/60 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Comunidad Integradora</h4>
                    <p className="text-zinc-500 text-xs mt-1">Ambiente de entrenamiento óptimo, alejado de conductas nocivas y enfocado en el compañerismo.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO / GEO LOCAL & FAQ SECTION */}
      <section id="faq" className="py-24 sm:py-32 bg-gradient-to-b from-[#0a0a0c] to-[#050506] border-t border-zinc-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">SEO y Dudas Frecuentes</h2>
            <h3 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-4">
              Preguntas Frecuentes - <span className="text-gradient-red">FAQ</span>
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base">
              Respuestas rápidas y detalladas sobre nuestras clases de artes marciales en Calle Arce, Sevilla. Preparadas para ayudarte y optimizadas para buscadores de IA.
            </p>
          </div>

          {/* Q&A Accordion (Strictly structured HTML for AI crawler indexing) */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#121214] border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-300 hover:border-zinc-700"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-bold text-sm sm:text-base text-white hover:text-red-400 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-zinc-500 transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? "rotate-180 text-red-500" : ""
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-zinc-900/60 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Hidden/Semantic structured HTML for search spiders fallback */}
          <div className="hidden" aria-hidden="true">
            {faqs.map((faq, idx) => (
              <article key={idx} className="schema-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="py-24 sm:py-32 bg-[#050506] border-t border-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form & Info */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Da el Primer Paso</h2>
                <h3 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-6">
                  Reserva tu <span className="text-gradient-red">Clase de Prueba</span>
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                  ¿Listo para comenzar a entrenar en Calle Arce, Sevilla? Rellena el formulario con tus datos y el Maestro Marcelo se pondrá en contacto contigo para coordinar tu primera sesión gratuita.
                </p>

                {/* Local Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-red-500 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Dirección</p>
                      <p className="text-sm font-semibold">Calle Arce, 41002 Sevilla, España</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-red-500 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Teléfono</p>
                      <p className="text-sm font-semibold">+34 954 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-red-500 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Email</p>
                      <p className="text-sm font-semibold">info@marcelosschoolsevilla.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Map Container (Premium dark HUD interface style) */}
              <div className="mt-12 overflow-hidden rounded-xl border border-zinc-800 bg-[#0d0d0f] relative h-64 shadow-xl shadow-black/40 group">
                {/* Overlay details */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* HUD graphics inside the map container */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 z-20">
                  <div className="flex justify-between items-start">
                    <div className="px-3 py-1 bg-black/60 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400">
                      SYS: ACTIVE_LOCATION
                    </div>
                    <div className="px-3 py-1 bg-red-950/60 border border-red-500/20 rounded text-[10px] font-mono text-red-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                      MARCELO&apos;S SCHOOL
                    </div>
                  </div>
                  
                  {/* Coordinates indicator */}
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-heading font-bold text-xs text-white">Calle Arce, Sevilla</h4>
                      <p className="text-[10px] text-zinc-500 font-mono">LAT: 37.39485 | LNG: -5.99612</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Calle+Arce+Sevilla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold rounded text-[11px] transition-all flex items-center gap-1 shadow-lg shadow-red-600/30 cursor-pointer"
                    >
                      Abrir Mapa
                      <ArrowRight size={10} />
                    </a>
                  </div>
                </div>

                {/* Tatami-like glowing locator marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center">
                      <MapPin size={20} className="text-red-500 animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-6 bg-[#121214] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 relative h-auto self-start">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 font-heading">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 bg-[#09090b] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-colors text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 font-heading">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="juan@email.com"
                          className="w-full px-4 py-3 bg-[#09090b] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 font-heading">
                          Teléfono de Contacto
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          id="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleInputChange}
                          placeholder="+34 600 000 000"
                          className="w-full px-4 py-3 bg-[#09090b] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="disciplina" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 font-heading">
                        Disciplina de Interés
                      </label>
                      <select
                        name="disciplina"
                        id="disciplina"
                        value={formData.disciplina}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#09090b] border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-colors text-sm cursor-pointer"
                      >
                        <option value="mma">MMA (Artes Marciales Mixtas)</option>
                        <option value="bjj">Brazilian Jiu-Jitsu (BJJ)</option>
                        <option value="defense">Defensa Personal</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 font-heading">
                        Mensaje (Opcional)
                      </label>
                      <textarea
                        name="mensaje"
                        id="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos si tienes experiencia previa o algún objetivo en particular..."
                        className="w-full px-4 py-3 bg-[#09090b] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg shadow-red-600/20 border border-red-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Reservar Clase Gratis Ahora
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-500 mb-6 animate-bounce">
                      <CheckCircle size={36} />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-white mb-3">
                      ¡Plaza Solicitada!
                    </h4>
                    <p className="text-zinc-400 text-sm max-w-sm mb-8 leading-relaxed">
                      Hola <strong className="text-white">{formData.nombre}</strong>. Hemos registrado tu solicitud de clase gratis para <strong>{disciplines.find(d => d.id === formData.disciplina)?.title.split(" (")[0]}</strong>. El Maestro Marcelo te contactará en breve al <strong className="text-white">{formData.telefono}</strong>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold rounded-lg border border-zinc-800 transition-colors cursor-pointer"
                    >
                      Volver a Enviar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050506] border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-sm text-white">
              M
            </span>
            <span className="font-heading font-bold text-sm tracking-tight text-white">
              MARCELO&apos;S SCHOOL • SEVILLA
            </span>
          </div>

          <p className="text-xs text-zinc-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Marcelo&apos;s School. Todos los derechos reservados. Calle Arce, Sevilla. <br />
            Optimizado para Motores de Búsqueda de IA y Posicionamiento Local.
          </p>
        </div>
      </footer>

    </div>
  );
}
