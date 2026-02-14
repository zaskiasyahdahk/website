"use client";
import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { 
  Sparkles, Users, BookOpen, Lightbulb, Globe, MessageSquare, Heart, Church, 
  ArrowRight, Lock, ChevronRight, ExternalLink, Calendar, Target, Award,
  TrendingUp, Zap, Crown, Star, Menu, X, Image as ImageIcon, FileText, Quote, ArrowLeft
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "motion/react";

export function ProgramKerjaPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const NextArrow = ({ onClick }: any) => (
    <button onClick={onClick} className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] p-3 rounded-full text-white hover:bg-[#8B4513] transition-all shadow-xl">
      <ChevronRight className="size-6" />
    </button>
  );

  const PrevArrow = ({ onClick }: any) => (
    <button onClick={onClick} className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-[#D4AF37] p-3 rounded-full text-white hover:bg-[#8B4513] transition-all shadow-xl">
      <ChevronRight className="size-6 rotate-180" />
    </button>
  );
  
  const departmentRefs = {
    psdm: useRef<HTMLDivElement>(null),
    perhubungan: useRef<HTMLDivElement>(null),
    litbang: useRef<HTMLDivElement>(null),
    ekotif: useRef<HTMLDivElement>(null),
    kominfo: useRef<HTMLDivElement>(null),
    kemahasiswaan: useRef<HTMLDivElement>(null),
    kerohanian: useRef<HTMLDivElement>(null),
  };

  // Scroll spy untuk floating menu
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      // PERBAIKAN: Menggunakan casting agar key dikenali dengan benar
      (Object.keys(departmentRefs) as Array<keyof typeof departmentRefs>).forEach((key) => {
        const ref = departmentRefs[key];
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PERBAIKAN UTAMA: refKey sekarang memiliki tipe yang spesifik, bukan string biasa
  const scrollToSection = (refKey: keyof typeof departmentRefs) => {
    departmentRefs[refKey].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsNavOpen(false);
  };

  // Data Program Unggulan untuk Carousel
  const spotlightPrograms = [
    {
      id: 1,
      title: "JIPTRIP 2026",
      subtitle: "JIP Goes to Gallery, Library, Archive and Museum",
      department: "Litbang & PSDM",
      description: "Konferensi internasional yang menghadirkan para pakar ilmu perpustakaan dari berbagai negara untuk berbagi wawasan dan inovasi terkini.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
      impact: "500+ Peserta",
      date: "Oktober 2025"
    },
    {
      id: 2,
      title: "Bibliotheca Festival",
      subtitle: "Festival Literasi Nasional",
      department: "Kemahasiswaan",
      description: "Festival berskala nasional yang menggabungkan seni, budaya, dan literasi dalam satu panggung megah untuk seluruh mahasiswa Indonesia.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200",
      impact: "1000+ Pengunjung",
      date: "Agustus 2025"
    },
    {
      id: 3,
      title: "Archives Innovation Summit",
      subtitle: "Inovasi Teknologi Kearsipan",
      department: "Kominfo & Litbang",
      description: "Workshop intensif dan pameran teknologi terkini dalam bidang manajemen arsip digital dan sistem informasi perpustakaan.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200",
      impact: "300+ Peserta",
      date: "Juni 2025"
    }
  ];

  // Data Program per Departemen
  const departments = [
    {
      id: "psdm",
      name: "PSDM",
      fullName: "Pengembangan Sumber Daya Manusia",
      icon: Users,
      color: "from-amber-500 to-orange-600",
      programs: [
        { name: "Leadership Training Camp", desc: "Pelatihan kepemimpinan untuk seluruh anggota HMPS", target: "80 Anggota", status: "Tahap Persiapan" },
        { name: "Mentorship Program", desc: "Program bimbingan senior-junior", target: "50 Pasangan", status: "Berjalan" },
        { name: "Skill Development Workshop", desc: "Workshop pengembangan soft skill dan hard skill", target: "100 Peserta", status: "Tahap Persiapan" },
        { name: "Team Building Series", desc: "Kegiatan penguatan tim antar departemen", target: "Semua Departemen", status: "Q1 2025" }, 
      ]
    },
    {
      id: "perhubungan",
      name: "Perhubungan",
      fullName: "Hubungan Masyarakat & Eksternal",
      icon: Globe,
      color: "from-orange-500 to-red-600",
      programs: [
        { name: "Partnership Forum", desc: "Forum kerjasama dengan organisasi eksternal", target: "15+ Partner", status: "Berjalan" },
        { name: "Alumni Networking Night", desc: "Malam silaturahmi dengan alumni IPI", target: "100+ Alumni", status: "Maret 2025" },
        { name: "Corporate Visit Program", desc: "Kunjungan ke institusi perpustakaan terkemuka", target: "5 Institusi", status: "Tahap Persiapan" },
        { name: "International Collaboration", desc: "Kerjasama dengan universitas luar negeri", target: "3 Universitas", status: "Perencanaan" }
      ]
    },
    {
      id: "litbang",
      name: "Litbang",
      fullName: "Penelitian & Pengembangan",
      icon: Lightbulb,
      color: "from-red-500 to-rose-600",
      programs: [
        { name: "Research Grant Program", desc: "Hibah penelitian untuk mahasiswa IPI", target: "10 Proposal", status: "Call for Proposal" },
        { name: "Journal Club", desc: "Diskusi rutin jurnal ilmiah terkini", target: "Bulanan", status: "Berjalan" },
        { name: "Innovation Challenge", desc: "Kompetisi inovasi bidang perpustakaan", target: "20 Tim", status: "Juni 2025" },
        { name: "Research Mentoring", desc: "Bimbingan riset oleh dosen dan praktisi", target: "30 Mahasiswa", status: "Tahap Persiapan" }
      ]
    },
    {
      id: "ekotif",
      name: "Ekotif",
      fullName: "Ekonomi Kreatif",
      icon: Zap,
      color: "from-rose-500 to-pink-600",
      programs: [
        { name: "JIP Store Launching", desc: "Platform penjualan merchandise HMPS", target: "E-commerce", status: "Development" },
        { name: "Creative Fundraising", desc: "Program penggalangan dana kreatif", target: "10 Event", status: "Perencanaan" },
        { name: "Entrepreneurship Class", desc: "Kelas kewirausahaan untuk mahasiswa", target: "50 Peserta", status: "Februari 2025" },
        { name: "Brand Collaboration", desc: "Kolaborasi dengan brand lokal", target: "5 Brand", status: "Negosiasi" }
      ]
    },
    {
      id: "kominfo",
      name: "Kominfo",
      fullName: "Komunikasi & Informasi",
      icon: MessageSquare,
      color: "from-amber-600 to-orange-600",
      programs: [
        { name: "Digital Content Creation", desc: "Produksi konten kreatif multi-platform", target: "Daily Post", status: "Berjalan" },
        { name: "Podcast Series: InfoTalk", desc: "Podcast seputar dunia perpustakaan", target: "12 Episode", status: "Berjalan" },
        { name: "Media Training Workshop", desc: "Pelatihan jurnalistik dan broadcasting", target: "40 Peserta", status: "Maret 2025" },
        { name: "Website Revamp", desc: "Pengembangan website HMPS versi baru", target: "Q2 2025", status: "Development" }
      ]
    },
    {
      id: "kemahasiswaan",
      name: "Kemahasiswaan",
      fullName: "Kesejahteraan Mahasiswa",
      icon: Heart,
      color: "from-orange-600 to-red-700",
      programs: [
        { name: "JIPers Mental Health Campaign", desc: "Kampanye kesehatan mental mahasiswa", target: "Semua Mahasiswa", status: "Berjalan" },
        { name: "Academic Support System", desc: "Sistem bantuan akademik peer-to-peer", target: "100+ Mahasiswa", status: "Berjalan" },
        { name: "Scholarship Info Center", desc: "Pusat informasi beasiswa", target: "Online Platform", status: "Active" },
        { name: "Recreation Day", desc: "Hari rekreasi bersama mahasiswa IPI", target: "Semester", status: "Perencanaan" }
      ]
    },
    {
      id: "kerohanian",
      name: "Kerohanian",
      fullName: "Pembinaan Kerohanian",
      icon: Church,
      color: "from-red-600 to-rose-700",
      programs: [
        { name: "Kajian Rutin Jumat", desc: "Kajian keislaman setiap Jumat", target: "Mingguan", status: "Berjalan" },
        { name: "Ramadan Movement", desc: "Program khusus selama bulan Ramadan", target: "30 Hari", status: "Ramadan 2025" },
        { name: "Spiritual Retreat", desc: "Retret spiritual mahasiswa IPI", target: "80 Peserta", status: "Juli 2025" },
        { name: "Islamic Library Corner", desc: "Pojok baca islami di ruang HMPS", target: "Permanen", status: "Setup" }
      ]
    }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
  };

  return (
    <div className="size-full bg-[#FFF8F0] font-sans selection:bg-[#D4AF37] selection:text-white">
      <Header />

      <div className="fixed top-28 left-4 sm:left-8 z-[60]">
        <a href="/" className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-lg hover:scale-105 transition-all group">
          <ArrowLeft className="size-4 text-primary group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold text-primary">Kembali</span>
        </a>
      </div>
      
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        onClick={() => setIsNavOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-[#8B4513] text-[#D4AF37] p-3 rounded-r-2xl shadow-2xl border-y border-r border-[#D4AF37]/50 flex flex-col items-center gap-2 hover:bg-[#632626] transition-all group"
      >
        <Menu className="size-6 group-hover:scale-110 transition-transform" />
        <span className="[writing-mode:vertical-lr] font-bold text-[10px] uppercase tracking-widest py-2">Menu Proker</span>
      </motion.button>
      
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavOpen(false)}
              className="fixed inset-0 bg-[#4A2511]/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 bg-[#FFF8F0] z-[70] shadow-2xl border-r-4 border-[#D4AF37] p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <Crown className="size-6 text-[#D4AF37]" />
                  <h2 className="font-serif font-bold text-[#8B4513] text-xl">Navigasi Proker</h2>
                </div>
                <button onClick={() => setIsNavOpen(false)} className="p-2 hover:bg-[#8B4513]/10 rounded-full transition-colors">
                  <X className="size-6 text-[#8B4513]" />
                </button>
              </div>

              <div className="space-y-3">
                {/* PERBAIKAN: Melakukan casting pada Object.keys agar iterasi aman di TypeScript */}
                {(Object.keys(departmentRefs) as Array<keyof typeof departmentRefs>).map((dept) => (
                  <button
                    key={dept}
                    onClick={() => scrollToSection(dept)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold transition-all ${
                      activeSection === dept ? 'bg-[#8B4513] text-[#D4AF37]' : 'text-[#8B4513] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    <ChevronRight className={`size-4 ${activeSection === dept ? 'rotate-90' : ''}`} />
                    <span className="uppercase tracking-wider text-sm">{dept}</span>
                  </button>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8 p-4 bg-[#8B4513] rounded-xl text-center">
                <p className="text-[#D4AF37] text-[10px] font-bold uppercase">HMPS IP 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <section className="relative bg-gradient-to-br from-[#FFF8F0] via-[#FEF3E8] to-[#FFE8D6] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#C4622D]/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-[#D4AF37]/30"
          >
            <Crown className="size-5 text-[#D4AF37]" />
            <p className="font-bold tracking-wider uppercase text-sm text-[#8B4513]">Manajemen Internal</p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4C542] to-[#D4AF37] drop-shadow-lg"
          >
            Mahakarya & <br />Program Unggulan
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg sm:text-xl text-[#8B4513]/80 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Inovasi yang berdampak, dedikasi yang nyata. Jelajahi rangkaian program strategis <span className="font-bold text-[#C4622D]">Kabinet Eksistensi</span> HMPS Ilmu Perpustakaan.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#semua-program"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <Sparkles className="size-6 group-hover:rotate-12 transition-transform" />
            <span className="relative">Lihat Semua Program</span>
            <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>
      </section>
      
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#C4622D]/10 px-5 py-2 rounded-full mb-4">
              <Star className="size-4 text-[#C4622D] fill-[#C4622D]" />
              <span className="text-[#8B4513] font-bold text-sm uppercase tracking-widest">Featured Programs</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#8B4513] mb-4">Program Bintang 2025</h2>
          </div>

          <div className="spotlight-carousel">
            <Slider {...carouselSettings}>
              {spotlightPrograms.map((program) => (
                <div key={program.id} className="px-4 outline-none">
                  <div className="grid md:grid-cols-2 gap-10 items-center bg-gradient-to-br from-white to-[#FFF8F0] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/30 p-8 md:p-12">
                    <div className="relative rounded-2xl overflow-hidden group h-[400px]">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/80 via-[#8B4513]/20 to-transparent"></div>
                    </div>

                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 bg-[#C4622D]/10 px-4 py-2 rounded-full">
                        <Award className="size-4 text-[#C4622D]" />
                        <span className="text-sm font-bold text-[#8B4513] uppercase tracking-wide">{program.department}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-4xl font-serif font-bold text-[#8B4513] mb-2">{program.title}</h3>
                        <p className="text-[#C4622D] font-semibold text-lg italic">{program.subtitle}</p>
                      </div>

                      <p className="text-[#8B4513]/80 leading-relaxed text-lg">{program.description}</p>

                      <div className="flex items-center gap-6 pt-4">
                        <div className="flex items-center gap-2">
                          <Target className="size-5 text-[#D4AF37]" />
                          <span className="font-bold text-[#8B4513]">{program.impact}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="size-5 text-[#D4AF37]" />
                          <span className="font-bold text-[#8B4513]">{program.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section id="semua-program" className="py-24 bg-gradient-to-b from-white to-[#FFF8F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold text-[#8B4513] mb-4">Semua Program Kerja</h2>
          </div>

          <div className="space-y-20">
            {departments.map((dept, deptIndex) => (
              <motion.div
                key={dept.id}
                // PERBAIKAN: Melakukan casting pada id saat mengakses refs
                ref={departmentRefs[dept.id as keyof typeof departmentRefs]}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-32"
              >
                <div className={`bg-gradient-to-r ${dept.color} rounded-3xl p-8 md:p-12 text-white mb-8 shadow-2xl relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <dept.icon className="size-64" />
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl">
                        <dept.icon className="size-12" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-serif font-bold mb-2">{dept.name}</h3>
                        <p className="text-white/90 text-lg">{dept.fullName}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {dept.programs.map((program, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="group bg-white rounded-2xl h-64 shadow-lg border-2 border-[#D4AF37]/20 overflow-hidden relative cursor-pointer"
                    >
                      <div className="p-8 h-full flex flex-col justify-between group-hover:opacity-0 transition-opacity duration-300">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-xl font-bold text-[#8B4513]">{program.name}</h4>
                            <span className="shrink-0 px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md">{program.status}</span>
                          </div>
                          <p className="text-[#8B4513]/70 text-sm line-clamp-3">{program.desc}</p>
                        </div>
                        <div className="flex items-center gap-2 pt-4 border-t border-[#D4AF37]/10">
                          <Target className="size-4 text-[#D4AF37]" />
                          <span className="text-xs font-semibold text-[#8B4513]">Target: {program.target}</span>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-[#8B4513] p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center gap-4 z-20">
                        <h4 className="text-[#D4AF37] font-bold border-b border-[#D4AF37]/30 pb-2">Arsip Program</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-white/90">
                            <FileText className="size-4 text-[#D4AF37]" />
                            <span className="text-xs">Baca Artikel Berita</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/90">
                            <ImageIcon className="size-4 text-[#D4AF37]" />
                            <span className="text-xs">Dokumentasi</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-start gap-2 w-full sm:w-auto order-2 sm:order-1">
              <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Sebelumnya</p>
              <a href="/struktur-tim" className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all group">
                <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                STRUKTUR TIM
              </a>
            </div>
            <div className="flex flex-col items-end gap-2 w-full sm:w-auto order-1 sm:order-3">
              <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Selanjutnya</p>
              <a href="/bintang-kabinet" className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all group">
                BINTANG KABINET
                <ArrowLeft className="size-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />

      <style>{`
        .spotlight-carousel .slick-dots li button:before { color: #D4AF37; opacity: 0.3; }
        .spotlight-carousel .slick-dots li.slick-active button:before { color: #D4AF37; opacity: 1; }
        .spotlight-carousel .slick-slide { opacity: 0.4; transition: opacity 0.5s ease; }
        .spotlight-carousel .slick-slide.slick-active { opacity: 1; }
      `}</style>
    </div>
  );
}