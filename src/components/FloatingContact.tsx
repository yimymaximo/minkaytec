import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const contacts = [
        { number: '922869982', label: 'Soporte', type: 'whatsapp' },
        { number: '988801842', label: 'Ventas', type: 'whatsapp' },
    ];

    const handleWhatsApp = (number: string) => {
        window.open(`https://wa.me/51${number}`, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-200 dark:border-slate-800 mb-2 min-w-[200px]"
                    >
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                            Contáctanos
                        </h3>
                        <div className="flex flex-col gap-3">
                            {contacts.map((contact, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleWhatsApp(contact.number)}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group w-full text-left"
                                >
                                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                                        <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            {contact.label}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            {contact.number}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${isOpen
                        ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white'
                        : 'bg-blue-600 border-blue-500 text-white hover:shadow-blue-500/50'
                    }`}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <div className="relative">
                        <MessageCircle className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                        </span>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingContact;
