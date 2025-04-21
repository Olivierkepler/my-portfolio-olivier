'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  ChevronDown,
//   FolderKanban,
//   Brain,
//   Smartphone,
//   Clock,
//   Star,
  Menu,
  X,
} from 'lucide-react';
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
    <div className="relative z-50 w-full border-b border-gray-200 dark:border-gray-800  dark:bg-black px-4 sm:px-6 md:px-10 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Left: Mobile title and menu button */}
      <div className="flex justify-between items-center sm:hidden w-full">
        <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
            <SearchBar />
        </div>
        <button
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center gap-1 px-4  border rounded-md text-sm bg-gray-100 dark:bg-gray-800"
          title="Open menu"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* Desktop Dropdown Menus */}
      <div className="hidden sm:flex flex-wrap gap-4 items-center">
        {menus.map((menu) => (
          <div key={menu.title} className="relative">
            <button
              title={menu.tooltip ?? `Open ${menu.title}`}
              onClick={() => setOpenMenu(openMenu === menu.title ? null : menu.title)}
              className={clsx(
                'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md',
                'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100'
              )}
            >
              {menu.title}
              <ChevronDown className="w-4 h-4" />
            </button>

            {openMenu === menu.title && (
              <ul className="absolute left-0 mt-6 w-[22rem] sm:w-[26rem] grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl animate-fade-in z-40">
                {['left', 'right'].map((col, i) => (
                  <div key={col} className="flex flex-col">
                    {menu.items
                      .slice(
                        i * Math.ceil(menu.items.length / 2),
                        (i + 1) * Math.ceil(menu.items.length / 2)
                      )
                      .map((item) => (
                        <li key={item.href}>
                          <button
                            onClick={() => handleLinkClick(item.href)}
                            title={item.tooltip ?? item.label}
                            className={clsx(
                              'flex w-full items-center gap-2 px-6 py-6 text-sm text-left transition',
                              'hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500',
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

      {/* Search Bar Desktop */}
      <div className="hidden sm:block flex-1 max-w-md sm:ml-auto">
        <SearchBar />
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={clsx(
          'fixed top-0 left-0 h-full w-[90%] max-w-sm bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-xl z-50 transition-transform duration-300',
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
          <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100">Menu</h2>
          <button onClick={() => setDrawerOpen(false)} title="Close">
            <X size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-60px)]">
          <SearchBar />
          {menus.map((menu) => (
            <div key={menu.title}>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">{menu.title}</p>
              <div className="grid grid-cols-2 gap-x-4 border-t border-gray-200 dark:border-gray-700 pt-2">
                {menu.items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    title={item.tooltip ?? item.label}
                    className={clsx(
                      'flex items-center gap-2 px-2 py-2 text-left text-sm w-full transition rounded-md',
                      'hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500',
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
    </div>
  );
}
