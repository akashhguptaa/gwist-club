"use client";

import { useRef, useState, useEffect } from "react";
import goalsData from "../data/our_goals.json";

// Handle both array format [...] and object format { "goals": [...] }
const goals: { title: string; description: string }[] = Array.isArray(goalsData)
  ? goalsData
  : (goalsData as any).goals ?? [];
const totalGoals = goals.length;

// Create extended array for infinite loop effect (duplicate items on both ends)
const extendedGoals = [...goals, ...goals, ...goals];

const Goals = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(totalGoals); // Start at middle set
  const isScrollingRef = useRef(false);

  const scrollToCard = (index: number, behavior: ScrollBehavior = "smooth") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-goal-card]");
    if (cards[index]) {
      isScrollingRef.current = true;
      cards[index].scrollIntoView({
        behavior,
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(index);
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, behavior === "smooth" ? 500 : 50);
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container || isScrollingRef.current) return;

    const cards = container.querySelectorAll("[data-goal-card]");
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);

    // Handle infinite loop - jump to middle set when reaching edges
    if (closestIndex < totalGoals / 2) {
      // Near start, jump to middle set
      setTimeout(() => {
        scrollToCard(closestIndex + totalGoals, "instant" as ScrollBehavior);
      }, 100);
    } else if (closestIndex >= totalGoals * 2 + totalGoals / 2) {
      // Near end, jump to middle set
      setTimeout(() => {
        scrollToCard(closestIndex - totalGoals, "instant" as ScrollBehavior);
      }, 100);
    }
  };

  // Initialize scroll position to middle set
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(totalGoals, "instant" as ScrollBehavior);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Get the actual goal index (0 to totalGoals-1) from the extended index
  const getActualIndex = (extendedIndex: number) => {
    return ((extendedIndex % totalGoals) + totalGoals) % totalGoals;
  };

  if (goals.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#f5f1eb]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Our Goals
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Empowering women in technology through education, mentorship, and community
          </p>
        </div>

        {/* Scrollable Cards Container with fade edges */}
        <div className="relative">
          {/* Left fade gradient (hidden on mobile) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-6 w-8 md:w-12 lg:w-16 bg-gradient-to-r from-[#f5f1eb] via-[#f5f1eb]/60 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade gradient (hidden on mobile) */}
          <div className="hidden md:block absolute right-0 top-0 bottom-6 w-8 md:w-12 lg:w-16 bg-gradient-to-l from-[#f5f1eb] via-[#f5f1eb]/60 to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollContainerRef}
            onWheel={e => {
              e.preventDefault();
              if (isScrollingRef.current) return;
              if (e.deltaY > 0 || e.deltaX > 0) {
                scrollToCard(activeIndex + 1);
              } else if (e.deltaY < 0 || e.deltaX < 0) {
                scrollToCard(activeIndex - 1);
              }
            }}
            onScroll={() => {}}
            className="flex gap-4 md:gap-6 overflow-x-hidden pb-6 snap-x snap-mandatory scrollbar-hide px-4 md:px-8 lg:px-16 select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              touchAction: "pan-y"
            }}
          >
            {extendedGoals.map((goal, index) => {
              const actualIndex = getActualIndex(index);
              const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                data-goal-card
                onClick={() => scrollToCard(index)}
                className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] snap-center cursor-pointer transition-all duration-500 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-70"
                }`}
              >
                <div
                  className={`h-full rounded-2xl p-6 md:p-8 transition-all duration-500 ${
                    isActive
                      ? "bg-[#0d6d6e] shadow-2xl shadow-[#0d6d6e]/30"
                      : "bg-[#2E3538] hover:bg-[#3d4f5c]"
                  }`}
                >
                  {/* Goal Number */}
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full mb-4 md:mb-6 text-lg md:text-xl font-semibold transition-all duration-500 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#0d6d6e]/30 text-[#0d6d6e]"
                    }`}
                  >
                    {actualIndex + 1}
                  </div>

                  {/* Goal Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 md:mb-4">
                    {goal.title}
                  </h3>

                  {/* Goal Description */}
                  <p
                    className={`text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-500 ${
                      isActive ? "text-white/90" : "text-gray-300"
                    }`}
                  >
                    {goal.description}
                  </p>

                  {/* Decorative Element */}
                  <div
                    className={`mt-6 md:mt-8 h-1 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-white/30 w-full"
                        : "bg-[#0d6d6e]/30 w-1/2"
                    }`}
                  />
                </div>
              </div>
            );
          })}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mt-8 md:mt-12">
          {goals.map((_, index) => {
            const currentActualIndex = getActualIndex(activeIndex);
            return (
              <button
                key={index}
                onClick={() => scrollToCard(totalGoals + index)}
                className={`h-2 md:h-2.5 rounded-full transition-all duration-500 ${
                  index === currentActualIndex
                    ? "bg-[#0d6d6e] w-8 md:w-12"
                    : "bg-gray-300 hover:bg-gray-400 w-2 md:w-2.5"
                }`}
                aria-label={`Go to goal ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Current Goal Indicator */}
        <p className="text-center text-gray-500 text-sm md:text-base mt-4">
          {getActualIndex(activeIndex) + 1} of {totalGoals}
        </p>
      </div>
    </section>
  );
};

export default Goals;