import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import LearningModules from '@/components/home/LearningModules';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Stats />
      <LearningModules />
      <Testimonials />
      <CallToAction />
    </div>
  );
}