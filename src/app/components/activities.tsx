import { Calendar, Users, BookOpen, GraduationCap, ArrowRight, Tag, Bell } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Activities() {
  const activities = [
    {
      title: "Null",
      date: "Null",
      category: "Null",
      status: "Berlangsung",
      description:
        "Null",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000",
      icon: Users,
    },
    {
      title: "Null",
      date: "Null",
      category: "Null",
      status: "Terbaru",
      description:
        "Null",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000",
      icon: GraduationCap,
    },
    {
      title: "Null",
      date: "Null",
      category: "Null",
      status: "Segera Hadir",
      description:
        "Null",
      image: "https://images.unsplash.com/photo-1592278423578-4b83c89859ac?q=80&w=1000",
      icon: BookOpen,
    },
  ];

  return (
    <section id="kegiatan" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi - Dibuat lebih interaktif dengan icon lonceng */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Bell className="size-4 animate-bounce" />
              <span className="text-xs font-bold uppercase tracking-widest">JIP NEWS • Info Terkini</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Kabar Terbaru Himpunan
            </h2>
            <p className="text-lg text-muted-foreground">
              Ikuti terus perkembangan program kerja, liputan institusi, dan peluang kolaborasi di lingkungan Ilmu Perpustakaan.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
            Lihat Semua Berita
            <ArrowRight className="size-4" />
          </button>
        </div>

        {/* Grid Kartu Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category & Status Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                    {activity.category}
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold shadow-sm text-white ${
                    activity.status === "Berlangsung" ? "bg-green-500" : 
                    activity.status === "Terbaru" ? "bg-blue-500" : "bg-amber-500"
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary/60 mb-4 font-medium text-sm">
                  <Calendar className="size-4" />
                  {activity.date}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                  {activity.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                  {activity.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <activity.icon className="size-5" />
                    Detail Info
                  </div>
                  <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <ArrowRight className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Only Button */}
        <button className="w-full mt-10 md:hidden flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-2xl font-bold">
          Lihat Semua Berita
          <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
}