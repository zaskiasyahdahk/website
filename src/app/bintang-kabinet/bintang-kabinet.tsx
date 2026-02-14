"use client";

import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Trophy, Star, Medal, Users, ArrowLeft, Sparkles, Award, Search, Building2 } from "lucide-react";
import { useState } from "react";

export function BintangKabinetPage() {
  const [filter, setFilter] = useState("Semua");

  const monthlyStars = [
    {
      name: "Siti Aminah",
      role: "Staf Kominfo",
      month: "JANUARI",
      dept: "Kominfo",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&h=500",
      achievement: "Desain Terkreatif",
      story: "Menciptakan identitas visual kabinet yang ikonik dalam waktu singkat.",
      badge: "The Creative Engine"
    },
    {
      name: "Budi Santoso",
      role: "Staf Litbang",
      month: "FEBRUARI",
      dept: "Litbang",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=500",
      achievement: "Inovator Riset",
      story: "Memelopori sistem pendataan digital mahasiswa yang terintegrasi.",
      badge: "The Problem Solver",
    },
    {
      name: "Larasati Putri",
      role: "Staf Ekotif",
      month: "MARET",
      dept: "Ekotif",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=400&h=500",
      achievement: "Fundraising Terbaik",
      story: "Mengamankan 10+ partner strategis untuk program unggulan.",
      badge: "The Rainmaker",
    }
  ];

  const filteredStars = filter === "Semua" 
    ? monthlyStars 
    : monthlyStars.filter(s => s.dept === filter);

  return (
    <div id="halaman-bintang-kabinet" className="size-full bg-white">
      <Header />

      {/* Tombol Kembali Melayang */}
      <div className="fixed top-28 left-4 sm:left-8 z-[60]">
        <a href="/program-kerja" className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-lg hover:scale-105 transition-all group">
          <ArrowLeft className="size-4 text-[#A44A3F] group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold text-[#A44A3F]">Program Kerja</span>
        </a>
      </div>
      
      {/* Hero Section (The Altar of Excellence) */}
      <section className="relative bg-gradient-to-br from-[#A44A3F] via-[#7D2D24] to-black pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-[#D4AF37]/30">
            <Trophy className="size-4 text-[#D4AF37]" />
            <p className="font-semibold tracking-wider uppercase text-sm text-[#D4AF37]">Hall of Fame</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
            GARDA PRESTASI
          </h1>
          <p className="text-lg sm:text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed italic">
            "Menghargai dedikasi, merayakan kontribusi. Inilah individu yang melampaui batas dalam membawa organisasi menuju kejayaan."
          </p>
        </div>
      </section>

      <main>
        {/* 1. Spotlight: Staff of the Year */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative bg-gradient-to-br from-[#FDF5E6] to-white rounded-[2rem] shadow-2xl p-8 md:p-16 border-2 border-[#D4AF37]/20 overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10">
                <Medal className="size-64 text-[#D4AF37]" />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="relative group">
                  <div className="size-64 rounded-2xl border-4 border-[#D4AF37] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&h=500" alt="Staff of the Year" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-white p-3 rounded-xl shadow-lg">
                    <Sparkles className="size-6" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-[#A44A3F] text-white px-4 py-1 rounded-md text-xs font-bold uppercase tracking-widest mb-4">
                    Staff of the Year 2026
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-[#A44A3F] mb-2">Ahmad Sulaiman</h2>
                  <p className="text-[#D4AF37] font-semibold text-xl mb-6">Kepala Departemen PSDM</p>
                  <blockquote className="text-stone-600 italic text-lg border-l-4 border-[#D4AF37] pl-6 mb-8">
                    "Kepemimpinan bukan tentang posisi, tetapi tentang dampak yang kita berikan bagi mereka yang kita layani."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Monthly Achievers Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#A44A3F]/10 px-4 py-2 rounded-full mb-3">
                  <Star className="size-4 text-[#A44A3F]" />
                  <span className="text-[#A44A3F] font-bold text-xs uppercase">The Terracotta Gallery</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-800">Apresiasi Bulanan</h2>
              </div>

              {/* Filter */}
              <div className="flex flex-wrap gap-2">
                {["Semua", "PSDM", "Kominfo", "Ekotif", "Litbang"].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setFilter(dept)}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                      filter === dept 
                      ? "bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30" 
                      : "bg-white text-slate-500 border border-slate-200 hover:border-[#D4AF37]"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredStars.map((item, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                      alt={item.name} 
                    />
                    <div className="absolute top-4 right-4 bg-[#A44A3F] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                      {item.month}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#A44A3F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-xs italic">"{item.achievement}"</p>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif font-bold text-lg text-slate-800 group-hover:text-[#A44A3F] transition-colors">{item.name}</h3>
                    <p className="text-[#D4AF37] text-sm font-medium">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Stats & Bottom CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {[
                  { label: "Total Staf", val: "45+", icon: Users },
                  { label: "Penghargaan", val: "12", icon: Award },
                  { label: "Bulan Aktif", val: "8", icon: Star },
                  { label: "Departemen", val: "7", icon: Building2 }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <stat.icon className="size-8 text-[#D4AF37] mb-3" />
                    <span className="text-2xl font-bold text-[#A44A3F]">{stat.val}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Navigasi Halaman (Konsisten dengan Filosofi Logo) */}
        <section className="py-12 border-t border-slate-200 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-start gap-2 w-full sm:w-auto order-2 sm:order-1">
                <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold ml-1">Sebelumnya</p>
                <a href="/program-kerja" className="inline-flex items-center gap-3 bg-[#A44A3F] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#7D2D24] transition-all shadow-lg group w-full sm:w-auto justify-center">
                  <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                  PROGRAM KERJA UNGGULAN
                </a>
              </div>

              <div className="order-3 sm:order-2">
                  <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
                    Halaman <span className="text-[#A44A3F] font-bold">4</span> dari 4
                  </p>
              </div>

              <div className="flex flex-col items-end gap-2 w-full sm:w-auto order-1 sm:order-3">
                <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold mr-1">Selanjutnya</p>
                <a href="/" className="inline-flex items-center gap-3 bg-[#D4AF37] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#B8962E] transition-all shadow-lg group w-full sm:w-auto justify-center">
                  BERANDA UTAMA
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