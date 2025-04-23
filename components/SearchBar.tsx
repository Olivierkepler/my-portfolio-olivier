'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon, X, Loader2 } from 'lucide-react';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        setIsLoading(false);
        setIsExpanded(false); // Close on submit (optional)
      }, 800);
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
    <div
      className={`relative w-full max-w-md transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-full' : 'w-12'} sm:w-full`}
    >
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search through site content"
        className={`relative flex items-center border border-gray-300 bg-white text-gray-800 shadow-md rounded-xl dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 transition-all focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500
          ${isExpanded ? 'pl-4 pr-12 py-3' : 'p-2'} sm:pl-4 sm:pr-12 sm:py-3`}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>

        {/* Lens Icon (Clickable for expanding on mobile) */}
        <button
          type="button"
          aria-label="Expand search"
          onClick={() => setIsExpanded(true)}
          className={`text-gray-600 dark:text-gray-300 ${isExpanded ? 'mr-2' : 'mx-auto sm:mr-2'}`}
        >
          <SearchIcon size={18} />
        </button>

        {/* Input field */}
        <input
          id="search"
          type="text"
          value={query}
          onFocus={() => setIsExpanded(true)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, tech, or keywords..."
          className={`${
            isExpanded ? 'block' : 'hidden'
          } sm:block w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 transition-all`}
        />

        {/* Clear Button */}
        {query && isExpanded && (
          <button
            type="button"
            onClick={clearQuery}
            aria-label="Clear search"
            className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 transition"
          >
            <X size={18} />
          </button>
        )}

        {/* Search Button */}
        {isExpanded && (
          <button
            type="submit"
            aria-label="Submit search"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <SearchIcon size={18} />
            )}
          </button>
        )}
      </form>

      {/* Live Suggestions Dropdown */}
      {filteredSuggestions.length > 0 && isExpanded && (
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
