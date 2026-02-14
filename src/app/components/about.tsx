import { 
  Building2, Users2, Trophy, Library, ChevronRight, 
  Medal, Star, ArrowUpRight, Sparkles 
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: Building2,
      title: "Profil Organisasi",
      description:
        "Jejak langkah, landasan filosofis, dan arah gerak strategis HMPS Ilmu Perpustakaan.",
      subMenus: [
        { name: "Jejak Sejarah", href: "/sejarah#halaman-sejarah" },
        { name: "Visi, Misi dan Budaya Organisasi", href: "/visi-misi#halaman-visi-misi" },
        { name: "Filosofi Logo Himpunan", href: "/filosofi-logo#halaman-filosofi-logo" },
        { name: "Jejak Arsip", href: "/jejak-arsip#halaman-jejak-arsip" },
      ],
    },
    {
      icon: Users2,
      title: "Manajemen Internal",
      description:
        "Sinergi fungsional antar pengurus dan departemen dalam mengelola sumber daya organisasi secara sistematis.",
      subMenus: [
        { name: "Filosofi Logo Kabinet", href: "/filosofi-logo-kabinet#halaman-filosofi-logo-kabinet" },
        { name: "Struktur Tim dan Unit", href: "/struktur-tim#halaman-struktur-tim" },
        { name: "Program Kerja Unggulan", href: "/program-kerja#halaman-program-kerja" },
        { name: "Bintang Kabinet", href: "/bintang-kabinet#halaman-bintang-kabinet" },
        { name: "Direktori Dokumen", href: "/direktori-dokumen#halaman-direktori-dokumen" },
      ],
    },
    {
      icon: Trophy,
      title: "Etalase Karya",
      description:
        "Dokumentasi digital pencapaian, inovasi, dan kontribusi nyata mahasiswa.",
      subMenus: [
        { name: "Lensa Prestasi", href: "#" },
        { name: "Koleksi Karya", href: "#" },
        { name: "Galeri Momentum", href: "#" },
        { name: "JIP Store", href: "#" },
      ],
    },
    {
      icon: Library,
      title: "Pusat Informasi",
      description:
        "Layanan informasi terpadu, manajemen data akademik, dan pusat literasi digital.",
      subMenus: [
        { name: "Warta dan Pustaka", href: "#" },
        { name: "Pengembangan Karir dan Bakat", href: "#" },
        { name: "JIPers Care and Center", href: "#" },
        { name: "Layanan Arsip", href: "#" },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* PROFIL (ABOUT) */}
      <section id="tentang" className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles className="size-4 fill-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">Kenali Kami Lebih Dekat</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              Eksplorasi JIPSITE
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
  Pusat Informasi • Gerbang Inovasi • Wadah Kolaborasi <br />
  bagi seluruh Mahasiswa Jurusan Ilmu Perpustakaan UIN Syarif Hidayatullah Jakarta
</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative isolate bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-[380px] overflow-hidden"
              >
                <div className="relative z-10 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10">
                  <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                    <value.icon className="size-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-primary p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20">
                  <p className="text-white/40 font-bold text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">
                    Eksplorasi
                  </p>
                  <div className="space-y-4">
                    {value.subMenus.map((menu, i) => (
                      <a
                        key={i}
                        href={menu.href}
                        className="flex items-center justify-between text-white hover:text-amber-300 transition-all group/link"
                      >
                        <span className={`text-base font-medium ${menu.name === "Hall of Fame" ? "italic" : ""}`}>
                          {menu.name}
                        </span>
                        <ChevronRight className="size-4 transform -translate-x-2 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JIPRESIASI (SPOTLIGHT) */}
      <JipresiasiSection />
    </div>
  );
}

function JipresiasiSection() {
  const winners = [
    {
      name: "Null",
      achievement: "Null",
      desc: "Null",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000", 
    },
    {
      name: "Null",
      achievement: "Null",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    },
    {
      name: "Null",
      achievement: "Null",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    }
  ];

  return (
    // SEKARANG SUDAH ADA ID "JIPRESIASI" SUPAYA NAVBAR BISA MENGARAH KE SINI
    <section id="jipresiasi" className="py-24 bg-white border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Spotlight • Januari 2024</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight italic">
              JIPRESIASI
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Apresiasi untuk Mahasiswa Jurusan Ilmu Perpustakaan yang telah mengukir karya dan prestasi.
            </p>
          </div>
          <a href="#jipresiasi" className="group flex items-center gap-2 text-primary font-bold hover:text-secondary transition-all">
            Lihat Semua Prestasi 
            <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[650px]">
          {/* Main Winner Card */}
          <div className="md:col-span-8 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-2xl border border-slate-100">
            <img src={winners[0].image} alt={winners[0].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            <div className="absolute bottom-0 p-8 md:p-12 text-white">
              <div className="bg-amber-400 text-primary font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-md w-fit mb-6">Winner of the Month</div>
              <Trophy className="size-14 text-amber-400 mb-6 drop-shadow-glow" />
              <h3 className="text-3xl md:text-5xl font-bold mb-4">{winners[0].name}</h3>
              <p className="text-amber-300 font-semibold mb-4 text-xl">{winners[0].achievement}</p>
              <p className="text-white/70 max-w-lg hidden md:block text-lg leading-relaxed">{winners[0].desc}</p>
            </div>
          </div>
          {/* Small Cards */}
          {winners.slice(1).map((winner, idx) => (
            <div key={idx} className="md:col-span-4 md:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-xl bg-slate-900">
              <img src={winner.image} alt={winner.name} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {idx === 0 ? <Medal className="size-8 text-amber-400 mb-3" /> : <Star className="size-8 text-amber-400 mb-3" />}
                <h4 className="text-white font-bold text-xl mb-1">{winner.name}</h4>
                <p className="text-white/70 text-sm font-medium">{winner.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}