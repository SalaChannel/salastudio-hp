export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.05]"
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="site-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#site-grain)" />
      </svg>
    </div>
  );
}
