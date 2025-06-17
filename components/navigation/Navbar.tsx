'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wallet, Coins, Trophy, TowerControl as GameController, BookOpen, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { ThemeToggle } from '../ui/theme-toggle';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setDropdownOpen(false);
    // Optionally, redirect to home or login
    window.dispatchEvent(new Event('authChange'));
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-around">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Coins className="h-6 w-6" />
          <Link href="/">CoinKids</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link 
              href="/" 
              className={`transition-colors hover:text-primary ${pathname === '/' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              Home
            </Link>
            <Link 
              href="/learn" 
              className={`transition-colors hover:text-primary ${pathname === '/learn' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>Learn</span>
              </div>
            </Link>
            <Link 
              href="/games" 
              className={`transition-colors hover:text-primary ${pathname === '/games' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              <div className="flex items-center gap-1">
                <GameController className="h-4 w-4" />
                <span>Games</span>
              </div>
            </Link>
            <Link 
              href="/leaderboard" 
              className={`transition-colors hover:text-primary ${pathname === '/leaderboard' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                <span>Leaderboard</span>
              </div>
            </Link>
            <Link 
              href="/profile" 
              className={`transition-colors hover:text-primary ${pathname === '/profile' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </div>
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors hover:text-primary ${pathname === '/contact' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
            >
              Contact
            </Link>
            <ThemeToggle />
          </nav>
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDropdownOpen((open) => !open)}
                  aria-label="Profile"
                >
                  <User className="h-6 w-6" />
                </Button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm">Log in</Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
        
        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
};

export default Navbar;