import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Clock, Users } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Velocidad y Rendimiento",
        description: "Optimizamos cada línea de código para asegurar tiempos de carga ultrarrápidos."
    },
    {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: "Calidad Garantizada",
        description: "Pruebas rigurosas y estándares de código limpio para un software libre de errores."
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Entrega a Tiempo",
        description: "Respetamos los plazos acordados sin comprometer la calidad del producto final."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Soporte Dedicado",
        description: "Estamos contigo en cada paso, desde la planificación hasta el mantenimiento post-lanzamiento."
    }
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            ¿Por qué elegir <span className="text-blue-600">MinkayTec</span>?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Nos diferenciamos por nuestro enfoque en la excelencia técnica y la satisfacción del cliente. No solo escribimos código, construimos soluciones que aportan valor real a tu negocio.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20 blur-lg" />
                        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-2xl">
                            <div className="space-y-6">
                                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-3/4" />
                                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-full" />
                                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-5/6" />
                                <div className="h-32 bg-slate-100 dark:bg-slate-800 rounded w-full" />
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 bg-blue-500 rounded-full" />
                                    <div className="space-y-2 flex-1">
                                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-full" />
                                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-2/3" />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative code snippet look */}
                            <div className="mt-8 p-4 bg-slate-950 rounded-lg overflow-hidden font-mono text-xs text-slate-400">
                                <p><span className="text-purple-400">class</span> <span className="text-yellow-400">Solution</span>:</p>
                                <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">optimize</span>(self):</p>
                                <p className="pl-8">return <span className="text-green-400">"Success"</span></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
