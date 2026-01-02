"use client";

import { Ellipse } from "@/components/ui/ellipse";
import { Vector } from "@/components/ui/Vector";
import { AnimatedVector } from "@/components/ui/AnimatedVector";
import { AnimatedVectorWithBadge } from "@/components/ui/AnimatedVectorWithBadge";
import { AnimatedCloud } from "@/components/ui/AnimatedCloud";
import { HeroContent } from "@/components/ui/HeroContent";
import { ScrollToLearnMore } from "@/components/ui/ScrollToLearnMore";
import { heroContent, scrollSection } from "@/constants/pageContent";
import { colors } from "@/constants/colors";
import { vectorPositions } from "@/constants/vectors";
import { cloudContainer, clouds } from "@/constants/clouds";

export default function Page() {
  const {
    container,
    animatedVectors,
    staticVectors,
    vectorsWithBadges,
    fadeOutVectors,
  } = vectorPositions;

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.background.lightBlue }}
    >
      <Ellipse />
      {/* Decorative vectors - hidden on mobile, visible on larger screens */}
      <div className="hidden lg:block">
        <AnimatedVector
          top={animatedVectors.top.top}
          left={animatedVectors.top.left}
          initialTop={animatedVectors.top.initialTop}
          initialLeft={animatedVectors.top.initialLeft}
        />
        {staticVectors.map((vector, index) => (
          <Vector key={index} top={vector.top} left={vector.left} />
        ))}
        {fadeOutVectors.map((vector, index) => (
          <AnimatedVector
            key={`fade-out-${index}`}
            top={vector.top}
            left={vector.left}
            initialTop={vector.initialTop}
            initialLeft={vector.initialLeft}
            delay={vector.delay}
            initialOpacity={1}
            animateOpacity={0}
          />
        ))}
        <div
          className="absolute w-[90vw] lg:w-[80vw] xl:w-[1408px] h-[50vw] lg:h-[50vw] xl:h-[719px] top-[25vw] lg:top-[20vw] xl:top-[291px] left-1/2 -translate-x-1/2"
        >
          <AnimatedVector
            top={animatedVectors.bottom.top}
            left={animatedVectors.bottom.left}
            initialTop={animatedVectors.bottom.initialTop}
            initialLeft={animatedVectors.bottom.initialLeft}
          />
          {vectorsWithBadges.map((vector, index) => (
            <AnimatedVectorWithBadge key={index} {...vector} />
          ))}
        </div>
      </div>
      <HeroContent content={heroContent} />
      {/* Cloud background - responsive width */}
      <div
        className="absolute left-0 right-0 w-full overflow-hidden top-[60vh] sm:top-[65vh] md:top-[70vh] lg:top-[686px] h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[582px]"
        style={{
          opacity: cloudContainer.opacity,
        }}
      >
        {clouds.map((cloud, index) => (
          <AnimatedCloud key={index} {...cloud} />
        ))}
      </div>
      <ScrollToLearnMore {...scrollSection} />
    </main>
  );
}
