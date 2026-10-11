// Crops the round emblem out of /logo.jpg so it sits cleanly on any theme.
export default function LogoCircle({ className = "", style }) {
  return (
    <div className={`logo-circle ${className}`} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hfc-logo.png" alt="HFC Consultancy Services" draggable="false" />
    </div>
  );
}
