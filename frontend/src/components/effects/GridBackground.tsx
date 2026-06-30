export default function GridBackground() {
  return (
    <div
      className="
      fixed
      inset-0
      -z-30
      opacity-[0.06]
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}