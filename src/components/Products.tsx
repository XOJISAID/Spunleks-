'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const products = [
    {
        id: 1,
        title: "Oliy Navli Paxta",
        category: "Xom-ashyo",
        description: "Eng yuqori standartlarga javob beruvchi, toza va oq paxta tolalari. Bizning paxtamiz uzun tolali va mustahkamligi bilan ajralib turadi.",
        image: "https://images.unsplash.com/photo-1596501043836-e0b04e6c0f6f?auto=format&fit=crop&q=80&w=800",
        colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
        id: 2,
        title: "Sifatli Matolar",
        category: "Tekstil",
        description: "100% paxtadan tayyorlangan, nafas oluvchi va ekologik toza matolar. Turli xil rang va fakturalarda ishlab chiqariladi.",
        image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800", // fabric texture
        colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
        id: 3,
        title: "Ip Kalava",
        category: "Yarim tayyor mahsulot",
        description: "Zamonaviy yigiruv dastgohlarida tayyorlangan pishiq va tekis iplar. To'quvchilik sanoati uchun ideal tanlov.",
        image: "https://images.unsplash.com/photo-1627916607164-7b697633e660?auto=format&fit=crop&q=80&w=800", // yarn/thread
        colSpan: "md:col-span-2 lg:col-span-2"
    }
];

const Products = () => {
    return (
        <section id="products" className="py-24 relative z-10 bg-slate-50 dark:bg-black/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sky-600 dark:text-sky-400 font-bold uppercase tracking-widest text-sm"
                    >
                        Asosiy Yo&apos;nalishlar
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mt-2 mb-4"
                    >
                        Bizning <span className="text-sky-600 dark:text-sky-400 italic">Mahsulotlar</span>
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Tabiiy paxtadan tayyorlangan mahsulotlar dunyosini kashf eting. Har bir tolasida sifat va mehr mujassam.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${product.colSpan}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-90" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="bg-sky-500/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                            {product.category}
                                        </span>
                                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                                            <ArrowUpRight className="text-white w-5 h-5" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold text-white mb-2">{product.title}</h3>
                                    <p className="text-slate-200 line-clamp-2 mix-blend-plus-lighter opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
