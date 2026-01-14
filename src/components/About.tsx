'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm relative z-10 overflow-hidden transition-colors duration-300">

            {/* Decorative background element */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100 dark:bg-sky-900/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-sky-200 dark:border-sky-800 rounded-2xl z-0" />
                        <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl z-10">
                            {/* Placeholder image for factory/production */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605218427360-3a618e38f6d7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white z-20">
                                <p className="font-bold text-xl">Sifat darajasi</p>
                                <p className="text-sm opacity-80">Jahon standartlariga mos</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-sky-600 dark:text-sky-400 font-bold uppercase tracking-widest mb-2 text-sm">Biz haqimizda</h4>
                        <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
                            Zamonaviy <span className="text-sky-600 dark:text-sky-400">Ishlab Chiqarish</span> Kompleksi
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                            SpunLeks fabrikasi eng so'nggi texnologiyalar bilan jihozlangan bo'lib, paxtani qayta ishlashning to'liq siklini amalga oshiradi.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            Bizning sexlarimizda sanitariya-gigiyena normalariga to'liq rioya qilingan holda, yuqori sifatli toza paxta mahsulotlari tayyorlanadi.
                            Xodimlarning malakasi va zamonaviy uskunalar uyg'unligi mahsulotlarimizning jahon standartlariga javob berishini ta'minlaydi.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Yillik ishlab chiqarish quvvati: 5000 tonna',
                                'Xalqaro ISO 9001 va Oeko-Tex sertifikatlari',
                                '100% tabiiy va ekologik toza xom-ashyo'
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-4 p-4 bg-sky-50/50 dark:bg-slate-800/50 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors border border-sky-100 dark:border-slate-700"
                                >
                                    <div className="bg-sky-100 dark:bg-sky-900/50 p-2 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}; export default About;
