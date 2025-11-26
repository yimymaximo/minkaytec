import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';

const testimonials = [
    {
        name: "Carlos Rodríguez",
        role: "CEO, TechStart",
        content: "El equipo de MinkayTec transformó completamente nuestra presencia digital. Su atención al detalle y profesionalismo son inigualables."
    },
    {
        name: "Ana García",
        role: "Directora de Marketing",
        content: "Necesitábamos una aplicación compleja en tiempo récord y superaron nuestras expectativas. Altamente recomendados."
    },
    {
        name: "Miguel Ángel",
        role: "Fundador, DataCorp",
        content: "La aplicación de escritorio que desarrollaron ha optimizado nuestros procesos internos en un 200%. Una inversión excelente."
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            <NetworkBackground />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Lo que dicen nuestros clientes
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 relative"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/30 w-12 h-12" />
                            <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10 italic">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                                <span className="text-sm text-blue-600 dark:text-blue-400">{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
