import { Search } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1637068302763-a8284115e920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzdHVkZW50c3xlbnwxfHx8fDE3Njk4MzcxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Library Books"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="max-w-3xl">
          <div className="inline-block bg-secondary px-4 py-2 rounded-lg mb-6 shadow-lg">
            <p className="text-secondary-foreground font-bold text-sm uppercase tracking-wider">
              Selamat Datang di Portal Resmi
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Himpunan Mahasiswa Program Studi Ilmu Perpustakaan
          </h1>
          
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Ekosistem Digital Berbasis Sistem Informasi Terpadu sebagai Pusat Kendali Tata Kelola Informasi Akademik yang Sistematis di Lingkup Program Studi
          </p>

          {/* SEARCH BAR */}
          <div className="relative max-w-2xl group animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="size-6 text-white/50 group-focus-within:text-secondary transition-colors" />
            </div>
            
            <input
              type="text"
              placeholder="Apa yang ingin kamu cari?"
              className="block w-full pl-14 pr-32 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white text-lg placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white/20 focus:border-transparent transition-all shadow-2xl"
            />
            
            <button 
              type="submit"
              className="absolute inset-y-2.5 right-2.5 px-8 bg-secondary text-secondary-foreground rounded-xl font-bold hover:bg-white hover:text-primary transition-all active:scale-95 shadow-lg"
            >
              Cari
            </button>
          </div>

          {/* Quick Links / Tags */}
<div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
  <span>Populer:</span>
  
  {/* Mengarah ke halaman Visi Misi yang sudah kamu buat */}
  <a 
    href="/visi-misi" 
    className="hover:text-secondary underline decoration-secondary/30 transition-colors"
  >
    Visi, Misi & Budaya Organisasi
  </a>

  {/* Mengarah ke section kegiatan di halaman utama */}
  <a 
    href="#kegiatan" 
    className="hover:text-secondary underline decoration-secondary/30 transition-colors"
  >
    Agenda Februari
  </a>

  {/* Mengarah ke section kontak di halaman utama */}
  <a 
    href="#kontak" 
    className="hover:text-secondary underline decoration-secondary/30 transition-colors"
  >
    Layanan Aspirasi
  </a>
</div>
        </div>
      </div>
    </section>
  );
}