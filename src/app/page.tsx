"use client";

import { Ellipse } from "@/components/ui/ellipse";
import { Vector } from "@/components/ui/Vector";
import { AnimatedVector } from "@/components/ui/AnimatedVector";
import { AnimatedVectorWithBadge } from "@/components/ui/AnimatedVectorWithBadge";
import { HeroContent } from "@/components/ui/HeroContent";
import { heroContent } from "@/constants/pageContent";
import { colors } from "@/constants/colors";
import { vectorPositions } from "@/constants/vectors";

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
        className="absolute"
        style={{
          width: `${container.width}px`,
          height: `${container.height}px`,
          top: `${container.top}px`,
          left: `${container.left}px`,
        }}
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
      <HeroContent content={heroContent} />
    </main>
  );
}
