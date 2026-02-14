import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./visi-misi/home";
import { VisiMisiPage } from "./visi-misi/visi-misi";
import { SejarahPage } from "./sejarah/sejarah";
import { FilosofiLogoPage } from "./filosofi-logo/filosofi-logo";
import { JejakArsipPage } from "./jejak-arsip/jejak-arsip";
import { FilosofiLogoKabinetPage } from "./filosofi-logo-kabinet/filosofi-logo-kabinet";
import { StrukturTimPage } from "./struktur-tim/struktur-tim";
import { ProgramKerjaPage } from "./program-kerja/program-kerja";
import { BintangKabinetPage } from "./bintang-kabinet/bintang-kabinet";
import { DirektoriDokumenPage } from "./direktori-dokumen/direktori-dokumen";
import { LoginPage } from "./admin/login";
import { DashboardPage } from "./admin/dashboard";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Tunggu sebentar biar halamannya selesai loading
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Delay 100ms
    } else {
      // Kalau pindah halaman tanpa #, otomatis ke paling atas
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}
export default function App() {
  return (
    <BrowserRouter>
        <ScrollToHash />

      <div className="size-full">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/visi-misi" element={<VisiMisiPage />} />
          <Route path="/sejarah" element={<SejarahPage />} />
          <Route path="/filosofi-logo" element={<FilosofiLogoPage />} />
          <Route path="/jejak-arsip" element={<JejakArsipPage />} />
          <Route path="/filosofi-logo-kabinet" element={<FilosofiLogoKabinetPage />} />
          <Route path="/struktur-tim" element={<StrukturTimPage />} />
          <Route path="/program-kerja" element={<ProgramKerjaPage />} />
          <Route path="/bintang-kabinet" element={<BintangKabinetPage />} />
          <Route path="/direktori-dokumen" element={<DirektoriDokumenPage />} />
          
          {/* Admin Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />

          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}