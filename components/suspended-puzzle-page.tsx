"use client";

import React from "react";
import Image from "next/image";
import { 
  ShieldAlert, 
  Lock, 
  MessageCircle, 
  ShoppingBag, 
  Tag, 
  Puzzle, 
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Layout,
  Star
} from "lucide-react";

export function SuspendedPuzzlePage() {

  const domainOnlyMsg = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ por solo 100.000 pesos");
  const domainWithSiteMsg = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ con una página totalmente nueva por solo 200.000 pesos");
  const cancelServiceMsg = encodeURIComponent("Hola, solicito información para regularizar el saldo/reactivar la página multiserviciossosa.com.co");
  
  const waDomainOnlyUrl = `https://wa.me/573118587975?text=${domainOnlyMsg}`;
  const waDomainWithSiteUrl = `https://wa.me/573118587975?text=${domainWithSiteMsg}`;
  const waCancelUrl = `https://wa.me/573118587975?text=${cancelServiceMsg}`;

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden font-sans select-none pb-20">
      
      {/* Background Neon Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Grid Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* HEADER BANNER */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-xl border-b border-red-500/30 px-4 py-3 shadow-2xl shadow-red-950/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 animate-pulse">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-red-400">Servicio Suspendido por No Pago</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                El dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> se encuentra desarmado en piezas por obligación pendiente.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={waCancelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>Titular: Regularizar</span>
            </a>

            <a
              href={waDomainWithSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <Tag className="w-3.5 h-3.5 fill-slate-950" />
              <span>Oferta $200.000</span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO TITLE SECTION */}
      <section className="relative z-10 max-w-5xl w-full mx-auto px-4 pt-10 pb-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-400 text-xs font-semibold backdrop-blur-md">
          <Puzzle className="w-4 h-4 text-amber-400" />
          <span>Estructura Web Fragmentada en Piezas de Rompecabezas</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Página No Disponible <br />
          <span className="bg-gradient-to-r from-red-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            por Falta de Pago
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
          Las secciones oficiales del sitio han sido desarmadas. Explora los fragmentos del sitio web original y las ofertas disponibles.
        </p>
      </section>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-6xl w-full mx-auto px-4 py-6 space-y-12">
        
        {/* ========================================================
            BLOQUES DE OFERTAS Y ADQUISICIÓN DESTACADAS
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* OFERTA 1: SOLO DOMINIO ($100.000 COP) */}
          <div className="relative group bg-slate-900/80 backdrop-blur-xl border-2 border-emerald-500/40 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-emerald-400 hover:-translate-y-1">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-extrabold text-xs rounded-full flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>OFERTA 1</span>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Tag className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Solo Dominio Web
                </h3>
                <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider mt-0.5">
                  Transferencia Inmediata
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Adquiere el dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> para tu propio proyecto.
              </p>

              <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                <span className="text-xs text-slate-300">Precio solo dominio:</span>
                <span className="text-xl font-black text-emerald-400 tracking-tight">$100.000 COP</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={waDomainOnlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Comprar Solo Dominio ($100.000 COP)</span>
              </a>
            </div>
          </div>

          {/* OFERTA 2: DOMINIO + PÁGINA WEB NUEVA ($200.000 COP) */}
          <div className="relative group bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 backdrop-blur-xl border-2 border-amber-500/60 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-amber-400 hover:-translate-y-1">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-full shadow-lg flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              <span>OFERTA DESTACADA</span>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Layout className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Dominio + Página Web Totalmente Nueva
                </h3>
                <p className="text-xs text-amber-400 font-medium uppercase tracking-wider mt-0.5">
                  Paquete Completo Diseñado a tu Medida
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Obtén el dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> junto con un sitio web 100% nuevo diseñado para tu negocio.
              </p>

              <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-between">
                <span className="text-xs text-slate-300">Dominio + Página Nueva:</span>
                <span className="text-xl font-black text-amber-400 tracking-tight">$200.000 COP</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={waDomainWithSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Comprar Dominio + Página Nueva ($200.000 COP)</span>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================
            PIEZAS DEL ROMPECABEZAS CON PANTALLAZOS REALES DEL SITIO
           ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-amber-400" />
              <span>Piezas Desensambladas del Sitio Original</span>
            </h3>
            <span className="text-xs text-slate-400">Capturas oficiales</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* PIEZA 1: PANTALLAZO HERO & NAVEGACIÓN */}
            <div className="relative group bg-slate-900/90 border-2 border-emerald-500/40 rounded-3xl p-4 shadow-xl transition-all duration-500 hover:border-emerald-400 hover:-translate-y-1 rotate-[-0.5deg]">
              {/* Puzzle Notch (Top) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-4 bg-emerald-500/30 border-t-2 border-x-2 border-emerald-500/50 rounded-t-lg backdrop-blur-md" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-[11px] font-black uppercase text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PIEZA #1: HERO & INICIO
                </span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-mono">EN PIEZA</span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                <img 
                  src="/screenshots/shot_hero.png" 
                  alt="Pieza 1 - Conserjería profesional para su copropiedad"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-3 text-center text-xs text-slate-400">
                Sección principal de presentación de Multiservicios Sosa.
              </p>
            </div>

            {/* PIEZA 2: COMPONENTE BLOQUEADO */}
            <div className="relative group bg-slate-950/90 border-2 border-dashed border-red-500/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-xl rotate-[0.5deg]">
              {/* Puzzle Notch (Right) */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-10 bg-red-500/30 border-r-2 border-y-2 border-red-500/50 rounded-r-lg backdrop-blur-md" />

              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <Lock className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase text-red-400">PIEZA #2: COTIZADOR EN VIVO</span>
                <h5 className="text-base font-bold text-white mt-1">[ Componente Bloqueado ]</h5>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Calculador automático de tarifas de portería y turnos residenciales deshabilitado.
                </p>
              </div>

              <a
                href={waCancelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 py-2 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-red-400" />
                <span>Desbloquear Pieza #2</span>
              </a>
            </div>

            {/* PIEZA 3: PANTALLAZO NUESTROS SERVICIOS */}
            <div className="relative group bg-slate-900/90 border-2 border-cyan-500/40 rounded-3xl p-4 shadow-xl transition-all duration-500 hover:border-cyan-400 hover:-translate-y-1 rotate-[0.5deg]">
              {/* Puzzle Notch (Bottom) */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-4 bg-cyan-500/30 border-b-2 border-x-2 border-cyan-500/50 rounded-b-lg backdrop-blur-md" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-[11px] font-black uppercase text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PIEZA #3: NUESTROS SERVICIOS
                </span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-mono">EN PIEZA</span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                <img 
                  src="/screenshots/shot_services.png" 
                  alt="Pieza 3 - Funciones claras, servicio confiable"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-3 text-center text-xs text-slate-400">
                Funciones claras y reemplazos por incapacidad en portería.
              </p>
            </div>

            {/* PIEZA 4: PANTALLAZO MARCO LEGAL */}
            <div className="relative group bg-slate-900/90 border-2 border-indigo-500/40 rounded-3xl p-4 shadow-xl transition-all duration-500 hover:border-indigo-400 hover:-translate-y-1 rotate-[-0.5deg]">
              {/* Puzzle Notch (Left) */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-10 bg-indigo-500/30 border-l-2 border-y-2 border-indigo-500/50 rounded-l-lg backdrop-blur-md" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-[11px] font-black uppercase text-indigo-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PIEZA #4: MARCO LEGAL & LEY 675
                </span>
                <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800 font-mono">EN PIEZA</span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                <img 
                  src="/screenshots/shot_legal.png" 
                  alt="Pieza 4 - Servicio con respaldo jurídico Ley 675"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-3 text-center text-xs text-slate-400">
                Cumplimiento normativo y régimen de propiedad horizontal.
              </p>
            </div>

            {/* PIEZA 5: PANTALLAZO EQUIPO DE TRABAJO */}
            <div className="relative group bg-slate-900/90 border-2 border-emerald-500/40 rounded-3xl p-4 shadow-xl transition-all duration-500 hover:border-emerald-400 hover:-translate-y-1 rotate-[0.5deg]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-[11px] font-black uppercase text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PIEZA #5: EQUIPO & CONSERJES
                </span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-mono">EN PIEZA</span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                <img 
                  src="/screenshots/shot_team1.png" 
                  alt="Pieza 5 - Profesionales comprometidos con su copropiedad"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-3 text-center text-xs text-slate-400">
                Personal capacitado e identificado de Multiservicios Sosa.
              </p>
            </div>

            {/* PIEZA 6: PANTALLAZO CONSERJES SENIOR & TESTIMONIO */}
            <div className="relative group bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-4 shadow-xl transition-all duration-500 hover:border-amber-400 hover:-translate-y-1 rotate-[-0.5deg]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-[11px] font-black uppercase text-amber-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PIEZA #6: PERFILES VERIFICADOS
                </span>
                <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800 font-mono">EN PIEZA</span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                <img 
                  src="/screenshots/shot_team2.png" 
                  alt="Pieza 6 - Conserjes senior verificados"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-3 text-center text-xs text-slate-400">
                Fichas de verificación de conserjes e historial de servicio.
              </p>
            </div>

          </div>
        </div>

      </main>

      {/* FOOTER NOTICE */}
      <footer className="relative z-10 max-w-4xl w-full mx-auto px-4 mt-12 text-center text-xs text-slate-400">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-1">
          <p className="text-slate-300 font-medium">
            Atención Directa vía WhatsApp: <strong className="text-white font-mono">+57 311 858 7975</strong>
          </p>
          <p className="text-[11px] text-slate-500">
            Sin pasarelas de pago intermedias. La entrega de ofertas o regularizaciones se gestiona exclusivamente vía WhatsApp oficial.
          </p>
        </div>
      </footer>

    </div>
  );
}
