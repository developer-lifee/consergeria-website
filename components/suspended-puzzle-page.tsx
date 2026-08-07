"use client";

import React, { useState } from "react";
import { 
  ShieldAlert, 
  Lock, 
  MessageCircle, 
  ShoppingBag, 
  Tag, 
  Puzzle, 
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Zap
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { LegalSection } from "@/components/legal-section";
import { TeamSection } from "@/components/team-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export function SuspendedPuzzlePage() {
  const [activeTab, setActiveTab] = useState<"all" | "missing">("all");

  const domainOfferMessage = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ por solo 100.000 pesos");
  const cancelServiceMessage = encodeURIComponent("Hola, solicito información para regularizar el saldo/reactivar la página multiserviciossosa.com.co");
  
  const whatsappOfferUrl = `https://wa.me/573118587975?text=${domainOfferMessage}`;
  const whatsappCancelUrl = `https://wa.me/573118587975?text=${cancelServiceMessage}`;

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden font-sans select-none pb-20">
      
      {/* Background Neon Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Grid Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* FIXED TOP ALERT BANNER */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/85 backdrop-blur-xl border-b border-red-500/30 px-4 py-3 shadow-2xl shadow-red-950/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 animate-pulse">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-red-400">Servicio Suspendido</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800 font-mono">MODO 50% LICENCIA</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Página <strong className="text-white font-mono">multiserviciossosa.com.co</strong> desarmada en piezas por saldo pendiente.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={whatsappCancelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>Titular: Regularizar</span>
            </a>

            <a
              href={whatsappOfferUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <Tag className="w-3.5 h-3.5 fill-slate-950" />
              <span>Dominio $100.000</span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO DISASSEMBLED PUZZLE HEADER */}
      <section className="relative z-10 max-w-5xl w-full mx-auto px-4 pt-10 pb-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-400 text-xs font-semibold backdrop-blur-md">
          <Puzzle className="w-4 h-4 text-amber-400" />
          <span>Estructura Web Fragmentada en Rompecabezas</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Sitio Web Desarmado en <br />
          <span className="bg-gradient-to-r from-red-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Piezas de Rompecabezas
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
          Las secciones funcionales de la página oficial de Multiservicios Sosa han sido <strong className="text-slate-200">desensambladas</strong> debido al 50% de pago de desarrollo y hosting pendiente.
        </p>

        {/* Status Bar */}
        <div className="max-w-xl mx-auto p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-between text-xs">
          <span className="text-slate-400">Progreso de Entrega:</span>
          <div className="flex items-center gap-2">
            <div className="w-36 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div className="h-full bg-gradient-to-r from-red-500 to-amber-500 w-1/2" />
            </div>
            <span className="font-mono font-bold text-amber-400">50% / 100%</span>
          </div>
        </div>
      </section>

      {/* DISASSEMBLED JIGSAW PUZZLE BOARD */}
      <main className="relative z-10 max-w-6xl w-full mx-auto px-4 py-6">
        
        {/* Puzzle Pieces Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ========================================================
              PIEZA 1: HERO & NAVEGACIÓN (SECCIÓN REAL ENMARCAD)
             ======================================================== */}
          <div className="relative group bg-slate-900/90 border-2 border-emerald-500/40 rounded-3xl p-3 shadow-2xl transition-all duration-500 hover:border-emerald-400 hover:-translate-y-1 hover:rotate-[-0.5deg]">
            {/* Puzzle Tab Notch Accent (Top) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-4 bg-emerald-500/30 border-t-2 border-x-2 border-emerald-500/50 rounded-t-lg backdrop-blur-md" />
            
            {/* Puzzle Badge */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                PIEZA #1: NAVEGACIÓN & HERO
              </span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-mono">ACTIVA</span>
            </div>

            {/* Embedded Real Component Preview */}
            <div className="h-64 overflow-y-auto rounded-2xl bg-white text-slate-900 pointer-events-none select-none border border-slate-200 opacity-90 scale-[0.98] transform origin-top">
              <Navbar />
              <div className="p-2 scale-[0.85] origin-top">
                <HeroSection />
              </div>
            </div>

            <div className="mt-3 p-2 text-center text-xs text-slate-400">
              Visualización parcial del encabezado original.
            </div>
          </div>

          {/* ========================================================
              PIEZA 2: BLOQUEADA (FALTANTE POR 50% SALDO)
             ======================================================== */}
          <div className="relative group bg-slate-950/90 border-2 border-dashed border-red-500/50 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-2xl transition-all duration-500 hover:border-red-400 hover:rotate-[0.5deg]">
            {/* Puzzle Tab Notch Accent (Right) */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-10 bg-red-500/30 border-r-2 border-y-2 border-red-500/50 rounded-r-lg backdrop-blur-md" />

            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shadow-inner">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400">
                PIEZA #2: COTIZADOR EN VIVO
              </span>
              <h4 className="text-base font-bold text-white">
                [ Componente Bloqueado ]
              </h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Esta pieza contiene el calculador de tarifas de conserjería para edificios. Bloqueada hasta completar el saldo.
              </p>
            </div>

            <div className="w-full pt-3 border-t border-slate-900">
              <a
                href={whatsappCancelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                <span>Desbloquear Pieza #2</span>
              </a>
            </div>
          </div>

          {/* ========================================================
              PIEZA 3: SERVICIOS DE CONSERJERÍA (REAL ENMARCADA)
             ======================================================== */}
          <div className="relative group bg-slate-900/90 border-2 border-cyan-500/40 rounded-3xl p-3 shadow-2xl transition-all duration-500 hover:border-cyan-400 hover:-translate-y-1 hover:rotate-[0.5deg]">
            {/* Puzzle Tab Notch Accent (Bottom) */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-4 bg-cyan-500/30 border-b-2 border-x-2 border-cyan-500/50 rounded-b-lg backdrop-blur-md" />

            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                PIEZA #3: SERVICIOS & CONSERJERÍA
              </span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-mono">ACTIVA</span>
            </div>

            {/* Embedded Real Component Preview */}
            <div className="h-64 overflow-y-auto rounded-2xl bg-white text-slate-900 pointer-events-none select-none border border-slate-200 opacity-90 scale-[0.98] transform origin-top">
              <div className="p-2 scale-[0.85] origin-top">
                <ServicesSection />
              </div>
            </div>

            <div className="mt-3 p-2 text-center text-xs text-slate-400">
              Fragmento del portafolio de servicios de portería.
            </div>
          </div>

          {/* ========================================================
              PIEZA 4: BLOQUEADA (CONTRATACIÓN Y RESERVAS)
             ======================================================== */}
          <div className="relative group bg-slate-950/90 border-2 border-dashed border-amber-500/50 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-2xl transition-all duration-500 hover:border-amber-400 hover:-rotate-[0.5deg]">
            {/* Puzzle Tab Notch Accent (Left) */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-10 bg-amber-500/30 border-l-2 border-y-2 border-amber-500/50 rounded-l-lg backdrop-blur-md" />

            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                PIEZA #4: CONTRATACIÓN DIGITAL
              </span>
              <h4 className="text-base font-bold text-white">
                [ Componente Desconectado ]
              </h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Módulo de firma y solicitud directa de conserjes para conjuntos residenciales.
              </p>
            </div>

            <div className="w-full pt-3 border-t border-slate-900">
              <a
                href={whatsappCancelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Desbloquear Pieza #4</span>
              </a>
            </div>
          </div>

          {/* ========================================================
              PIEZA 5: EQUIPO & NORMATIVA (REAL ENMARCADA)
             ======================================================== */}
          <div className="relative group bg-slate-900/90 border-2 border-indigo-500/40 rounded-3xl p-3 shadow-2xl transition-all duration-500 hover:border-indigo-400 hover:-translate-y-1 hover:rotate-[-0.5deg]">
            {/* Puzzle Tab Notch Accent (Top) */}
            <div className="absolute -top-4 left-1/3 w-10 h-4 bg-indigo-500/30 border-t-2 border-x-2 border-indigo-500/50 rounded-t-lg backdrop-blur-md" />

            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                PIEZA #5: EQUIPO & LEGAL
              </span>
              <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800 font-mono">ACTIVA</span>
            </div>

            {/* Embedded Real Component Preview */}
            <div className="h-64 overflow-y-auto rounded-2xl bg-white text-slate-900 pointer-events-none select-none border border-slate-200 opacity-90 scale-[0.98] transform origin-top">
              <div className="p-2 scale-[0.85] origin-top space-y-4">
                <LegalSection />
                <TeamSection />
              </div>
            </div>

            <div className="mt-3 p-2 text-center text-xs text-slate-400">
              Vista del equipo y normativa legal para copropiedades.
            </div>
          </div>

          {/* ========================================================
              PIEZA 6: DOMINIO Y TRANSFERENCIA (OFERTA ESPECIAL)
             ======================================================== */}
          <div className="relative group bg-gradient-to-b from-slate-900 to-emerald-950/40 border-2 border-emerald-500/60 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-emerald-400 hover:rotate-[0.5deg] hover:-translate-y-1">
            
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full shadow-lg flex items-center gap-1">
              <Tag className="w-3 h-3 fill-slate-950" />
              <span>OFERTA $100.000 COP</span>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShoppingBag className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
                  PIEZA #6: VENTA DE DOMINIO
                </span>
                <h4 className="text-base font-bold text-white">
                  Dominio multiserviciossosa.com.co
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Adquiere este dominio web disponible para transferencia inmediata por solo <strong className="text-emerald-400 font-bold">$100.000 COP</strong>.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <a
                href={whatsappOfferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Comprar Dominio ($100.000 COP)</span>
              </a>
            </div>
          </div>

        </div>

      </main>

      {/* FOOTER ACTION BANNER (NO PAYMENT GATEWAY - WHATSAPP ONLY) */}
      <footer className="relative z-10 max-w-4xl w-full mx-auto px-4 mt-10">
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Atención Directa vía WhatsApp</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              ¿Deseas ensamblar la página o adquirir el dominio?
            </h4>
            <p className="text-xs text-slate-400">
              Sin pasarelas de pago intermedias. Escríbenos al <strong className="text-slate-200 font-mono">+57 311 858 7975</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <a
              href={whatsappCancelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Titular: Regularizar / Cancelar</span>
            </a>

            <a
              href={whatsappOfferUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Tag className="w-4 h-4 fill-slate-950" />
              <span>Oferta Dominio $100.000</span>
            </a>
          </div>

        </div>

        {/* Embedded Footer Copyright Snippet */}
        <div className="mt-8 opacity-40 hover:opacity-100 transition-opacity">
          <Footer />
        </div>
      </footer>

    </div>
  );
}
