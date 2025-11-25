import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme') ?? 'dark';
    setTheme(stored);
    if (stored === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (theme === null) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200/50 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:bg-gray-300/50 dark:hover:bg-white/20 transition-all cursor-pointer"
      aria-label="Cambiar tema"
    >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
