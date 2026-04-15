/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  User,
  ChevronRight
} from 'lucide-react';

const CV_DATA = {
  name: "Jose Oyarce",
  title: "Senior Full Stack Developer",
  summary: "Desarrollador apasionado con más de 8 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. Especializado en ecosistemas React, Node.js y arquitecturas cloud. Enfocado en crear experiencias de usuario excepcionales y código mantenible.",
  contact: {
    email: "oyarce.agencia@gmail.com",
    phone: "+56 9 1234 5678",
    location: "Santiago, Chile",
    linkedin: "linkedin.com/in/joseoyarce",
    github: "github.com/joseoyarce"
  },
  experience: [
    {
      company: "Tech Solutions Global",
      role: "Lead Frontend Developer",
      period: "2021 - Presente",
      description: "Liderazgo de equipo de 5 desarrolladores para la migración de una plataforma legacy a una arquitectura de micro-frontends con React y Vite.",
      achievements: [
        "Reducción del tiempo de carga inicial en un 40%.",
        "Implementación de un sistema de diseño propio basado en Tailwind CSS.",
        "Optimización de flujos de CI/CD reduciendo tiempos de despliegue en un 25%."
      ]
    },
    {
      company: "Digital Agency X",
      role: "Senior Full Stack Developer",
      period: "2018 - 2021",
      description: "Desarrollo de soluciones e-commerce personalizadas para clientes internacionales utilizando Next.js y Shopify API.",
      achievements: [
        "Desarrollo de una pasarela de pagos integrada con múltiples proveedores locales.",
        "Escalamiento de aplicaciones para soportar picos de tráfico de 100k+ usuarios concurrentes."
      ]
    }
  ],
  education: [
    {
      degree: "Ingeniería Civil en Informática",
      institution: "Universidad de Chile",
      period: "2013 - 2018"
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
    tools: ["Docker", "AWS", "Git", "CI/CD", "Vite"]
  }
};

const Section = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-8 border-b border-ink/10 pb-2">
      <Icon className="w-6 h-6 text-accent" />
      <h2 className="text-2xl font-serif font-bold tracking-tight uppercase">{title}</h2>
    </div>
    {children}
  </motion.section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-paper selection:bg-accent/20 selection:text-accent">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden border-b border-ink/5">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Disponible para proyectos</span>
          <h1 className="text-7xl md:text-9xl font-serif font-bold leading-[0.85] tracking-tighter mb-6">
            {CV_DATA.name.split(' ')[0]}<br />
            <span className="text-accent italic">{CV_DATA.name.split(' ')[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink/60 font-light max-w-2xl">
            {CV_DATA.title}
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Main Content */}
        <div className="lg:col-span-8">
          <Section title="Sobre Mí" icon={User}>
            <p className="text-lg text-ink/80 leading-relaxed">
              {CV_DATA.summary}
            </p>
          </Section>

          <Section title="Experiencia" icon={Briefcase}>
            <div className="space-y-12">
              {CV_DATA.experience.map((exp, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{exp.role}</h3>
                    <span className="font-mono text-sm text-ink/40">{exp.period}</span>
                  </div>
                  <p className="text-accent font-medium mb-4">{exp.company}</p>
                  <p className="text-ink/70 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-ink/60">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Educación" icon={GraduationCap}>
            <div className="space-y-8">
              {CV_DATA.education.map((edu, i) => (
                <div key={i}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <span className="font-mono text-sm text-ink/40">{edu.period}</span>
                  </div>
                  <p className="text-ink/60">{edu.institution}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          {/* Contact Info */}
          <div className="bg-ink/5 p-8 rounded-2xl border border-ink/5">
            <h3 className="text-sm font-mono uppercase tracking-widest text-ink/40 mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href={`mailto:${CV_DATA.contact.email}`} className="hover:text-accent transition-colors truncate">{CV_DATA.contact.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>{CV_DATA.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>{CV_DATA.contact.location}</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-8 border-t border-ink/10 flex gap-4">
              <a href={`https://${CV_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="p-2 bg-paper rounded-lg border border-ink/10 hover:border-accent hover:text-accent transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`https://${CV_DATA.contact.github}`} target="_blank" rel="noreferrer" className="p-2 bg-paper rounded-lg border border-ink/10 hover:border-accent hover:text-accent transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-ink/40 mb-6 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Habilidades
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase mb-3 text-ink/60">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {CV_DATA.skills.frontend.map(s => (
                    <span key={s} className="px-3 py-1 bg-accent/5 text-accent text-xs font-medium rounded-full border border-accent/10">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase mb-3 text-ink/60">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {CV_DATA.skills.backend.map(s => (
                    <span key={s} className="px-3 py-1 bg-ink/5 text-ink/70 text-xs font-medium rounded-full border border-ink/10">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase mb-3 text-ink/60">Herramientas</h4>
                <div className="flex flex-wrap gap-2">
                  {CV_DATA.skills.tools.map(s => (
                    <span key={s} className="px-3 py-1 bg-ink/5 text-ink/70 text-xs font-medium rounded-full border border-ink/10">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full py-4 bg-ink text-paper rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-colors group shadow-xl shadow-ink/10">
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Descargar CV (PDF)
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-ink/5 text-center text-ink/40 font-mono text-xs">
        <p>© {new Date().getFullYear()} {CV_DATA.name} — Hecho con React & Tailwind</p>
      </footer>
    </div>
  );
}
