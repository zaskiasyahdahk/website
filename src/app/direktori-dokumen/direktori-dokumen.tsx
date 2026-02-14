"use client";

import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { 
  Search, FileText, Lock, Shield, Download, 
  Scale, Award, ArrowLeft, ClipboardList, 
  Eye, Folder, Layers, Bookmark, Zap, 
  Clock, Share2, FileCheck
} from "lucide-react";
import { useState } from "react";

export function DirektoriDokumenPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Semua");

  const categories = ["Semua", "Konstitusi", "SOP", "Administrasi", "Laporan"];

  const currentDocs = [
    { 
      title: "AD/ART Kabinet 2026", 
      cat: "Konstitusi", 
      size: "2.1 MB", 
      updated: "2 Jam yang lalu",
      isNew: true,
      desc: "Landasan hukum tertinggi operasional kabinet periode ini."
    },
    { 
      title: "SOP Peminjaman Inventaris", 
      cat: "SOP", 
      size: "1.2 MB", 
      updated: "1 Hari yang lalu",
      isNew: false,
      desc: "Prosedur resmi penggunaan fasilitas dan alat organisasi."
    },
    { 
      title: "Template Proposal Kegiatan", 
      cat: "Administrasi", 
      size: "0.8 MB", 
      updated: "3 Hari yang lalu",
      isNew: false,
      desc: "Format baku penulisan proposal untuk seluruh departemen."
    },
    { 
      title: "Laporan Bulanan Januari", 
      cat: "Laporan", 
      size: "4.5 MB", 
      updated: "5 Hari yang lalu",
      isNew: false,
      desc: "Kumpulan capaian kinerja seluruh divisi bulan Januari."
    },
    { 
      title: "SOP Publikasi Media Sosial", 
      cat: "SOP", 
      size: "1.5 MB", 
      updated: "1 Minggu yang lalu",
      isNew: false,
      desc: "Alur kerja desain dan approval konten kreatif."
    },
  ];

  const filteredDocs = currentDocs.filter(doc => 
    (activeTab === "Semua" || doc.cat === activeTab) &&
    (doc.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="size-full bg-[#FFFDFB] font-serif text-[#3D1A16]">
      <Header />

      {/* Hero: The Executive Desk */}
      <section className="relative bg-[#3D1A16] pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full mb-8">
            <Zap className="size-4 text-[#D4AF37]" />
            <p className="font-sans font-bold tracking-widest uppercase text-[10px] text-white">Live Directory 2026</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            PUSAT <span className="text-[#D4AF37]">DOKUMEN</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed italic">
            "Akses cepat menuju seluruh instrumen kerja kabinet. Efisiensi dimulai dari keterbukaan informasi."
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-6xl -mt-16 relative z-30 pb-24">
        
        {/* Interactive Dashboard Control */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 p-6 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
            {/* Search */}
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-stone-400" />
              <input 
                type="text" 
                placeholder="Cari dokumen kerja..."
                className="w-full pl-14 pr-6 py-4 bg-stone-50 rounded-2xl border-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all font-sans text-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Tab Filters */}
            <div className="flex gap-2 p-1.5 bg-stone-50 rounded-2xl overflow-x-auto w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-sans font-bold whitespace-nowrap transition-all ${
                    activeTab === cat 
                    ? "bg-[#A44A3F] text-white shadow-md" 
                    : "text-stone-400 hover:text-[#A44A3F]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Document Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDocs.map((doc, index) => (
              <div key={index} className="group relative bg-white border border-stone-100 p-6 rounded-[2rem] hover:border-[#D4AF37] hover:shadow-xl transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="size-16 bg-[#FDF5E6] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#3D1A16] transition-colors duration-500">
                    <FileText className="size-8 text-[#A44A3F] group-hover:text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg text-[#3D1A16]">{doc.title}</h3>
                      {doc.isNew && <span className="bg-[#D4AF37] text-white text-[8px] px-2 py-0.5 rounded-full font-sans font-black">NEW</span>}
                    </div>
                    <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4">{doc.desc}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 border-t border-stone-50 pt-4">
                      <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold text-stone-400 uppercase tracking-tighter">
                        <Layers className="size-3" /> {doc.cat}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold text-stone-400 uppercase tracking-tighter">
                        <Clock className="size-3" /> {doc.updated}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-sans font-bold text-stone-400 uppercase tracking-tighter">
                        <FileCheck className="size-3" /> {doc.size}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Actions */}
                <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="size-10 bg-white shadow-lg rounded-xl flex items-center justify-center text-stone-400 hover:text-[#D4AF37] transition-colors">
                    <Eye className="size-4" />
                  </button>
                  <button className="size-10 bg-[#A44A3F] shadow-lg rounded-xl flex items-center justify-center text-white hover:bg-[#3D1A16] transition-colors">
                    <Download className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredDocs.length === 0 && (
            <div className="py-20 text-center">
              <Folder className="size-16 text-stone-100 mx-auto mb-4" />
              <p className="font-sans text-stone-400 italic">Dokumen tidak ditemukan...</p>
            </div>
          )}
        </div>

        {/* Quick Links Section: Essential Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#A44A3F] to-[#3D1A16] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
            <Share2 className="absolute -bottom-6 -right-6 size-32 opacity-10 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-2">Request Dokumen</h4>
            <p className="text-stone-300 text-sm font-sans mb-6">Butuh template baru atau surat tugas khusus?</p>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl font-sans font-bold text-sm transition-all uppercase tracking-widest">Hubungi Sekum</button>
          </div>
          
          <div className="md:col-span-2 bg-white border border-stone-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 bg-[#FDF5E6] rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-lg">
              <Shield className="size-10 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-[#3D1A16]">Integritas Data Terjamin</h4>
              <p className="text-stone-500 text-sm font-sans leading-relaxed">
                Seluruh dokumen di halaman ini telah melalui verifikasi Sekretaris Jenderal. 
                Pastikan Anda menggunakan versi terbaru untuk keperluan administrasi kabinet.
              </p>
            </div>
          </div>
        </div>

        {/* Page Nav */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-stone-100 pt-16">
          <a href="/bintang-kabinet" className="group flex items-center gap-4">
            <div className="size-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#A44A3F] group-hover:border-[#A44A3F] transition-all">
              <ArrowLeft className="size-5 text-stone-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-[10px] font-sans font-black text-stone-300 uppercase tracking-[0.2em]">Sebelumnya</p>
              <p className="font-bold text-[#3D1A16]">Bintang Kabinet</p>
            </div>
          </a>

          <div className="text-center">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4].map(i => (
                <div key={i} className={`h-1 rounded-full transition-all ${i === 4 ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-stone-200'}`}></div>
              ))}
            </div>
            <p className="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest">Dokumen Final</p>
          </div>

          <a href="/" className="group flex items-center gap-4 text-right">
            <div>
              <p className="text-[10px] font-sans font-black text-stone-300 uppercase tracking-[0.2em]">Selesai</p>
              <p className="font-bold text-[#3D1A16]">Beranda Utama</p>
            </div>
            <div className="size-12 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-all shadow-lg shadow-[#D4AF37]/20">
              <ArrowLeft className="size-5 text-white rotate-180" />
            </div>
          </a>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}