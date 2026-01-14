'use client';

import { motion } from 'framer-motion';
import { Factory, Leaf, ShieldCheck } from 'lucide-react';

const benefits = [
    {
        icon: <Leaf className="w-12 h-12 text-emerald-500" />,
        title: "Ekologik Toza",
        description: "Bizning mahsulotlarimiz tabiatga zarar yetkazmagan holda yetishtirilgan toza paxtadan tayyorlanadi."
    },
    {
        icon: <ShieldCheck className="w-12 h-12 text-sky-500" />,
        title: "Yuqori Sifat",
        description: "Zamonaviy laboratoriya tekshiruvlari va sifat nazorati har bir bosqichda amalga oshiriladi."
    },
    {
        icon: <Factory className="w-12 h-12 text-indigo-500" />,
        title: "Zamonaviy Texnologiya",
        description: "Ishlab chiqarish jarayonida eng so'nggi rusumdagi dastgohlar va texnologiyalardan foydalanamiz."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-slate-50/80 dark:bg-black/80 backdrop-blur-sm relative z-10 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4"
                    >
                        Nega Aynan SpunLeks?
                    </motion.h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Biz mijozlarimizga eng yaxshi sifat va xizmatni taklif etamiz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                            }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-sky-100 dark:hover:border-sky-900 transition-colors text-center cursor-pointer"
                        >
                            <div className="flex justify-center mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
