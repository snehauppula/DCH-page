// Crops the round emblem out of /logo.jpg so it sits cleanly on the dark theme.
export default function LogoCircle({ className = "", style }) {
  return (
    <div className={`logo-circle ${className}`} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.jpg" alt="Digital Creators Hub" draggable="false" />
    </div>
  );
}
