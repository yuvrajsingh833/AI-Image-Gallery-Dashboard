import React from 'react';
import { Search, Moon, Sun, Sparkles } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { ModelFilter } from './ModelFilter';

interface HeaderProps {
  darkMode: boolean;
  searchValue: string;
  modelValue: string | null;
  onSearchChange: (value: string) => void;
  onModelChange: (value: string | null) => void;
  onDarkModeToggle: () => void;
}

export function Header({
  darkMode,
  searchValue,
  modelValue,
  onSearchChange,
  onModelChange,
  onDarkModeToggle
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Image Gallery Dashboard</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Discover AI-generated art</p>
            </div>
          </div>

          {/* Navigation and Controls */}
          <nav className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <SearchBar value={searchValue} onChange={onSearchChange} />
              <ModelFilter value={modelValue} onChange={onModelChange} />
            </div>
            <button
              onClick={onDarkModeToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-800 dark:text-white" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
              )}
            </button>
          </nav>
        </div>
        
        {/* Mobile Search and Filter */}
        <div className="md:hidden flex flex-col space-y-4 py-4">
          <SearchBar value={searchValue} onChange={onSearchChange} />
          <ModelFilter value={modelValue} onChange={onModelChange} />
        </div>
      </div>
    </header>
  );
}