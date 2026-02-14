"use client";

import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { BookOpen, Users, Globe, Building2, Palette, Quote, Archive, Sparkles, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function FilosofiLogoPage() {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const logoElements = [
    {
      id: "buku",
      icon: BookOpen,
      title: "BUKU TERBUKA",
      position: "Fondasi Utama",
      meaning: "Lambang buku terbuka melambangkan cakrawala pengetahuan yang luas dan semangat aksesibilitas informasi tanpa batas, yang menjadi fondasi utama intelektualitas mahasiswa Ilmu Perpustakaan. Secara filosofis, buku yang terbuka merepresentasikan keterbukaan organisasi terhadap inovasi serta kesiapan untuk terus belajar dan beradaptasi dengan transformasi ilmu pengetahuan. Hal ini juga menegaskan jati diri HMPS IPI sebagai wadah yang inklusif, di mana informasi dan literasi dikelola bukan sekadar sebagai arsip statis, melainkan sebagai sumber energi untuk memberikan dampak nyata dan membangun peradaban yang lebih progresif.",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "manusia",
      icon: Users,
      title: "EMPAT FIGUR BERGANDENGAN",
      position: "Elemen Persatuan",
      meaning: "Lambang figur manusia yang saling bergandengan tangan melambangkan sinergi kolektif dan integritas pengabdian yang menjadi napas utama dalam organisasi. Elemen ini merepresentasikan semangat gotong royong serta persatuan seluruh pengurus dan mahasiswa Ilmu Perpustakaan dalam bergerak selaras demi mencapai tujuan bersama. Ini juga merupakan simbol dari hubungan yang inklusif dan harmonis, di mana setiap individu memiliki peran penting untuk saling mendukung, memperkuat, dan melindungi satu sama lain demi menciptakan ekosistem organisasi yang solid dan berdaya dampak bagi masyarakat luas.",
      color: "from-orange-400 via-red-500 to-green-500"
    },
    {
      id: "global",
      icon: Globe,
      title: "BOLA DUNIA & ORBIT",
      position: "Visi Global",
      meaning: "Lambang bola dunia dan orbitnya melambangkan visi futuristik dan jangkauan organisasi yang bersifat global serta adaptif terhadap arus informasi digital di era modern, merepresentasikan juga cakupan ilmu pengetahuan yang luas dan keinginan HMPS IPI untuk berkontribusi tidak hanya di lingkup internal, tetapi juga di kancah nasional maupun internasional. Sementara itu, garis orbit yang mengelilinginya menyimbolkan kedinamisan, kecepatan akses informasi, dan keterhubungan antarmanusia melalui teknologi, yang menegaskan bahwa organisasi ini siap bergerak cepat dalam mengikuti perkembangan zaman tanpa kehilangan arah pada nilai-nilai dasar keilmuannya.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "uin",
      icon: Building2,
      title: "IDENTITAS UIN",
      position: "Simbol Institusi",
      meaning: "Lambang identitas UIN Syarif Hidayatullah Jakarta melambangkan pertautan antara intelektualitas profan dan nilai-nilai spiritual keagamaan. HMPS IPI tidak hanya bergerak di atas landasan keilmuan akademik semata, tetapi juga menjunjung tinggi nilai-nilai keislaman, keindonesiaan, dan kemanusiaan sebagai etika dasar dalam berorganisasi. Kehadiran identitas ini mempertegas komitmen seluruh pengurus untuk menjadi insan akademis yang moderat, berakhlak mulia, dan mampu menyelaraskan kemajuan teknologi informasi dengan kearifan nilai-nilai religius.",
      color: "from-slate-700 to-slate-900"
    },
  ];

  const colorPalette = [
  {
    name: "Putih (Pure White)",
    hex: "#FFFFFF",
    meaning: "Melambangkan kesucian niat, transparansi kerja, dan kejujuran sebagai fondasi organisasi.",
    gradient: "from-white to-slate-200"
  },
  {
    name: "Merah (Bold Red)",
    hex: "#CC0000",
    meaning: "Simbol keberanian dalam berinovasi dan semangat pengabdian yang pantang menyerah.",
    gradient: "from-[#CC0000] to-[#990000]"
  },
  {
    name: "Oranye (Sunset Orange)",
    hex: "#FF9900",
    meaning: "Mencerminkan energi positif, antusiasme organisasi, dan kehangatan dalam berkolaborasi.",
    gradient: "from-[#FF9900] to-[#E67300]"
  },
  {
    name: "Kuning Emas (Gold)",
    hex: "#FFCC00",
    meaning: "Simbol kejayaan intelektual, nilai eksklusif ilmu, dan visi organisasi menuju masa keemasan.",
    gradient: "from-[#FFCC00] to-[#D4AF37]"
  },
  {
    name: "Hijau (Nature Green)",
    hex: "#33CC00",
    meaning: "Melambangkan pertumbuhan yang berkelanjutan, harmoni, dan keseimbangan dalam berorganisasi.",
    gradient: "from-[#33CC00] to-[#269900]"
  },
  {
    name: "Biru Muda (Sky Blue)",
    hex: "#00CCFF",
    meaning: "Mewakili kecerahan intelektual, keterbukaan akses informasi, dan kreativitas mahasiswa.",
    gradient: "from-[#00CCFF] to-[#0099CC]"
  },
  {
    name: "Biru Utama (Ocean Blue)",
    hex: "#006699",
    meaning: "Melambangkan kedalaman ilmu pengetahuan, profesionalisme informasi, dan otoritas akademik.",
    gradient: "from-[#006699] to-[#004466]"
  },
  {
    name: "Biru Dongker (Dark Blue)",
    hex: "#003366",
    meaning: "Mewakili identitas institusi yang kokoh, integritas tinggi, dan ketegasan dalam memimpin.",
    gradient: "from-[#003366] to-[#001A33]"
  },
];

  return (
    <div id="halaman-filosofi-logo" className="size-full">
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
            <p className="font-semibold tracking-wider uppercase text-sm">Profil Organisasi</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            FILOSOFI LOGO
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed italic">
            "Menghimpun Warisan Sejarah Demi Mewujudkan Eksistensi Organisasi Berkelanjutan"
          </p>
        </div>
      </section>

      <main className="bg-white">
        
        {/* Display Logo Utama */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="relative bg-white rounded-3xl shadow-2xl p-12 sm:p-16 lg:p-20 border border-slate-100">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-3xl"></div>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-3 rounded-full mb-4">
                  <Sparkles className="size-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">LOGO RESMI</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  HIMPUNAN MAHASISWA PROGRAM STUDI ILMU PERPUSTAKAAN
                </h2>
                <p className="text-muted-foreground">UIN Syarif Hidayatullah Jakarta</p>
              </div>

              {/* Logo Display - Placeholder with elegant styling */}
              <div className="relative mx-auto max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-cyan-200/30 to-indigo-200/20 rounded-3xl blur-2xl"></div>
              </div>
              <div className="text-center mt-8">
                <p className="text-slate-600 italic text-sm sm:text-base">
                  "Simbol identitas yang mencerminkan nilai, visi, dan semangat kolektif"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analisis Elemen Logo */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-4">
                <Archive className="size-5 text-primary" />
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">FILOSOFI</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">ELEMEN DAN WARNA</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Setiap Elemen dan Warna Memiliki Makna Filosofis yang Mendalam dan Saling Terkait untuk Menyampaikan Pesan dan Nilai Organisasi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {logoElements.map((element, index) => (
                <div 
                  key={element.id}
                  onMouseEnter={() => setActiveElement(element.id)}
                  onMouseLeave={() => setActiveElement(null)}
                  className={`group relative bg-white p-8 rounded-2xl border-2 transition-all duration-300 ${
                    activeElement === element.id 
                      ? 'border-primary shadow-2xl scale-105 -translate-y-2' 
                      : 'border-slate-100 shadow-lg hover:border-primary/50 hover:shadow-xl'
                  }`}
                >
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${element.color} rounded-t-2xl transition-all duration-300 ${
                    activeElement === element.id ? 'h-3' : ''
                  }`}></div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className={`bg-gradient-to-br ${element.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      <element.icon className="size-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        {element.position}
                      </span>
                      <h3 className="text-xl font-bold text-primary">{element.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {element.meaning}
                  </p>

                  {/* Pointer indicator when active */}
                  {activeElement === element.id && (
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                      <div className="bg-primary size-4 rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Palet Warna */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {colorPalette.map((color, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  {/* Color swatch */}
                  <div className={`h-32 bg-gradient-to-br ${color.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <p className="font-bold text-sm text-slate-800">{color.name}</p>
                        <p className="text-xs text-slate-600 font-mono">{color.hex}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {color.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigasi Halaman (Back - Info - Next) */}
<section className="py-12 border-t border-slate-200">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      
      {/* Tombol Back - Pinggir Kiri */}
      <div className="flex flex-col items-start gap-2 w-full sm:w-auto order-2 sm:order-1">
        <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold ml-1">Sebelumnya</p>
        <a 
          href="/visi-misi" 
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          VISI, MISI & BUDAYA ORGANISASI
        </a>
      </div>

      {/* Info Halaman - Tengah */}
      <div className="order-3 sm:order-2">
          <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
            Halaman <span className="text-primary font-bold">3</span> dari 4
          </p>
      </div>

      {/* Tombol Next - Pinggir Kanan */}
      <div className="flex flex-col items-end gap-2 w-full sm:w-auto order-1 sm:order-3">
        <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold mr-1">Selanjutnya</p>
        <a 
          href="/jejak-arsip" 
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center"
        >
          JEJAK ARSIP
          <ArrowLeft className="size-4 rotate-180 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </div>
  </div>
</section>

      </main>

      <Contact />
      <Footer />
    </div>
  );
}
