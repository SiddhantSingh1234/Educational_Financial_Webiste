'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wallet, Coins, Trophy, TowerControl as GameController, BookOpen, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { ThemeToggle } from '../ui/theme-toggle';

const Navbar = () => {
  const pathname = usePathname();

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
            <Link href="/login">
              <Button variant="outline" size="sm">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
        
        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
};

export default Navbar;