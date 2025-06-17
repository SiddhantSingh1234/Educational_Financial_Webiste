'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, BookOpen, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const FinancialLiteracyCourse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Introduction to Money",
      content: "Money is something we use to buy things we need and want...",
      question: "What's your favorite way to pay for something? Cash or UPI?",
      image: "/module1/Slide1.jpg"
    },
    {
      title: "Table of Contents",
      content: "Instead of swapping items, we use money to make exchanges easier...",
      question: "What is the easiest way to pay for things you need?",
      image: "/module1/Slide2.jpg"
    },
    {
      title: "What is Money?",
      content: "We need certain things to survive, like food, water, and clothes...",
      question: "What are some things you really need? What are some things you want?",
      image: "/module1/Slide3.jpg"
    },
    {
      title: "Why Do We Use Money?",
      content: "Money is needed to buy essential things for life...",
      question: "What is the easiest way to pay for things you need?",
      image: "/module1/Slide4.jpg"
    },
    {
      title: "Needs versus Wants",
      content: "Money comes in various forms: physical cash, digital payments...",
      question: "Which type of money do you use most often and why?",
      image: "/module1/Slide5.jpg"
    },
    {
      title: "Why Do We Need Money?",
      content: "Time is valuable, just like money. Planning helps us achieve goals...",
      question: "How can you save both time and money when shopping?",
      image: "/module1/Slide6.jpg"
    }
  ];

  const totalSlides = slides.length;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const nextSlide = () => currentSlide < totalSlides - 1 && setCurrentSlide(currentSlide + 1);
  const prevSlide = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-800 dark:to-green-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Money Fundamentals</h1>
                <p className="text-green-100 dark:text-green-200 mt-1">
                  Master the essential concepts that form the foundation of financial literacy
                </p>
              </div>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-white font-semibold">Level 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="bg-white dark:bg-green-950 rounded-full shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600 dark:text-green-200">Module Progress</span>
            <span className="text-sm font-bold text-green-600 dark:text-green-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-green-900 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-500 dark:to-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="bg-white dark:bg-green-950 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-800 dark:to-green-900 p-8 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">{currentSlide + 1} of {totalSlides}</span>
              </div>
            </div>
          </div>

          {/* <div className="p-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-xl p-8 mb-6">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-white dark:bg-green-800 rounded-full flex items-center justify-center text-6xl shadow-lg">
                  {slides[currentSlide].image}
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-green-100 mb-6 text-center">
                {slides[currentSlide].content}
              </p>

              {slides[currentSlide].question && (
                <div className="bg-white dark:bg-green-950 rounded-lg p-6 border-l-4 border-green-500 dark:border-green-400 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full">
                      <Play className="w-4 h-4 text-green-600 dark:text-green-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-green-100 mb-2">Think About It:</h4>
                      <p className="text-gray-600 dark:text-green-200">{slides[currentSlide].question}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div> */}

          <div className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 px-4 py-6">
            <div className="max-w-6xl mx-auto w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full aspect-[16/9]">
                <Image 
                  src={slides[currentSlide].image}
                  alt={`Slide ${currentSlide + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 dark:bg-green-900 px-8 py-6 border-t border-gray-200 dark:border-green-800">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition ${
                  currentSlide === 0
                    ? 'bg-gray-200 dark:bg-green-900 text-gray-400 dark:text-green-600 cursor-not-allowed'
                    : 'bg-white dark:bg-green-800 text-gray-700 dark:text-green-100 hover:bg-gray-100 dark:hover:bg-green-700 shadow-sm hover:shadow-md'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === currentSlide
                        ? 'bg-green-500 dark:bg-green-400 scale-125'
                        : index < currentSlide
                        ? 'bg-green-300 dark:bg-green-600'
                        : 'bg-gray-300 dark:bg-green-700 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition ${
                  currentSlide === totalSlides - 1
                    ? 'bg-gray-200 dark:bg-green-900 text-gray-400 dark:text-green-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white shadow-sm hover:shadow-md'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Completion Message */}
        {currentSlide === totalSlides - 1 && (
          <div className="mt-6 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-700 dark:to-green-800 rounded-2xl p-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Congratulations!</h3>
                <p className="text-green-100 dark:text-green-200">
                  You've completed all 6 modules of Money Fundamentals. Ready for the next challenge?
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialLiteracyCourse;
