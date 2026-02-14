import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const logoImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCS7NwNcxMkooAJkAm3df_6GSsCu5wmStvQ&s";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Beranda", href: "/#beranda" },
    { name: "Profil", href: "/#tentang" },
    { name: "Spotlight", href: "/#jipresiasi" }, 
    { name: "Warta Terkini", href: "/#kegiatan" }, 
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-lg py-3" 
          : "bg-white/95 py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* BRANDING */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-100 transition-transform duration-300 group-hover:scale-105">
              <img 
                src={logoImage} 
                alt="Logo HMPS" 
                className="h-10 w-auto md:h-12 mix-blend-multiply" 
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-primary font-black text-sm md:text-base leading-tight tracking-tight uppercase">
                HMPS Ilmu Perpustakaan
              </h1>
              <p className="text-[10px] md:text-xs font-medium text-slate-500 tracking-wider">
                UIN Syarif Hidayatullah Jakarta
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </a>
            ))}
            
            {/* Kontak diarahkan ke tombol khusus Connect */}
            <a 
              href="#kontak" 
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-md hover:shadow-primary/20 active:scale-95 flex items-center gap-2"
            >
              Connect
              <ArrowRight className="size-3" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2.5 bg-slate-50 rounded-xl text-primary transition-all active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION MENU */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-2xl transition-all group"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
            {/* Link Tambahan Mobile untuk Kontak */}
            <a
              href="#kontak"
              className="flex items-center justify-between p-4 text-base font-bold text-primary bg-primary/5 rounded-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hubungi Kami
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}