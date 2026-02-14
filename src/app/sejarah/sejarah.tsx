import React from 'react';
import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { 
  Calendar, Milestone, Users, Award, Sparkles, BookOpen, 
  Building2, Clock, Crown, Star, ArrowLeft, ArrowRight, 
  Archive 
} from "lucide-react";

export function SejarahPage() {
  const timelineData = [
    { year: "1999", title: "BERDIRINYA PROGRAM STUDI ILMU PERPUSTAKAAN", description: "Null", icon: Sparkles, color: "from-blue-600 to-blue-800" },
    { year: "2000", title: "Null", description: "Null", icon: BookOpen, color: "from-blue-500 to-cyan-600" },
    { year: "2000", title: "Null", description: "Null", icon: Star, color: "from-slate-900 to-black" },
    { year: "2000", title: "Null", description: "Null", icon: Users, color: "from-blue-700 to-indigo-800" },
    { year: "2000", title: "Null", description: "Null", icon: Award, color: "from-blue-400 to-blue-600" },
    { year: "2026", title: "Transformasi Digital JIPSITE", description: "Pengembangan platform digital untuk layanan informasi akademik dan sistem manajemen himpunan", icon: Archive, color: "from-slate-700 to-slate-900" },
  ];

  const ketuaHimpunan = [
    { periode: "2015", nama: "Egi Almaroghi & Laga Al Ahli" },
    { periode: "2017-2018", nama: "Mochammad Fachrul Rizaldy & Mery Wahyuningtyas Dwi Putri" },
    { periode: "2018-2019", nama: "Sofia Amalia Rinanda & Willy Dwi Agustian" },
    { periode: "2019-2020", nama: "Ivan Akhmad Fauzi & Revianto Pancasila Putra" },
    { periode: "2020-2021", nama: "Rizal Taufiqqurahman & Basit Al Hafiz" },
    { periode: "2021-2023", nama: "Baniwindra Nugraha Purnomo & Muhammad Hanif Kurnaedi", kabinet: "Kabinet Sinergi dalam Harmoni" },
    { periode: "2023-2024", nama: "Muhammad Diky Natapura & Muhammad Sultan Fajar Ramadhan" },
    { periode: "2024-2026", nama: "Kohandika & Muhamad Gilang Ramadhan" },
    { periode: "2026-2027", nama: "Ahmad Yasik Hayes & Fathan Rangga Ifari", kabinet: "Kabinet Samasta" },
  ];

  return (
    <div id="halaman-sejarah" className="w-full">
      <Header />

      {/* Tombol Kembali ke Beranda */}
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            JEJAK SEJARAH
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed italic">
            "Menghimpun Warisan Sejarah Demi Mewujudkan Eksistensi Organisasi Berkelanjutan"
          </p>
        </div>
      </section>

      <main className="bg-white">
        
        {/* Filosofi Pembentukan */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-bl-full"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <BookOpen className="size-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">FILOSOFI PEMBENTUKAN</h2>
              </div>
              
              <div className="prose prose-lg max-w-none relative z-10">
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed italic mb-6 border-l-4 border-primary pl-6">
                  "Lahir dari kesadaran akan pentingnya ruang tumbuh yang adaptif, HMPS Ilmu Perpustakaan hadir bukan sekadar sebagai struktur organisasi, melainkan sebagai pusat pergerakan mahasiswa yang solutif dalam menjawab tantangan transformasi pendidikan dan lingkungan keilmuan."
                </p>
                
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                  HMPS Ilmu Perpustakaan UIN Syarif Hidayatullah Jakarta dibangun di atas fondasi yang menyelaraskan antara kebutuhan mahasiswa dan kebutuhan organisasi. Kami berkomitmen untuk meninggalkan program kerja yang monoton dengan menghadirkan inovasi yang memberikan dampak nyata, sekaligus memperkuat kapasitas manajerial dan teknis para pengurusnya.
                </p>
                
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Dengan semangat profesionalisme dan evaluasi yang terukur, HMPS Ilmu Perpustakaan UIN Syarif Hidayatullah Jakarta bertransformasi menjadi ruang terdepan dalam menyediakan wadah pertumbuhan bagi mahasiswa. Kami hadir untuk membangun ekosistem akademik yang progresif, menggerakkan literasi, dan memberikan kontribusi terbaik bagi Program Studi Ilmu Perpustakaan serta masyarakat luas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Interaktif */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-4">
                <Clock className="size-5 text-primary" />
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Timeline</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">GARIS WAKTU PERJALANAN</h2>
              <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
                Momen-momen penting yang membentuk HMPS Ilmu Perpustakaan
              </p>
            </div>

            <div className="relative">
              {/* Timeline - Garis Waktu Perjalanan */}
              <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-blue-400 to-black transform sm:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                      index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:text-left sm:pl-12'} ml-20 sm:ml-0`}>
                      <div className="group bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-100 shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'}`}>
                          <div className={`bg-gradient-to-br ${item.color} p-2 rounded-lg`}>
                            <item.icon className="size-5 text-white" />
                          </div>
                          <span className="text-2xl font-bold text-slate-900">{item.year}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hall of Fame - Galeri Presidium */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-slate-900 px-6 py-3 rounded-full mb-4">
                <Crown className="size-5 text-white" />
                <span className="text-white font-semibold tracking-wider uppercase text-sm">Hall of Fame</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">GALERI PRESIDIUM</h2>
              <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
                Para pemimpin yang telah membawa perubahan positif bagi HMPS Ilmu Perpustakaan
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ketuaHimpunan.map((ketua, index) => {
                // Memisahkan nama Ketua dan Wakil berdasarkan simbol "&"
                const [namaKetua, namaWakil] = ketua.nama.split(' & ');
                
                return (
                  <div 
                    key={index}
                    className="group bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-md hover:border-primary transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                        <Crown className="size-6" />
                      </div>
                      <span className="text-sm font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">
                        {ketua.periode}
                      </span>
                    </div>

                    {/* Tampilan Nama yang Dipisah */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">KETUA UMUM</p>
                        <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-primary transition-colors">
                          {namaKetua}
                        </h3>
                      </div>
                      
                      {namaWakil && (
                        <div className="pt-3 border-t border-slate-50">
                          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">WAKIL KETUA UMUM</p>
                          <h4 className="font-semibold text-slate-700 text-base leading-tight">
                            {namaWakil}
                          </h4>
                        </div>
                      )}
                    </div>

                    {ketua.kabinet && (
                      <div className="mt-4 pt-3 border-t border-dashed border-slate-200">
                        <p className="text-sm text-primary italic font-medium">
                          {ketua.kabinet}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Tombol Navigasi Sebelum Contact Section */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col items-end">
            <div className="flex flex-col items-end gap-3 text-right">
              <p className="text-slate-500 text-sm font-medium">
                SELANJUTNYA
              </p>
              <a 
                href="/visi-misi" 
                className="inline-flex items-center gap-3 bg-[#1E3A8A] text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-blue-900/10 group hover:scale-105"
              >
                VISI, MISI & BUDAYA ORGANISASI
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-slate-400 text-xs italic mt-1">
                Halaman 1 dari 4
              </p>
            </div>
          </div>
        </section>
      </main> 

      <Contact />
      <Footer />
    </div>
  );
}