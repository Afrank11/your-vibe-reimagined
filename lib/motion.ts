/** Shared motion tokens — every animated component reads from here. */

export const EASE = {
  /** GSAP entrance ease */
  out: "power3.out",
  /** GSAP pin/mask ease */
  inOut: "power2.inOut",
  /** Framer Motion equivalent of power3.out */
  outCurve: [0.16, 1, 0.3, 1] as const,
};

export const DUR = {
  micro: 0.2,
  reveal: 0.8,
  slow: 1.2,
};

export const STAGGER = 0.08;
