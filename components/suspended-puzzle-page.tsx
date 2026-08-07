"use client";

import React, { useState } from "react";
import { AlertTriangle, MessageCircle, ShoppingBag, ShieldAlert, Sparkles, RefreshCw, ExternalLink, Tag } from "lucide-react";

export function SuspendedPuzzlePage() {
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null);

  const domainOfferMessage = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ por solo 100.000 pesos");
  const cancelServiceMessage = encodeURIComponent("Hola, solicito información para regularizar el saldo/reactivar la página multiserviciossosa.com.co");
  
  const whatsappOfferUrl = `https://wa.me/573118587975?text=${domainOfferMessage}`;
  const whatsappCancelUrl = `https://wa.me/573118587975?text=${cancelServiceMessage}`;

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden font-sans select-none">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Floating Jigsaw Puzzle Pieces Background (Scattered Puzzle Aesthetic) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Puzzle Piece 1 Top Left */}
        <div 
          className="absolute top-12 left-10 md:left-24 transform -rotate-12 hover:rotate-0 transition-transform duration-700 opacity-25 hover:opacity-75"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <path d="M10 10 H40 C40 30 60 30 60 10 H90 V40 C70 40 70 60 90 60 V90 H60 C60 70 40 70 40 90 H10 V60 C30 60 30 40 10 40 Z" fill="url(#grad1)" stroke="#ef4444" strokeWidth="2"/>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Puzzle Piece 2 Top Right */}
        <div className="absolute top-20 right-8 md:right-28 transform rotate-45 opacity-20 hover:rotate-12 transition-transform duration-700">
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <path d="M10 10 H40 C40 30 60 30 60 10 H90 V40 C70 40 70 60 90 60 V90 H60 C60 70 40 70 40 90 H10 V60 C30 60 30 40 10 40 Z" fill="url(#grad2)" stroke="#f59e0b" strokeWidth="2"/>
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Puzzle Piece 3 Bottom Left */}
        <div className="absolute bottom-16 left-8 md:left-20 transform -rotate-45 opacity-30">
          <svg width="130" height="130" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <path d="M10 10 H40 C40 30 60 30 60 10 H90 V40 C70 40 70 60 90 60 V90 H60 C60 70 40 70 40 90 H10 V60 C30 60 30 40 10 40 Z" fill="url(#grad3)" stroke="#06b6d4" strokeWidth="2"/>
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#083344" />
                <stop offset="100%" stopColor="#1e1b4b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Puzzle Piece 4 Bottom Right */}
        <div className="absolute bottom-12 right-12 md:right-24 transform rotate-12 opacity-25">
          <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <path d="M10 10 H40 C40 30 60 30 60 10 H90 V40 C70 40 70 60 90 60 V90 H60 C60 70 40 70 40 90 H10 V60 C30 60 30 40 10 40 Z" fill="url(#grad4)" stroke="#dc2626" strokeWidth="2"/>
            <defs>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#450a0a" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center gap-8 py-6">

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs md:text-sm font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg shadow-red-950/20 animate-pulse">
          <ShieldAlert className="w-4 h-4 text-red-400" />
          <span>Servicio Suspendido por No Pago</span>
        </div>

        {/* Main Title Banner / Disassembled Header */}
        <div className="text-center space-y-4 max-w-2xl px-2">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Página No Disponible <br />
            <span className="bg-gradient-to-r from-red-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              por Falta de Pago
            </span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            El dominio <span className="text-slate-200 font-mono underline decoration-red-500/40">multiserviciossosa.com.co</span> se encuentra deshabilitado por obligaciones pendientes de saldo y desarrollo.
          </p>
        </div>

        {/* Disassembled Puzzle Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">

          {/* PUZZLE TILE 1: Para el Titular de la Cuenta (Regularizar/Cancelar) */}
          <div 
            onMouseEnter={() => setHoveredPiece(1)}
            onMouseLeave={() => setHoveredPiece(null)}
            className={`relative group bg-slate-900/60 backdrop-blur-xl border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ${
              hoveredPiece === 1 
                ? "border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.2)] -translate-y-1 rotate-[0.5deg]" 
                : "border-slate-800 shadow-xl"
            }`}
          >
            {/* Decorative Corner Puzzle Clip Accent */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500/20 border border-amber-500/40 rounded-lg flex items-center justify-center backdrop-blur-md">
              <RefreshCw className="w-4 h-4 text-amber-400" />
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  ¿Eres el titular de la cuenta?
                </h3>
                <p className="text-xs text-amber-400 font-medium uppercase tracking-wider mt-1">
                  Regularización o Cancelación
                </p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Si deseas cancelar tu deuda pendiente, regularizar el saldo de servicio o reactivar tu sitio web de forma oficial, ponte en contacto directo con soporte.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80">
              <a
                href={whatsappCancelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-950/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Contactar para Regularizar / Cancelar</span>
              </a>
            </div>
          </div>

          {/* PUZZLE TILE 2: Oferta Especial de Dominio ($100.000 COP) */}
          <div 
            onMouseEnter={() => setHoveredPiece(2)}
            onMouseLeave={() => setHoveredPiece(null)}
            className={`relative group bg-slate-900/60 backdrop-blur-xl border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ${
              hoveredPiece === 2 
                ? "border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.2)] -translate-y-1 -rotate-[0.5deg]" 
                : "border-slate-800 shadow-xl"
            }`}
          >
            {/* Offer Tag Badge */}
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-full shadow-lg flex items-center gap-1">
              <Tag className="w-3 h-3 fill-slate-950" />
              <span>OFERTA $100.000 COP</span>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShoppingBag className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  ¿Quieres comprar este dominio?
                </h3>
                <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider mt-1">
                  Venta y Transferencia Inmediata
                </p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Adquiere la propiedad del dominio <strong className="text-slate-200 font-mono">multiserviciossosa.com.co</strong> por un precio de oportunidad de <strong className="text-emerald-400 font-bold">$100.000 COP</strong> para tu empresa o proyecto.
              </p>

              {/* Price Highlight Banner */}
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                <span className="text-xs text-slate-300">Precio especial único:</span>
                <span className="text-lg font-black text-emerald-400 tracking-tight">$100.000 COP</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={whatsappOfferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Comprar Dominio por $100.000 COP</span>
              </a>
            </div>
          </div>

        </div>

        {/* Puzzle Footer Information Notice */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 max-w-xl w-full text-center space-y-2 text-xs text-slate-400 backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Contacto Directo de Administración</span>
          </div>
          <p>
            Atención WhatsApp: <strong className="text-slate-200 font-mono">+57 311 858 7975</strong>
          </p>
          <p className="text-[11px] text-slate-500">
            Sin pasarelas de pago intermedias. La negociación y entrega de la oferta se gestiona directamente vía WhatsApp oficial.
          </p>
        </div>

      </div>
    </div>
  );
}
