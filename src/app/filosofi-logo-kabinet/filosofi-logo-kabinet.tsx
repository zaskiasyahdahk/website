import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { BookOpen, Orbit, Users, Sparkles, Crown, Award, Zap, ArrowLeft, ArrowRight, Building2, Maximize2, ChevronDown } from "lucide-react";
import { useState } from "react";

export function FilosofiLogoKabinetPage() {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [hoveredColor, setHoveredColor] = useState<number | null>(null);
  const [hoveredFont, setHoveredFont] = useState<number | null>(null);

  const logoElements = [
    {
      id: "literasi",
      icon: BookOpen,
      title: "Pusat Peradaban",
      subtitle: "Elemen Literasi",
      description: "Buku sebagai simbol pelestarian ilmu pengetahuan di tangan mahasiswa Perpustakaan. Setiap halaman yang terbuka adalah jendela menuju peradaban yang terus berkembang, dimana pengetahuan dikelola, dilestarikan, dan disebarkan untuk kemajuan bangsa.",
      color: "from-amber-400 to-amber-600",
      position: "top-1/4 left-1/4"
    },
    {
      id: "teknologi",
      icon: Orbit,
      title: "Visi Futuristik",
      subtitle: "Elemen Teknologi",
      description: "Orbit melambangkan kecepatan akses informasi di era modern. Seperti planet yang berputar mengelilingi matahari, teknologi mengitari setiap aspek perpustakaan digital, membawa transformasi dalam cara kita mengakses dan mengelola pengetahuan di abad ke-21.",
      color: "from-orange-400 to-orange-600",
      position: "top-1/4 right-1/4"
    },
    {
      id: "kemanusiaan",
      icon: Users,
      title: "Integritas Kolektif",
      subtitle: "Elemen Kemanusiaan",
      description: "Figur manusia yang bersatu melambangkan pengurus yang solid dan kolaboratif. Kekuatan sejati organisasi terletak pada sinergi individu yang memiliki visi sama, bergerak bersama dengan integritas tinggi untuk mencapai tujuan mulia bersama.",
      color: "from-red-400 to-red-600",
      position: "bottom-1/3 left-1/3"
    }
  ];

  const colorPalette = [
    {
      name: "Merah Bata",
      hex: "#B85C38",
      rgb: "rgb(184, 92, 56)",
      meaning: "Fondasi yang Kokoh",
      description: "Merah Bata merepresentasikan fondasi yang kokoh, keberanian dalam bertindak, dan semangat pengabdian yang membumi. Warna ini mencerminkan komitmen mendalam terhadap nilai-nilai organisasi dan dedikasi tanpa batas dalam melayani.",
      gradient: "from-[#B85C38] to-[#8B4513]"
    },
    {
      name: "Kuning Emas",
      hex: "#FFD700",
      rgb: "rgb(255, 215, 0)",
      meaning: "Kejayaan Intelektual",
      description: "Kuning Emas melambangkan kejayaan, kualitas intelektual yang tinggi, dan standar keunggulan yang ingin dicapai. Seperti emas murni yang tidak kehilangan nilainya, organisasi ini berkomitmen pada keunggulan akademik dan profesionalisme tinggi.",
      gradient: "from-[#FFD700] to-[#F59E0B]"
    }
  ];

  const typography = [
    {
      name: "Playfair Display",
      type: "Serif Classic",
      usage: "Judul & Heading",
      character: "Anggun, Berwibawa, Historis",
      sample: "KABINET PRESTASI"
    },
    {
      name: "Inter",
      type: "Sans-Serif Modern",
      usage: "Body Text & Content",
      character: "Tegas, Jelas, Profesional",
      sample: "Melayani dengan Integritas"
    }
  ];

  return (
    <div id="halaman-filosofi-logo-kabinet" className="size-full bg-[#FFF8F0]">
      <Header />

      {/* Tombol Kembali Melayang */}
      <div className="fixed top-28 left-4 sm:left-8 z-[60]">
        <a href="/" className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-lg hover:scale-105 transition-all group">
          <ArrowLeft className="size-4 text-primary group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold text-primary">Kembali</span>
        </a>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-black pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 size-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 size-72 bg-slate-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <Building2 className="size-4 text-blue-300" />
            <p className="font-semibold tracking-wider uppercase text-sm">Manajemen Internal</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            FILOSOFI LOGO KABINET
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed italic">
            "Satu Visi, Banyak Aksi"
          </p>
        </div>
      </section>

      {/* Hero Section - The Golden Manifesto */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#FFF8F0]">
        {/* Gold Filigree Decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M0,0 Q50,50 0,100 L0,0 Z" fill="url(#gold-gradient)" />
            <path d="M0,0 L100,0 Q50,50 0,100 Z" fill="url(#gold-gradient)" opacity="0.5" />
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20 transform rotate-180">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M0,0 Q50,50 0,100 L0,0 Z" fill="url(#gold-gradient-2)" />
            <path d="M0,0 L100,0 Q50,50 0,100 Z" fill="url(#gold-gradient-2)" opacity="0.5" />
            <defs>
              <linearGradient id="gold-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-8 border-2 border-amber-300/50 shadow-lg">
              <Crown className="size-5 text-amber-600" />
              <span className="text-amber-800 font-bold tracking-widest uppercase text-sm">The Golden Manifesto</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#7D3C1D] mb-6 tracking-tight leading-tight">
              Filosofi Logo Kabinet
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#F59E0B] animate-shimmer">
                SAMASTA
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#B85C38] font-semibold max-w-3xl mx-auto leading-relaxed italic">
              "Sembilan Kekuatan yang Menyinari Jalan Menuju Kejayaan Intelektual"
            </p>
          </div>

          {/* Logo Display with Metallic Shine */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-amber-300/30 to-amber-400/20 blur-3xl animate-pulse"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-[3rem] border-4 border-amber-300/50 shadow-2xl">
              {/* Central Logo Placeholder */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 rounded-full animate-spin-slow"></div>
                
                <div className="relative size-full flex items-center justify-center bg-gradient-to-br from-[#FFD700] via-[#FFC107] to-[#F59E0B] rounded-full shadow-2xl border-8 border-white">
                  {/* Logo Core */}
                  <div className="text-center">
                    <Award className="size-32 text-[#7D3C1D] mx-auto mb-4 drop-shadow-lg" />
                    <p className="text-2xl font-bold text-[#7D3C1D] font-serif">LOGO</p>
                    <p className="text-sm text-[#8B4513] font-semibold">KABINET</p>
                  </div>
                  
                  {/* Shine Effect Overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/40 to-transparent animate-shine pointer-events-none"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <Sparkles className="size-8 text-amber-500 animate-bounce" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <Crown className="size-8 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#FFF8F0]">
        
        {/* Interactive Anatomy - The Exploded Storytelling */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-6 py-3 rounded-full mb-6 border-2 border-amber-200">
                <Zap className="size-5 text-amber-600" />
                <span className="text-amber-800 font-bold tracking-wider uppercase text-sm">Interactive Anatomy</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#7D3C1D] mb-4">
                Exploded Storytelling
              </h2>
              <p className="text-lg text-[#B85C38] max-w-2xl mx-auto">
                Klik setiap elemen untuk memahami filosofi mendalam di balik logo kabinet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {logoElements.map((element, index) => (
                <div
                  key={element.id}
                  onClick={() => setActiveElement(activeElement === element.id ? null : element.id)}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    activeElement === element.id ? 'scale-110 z-20' : 'hover:scale-105'
                  }`}
                >
                  {/* Card */}
                  <div className={`relative bg-white rounded-3xl p-8 border-4 transition-all duration-500 ${
                    activeElement === element.id 
                      ? 'border-amber-400 shadow-2xl' 
                      : 'border-amber-200 shadow-lg hover:border-amber-300'
                  }`}>
                    
                    {/* Pointer Line */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <div className={`w-1 h-8 bg-gradient-to-b ${element.color} relative`}>
                        <div className={`absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full ${
                          activeElement === element.id ? 'animate-ping bg-amber-400' : ''
                        }`}></div>
                        <div className={`absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full bg-gradient-to-br ${element.color} border-2 border-white shadow-lg ${
                          activeElement === element.id ? '' : 'animate-pulse-slow'
                        }`}></div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`mb-6 relative`}>
                      <div className={`size-20 mx-auto rounded-2xl bg-gradient-to-br ${element.color} flex items-center justify-center transform transition-transform duration-500 ${
                        activeElement === element.id ? 'rotate-12 scale-110' : 'group-hover:rotate-6'
                      }`}>
                        <element.icon className="size-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <p className="text-xs text-amber-600 font-semibold uppercase tracking-widest mb-2">
                        {element.subtitle}
                      </p>
                      <h3 className="font-serif text-2xl font-bold text-[#7D3C1D] mb-4">
                        {element.title}
                      </h3>
                      
                      {/* Expandable Description */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        activeElement === element.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-4 border-t-2 border-amber-200">
                          <p className="text-[#8B4513] leading-relaxed text-sm">
                            {element.description}
                          </p>
                        </div>
                      </div>

                      {/* Click Indicator */}
                      {activeElement !== element.id && (
                        <p className="text-xs text-amber-500 mt-4 font-semibold animate-pulse">
                          Klik untuk detail →
                        </p>
                      )}
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-4 right-4 size-8 border-t-2 border-r-2 border-amber-300 rounded-tr-xl"></div>
                    <div className="absolute bottom-4 left-4 size-8 border-b-2 border-l-2 border-amber-300 rounded-bl-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Palette & Typography - Royal Chromatic */}
        <section className="py-24 bg-gradient-to-b from-white to-[#FFF8F0]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            
            {/* Color Palette */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 rounded-full mb-6 border-2 border-amber-200">
                  <div className="size-4 rounded-full bg-gradient-to-r from-[#B85C38] to-[#FFD700]"></div>
                  <span className="text-amber-800 font-bold tracking-wider uppercase text-sm">Royal Chromatic</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#7D3C1D] mb-4">
                  Palet Warna Kebanggaan
                </h2>
                <p className="text-lg text-[#B85C38]">
                  Setiap warna membawa makna mendalam dan filosofi yang kuat
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {colorPalette.map((color, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredColor(index)}
                    onMouseLeave={() => setHoveredColor(null)}
                    className="group relative bg-white rounded-3xl overflow-hidden border-4 border-amber-200 hover:border-amber-400 transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer"
                  >
                    {/* Color Swatch */}
                    <div className={`h-48 bg-gradient-to-br ${color.gradient} relative overflow-hidden transition-all duration-500 ${
                      hoveredColor === index ? 'h-56' : ''
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Floating particles on hover */}
                      {hoveredColor === index && (
                        <div className="absolute inset-0">
                          <div className="absolute top-10 left-10 size-2 rounded-full bg-white/60 animate-bounce"></div>
                          <div className="absolute top-20 right-16 size-1 rounded-full bg-white/40 animate-pulse"></div>
                          <div className="absolute bottom-14 left-20 size-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      )}
                      
                      <div className="absolute bottom-6 left-6">
                        <h3 className={`font-serif font-bold text-white drop-shadow-lg mb-2 transition-all duration-300 ${
                          hoveredColor === index ? 'text-5xl' : 'text-4xl'
                        }`}>
                          {color.name}
                        </h3>
                        <div className="flex items-center gap-4 text-white/90 text-sm font-mono">
                          <span className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                            {color.hex}
                          </span>
                          <span className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                            {color.rgb}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`rounded-full bg-gradient-to-br ${color.gradient} transition-all duration-300 ${
                          hoveredColor === index ? 'size-4 animate-pulse' : 'size-3'
                        }`}></div>
                        <h4 className="text-xl font-bold text-[#7D3C1D] font-serif">
                          {color.meaning}
                        </h4>
                      </div>
                      <p className="text-[#8B4513] leading-relaxed">
                        {color.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Analysis */}
            <div>
              <div className="text-center mb-16">
                <h3 className="font-serif text-4xl font-bold text-[#7D3C1D] mb-4">
                  Analisis Tipografi
                </h3>
                <p className="text-lg text-[#B85C38]">
                  Pemilihan font yang menghargai sejarah namun tetap modern
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {typography.map((font, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredFont(index)}
                    onMouseLeave={() => setHoveredFont(null)}
                    className={`bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 border-4 transition-all duration-300 cursor-pointer ${
                      hoveredFont === index ? 'border-amber-400 shadow-2xl scale-105' : 'border-amber-200 shadow-lg'
                    }`}
                  >
                    <div className="mb-6">
                      <div className={`inline-block bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4 transition-all duration-300 ${
                        hoveredFont === index ? 'scale-110' : ''
                      }`}>
                        {font.type}
                      </div>
                      <h4 className="font-serif text-3xl font-bold text-[#7D3C1D] mb-2">
                        {font.name}
                      </h4>
                      <p className="text-sm text-amber-600 font-semibold">
                        {font.usage}
                      </p>
                    </div>

                    <div className={`bg-white rounded-2xl p-6 mb-6 border-2 transition-all duration-300 ${
                      hoveredFont === index ? 'border-amber-400' : 'border-amber-100'
                    }`}>
                      <p className={`text-3xl text-[#7D3C1D] ${index === 0 ? 'font-serif' : ''} font-bold text-center transition-all duration-300 ${
                        hoveredFont === index ? 'scale-110' : ''
                      }`}>
                        {font.sample}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {font.character.split(', ').map((char, i) => (
                        <span
                          key={i}
                          className={`bg-amber-100 text-[#8B4513] px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                            hoveredFont === index ? 'bg-amber-200 scale-105' : ''
                          }`}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tagline & Motto - The Golden Legacy */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#7D3C1D] via-[#8B4513] to-[#7D3C1D]">
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="golden-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="#FFD700"/>
                  <path d="M25,25 L75,25 L75,75 L25,75 Z" stroke="#FFD700" strokeWidth="0.5" fill="none"/>
                  <path d="M50,0 L100,50 L50,100 L0,50 Z" stroke="#FFD700" strokeWidth="0.5" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#golden-pattern)"/>
            </svg>
          </div>

          {/* Light Rays */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-amber-400/20 backdrop-blur-sm px-6 py-3 rounded-full mb-12 border-2 border-amber-400/30">
                <Crown className="size-6 text-amber-300" />
                <span className="text-amber-200 font-bold tracking-widest uppercase">The Golden Legacy</span>
              </div>

              {/* Motto with Emboss Effect */}
              <div className="mb-12">
                <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 relative">
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] to-[#D97706] blur-sm">
                    "Sembilan Kekuatan"
                  </span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] to-[#D97706] drop-shadow-[0_2px_8px_rgba(255,215,0,0.5)]" style={{
                    textShadow: '0 1px 0 rgba(255,255,255,0.3), 0 -1px 0 rgba(0,0,0,0.3)'
                  }}>
                    "Sembilan Kekuatan"
                  </span>
                </h2>
                
                <p className="text-2xl sm:text-3xl text-amber-200 font-semibold italic leading-relaxed max-w-3xl mx-auto">
                  Satu Visi Kejayaan Intelektual
                </p>
              </div>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
                <Sparkles className="size-8 text-amber-400 animate-spin-slow" />
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>

              {/* Supporting Text */}
              <p className="text-lg text-amber-200/80 max-w-2xl mx-auto leading-relaxed">
                Dengan fondasi yang kokoh dan semangat yang membara, kami berkomitmen mengangkat standar keunggulan 
                dalam setiap langkah. Seperti emas yang berkilau di kegelapan, kami bersinar dengan integritas, 
                dedikasi, dan visi yang jelas menuju masa depan yang cemerlang.
              </p>

              {/* Call to Action */}
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="#halaman-filosofi-logo-kabinet"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#7D3C1D] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Award className="size-6 group-hover:rotate-12 transition-transform" />
                  Kembali ke Atas
                </a>
                <a
                  href="/program-kerja"
                  className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-amber-200 border-2 border-amber-400/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Lihat Program Unggulan
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Ornament */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600"></div>
        </section>

        {/* --- TOMBOL NAVIGASI BAWAH --- */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col items-end">
            <div className="flex flex-col items-end gap-3 text-right">
              <p className="text-slate-500 text-sm font-medium">
                SELANJUTNYA
              </p>
              <a 
                href="/struktur-tim" 
                className="inline-flex items-center gap-3 bg-[#1E3A8A] text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-blue-900/10 group hover:scale-105"
              >
                STRUKTUR TIM & UNIT
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-slate-400 text-xs italic mt-1">
                Halaman 1 dari 4
              </p>
            </div>
          </div>
        </section>

      </main>
      <Contact />
      <Footer />
    </div>
  );
}