import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLanguage } from '../context/LanguageContext';
import minecraftBg from '../assets/minecraft-bg.png';

const Signup = () => {
    const { language, setLanguage, t } = useLanguage();

    const signupSchema = z.object({
        name: z.string(),
        email: z.string().email({ message: t('signup.error.email') }),
        password: z.string().min(6, { message: t('signup.error.password') }),
    });

    type SignupFormValues = z.infer<typeof signupSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data: SignupFormValues) => {
        // Simular signup
        console.log('Signup data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(language === 'ES' ? '¡Signup simulado con éxito!' : 'Simulated signup successful!');
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
                    className="bg-[rgba(15,10,28,0.7)] backdrop-blur-md border border-endor-border w-12 h-12 rounded-full text-endor-text hover:text-white hover:border-endor-primary transition-all duration-300 flex items-center justify-center no-underline"
                    title={t('signup.noServer')}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </Link>
            </div>

            {/* Top Right Actions */}
            <div className="absolute top-8 right-8 z-20 flex items-center gap-4">
                {/* Discord Link */}
                <a
                    href="https://discord.gg/rAUQENzfUU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgba(15,10,28,0.7)] backdrop-blur-md border border-endor-primary p-2.5 rounded-full text-endor-primary hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
                    title="Discord"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.666 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419c0-1.333.956-2.419 2.156-2.419c1.21 0 2.176 1.086 2.156 2.419c0 1.334-.946 2.419-2.156 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419c0-1.333.955-2.419 2.156-2.419c1.21 0 2.176 1.086 2.156 2.419c0 1.334-.946 2.419-2.156 2.419z" />
                    </svg>
                </a>

                {/* Language Switcher */}
                <div
                    className="bg-[rgba(15,10,28,0.7)] backdrop-blur-md border border-endor-primary px-4 py-2 rounded-full text-endor-primary font-bold text-sm hover:border-white hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2"
                    onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                >
                    {language === 'ES' ? (
                        <>
                            <span className="text-lg">🇪🇸</span>
                            <span className="uppercase">ES</span>
                        </>
                    ) : (
                        <>
                            <span className="text-lg">🇺🇸</span>
                            <span className="uppercase">EN</span>
                        </>
                    )}
                </div>
            </div>

            {/* signup Card */}
            <div className="relative z-10 w-full max-w-[450px] mx-4">
                <div className="bg-[rgba(15,10,28,0.55)] backdrop-blur-xl border border-endor-border-hl/30 rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-2 tracking-tight text-white">{t('signup.title')}</h1>
                        <p className="text-endor-muted font-medium">{t('signup.subtitle')}</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-endor-muted ml-1">{t('signup.userLabel')}</label>
                            <input
                                {...register('name')}
                                type="text"
                                placeholder="Nombre de usuario"
                                className={`w-full bg-endor-darker/50 border ${errors.name ? 'border-red-500/50' : 'border-endor-border'} rounded-xl px-5 py-3 text-white placeholder:text-endor-muted/50 focus:outline-none focus:border-endor-primary transition-colors`}
                            />
                            {errors.name && (
                                <p className="text-red-400 text-xs mt-1 ml-1 font-medium animate-fade-in">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-endor-muted ml-1">{t('signup.emailLabel')}</label>
                            <input
                                {...register('email')}
                                type="text"
                                placeholder="usuario@ejemplo.com"
                                className={`w-full bg-endor-darker/50 border ${errors.email ? 'border-red-500/50' : 'border-endor-border'} rounded-xl px-5 py-3 text-white placeholder:text-endor-muted/50 focus:outline-none focus:border-endor-primary transition-colors`}
                            />
                            {errors.email && (
                                <p className="text-red-400 text-xs mt-1 ml-1 font-medium animate-fade-in">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-endor-muted ml-1">{t('signup.passLabel')}</label>
                            <input
                                {...register('password')}
                                type="password"
                                placeholder="........"
                                className={`w-full bg-endor-darker/50 border ${errors.password ? 'border-red-500/50' : 'border-endor-border'} rounded-xl px-5 py-3 text-white placeholder:text-endor-muted/50 focus:outline-none focus:border-endor-primary transition-colors`}
                            />
                            {errors.password && (
                                <p className="text-red-400 text-xs mt-1 ml-1 font-medium animate-fade-in">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="w-full btn btn-primary py-3 rounded-xl text-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? '...' : t('signup.btn')}
                        </button>

                        <div className="mt-2 pt-2 border-t border-endor-border-hl/30 text-center">
                            <p className="text-endor-muted text-sm font-medium mb-3">
                                {t('signup.alreadyAccount')}
                            </p>
                            <Link
                                to="/login"
                                className="inline-flex items-center justify-center w-full px-2 py-3 border border-endor-primary text-endor-primary rounded-xl font-bold hover:bg-endor-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(var(--color-endor-primary),0.1)] hover:shadow-[0_0_20px_rgba(var(--color-endor-primary),0.3)] no-underline"
                            >
                                {t('signup.loginLink')}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
