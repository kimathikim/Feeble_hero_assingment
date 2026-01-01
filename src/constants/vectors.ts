export const vectorPositions = {
  container: {
    width: 1407.93,
    height: 719.38,
    top: 291,
    left: 298.18,
  },
  animatedVectors: {
    top: {
      top: 291,
      left: 298.18,
      initialTop: '100vh',
      initialLeft: 298.18,
    },
    bottom: {
      top: 14,
      left: 1108,
      initialTop: 705.42,
      initialLeft: 1108,
    },
  },
  staticVectors: [
    { top: 329.02, left: 495.3 },
    { top: 465, left: 1446.18 },
  ],
  fadeOutVectors: [
    {
      top: 329.02,
      left: 495.3,
      initialTop: '100vh',
      initialLeft: 495.3,
      delay: 0.2,
    },
    {
      top: 465,
      left: 1446.18,
      initialTop: '100vh',
      initialLeft: 1446.18,
      delay: 0.4,
    },
  ],
  vectorsWithBadges: [
    {
      src: '/vector1.png',
      imageWidth: 103.38,
      imageHeight: 61.65,
      containerWidth: 103.38,
      containerHeight: 76.75,
      top: 634.39,
      left: 73.74,
      delay: 0.5,
      badgeProps: {
        angle: 138.35,
        style: {
          bottom: '10px',
          right: '10px',
        },
      },
    },
    {
      src: '/vector2.svg',
      imageWidth: 87.74,
      imageHeight: 56.99,
      containerWidth: 87.74,
      containerHeight: 56.99,
      top: 590,
      left: 367,
      delay: 0.3,
      badgeProps: {
        width: 23.91,
        height: 13.82,
        angle: 23.82,
        style: {
          top: '10px',
          left: '46px',
        },
      },
    },
    {
      src: '/vector3.svg',
      imageWidth: 87.74,
      imageHeight: 56.99,
      containerWidth: 128.21,
      containerHeight: 54.38,
      top: 665,
      left: 965,
      delay: 0.6,
      badgeProps: {
        width: 44.75,
        height: 25.87,
        angle: -10.97,
        opacity: 1,
        style: {
          top: '15px',
          left: '-12px',
        },
      },
    },
    {
      src: '/vector4.svg',
      imageWidth: 128.93,
      imageHeight: 101.98,
      containerWidth: 128.9345245361328,
      containerHeight: 101.98511505126953,
      top: 591,
      left: 1279,
      delay: 0.4,
      badgeProps: {
        width: 43.79,
        height: 19.9,
        borderRadius: 222.95,
        angle: -35.12,
        opacity: 1,
        style: {
          top: '15px',
          left: '96px',
        },
      },
    },
  ],
} as const

