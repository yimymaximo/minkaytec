import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Sistema de Gestión ERP",
        category: "Sistema Web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        description: "Plataforma integral para gestión de inventario, ventas y recursos humanos."
    },
    {
        title: "App de Análisis de Datos",
        category: "Python Desktop",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        description: "Aplicación de escritorio para visualización y procesamiento de grandes volúmenes de datos."
    },
    {
        title: "E-commerce Moderno",
        category: "Sitio Web",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2670&auto=format&fit=crop",
        description: "Tienda online con pasarela de pagos integrada y panel de administración."
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-slate-50 dark:bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Proyectos Destacados
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Una muestra de nuestro trabajo y la calidad que entregamos en cada proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <span className="text-blue-400 text-sm font-medium mb-2 block">{project.category}</span>
                                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                                        <div className="flex gap-3">
                                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors">
                                                <ExternalLink size={18} />
                                            </button>
                                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors">
                                                <Github size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
