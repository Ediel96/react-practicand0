"use client";

import { Sun, Moon } from 'lucide-react'; // Importa los iconos que necesitas
import useTheme from '../../hooks/ChangeTheme'; // Importa el hook useTheme

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between p-4">
      <h1 className="text-xl">My App</h1>
      <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded flex items-center">
        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </button>
    </header>
  );
}