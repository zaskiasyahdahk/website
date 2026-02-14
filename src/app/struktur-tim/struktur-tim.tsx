import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Crown, Mail, Wallet, Users, BookOpen, Megaphone, Lightbulb, Store, Newspaper, Heart, Sparkles, Lock, ChevronRight, Linkedin, Instagram, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

interface PersonCard {
  name: string;
  position: string;
  image: string;
  instagram?: string;
  linkedin?: string;
}

interface Department {
  id: string;
  name: string;
  icon: React.ElementType;
  head: PersonCard;
  viceHead: PersonCard;
  staff: PersonCard[];
  color: string;
}

export function StrukturTimPage() {
  const [activeSection, setActiveSection] = useState<string>("pimpinan");
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate="true"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const leadership = {
    ketua: {
      name: "Ahmad Yasik Hayes",
      position: "Ketua Umum",
      motto: "Memimpin dengan integritas, melayani dengan dedikasi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      instagram: "@ahmadyasikhayesc",
      linkedin: "ahmad-yasik"
    },
    wakil: {
      name: "Fathan Rangga Ifari",
      position: "Wakil Ketua Umum",
      motto: "Bersinergi untuk kejayaan, berkolaborasi untuk masa depan",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      instagram: "@fathanrangga",
      linkedin: "fathan-rangga"
    }
  };

  const secretariat = [
    {
      name: "Zhafarina Tijani Athaya",
      position: "Sekretaris I",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      instagram: "@zhafarinata"
    },
    {
      name: "Shevaya Rubyfirlie",
      position: "Sekretaris II",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      instagram: "@shevayadev"
    }
  ];

  const treasury = [
    {
      name: "Miftha Nurul Azizah",
      position: "Bendahara I",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
      instagram: "@mifthanurul"
    },
    {
      name: "Hazimah Azzah Putrimadita",
      position: "Bendahara II",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
      instagram: "@hazimahazzah"
    }
  ];

  const departments: Department[] = [
    {
      id: "psdm",
      name: "PSDM",
      icon: Users,
      color: "from-orange-600 to-red-600",
      head: {
        name: "Muhamad Syahril Ariansyah",
        position: "Kepala Departemen",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
      },
      viceHead: {
        name: "Nadya Kirani Ayub",
        position: "Wakil Kepala Departemen",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"
      },
      staff: [
        { name: "Fatma Ramadhani", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" },
        { name: "Allyssa Ramadha", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400" },
        { name: "Amanda Dwi Rahayu", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=400" },
        { name: "Fadhilah Amelia Ikhwan", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400" },
        { name: "Fawaz Dhiya'ul Haq", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" },
        { name: "Daffa Rizky Ferdinand", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400" },
        { name: "Fasmalia El Sabbiq", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400" },
        { name: "Areva Dzikra Hody", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400" }
      ]
    },
    {
      id: "perhubungan",
      name: "Perhubungan",
      icon: Megaphone,
      color: "from-amber-600 to-orange-600",
      head: {
        name: "Bagas Wicaksono",
        position: "Kepala Departemen",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400"
      },
      viceHead: {
        name: "Nadya Fatma Salsabila",
        position: "Wakil Kepala Departemen",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400"
      },
      staff: [
        { name: "Lu'lu'A Jannati 'Adn", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400" },
        { name: "Dechri Vanesa Mecca", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=400" },
        { name: "Dewi Ana", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=400" },
        { name: "Iskandar", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400" },
        { name: "Zulfa Azhar Asyifa", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=400" }
      ]
    },
    {
      id: "litbang",
      name: "Litbang",
      icon: Lightbulb,
      color: "from-yellow-600 to-amber-600",
      head: {
        name: "Sarah Salsabila",
        position: "Kepala Departemen",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400"
      },
      viceHead: {
        name: "Khaila Putri Larasati",
        position: "Wakil Kepala Departemen",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=400"
      },
      staff: [
        { name: "Fira Lasya Nova", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400" },
        { name: "Dhea Alifah Fudiyanti", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
        { name: "Rihadatul Aisy Avicena Anwar", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=400" },
        { name: "Nuha Ramadhani", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?q=80&w=400" },
        { name: "Hana Zada Videla", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=400" },
        { name: "Rafif Aryo Zaki", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400" }
      ]
    },
    {
      id: "ekotif",
      name: "Ekonomi Kreatif",
      icon: Store,
      color: "from-orange-500 to-red-500",
      head: {
        name: "Aditya Pangruwating Dhiyu",
        position: "Kepala Departemen",
        image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400"
      },
      viceHead: {
        name: "Nazhiva Fikra",
        position: "Wakil Kepala Departemen",
        image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=400"
      },
      staff: [
        { name: "Syahda Restu Azkiya", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400" },
        { name: "Wardatul Hamro Ziyaadaturrizki", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400" },
        { name: "Bacheeta Anwar", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?q=80&w=400" },
        { name: "Nada Syamila Nurbito", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=400" },
        { name: "Vanesa Putri Zahra", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=400" }
      ]
    },
    {
      id: "kominfo",
      name: "Kominfo",
      icon: Newspaper,
      color: "from-amber-500 to-orange-500",
      head: {
        name: "Zaskia Syahda Hafizha Kurniawan",
        position: "Kepala Departemen",
        image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=400"
      },
      viceHead: {
        name: "Silvi Nur Aini",
        position: "Wakil Kepala Departemen",
        image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=400"
      },
      staff: [
        { name: "Cinta Husnadzan Dzikri", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?q=80&w=400" },
        { name: "Tiara Fadilatun Nisa", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=400" },
        { name: "Puput Trimaililah", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2?q=80&w=400" },
        { name: "Hanifah Dina Pasha", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400" },
        { name: "Resti Irma Agustin", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=400" },
        { name: "Lydian Salwa Hananihasna", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?q=80&w=400" },
        { name: "Nazwa Prina Al Atsilah", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=400" }
      ]
    },
    {
      id: "kemahasiswaan",
      name: "Kemahasiswaan",
      icon: Heart,
      color: "from-red-500 to-orange-500",
      head: {
        name: "Irfan Hakim Ramadhan",
        position: "Kepala Departemen",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400"
      },
      viceHead: {
        name: "Nayla Putri Andriyani",
        position: "Wakil Kepala Departemen",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400"
      },
      staff: [
        { name: "Finka Suci Safitri", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400" },
        { name: "Dhea Azzahra Putri", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400" },
        { name: "Tasya Humairoh", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?q=80&w=400" },
        { name: "Munazi Julita Pratiwi", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400" },
        { name: "Muhammad Apdal", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400" }
      ]
    },
    {
      id: "kerohanian",
      name: "Kerohanian",
      icon: BookOpen,
      color: "from-amber-600 to-yellow-600",
      head: {
        name: "Imad Dzakwan Fawwaz",
        position: "Kepala Departemen",
        image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=400"
      },
      viceHead: {
        name: "Fairuz Pramathana Sani",
        position: "Wakil Kepala Departemen",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400"
      },
      staff: [
        { name: "Sayyida Nafisa Aulia", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=400" },
        { name: "Maryam Nurul Jaatsiyah", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400" },
        { name: "Rahimah Muflihah Humayroh", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" },
        { name: "Siti Nasuhah", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" },
        { name: "Meutia Febriyani", position: "Staf Departemen", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400" }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div id="halaman-struktur-tim" className="size-full bg-[#FFF8F0]">
      <Header />

      {/* Tombol Kembali Melayang */}
      <div className="fixed top-28 left-4 sm:left-8 z-[60]">
        <a href="/" className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-lg hover:scale-105 transition-all group">
          <ArrowLeft className="size-4 text-primary group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold text-primary">Kembali</span>
        </a>
      </div>
      
      {/* Hero Section - The Executive Portrait */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FAF3E0] to-[#FFECD6]">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1" fill="#B85C38"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-8 border-2 border-amber-300/50 shadow-lg">
              <Crown className="size-5 text-amber-600" />
              <span className="text-amber-800 font-bold tracking-widest uppercase text-sm">The Royal Team Gallery</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7D3C1D] to-[#B85C38] mb-6 tracking-tight">
              Struktur Organisasi & Personalia
            </h1>
            
            <p className="text-xl text-[#8B4513] max-w-4xl mx-auto leading-relaxed mb-12">
              Sinergi dalam keberanian, bersatu dalam kejayaan. Mengenal lebih dekat wajah-wajah di balik dedikasi <span className="font-bold text-[#B85C38]">Kabinet Nawa Sena</span> HMPS Ilmu Perpustakaan.
            </p>
          </div>

          {/* Group Photo */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 via-transparent to-amber-400/30 blur-3xl"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-3xl border-8 border-double border-amber-400 shadow-2xl">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000" 
                  alt="Team Photo"
                  className="w-full h-full object-cover"
                  style={{ filter: "sepia(0.2) saturate(1.3) brightness(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7D3C1D]/20 to-transparent"></div>
              </div>
              
              {/* Photo Caption */}
              <div className="mt-4 text-center">
                <p className="text-sm text-[#8B4513] italic">
                  Kabinet Nawa Sena HMPS Ilmu Perpustakaan 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sticky Sidebar */}
      <div className="relative bg-[#FFF8F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
          <div className="flex gap-8">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl border-4 border-amber-200 p-6 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-[#7D3C1D] mb-6 flex items-center gap-2">
                  <Crown className="size-5 text-amber-600" />
                  Navigasi Cepat
                </h3>
                
                <nav className="space-y-2">
                  <button
                    onClick={() => scrollToSection("pimpinan")}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                      activeSection === "pimpinan" 
                        ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold" 
                        : "text-[#8B4513] hover:bg-amber-50"
                    }`}
                  >
                    <Crown className="size-4" />
                    <span className="text-sm">Pimpinan</span>
                  </button>
                  
                  <button
                    onClick={() => scrollToSection("sekretariat")}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                      activeSection === "sekretariat" 
                        ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold" 
                        : "text-[#8B4513] hover:bg-amber-50"
                    }`}
                  >
                    <Mail className="size-4" />
                    <span className="text-sm">Sekretariat</span>
                  </button>
                  
                  <button
                    onClick={() => scrollToSection("bendahara")}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                      activeSection === "bendahara" 
                        ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold" 
                        : "text-[#8B4513] hover:bg-amber-50"
                    }`}
                  >
                    <Wallet className="size-4" />
                    <span className="text-sm">Bendahara</span>
                  </button>

                  <div className="h-px bg-amber-200 my-3"></div>
                  
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => scrollToSection(dept.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                        activeSection === dept.id 
                          ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold" 
                          : "text-[#8B4513] hover:bg-amber-50"
                      }`}
                    >
                      <dept.icon className="size-4" />
                      <span className="text-sm">{dept.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              
              {/* Puncak Pimpinan - The Golden Circle */}
              <section id="pimpinan" className="mb-24 scroll-mt-24">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-6 border-2 border-amber-300">
                    <Crown className="size-5 text-amber-600" />
                    <span className="text-amber-800 font-bold tracking-wider uppercase text-sm">The Golden Circle</span>
                  </div>
                  <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#7D3C1D] mb-4">
                    Puncak Pimpinan
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  {[leadership.ketua, leadership.wakil].map((leader, index) => (
                    <div
                      key={index}
                      className="group relative"
                      data-animate="true"
                      id={`leader-${index}`}
                    >
                      <div className="text-center">
                        {/* Photo with Golden Glow */}
                        <div className="relative inline-block mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
                          
                          <div className="relative size-56 mx-auto rounded-full border-8 border-double border-amber-400 overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                            <img 
                              src={leader.image} 
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#7D3C1D]/30 to-transparent"></div>
                          </div>

                          {/* Crown Badge */}
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 size-16 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                            <Crown className="size-8 text-white" />
                          </div>
                        </div>

                        {/* Info */}
                        <h3 className="font-bold text-2xl text-[#7D3C1D] mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-amber-600 font-semibold italic mb-4">
                          {leader.position}
                        </p>
                        <p className="text-[#8B4513] text-sm italic max-w-xs mx-auto leading-relaxed">
                          "{leader.motto}"
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center justify-center gap-3 mt-6">
                          <a 
                            href={`https://instagram.com/${leader.instagram}`}
                            className="size-10 rounded-full bg-amber-100 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 flex items-center justify-center transition-all group/social"
                          >
                            <Instagram className="size-5 text-amber-600 group-hover/social:text-white" />
                          </a>
                          <a 
                            href={`https://linkedin.com/in/${leader.linkedin}`}
                            className="size-10 rounded-full bg-amber-100 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 flex items-center justify-center transition-all group/social"
                          >
                            <Linkedin className="size-5 text-amber-600 group-hover/social:text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sekretariat & Bendahara */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                
                {/* Sekretariat */}
                <section id="sekretariat" className="scroll-mt-24">
                  <div className="bg-white rounded-3xl border-4 border-amber-300 overflow-hidden shadow-xl relative">
                    {/* Golden Ribbon */}
                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                      <div className="absolute top-6 -right-10 w-40 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold text-center py-2 transform rotate-45 shadow-lg">
                        PENTING
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#B85C38] to-[#8B4513] p-6">
                      <div className="flex items-center gap-3">
                        <Mail className="size-8 text-amber-300" />
                        <h3 className="font-serif text-2xl font-bold text-amber-200">
                          Sekretariat
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      {secretariat.map((person, index) => (
                        <PersonCard key={index} person={person} animId={`sekretariat-${index}`} />
                      ))}
                    </div>
                  </div>
                </section>

                {/* Bendahara */}
                <section id="bendahara" className="scroll-mt-24">
                  <div className="bg-white rounded-3xl border-4 border-amber-300 overflow-hidden shadow-xl relative">
                    {/* Golden Ribbon */}
                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                      <div className="absolute top-6 -right-10 w-40 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold text-center py-2 transform rotate-45 shadow-lg">
                        PENTING
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#B85C38] to-[#8B4513] p-6">
                      <div className="flex items-center gap-3">
                        <Wallet className="size-8 text-amber-300" />
                        <h3 className="font-serif text-2xl font-bold text-amber-200">
                          Bendahara
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      {treasury.map((person, index) => (
                        <PersonCard key={index} person={person} animId={`bendahara-${index}`} />
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              {/* Departments - The Terracotta Grid */}
              <section className="space-y-16">
                <div className="text-center">
                  <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#7D3C1D] mb-4">
                    Jajaran Departemen
                  </h2>
                  <p className="text-lg text-[#8B4513]">
                    Tujuh Pilar Penggerak Organisasi
                  </p>
                </div>

                {departments.map((dept) => (
                  <div key={dept.id} id={dept.id} className="scroll-mt-24">
                    <DepartmentSection department={dept} />
                  </div>
                ))}
              </section>

              {/* Navigasi Halaman (Back - Info - Next) */}
              <section className="py-12 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    
                    {/* Tombol Back - Pinggir Kiri */}
                    <div className="flex flex-col items-start gap-2 w-full sm:w-auto order-2 sm:order-1">
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold ml-1">Sebelumnya</p>
                      <a 
                        href="/filosofi-logo-kabinet" 
                        className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center"
                      >
                        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                        FILOSOFI LOGO KABINET
                      </a>
                    </div>

                    {/* Info Halaman - Tengah */}
                    <div className="order-3 sm:order-2">
                        <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
                          Halaman <span className="text-primary font-bold">2</span> dari 5
                        </p>
                    </div>

                    {/* Tombol Next - Pinggir Kanan */}
                    <div className="flex flex-col items-end gap-2 w-full sm:w-auto order-1 sm:order-3">
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold mr-1">Selanjutnya</p>
                      <a 
                        href="/program-kerja" 
                        className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center"
                      >
                        PROGRAM KERJA UNGGULAN
                        <ArrowLeft className="size-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

// Person Card Component with Hover Effects
function PersonCard({ person, animId }: { person: PersonCard; animId: string }) {
  return (
    <div
      className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-white hover:to-white border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl"
      data-animate="true"
      id={animId}
    >
      {/* Photo */}
      <div className="relative size-20 rounded-xl overflow-hidden border-4 border-amber-300 group-hover:border-amber-500 transition-all shrink-0">
        <img 
          src={person.image} 
          alt={person.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          style={{ filter: "sepia(0.3)" }}
        />
        
        {/* Hover Overlay with Social Icons */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2 gap-2">
          {person.instagram && (
            <a href={`https://instagram.com/${person.instagram}`} className="size-6 rounded-full bg-white/90 flex items-center justify-center hover:bg-amber-400 transition-colors">
              <Instagram className="size-3 text-amber-600" />
            </a>
          )}
          {person.linkedin && (
            <a href={`https://linkedin.com/in/${person.linkedin}`} className="size-6 rounded-full bg-white/90 flex items-center justify-center hover:bg-amber-400 transition-colors">
              <Linkedin className="size-3 text-amber-600" />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h4 className="font-bold text-[#7D3C1D] mb-1">{person.name}</h4>
        <p className="text-sm text-[#B85C38] font-semibold">{person.position}</p>
      </div>

      {/* Golden Border Effect on Hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <Sparkles className="size-5 text-amber-500" />
      </div>
    </div>
  );
}

// Department Section Component
function DepartmentSection({ department }: { department: Department }) {
  return (
    <div className="bg-white rounded-3xl border-4 border-amber-200 overflow-hidden shadow-xl">
      {/* Department Header */}
      <div className={`bg-gradient-to-r ${department.color} p-8`}>
        <div className="flex items-center gap-4 mb-2">
          <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <department.icon className="size-8 text-white" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-amber-100">
            Departemen {department.name}
          </h3>
        </div>
      </div>

      {/* Department Content */}
      <div className="p-8">
        {/* Kepala & Wakil Kepala */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-300">
            <div className="flex items-center gap-2 text-xs text-amber-600 font-bold uppercase tracking-wider mb-4">
              <Crown className="size-4" />
              Kepala Departemen
            </div>
            <PersonCard person={department.head} animId={`${department.id}-head`} />
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-300">
            <div className="flex items-center gap-2 text-xs text-amber-600 font-bold uppercase tracking-wider mb-4">
              <Crown className="size-4" />
              Wakil Kepala Departemen
            </div>
            <PersonCard person={department.viceHead} animId={`${department.id}-vice`} />
          </div>
        </div>

        {/* Staff Grid */}
        <div>
          <h4 className="text-sm text-[#8B4513] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <Users className="size-4" />
            Staf Departemen ({department.staff.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {department.staff.map((staff, index) => (
              <PersonCard key={index} person={staff} animId={`${department.id}-staff-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}