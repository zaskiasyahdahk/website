"use client";
import { Mail, MapPin, Phone, Instagram, Facebook, X, Youtube, Linkedin, MessageCircle, Send, ArrowRight } from "lucide-react";
import { ThreadsIcon, TikTokIcon } from "../components/social-icons";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Gedung Lantai 1 Fakultas Adab dan Humaniora, UIN Syarif Hidayatullah Jakarta, Kec. Ciputat, Kota Tangerang Selatan, Banten",
      link: "https://maps.google.com/?q=Fakultas+Adab+dan+Humaniora+UIN+Jakarta",
      color: "hover:border-blue-400"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 821-1117-2524",
      link: "https://wa.me/6282111172524",
      color: "hover:border-blue-400"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hmjip.fah@uinjkt.ac.id",
      link: "mailto:hmjip.fah@uinjkt.ac.id",
      color: "hover:border-blue-400"
    },
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", link: "#", color: "hover:bg-blue-600", type: "lucide" },
    { icon: Instagram, name: "Instagram", link: "https://www.instagram.com/jipersuinjkt", color: "hover:bg-pink-600", type: "lucide" },
    { icon: Linkedin, name: "LinkedIn", link: "#", color: "hover:bg-blue-700", type: "lucide" },
    { icon: ThreadsIcon, customIcon: ThreadsIcon, name: "Threads", link: "#", color: "hover:bg-slate-700", type: "custom" },
    { icon: TikTokIcon, customIcon: TikTokIcon, name: "TikTok", link: "#", color: "hover:bg-black", type: "custom" },
    { icon: MessageCircle, name: "WA Channel", link: "https://whatsapp.com/channel/0029VbBz3YkFHWq5SPpfuT3J", color: "hover:bg-green-500", type: "lucide" },
    { icon: X, name: "X", link: "#", color: "hover:bg-slate-800", type: "lucide" },
    { icon: Youtube, name: "YouTube", link: "#", color: "hover:bg-red-600", type: "lucide" },
  ];

  return (
    <section id="kontak" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-6 shadow-lg shadow-primary/20">
              <Send className="size-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Connect With Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
              Mari Berdiskusi <br />& Berkolaborasi
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Punya pertanyaan seputar himpunan atau ingin menyampaikan aspirasi? Tim kami siap mendengar dan membantu Anda.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center p-4 bg-slate-50 rounded-2xl border-2 border-transparent transition-all duration-300 ${info.color} hover:bg-white hover:shadow-xl`}
                >
                  <div className="bg-white size-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300 group-hover:text-white group-hover:bg-primary">
                    <info.icon className="size-6 transition-colors" />
                  </div>
                  <div className="ml-5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{info.title}</p>
                    <p className="text-slate-900 font-semibold text-base leading-tight">
                      {info.content}
                    </p>
                  </div>
                  <ArrowRight className="size-5 ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5">
              <div className="absolute -top-10 -right-10 opacity-10">
                <Instagram className="size-64 -rotate-12" />
              </div>

              <h3 className="text-3xl font-bold mb-10 relative z-10">
                Ikuti Jejak Digital <br /><span className="text-secondary italic font-serif">HMPS IPI</span>
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 relative z-10">
                {socialMedia.map((social, index) => {
                  // PERBAIKAN DI SINI:
                  // Ambil komponen icon ke variabel dengan Huruf Kapital
                  const IconComponent = social.type === "lucide" ? social.icon : social.customIcon;

                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col items-center justify-center aspect-square rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ${social.color} hover:scale-105 hover:-translate-y-2`}
                      aria-label={social.name}
                    >
                      <div className="transition-transform duration-500 group-hover:rotate-[360deg]">
                        {IconComponent && (
                          <IconComponent 
                            className={`size-7 text-white ${social.type === "custom" ? "fill-current" : ""}`} 
                          />
                        )}
                      </div>
                      <span className="mt-3 text-[9px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity text-center">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}