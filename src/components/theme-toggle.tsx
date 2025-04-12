'use client';

import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from './ui/button';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    let newTheme;
    switch (theme) {
      case 'system':
        newTheme = systemTheme === 'dark' ? 'light' : 'dark';
        break;
      default:
        newTheme = theme === 'dark' ? 'light' : 'dark';
    }
    setTheme(newTheme);
  };

  return (
    <Button
      className="flex justify-between hover:cursor-pointer"
      onClick={toggleTheme}
    >
      {theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? (
        <Sun />
      ) : (
        <MoonStar />
      )}
    </Button>
  );
}
