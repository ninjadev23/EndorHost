import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import minecraftBg from '../assets/minecraft-bg.png';

const loginSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un email válido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Simular login
    console.log('Login data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('¡Login simulado con éxito!');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-endor-darker">
      {/* Background with Minecraft Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${minecraftBg})` }}
      ></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-[1]"></div>

      {/* Top Left Button */}
      <div className="absolute top-8 left-8 z-20">
        <Link
          to="/"
          className="bg-[rgba(15,10,28,0.7)] backdrop-blur-md border border-endor-border px-6 py-2.5 rounded-full text-endor-text font-semibold text-sm hover:border-endor-primary transition-all duration-300 no-underline inline-block"
        >
          Don't have a server? Get it now
        </Link>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[450px] mx-4">
        <div className="bg-[rgba(15,10,28,0.55)] backdrop-blur-xl border border-endor-border-hl/30 rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2 tracking-tight text-white">EndorHost</h1>
            <p className="text-endor-muted font-medium">Access your control panel</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-endor-muted ml-1">Username or email address</label>
              <input
                {...register('email')}
                type="text"
                placeholder="usuario@ejemplo.com"
                className={`w-full bg-endor-darker/50 border ${errors.email ? 'border-red-500/50' : 'border-endor-border'} rounded-xl px-5 py-4 text-white placeholder:text-endor-muted/50 focus:outline-none focus:border-endor-primary transition-colors`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 ml-1 font-medium animate-fade-in">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-endor-muted ml-1">Password</label>
              <input
                {...register('password')}
                type="password"
                placeholder="........"
                className={`w-full bg-endor-darker/50 border ${errors.password ? 'border-red-500/50' : 'border-endor-border'} rounded-xl px-5 py-4 text-white placeholder:text-endor-muted/50 focus:outline-none focus:border-endor-primary transition-colors`}
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1 ml-1 font-medium animate-fade-in">{errors.password.message}</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="w-full btn btn-primary py-4 rounded-xl text-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Cargando...' : 'Login'}
            </button>

            <div className="text-center mt-6">
              <a href="#" className="text-endor-muted hover:text-endor-primary transition-colors text-sm font-medium no-underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
