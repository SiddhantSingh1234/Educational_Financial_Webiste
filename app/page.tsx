import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import HerowithStats from '@/components/home/HerowithStats';
import LearningModules from '@/components/home/LearningModules';
import Testimonials from '@/components/home/Testimonials';
import GradientTransition from '@/components/home/GradientTransition';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HerowithStats />
      <GradientTransition />
      <LearningModules />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
