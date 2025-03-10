import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ ThemeContext';
import { ChevronDown } from 'lucide-react';

const themes = [
  { label: 'Light Theme', value: 'light-theme' },
  { label: 'Dark Theme', value: 'dark-theme' },
  { label: 'Colorful Theme', value: 'colorful-theme' },
];

const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const handleSelectTheme = (theme: string) => {
    toggleTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative w-50 mx-auto mt-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center px-3 py-1 rounded-lg shadow-md 
                   bg-gradient-to-r from-indigo-500 to-purple-500 text-white 
                   text-sm font-medium tracking-wide transition-all duration-300 
                   hover:shadow-lg w-40"
      >
        Select Theme
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-2 bg-white shadow-xl rounded-xl overflow-hidden"
          >
            {themes.map((theme) => (
              <motion.li
                key={theme.value}
                whileHover={{ backgroundColor: '#f3f4f6', scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-3 cursor-pointer text-gray-700 font-medium 
                           transition-all duration-200 hover:bg-gray-100"
                onClick={() => handleSelectTheme(theme.value)}
              >
                {theme.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeDropdown;
