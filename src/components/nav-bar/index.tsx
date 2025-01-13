import { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

export function Navbar() {
  const getPreferredTheme = () => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getPreferredTheme());

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="bg-light-surface dark:bg-dark-surface ">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        <h1 className="text-sm font-bold text-light-primary dark:text-dark-secondary">
          <a href="#home">@giovanaraphaelli</a>
        </h1>
        <div className="flex gap-5">
          <ul className="flex gap-5 items-center font-bold text-light-secondary dark:text-dark-primary">
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full bg-light-accent dark:bg-dark-accent text-light-secondary dark:text-dark-primary transition"
          >
            {theme === 'light' ? (
              <IoMoon className="h-6 w-6" />
            ) : (
              <IoSunny className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
