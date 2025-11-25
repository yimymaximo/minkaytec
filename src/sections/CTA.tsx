import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-multiply dark:mix-blend-overlay opacity-90" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        ¿Listo para iniciar tu próximo proyecto?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Contáctanos hoy mismo y recibe una cotización personalizada para tu idea.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:contacto@minkaytec.com"
                            className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Contáctanos
                        </a>
                        <a
                            href="#"
                            className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            Agendar Llamada
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
