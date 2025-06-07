// 'use client';

// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { StarIcon } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { useState } from 'react';

// const testimonials = [
//   {
//     id: 1,
//     content: "My son has learned so much about saving and budgeting. He's even started his own savings account!",
//     author: "Sarah M.",
//     role: "Parent of 9-year-old",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=33"
//   },
//   {
//     id: 2,
//     content: "The games are so engaging that my daughter doesn't even realize she's learning important financial skills.",
//     author: "Mark T.",
//     role: "Parent of 7-year-old",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=12"
//   },
//   {
//     id: 3,
//     content: "As a teacher, I've seen a remarkable improvement in how my students understand money concepts since using this platform.",
//     author: "Jennifer L.",
//     role: "3rd Grade Teacher",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=23"
//   },
//   {
//     id: 4,
//     content: "My twins love competing with each other on the platform. They're learning valuable skills while having fun!",
//     author: "David R.",
//     role: "Parent of 11-year-olds",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=65"
//   }
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             What Parents & Teachers <span className="text-blue-500">Say</span>
//           </h2>
//           <p className="text-lg text-muted-foreground dark:text-zinc-300 max-w-2xl mx-auto">
//             Hear from families and educators about how our platform is making a difference in children's financial education.
//           </p>
//         </motion.div>

//         <div className="relative mb-8">
//           <div className="overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 50}%)` }}
//             >
//               {testimonials.map((testimonial) => (
//                 <motion.div 
//                   key={testimonial.id}
//                   className="w-full md:w-1/2 flex-shrink-0 px-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="h-full">
//                     <CardContent className="pt-6">
//                       <div className="flex mb-4">
//                         {[...Array(5)].map((_, i) => (
//                           <StarIcon 
//                             key={i} 
//                             className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                             fill={i < testimonial.rating ? 'currentColor' : 'none'}
//                           />
//                         ))}
//                       </div>
//                       <p className="italic text-lg mb-6">"{testimonial.content}"</p>
//                       <div className="flex items-center">
//                         <Avatar className="h-12 w-12 mr-4">
//                           <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
//                           <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                         </Avatar>
//                         <div>
//                           <p className="font-semibold">{testimonial.author}</p>
//                           <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
          
//           <div className="flex justify-center gap-4 mt-8">
//             <Button 
//               variant="outline" 
//               size="icon" 
//               className="rounded-full"
//               onClick={prevSlide}
//             >
//               <span className="sr-only">Previous</span>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
//             </Button>
//             <Button 
//               variant="outline" 
//               size="icon" 
//               className="rounded-full"
//               onClick={nextSlide}
//             >
//               <span className="sr-only">Next</span>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

'use client';

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "My son has learned so much about saving and budgeting. He's even started his own savings account!",
      name: "Sarah M.",
      designation: "Parent of 9-year-old",
      rating: 5,
      src: "https://i.pravatar.cc/150?img=33",
    },
    {
      id: 2,
      quote: "The games are so engaging that my daughter doesn't even realize she's learning important financial skills.",
      name: "Mark T.",
      designation: "Parent of 7-year-old",
      rating: 5,
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      quote: "As a teacher, I've seen a remarkable improvement in how my students understand money concepts since using this platform.",
      name: "Jennifer L.",
      designation: "3rd Grade Teacher",
      rating: 5,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      quote: "My twins love competing with each other on the platform. They're learning valuable skills while having fun!",
      name: "David R.",
      designation: "Parent of 11-year-olds",
      rating: 5,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      quote: "The interactive approach has made financial literacy fun for my classroom. Students are genuinely excited about learning money management.",
      name: "Patricia H.",
      designation: "5th Grade Teacher",
      rating: 5,
      src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Parents & Teachers
          <Highlight className="text-black dark:text-white">
            <span className="text-blue-600 dark:text-blue-300">Say</span>
          </Highlight>
        </h2>
        <p className="text-lg text-muted-foreground dark:text-zinc-300 max-w-2xl mx-auto">
          Hear from families and educators about how our platform is making a difference in children's financial education.
        </p>
      </motion.div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}