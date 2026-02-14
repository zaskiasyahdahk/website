"use client";

import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { 
  Target, Rocket, Heart, Shield, Lightbulb, Users, BookOpen, 
  Sparkles, Gem, ArrowLeft, Building2 
} from "lucide-react";

export function VisiMisiPage() {
  const misiList = [
    {
      text: "Menciptakan ekosistem inovasi sebagai daya dorong bagi Mahasiswa Program Studi Ilmu Perpustakaan untuk bereksplorasi dan mencetak prestasi di tingkat regional maupun nasional.",
      icon: Lightbulb,
      tag: "Inovasi & Prestasi"
    },
    {
      text: "Menguatkan sinergi strategis yang kolaboratif antara pihak internal (mahasiswa & dosen) serta pihak eksternal (alumni & instansi) guna memperluas jejaring organisasi.",
      icon: Sparkles,
      tag: "Sinergi"
    },
    {
      text: "Menumbuhkan rasa kepemilikan terhadap HMPS IPI UIN Syarif Hidayatullah Jakarta dengan melibatkan peran aktif seluruh elemen mahasiswa, sehingga tercipta organisasi yang peka, inklusif, dan responsif terhadap dinamika lingkungan.",
      icon: Heart, 
      tag: "Partisipasi Aktif"
    },
    {
      text: "Memasifkan manajemen media sosial dan kanal digital sebagai pusat persebaran informasi yang aktual, edukatif, dan optimal bagi sivitas akademika Ilmu Perpustakaan.",
      icon: Rocket, 
      tag: "Komunikasi Digital"
    },
    {
      text: "Membangun tata kelola HMPS IPI UIN Syarif Hidayatullah Jakarta berdasarkan asas profesionalitas kerja yang akuntabel dengan tetap menjunjung tinggi pendekatan kekeluargaan yang harmonis.",
      icon: Users, 
      tag: "Internal Organisasi"
    },
  ];

  const budayaOrganisasi = [
    { icon: Shield, name: "Integritas", desc: "Menjaga transparansi, etika, dan kejujuran dalam setiap gerak langkah organisasi." },
    { icon: Rocket, name: "Adaptif", desc: "Tanggap dan inovatif dalam merespons perkembangan teknologi informasi terkini." },
    { icon: Users, name: "Kolaborasi", desc: "Membangun sinergi aktif antar anggota dan mitra eksternal secara harmonis." },
    { icon: Gem, name: "Profesionalitas", desc: "Menjalankan tanggung jawab dengan standar tinggi melalui pendekatan kekeluargaan." },
    { icon: Heart, name: "Inklusif", desc: "Menciptakan ruang bertumbuh yang terbuka dan setara bagi seluruh mahasiswa." },
    { icon: BookOpen, name: "Literat", desc: "Menjadikan budaya haus ilmu dan literasi sebagai identitas utama himpunan." },
  ];

  return (
    <div id="halaman-visi-misi" className="size-full">
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">VISI, MISI & BUDAYA ORGANISASI</h1>
          <p className="text-lg text-blue-100/80 italic">"Menghimpun Warisan Sejarah Demi Mewujudkan Eksistensi Organisasi Berkelanjutan"</p>
        </div>
      </section>

      <main className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Bagian VISI */}
          <section className="py-16 lg:py-24">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary to-[#1E3A8A] p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-2xl border border-secondary/30">
                    <Target className="size-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-secondary tracking-wide">VISI</h2>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
                  <p className="text-2xl md:text-3xl font-medium leading-relaxed italic text-white">
                    "Mewujudkan HMPS Ilmu Perpustakaan sebagai <span className="text-secondary">organisasi mahasiswa yang mewadahi hard skill dan soft skill</span> dengan kepekaan sehingga menjadi <span className="text-secondary">ruang bertumbuh bagi mahasiswa</span> dan mampu menjawab kebutuhan generasi saat ini dan masa depan."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bagian MISI */}
          <section className="py-16 lg:py-24 bg-white rounded-3xl shadow-lg -mt-8 relative z-10">
            <div className="px-6 sm:px-12 lg:px-16 text-center">
                <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full mb-12">
                  <Rocket className="size-6 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">MISI STRATEGIS</h2>
                </div>
                <div className="max-w-4xl mx-auto space-y-6 text-left">
                  {misiList.map((misi, i) => (
                    <div key={i} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-primary/30 transition-all duration-300">
                      <span className="size-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                      <p className="text-slate-700 text-lg">{misi.text}</p>
                    </div>
                  ))}
                </div>
            </div>
          </section>

          {/* BUDAYA */}
          <section className="py-16 lg:py-24">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">BUDAYA ORGANISASI</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {budayaOrganisasi.map((value, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:-translate-y-2 transition-all text-center">
                  <value.icon className="text-primary size-8 mb-4 mx-auto" />
                  <h3 className="font-bold text-primary text-xl mb-2">{value.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
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
          href="/sejarah" 
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          JEJAK SEJARAH
        </a>
      </div>

      {/* Info Halaman - Tengah */}
      <div className="order-3 sm:order-2">
          <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
            Halaman <span className="text-primary font-bold">2</span> dari 4
          </p>
      </div>

      {/* Tombol Next - Pinggir Kanan */}
      <div className="flex flex-col items-end gap-2 w-full sm:w-auto order-1 sm:order-3">
        <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold mr-1">Selanjutnya</p>
        <a 
          href="/filosofi-logo" 
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center"
        >
          FILOSOFI LOGO
          <ArrowLeft className="size-4 rotate-180 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </div>
  </div>
</section>

        </div>
      </main>

      <Contact />
      
      <Footer />
    </div>
  );
}