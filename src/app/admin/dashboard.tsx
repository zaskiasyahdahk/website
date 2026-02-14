import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, FileText, Image as ImageIcon, Users, Settings, LogOut, Menu, X, Bell,Search,Plus} from "lucide-react";
import { motion } from "motion/react";

export function DashboardPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { title: "Total Berita", value: "24", icon: FileText, color: "text-blue-400", bg: "bg-blue-400/10" },
    { title: "Galeri Foto", value: "156", icon: ImageIcon, color: "text-purple-400", bg: "bg-purple-400/10" },
    { title: "Anggota Tim", value: "58", icon: Users, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 
        ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              HMPS Admin
            </h2>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
              <X className="size-6" />
            </button>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <NavItem icon={LayoutDashboard} label="Dashboard" active />
            <NavItem icon={FileText} label="Berita & Artikel" />
            <NavItem icon={ImageIcon} label="Galeri Kegiatan" />
            <NavItem icon={Users} label="Manajemen Anggota" />
            <div className="pt-6 pb-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4">Pengaturan</p>
            </div>
            <NavItem icon={Settings} label="Konfigurasi Website" />
          </nav>

          <div className="p-4 border-t border-white/10">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-white/5 
              rounded-xl transition-all group">
              <LogOut className="size-5" />
              <span className="font-medium group-hover:translate-x-1 transition-transform">Keluar</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="lg:hidden text-slate-600">
              <Menu className="size-6" />
            </button>
            <div className="hidden md:flex items-center gap-2 text-slate-400 bg-slate-100 px-4 py-2 rounded-lg w-64">
              <Search className="size-4" />
              <input type="text" placeholder="Cari data..." className="bg-transparent border-none focus:outline-none 
                text-sm w-full text-slate-700" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-slate-500 hover:text-blue-600 transition-colors">
              <Bell className="size-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-700">MINJIP</p>
                <p className="text-xs text-slate-500">Super Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                <img src="https://ui-avatars.com/api/?name=Admin+HMPS&background=0D8ABC&color=fff" alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Selamat datang kembali di panel kontrol HMPS.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 
                rounded-lg font-medium transition-all shadow-lg shadow-blue-600/20">
                <Plus className="size-4" />
                Buat Konten Baru
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                    <stat.icon className="size-7" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">Aktivitas Terbaru</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Lihat Semua</button>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-6 text-center py-12">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LayoutDashboard className="size-8 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Belum ada aktivitas tercatat</p>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto mt-2">
                      Sistem ini memerlukan koneksi database Supabase untuk menampilkan data real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
        active 
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
          : "text-slate-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <Icon className={`size-5 ${active ? "text-white" : "group-hover:text-blue-400 transition-colors"}`} />
      <span className="font-medium">{label}</span>
    </a>
  );
}