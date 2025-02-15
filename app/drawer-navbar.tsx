'use client'
import React, { useState } from 'react';
import { Menu, X, Home, Info, Zap } from 'lucide-react';

const DrawerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, href: '/' },
    { name: 'About', icon: <Info className="w-5 h-5" />, href: '/about' },
    { name: 'Energy Contract', icon: <Zap className="w-5 h-5" />, href: '/energy' },
  ];

  return (
    <div className="relative bg-black">
      {/* Top Navigation Bar */}
      <nav className="bg-black shadow-lg fixed w-full top-0 z-[60] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo or Brand */}
            <div className="flex-shrink-0 font-bold text-xl text-white">
              
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Drawer Navigation Items */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DrawerNavbar;