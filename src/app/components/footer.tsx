import { ChevronRight, ShieldCheck, ExternalLink } from "lucide-react";

const logoImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCS7NwNcxMkooAJkAm3df_6GSsCu5wmStvQ&s";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Efek Cahaya Dekoratif di Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* KOLOM 1: BRANDING */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8 group cursor-default">
              <div className="bg-white p-2 rounded-2xl transition-transform duration-300 group-hover:scale-105">
                <img src={logoImage} alt="Logo HMPS" className="h-12 w-auto object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase leading-tight">
                  HMPS Ilmu Perpustakaan
                </h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                  UIN Syarif Hidayatullah Jakarta
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
              Ekosistem Digital Berbasis Sistem Informasi Terpadu sebagai Pusat Kendali Tata Kelola Informasi Akademik yang Sistematis di Lingkup Program Studi
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-500 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="size-4 text-secondary" />
              Situs Resmi Organisasi
            </div>
          </div>

          {/* KOLOM 2: EKSPLORASI (Disamakan dengan Header) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-secondary"></span>
              EKSPLORASI
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Beranda", href: "/#beranda" },
                { name: "Profil", href: "/#tentang" },
                { name: "Spotlight", href: "/#jipresiasi" }, 
                { name: "Warta Terkini", href: "/#kegiatan" }, 
                { name: "Kontak Kami", href: "/#kontak" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-secondary transition-all duration-300"
                  >
                    <ChevronRight className="size-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: DIREKTORI KAMPUS */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-secondary"></span>
              DIREKTORI KAMPUS
            </h4>
            <div className="grid grid-cols-1 gap-4">
             <a 
                href="https://uinjkt.ac.id/id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition-all group flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-bold group-hover:text-secondary transition-colors text-white">Kampus Utama UIN Syarif Hidayatullah Jakarta</p>
                  <p className="text-xs text-slate-500 italic font-light">Website resmi UIN Syarif Hidayatullah Jakarta</p>
                </div>
                <ExternalLink className="size-4 text-slate-600 group-hover:text-secondary transition-colors" />
              </a>
              <a 
                href="https://fah.uinjkt.ac.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition-all group flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-bold group-hover:text-secondary transition-colors text-white">Fakultas Adab & Humaniora</p>
                  <p className="text-xs text-slate-500 italic font-light">Website Resmi FAH UIN Syarif Hidayatullah Jakarta</p>
                </div>
                <ExternalLink className="size-4 text-slate-600 group-hover:text-secondary transition-colors" />
              </a>
              <a 
                href="https://perpus.uinjkt.ac.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition-all group flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-bold group-hover:text-secondary transition-colors text-white">Perpustakaan Pusat</p>
                  <p className="text-xs text-slate-500 italic font-light">Portal Pusat Perpustakaan UIN Syarif Hidayatullah Jakarta</p>
                </div>
                <ExternalLink className="size-4 text-slate-600 group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[11px] md:text-[13px] font-medium tracking-wide uppercase text-center md:text-left">
            © {currentYear} <span className="text-slate-300">HMPS Ilmu Perpustakaan UIN Syarif Hidayatullah Jakarta</span>
          </p>
          
          <div className="text-[10px] md:text-[12px] text-slate-400 tracking-[0.1em] uppercase font-medium flex items-center gap-4">
            <span>Developed by <span className="text-white font-bold">Unit Tech-Write Dept. KOMINFO</span></span>
            <a href="/login" className="opacity-20 hover:opacity-100 transition-opacity" title="Admin Login">
              <ShieldCheck className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}