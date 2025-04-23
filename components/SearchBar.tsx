'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon, X, Loader2 } from 'lucide-react';

// Mock Data - Replace this with your API or dynamic data source
const MOCK_RESULTS = [
  'React.js Portfolio',
  'Next.js Blog App',
  'Machine Learning Project',
  'Node.js API Backend',
  'Python Data Analysis',
  'C++ Algorithm Practice',
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        setIsLoading(false);
      }, 800); // Simulate loading delay
    }
  };

  const clearQuery = () => {
    setQuery('');
    setFilteredSuggestions([]);
  };

  useEffect(() => {
    if (query.trim()) {
      const results = MOCK_RESULTS.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(results);
    } else {
      setFilteredSuggestions([]);
    }
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search through site content"
        className="relative"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, tech, or keywords..."
          className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:placeholder-gray-500 transition"
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={clearQuery}
            aria-label="Clear search"
            className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 transition"
          >
            <X size={18} />
          </button>
        )}

        {/* Search Button with Loading Spin Animation */}
        <button
          type="submit"
          aria-label="Submit search"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <SearchIcon size={18} className={`${isLoading ? 'animate-spin' : ''}`} />
          )}
        </button>
      </form>

      {/* Live Suggestions Dropdown */}
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setQuery(suggestion);
                  setFilteredSuggestions([]);
                  router.push(`/search?q=${encodeURIComponent(suggestion)}`);
                }}
                className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
              >
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
