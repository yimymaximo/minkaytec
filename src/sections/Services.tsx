import { motion } from 'framer-motion';
import { Globe, Monitor, Cpu, Layout, Database, Shield } from 'lucide-react';

const services = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Desarrollo Web a Medida",
        description: "Creación de sitios web únicos, rápidos y optimizados para SEO utilizando las últimas tecnologías."
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Sistemas Web Corporativos",
        description: "Plataformas de gestión, ERPs y CRMs personalizados para optimizar los procesos de tu empresa."
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Software de Escritorio",
        description: "Aplicaciones nativas para Windows desarrolladas en Python, potentes y eficientes."
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: "Diseño UI/UX",
        description: "Interfaces intuitivas y atractivas que mejoran la experiencia de tus usuarios."
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Integración de APIs",
        description: "Conectamos tus sistemas con servicios de terceros para automatizar flujos de trabajo."
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Ciberseguridad Básica",
        description: "Implementación de buenas prácticas para proteger tus aplicaciones y datos."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 dark:bg-[#0f0f0f] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu negocio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />

                            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
