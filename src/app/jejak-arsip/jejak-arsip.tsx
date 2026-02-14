import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Search, FolderOpen, Archive, FileText, Shield, Download, Calendar, Users, BookOpen, Scale, Award, Clock, Building2, ArrowLeft, ClipboardList, Camera } from "lucide-react";
import { useState } from "react";

export function JejakArsipPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 500);
  };

  const standardCategories = [
    { name: "AD/ART", link: "/path-to-pdf/ad-art.pdf" },
    { name: "Surat Keputusan (SK)", link: "/path-to-pdf/sk.pdf" },
    { name: "Visi & Misi", link: "/path-to-pdf/visi-misi.pdf" },
    { name: "Program Kerja", link: "/path-to-pdf/proker.pdf" },
    { name: "Tata Tertib", link: "/path-to-pdf/tata-tertib.pdf" },
    { name: "Dokumentasi Program", link: "/path-to-pdf/dokumentasi.pdf" }
  ];
  const kabinetArchives = [
    { periode: "null", nama: "PERIODE 2019-2020", ketua: "Null", documents: 0, categories: [
      { name: "AD/ART", link: "#" },
      { name: "SK Pengurus", link: "#" },
      { name: "Visi Misi", link: "#" },
      { name: "Tata Tertib", link: "#" },
      { name: "Program Kerja", link: "#" },
      { name: "Dokumentasi Program", link: "#" }
    ]},
    {
      periode: "null", nama: "PERIODE 2020-2021", ketua: "Null", documents: 0, categories: [
        { name: "AD/ART", link: "#" },
        { name: "SK Pengurus", link: "#" },
        { name: "Visi Misi", link: "#" },
        { name: "Tata Tertib", link: "#" },
        { name: "Program Kerja", link: "#" },
        { name: "Dokumentasi Program", link: "#" }
      ]
    },
    {
      periode: "null", nama: "PERIODE 2021-2022", ketua: "Null", documents: 0, categories: [
        { name: "AD/ART", link: "#" },
        { name: "SK Pengurus", link: "#" },
        { name: "Visi Misi", link: "#" },
        { name: "Tata Tertib", link: "#" },
        { name: "Program Kerja", link: "#" },
        { name: "Dokumentasi Program", link: "#" }
      ]
    },
    {
      periode: "null", nama: "PERIODE 2022-2023", ketua: "Null", documents: 0, categories: [
        { name: "AD/ART", link: "#" },
        { name: "SK Pengurus", link: "#" },
        { name: "Visi Misi", link: "#" },
        { name: "Tata Tertib", link: "#" },
        { name: "Program Kerja", link: "#" },
        { name: "Dokumentasi Program", link: "#" }
      ]
    },
    {
      periode: "null", nama: "PERIODE 2023-2024", ketua: "Null", documents: 0, categories: [
        { name: "AD/ART", link: "#" },
        { name: "SK Pengurus", link: "#" },
        { name: "Visi Misi", link: "#" },
        { name: "Tata Tertib", link: "#" },
        { name: "Program Kerja", link: "#" },
        { name: "Dokumentasi Program", link: "#" }
      ]
    },
    {
      periode: "null", nama: "PERIODE 2024-2025", ketua: "Null", documents: 0, categories: [
        { name: "AD/ART", link: "#" },
        { name: "SK Pengurus", link: "#" },
        { name: "Visi Misi", link: "#" },
        { name: "Tata Tertib", link: "#" },
        { name: "Program Kerja", link: "#" },
        { name: "Dokumentasi Program", link: "#" }
      ]
    },
  ];

  const quickAccess = [
    { title: "SK Pengurus", icon: Scale, description: "Null", count: "0 Dokumen", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50", link: "#" },
    { title: "Hasil Dokumentasi", icon: Camera, description: "Null", count: "24 Dokumen", color: "from-indigo-500 to-indigo-600", bgColor: "bg-indigo-50", link: "#" },
    { title: "Visi & Misi", icon: Award, description: "Target dan orientasi kepengurusan", count: "0 Dokumen", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50", link: "#" },
    { title: "Program Kerja", icon: ClipboardList, description: "Detail rencana dan laporan proker", count: "0 Dokumen", color: "from-indigo-500 to-indigo-600", bgColor: "bg-indigo-50", link: "#" },
  ];

  const filteredKabinet = kabinetArchives.filter(kabinet => 
    searchQuery === "" || 
    kabinet.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    kabinet.periode.includes(searchQuery) ||
    kabinet.ketua.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div id="halaman-jejak-arsip" className="size-full">
      <Header />

      {/* Tombol Kembali Melayang */}
      <div className="fixed top-28 left-4 sm:left-8 z-[60]">
        <a href="/" className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-lg hover:scale-105 transition-all group">
          <ArrowLeft className="size-4 text-primary group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold text-primary">Kembali</span>
        </a>
      </div>
      
      {/* Hero Section - Filosofi Logo Theme */}
      <section className="relative bg-gradient-to-br from-primary via-[#1E3A8A] to-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 size-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 size-72 bg-slate-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <Building2 className="size-4 text-blue-300" />
            <p className="font-semibold tracking-wider uppercase text-sm">Profil Organisasi</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            JEJAK ARSIP
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed italic">
            "Menghimpun Warisan Sejarah Demi Mewujudkan Eksistensi Organisasi Berkelanjutan"
          </p>
        </div>
      </section>

      <main className="bg-white">
        
        {/* Smart Search Bar */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className={`size-6 transition-colors ${isSearching ? 'text-primary animate-pulse' : 'text-slate-400'}`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Cari dokumen, tahun kabinet, atau nama proker..."
                className="w-full pl-16 pr-6 py-5 text-lg bg-white border-2 border-slate-200 rounded-2xl shadow-lg focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-6 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <span className="text-sm font-medium">Clear</span>
                </button>
              )}
            </div>
            
            {isSearching && (
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 text-primary">
                  <Clock className="size-4 animate-spin" />
                  <span className="text-sm font-medium">Mencari...</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Kategori Arsip Unggulan - SEBARIS (4 Kotak) */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2 rounded-full mb-4">
                <BookOpen className="size-4 text-slate-600" />
                <span className="text-slate-700 font-semibold text-sm uppercase">Quick Access</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-3">ARSIP UNGGULAN</h2>
            </div>

            {/* Grid diubah menjadi grid-cols-4 untuk layar besar agar sebaris */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickAccess.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="group relative bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.color}`}></div>
                  <div className={`${category.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <category.icon className="size-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">{category.title}</h3>
                  <p className="text-slate-600 text-xs mb-4 leading-relaxed line-clamp-2">{category.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <span className="text-xs font-bold text-primary">{category.count}</span>
                    <Download className="size-4 text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Koleksi Arsip Kabinet Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E3A8A]">KOLEKSI ARSIP KABINET</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredKabinet.map((kabinet, index) => (
                <div key={index} className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-primary shadow-md transition-all overflow-hidden">
                  <div className="bg-slate-50 p-6 border-b-2 border-slate-200">
                    <h3 className="text-xl font-bold text-[#1E3A8A]">{kabinet.nama}</h3>
                    <p className="text-sm text-slate-500">{kabinet.periode}</p>
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Klik Item Untuk Download:</p>
                    {/* DAFTAR DOKUMEN INTERAKTIF */}
                    <div className="grid grid-cols-1 gap-y-1 mb-6">
                      {kabinet.categories.map((cat, i) => (
                        <a 
                          key={i} 
                          href={cat.link} // Link menuju file
                          download // Atribut agar otomatis terdownload
                          className="flex items-center gap-3 text-sm text-slate-600 p-2 rounded-lg hover:bg-primary/5 hover:text-primary transition-all group/item"
                        >
                          <div className="size-1.5 rounded-full bg-slate-300 group-hover/item:bg-primary transition-colors"></div>
                          <span className="font-medium flex-1">{cat.name}</span>
                          <Download className="size-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </a>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <FileText className="size-4" />
                        <span className="text-xs font-bold">{kabinet.documents} Files</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Footer */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <Archive className="size-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-700 mb-2">Arsip Terus Diperbarui</h3>
              <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                Semua dokumen dikelola dengan sistem version control untuk memastikan integritas dan kemudahan akses. 
                Untuk permintaan dokumen khusus, silakan hubungi tim sekretariat HMPS.
              </p>
            </div>
          </div>
        </section>

        {/* Navigasi Halaman (Back - Info - Next) */}
        <section className="py-12 border-t border-slate-200 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Tombol Back - Ke Visi Misi */}
              <div className="flex flex-col items-start gap-2 w-full sm:w-auto order-2 sm:order-1">
                <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold ml-1">Sebelumnya</p>
                <a 
                  href="/visi-misi" 
                  className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 group w-full sm:w-auto justify-center"
                >
                  <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                  VISI, MISI & BUDAYA
                </a>
              </div>

              {/* Info Halaman - Tengah */}
              <div className="order-3 sm:order-2">
                  <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
                    Halaman <span className="text-primary font-bold">4</span> dari 4
                  </p>
              </div>

              {/* Tombol Next - Bisa diarahkan ke Beranda atau Struktur Organisasi */}
              <div className="flex flex-col items-end gap-2 w-full sm:w-auto order-1 sm:order-3">
                <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold mr-1">Selesai</p>
                <a 
                  href="/" 
                  className="inline-flex items-center gap-3 bg-slate-800 text-white px-6 py-3 rounded-2xl font-bold hover:bg-black hover:scale-105 transition-all shadow-lg group w-full sm:w-auto justify-center"
                >
                  KEMBALI KE BERANDA
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