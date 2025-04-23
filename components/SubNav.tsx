'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChevronDown, Menu, X } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

interface DropdownLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  tooltip?: string;
}

interface SubNavMenu {
  title: string;
  items: DropdownLink[];
  tooltip?: string;
}

interface SubNavProps {
  menus: SubNavMenu[];
}

export default function SubNav({ menus }: SubNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setDrawerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleLinkClick = (href: string) => {
    router.push(href);
    setOpenMenu(null);
    setDrawerOpen(false);
  };

  return (
    <nav className="absolute z-50 top-20 w-full px-20 sm:px-10 md:px-10 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Mobile Header */}
      <div className="flex justify-between items-center sm:hidden w-full">
        <SearchBar />
        <button
          onClick={() => setDrawerOpen((prev) => !prev)}
          title={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
        >
          {drawerOpen ? (
            <X size={20} className="text-gray-600 dark:text-gray-300 transition-all duration-200" />
          ) : (
            <Menu size={20} className="text-gray-600 dark:text-gray-300 transition-all duration-200" />
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex flex-wrap gap-4 items-center">
        {menus.map((menu) => (
          <div key={menu.title} className="relative group">
            <button
              title={menu.tooltip ?? `Open ${menu.title}`}
              onClick={() => setOpenMenu(openMenu === menu.title ? null : menu.title)}
              className={clsx(
                'flex items-center gap-1 px-4 py-2 font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition',
                'text-white hover:bg-green-500 dark:hover:bg-green-500'
              )}
              aria-expanded={openMenu === menu.title}
              aria-controls={`menu-${menu.title}`}
            >
              {menu.title}
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {openMenu === menu.title && (
              <ul
                id={`menu-${menu.title}`}
                className="absolute left-0 mt-6 w-[22rem] sm:w-[26rem] grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-xl animate-fade-in z-40 backdrop-blur-md"
              >
                {['left', 'right'].map((col, i) => (
                  <div key={col} className="flex flex-col py-2">
                    {menu.items
                      .slice(i * Math.ceil(menu.items.length / 2), (i + 1) * Math.ceil(menu.items.length / 2))
                      .map((item) => (
                        <li key={item.href}>
                          <button
                            onClick={() => handleLinkClick(item.href)}
                            title={item.tooltip ?? item.label}
                            className={clsx(
                              'flex w-full items-center gap-2 px-6 py-4 text-sm text-left rounded-md transition',
                              'hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500',
                              pathname === item.href
                                ? 'font-semibold text-green-600 dark:text-green-400'
                                : 'text-gray-700 dark:text-gray-300'
                            )}
                          >
                            {item.icon}
                            {item.label}
                          </button>
                        </li>
                      ))}
                  </div>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden sm:block flex-1 max-w-md sm:ml-auto">
        <SearchBar />
      </div>

      {/* Overlay for Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={clsx(
          'fixed top-0 left-0 h-full w-[90%] max-w-sm bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out',
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100">Navigation Menu</h2>
          <button
            onClick={() => setDrawerOpen((prev) => !prev)}
            title={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
          >
            {drawerOpen ? (
              <X size={20} className="text-gray-600 dark:text-gray-300 transition-all duration-200" />
            ) : (
              <Menu size={20} className="text-gray-600 dark:text-gray-300 transition-all duration-200" />
            )}
          </button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-60px)]">
          <SearchBar />
          {menus.map((menu) => (
            <div key={menu.title}>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">{menu.title}</p>
              <div className="grid grid-cols-2 gap-x-4 pt-2">
                {menu.items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    title={item.tooltip ?? item.label}
                    className={clsx(
                      'flex items-center gap-2 px-2 py-2 text-left text-sm w-full rounded-md transition',
                      'hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500',
                      pathname === item.href
                        ? 'font-semibold text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
