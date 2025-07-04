'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Wallet, Coins, Trophy, TowerControl as GameController, BookOpen, User } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';

interface MobileMenuProps {
  pathname: string;
}

const MobileMenu = ({ pathname }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      setIsLoggedIn(!!token);
    };
    checkAuth();
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setOpen(false);
    window.dispatchEvent(new Event('authChange'));
    // Optionally redirect
    window.location.href = '/';
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-6 py-6">
            <ThemeToggle />
            <Link 
              href="/" 
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 text-lg font-medium ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Home
            </Link>
            <Link 
              href="/learn" 
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 text-lg font-medium ${pathname === '/learn' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            <Link 
              href="/games" 
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 text-lg font-medium ${pathname === '/games' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <GameController className="h-5 w-5" />
              <span>Games</span>
            </Link>
            <Link 
              href="/leaderboard" 
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 text-lg font-medium ${pathname === '/leaderboard' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Trophy className="h-5 w-5" />
              <span>Leaderboard</span>
            </Link>
            <Link 
              href="/profile" 
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 text-lg font-medium ${pathname === '/profile' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 text-lg font-medium ${pathname === '/contact' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              {isLoggedIn ? (
                <>
                  <Link href="/profile" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full">Profile</Button>
                  </Link>
                  <Button className="w-full" variant="destructive" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full">Log in</Button>
                  </Link>
                  <Link href="/signup" onClick={() => setOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;