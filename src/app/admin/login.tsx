import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    // Simulation of login - in real app this will use Supabase
    setTimeout(() => {
      if (data.username === "admin" && data.password === "admin123") {
        toast.success("Login berhasil!");
        navigate("/admin/dashboard");
      } else {
        toast.error("Username atau password salah (Coba: admin / admin123)");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative z-10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/30">
            <ShieldCheck className="size-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-slate-400 text-sm">Masuk untuk mengelola konten website HMPS</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Username</label>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
                <User className="size-5" />
              </div>
              <input
                {...register("username", { required: "Username wajib diisi" })}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                placeholder="Masukkan username"
              />
            </div>
            {errors.username && (
              <p className="text-red-400 text-xs ml-1">{String(errors.username.message)}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
                <Lock className="size-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password wajib diisi" })}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-10 pr-12 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                placeholder="Masukkan password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs ml-1">{String(errors.password.message)}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="animate-pulse">Memproses...</span>
            ) : (
              <>
                Masuk Dashboard
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} HMPS Ilmu Perpustakaan UIN Syarif Hidayatullah Jakarta
          </p>
        </div>
      </div>
    </div>
  );
}