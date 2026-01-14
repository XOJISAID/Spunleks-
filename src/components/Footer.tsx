'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Facebook size={20} />, href: "#" },
        { icon: <Instagram size={20} />, href: "#" },
        { icon: <Linkedin size={20} />, href: "#" },
        { icon: <Twitter size={20} />, href: "#" },
    ];

    return (
        <footer id="contact" className="bg-slate-900 dark:bg-slate-950 text-white pt-20 pb-10 relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-white">Spun</span><span className="text-sky-500">Leks</span>
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                            Biz yuqori sifatli toza paxta va to&apos;qimachilik mahsulotlarini ishlab chiqarish orqali sanoatning ishonchli hamkoriga aylandik.
                            Innovatsiya va sifat — bizning ustuvor maqsadimiz.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-xl font-bold mb-6 text-sky-100">Bog&apos;lanish uchun</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="bg-slate-800 dark:bg-slate-900 p-3 rounded-lg group-hover:bg-sky-600 transition-colors">
                                    <MapPin className="text-sky-500 group-hover:text-white transition-colors" size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Manzilimiz</p>
                                    <span className="text-slate-200 font-medium">O&apos;zbekiston, Toshkent viloyati, Yangiyo&apos;l tumani, Sanoat zonasi 1-mavze</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="bg-slate-800 dark:bg-slate-900 p-3 rounded-lg group-hover:bg-sky-600 transition-colors">
                                    <Phone className="text-sky-500 group-hover:text-white transition-colors" size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Telefon</p>
                                    <a href="tel:+998901234567" className="text-slate-200 font-medium hover:text-sky-400 transition-colors">+998 90 123 45 67</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="bg-slate-800 dark:bg-slate-900 p-3 rounded-lg group-hover:bg-sky-600 transition-colors">
                                    <Mail className="text-sky-500 group-hover:text-white transition-colors" size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Elektron pochta</p>
                                    <a href="mailto:info@spunleks.uz" className="text-slate-200 font-medium hover:text-sky-400 transition-colors">info@spunleks.uz</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-slate-800 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} SpunLeks. Barcha huquqlar himoyalangan.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-sky-500 transition-colors">Maxfiylik siyosati</a>
                        <a href="#" className="hover:text-sky-500 transition-colors">Foydalanish shartlari</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
