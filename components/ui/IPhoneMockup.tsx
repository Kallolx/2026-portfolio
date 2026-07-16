"use client";

interface IPhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  image?: string;
}

export function IPhoneMockup({ children, className = "", image }: IPhoneMockupProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: "9/19.5", width: "100%" }}
    >
      {/* Outer chassis — clean white with thin dark border */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: 44,
          background: "#000000ff",
          border: "1px solid #1a1a1a",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Screen area with uniform bezel */}
        <div
          className="absolute overflow-hidden"
          style={{ inset: 6, borderRadius: 38, background: "#000" }}
        >
          {image ? (
            <img src={image} alt="Screen" className="w-full h-full object-contain object-top" />
          ) : (
            <div className="w-full h-full bg-[#d1d1d6]" />
          )}
          {children}
        </div>

        {/* Dynamic Island */}
        <div
          className="absolute z-30 flex items-center justify-end"
          style={{
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            width: 82,
            height: 24,
            background: "#1a1a1a",
            borderRadius: 13,
            padding: "0 8px",
          }}
        >
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#2a2a2a",
            boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.06)",
          }} />
        </div>

        {/* Home indicator */}
        <div
          className="absolute z-30"
          style={{
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 96,
            height: 4,
            background: "rgba(0,0,0,0.22)",
            borderRadius: 2,
          }}
        />
      </div>

      {/* Buttons */}
      {/* Mute */}
      <div style={{ position: "absolute", left: -3.5, top: 90, width: 3.5, height: 26, background: "#1a1a1a", borderRadius: "2px 0 0 2px" }} />
      {/* Vol + */}
      <div style={{ position: "absolute", left: -3.5, top: 136, width: 3.5, height: 52, background: "#1a1a1a", borderRadius: "2px 0 0 2px" }} />
      {/* Vol - */}
      <div style={{ position: "absolute", left: -3.5, top: 200, width: 3.5, height: 52, background: "#1a1a1a", borderRadius: "2px 0 0 2px" }} />
      {/* Power */}
      <div style={{ position: "absolute", right: -3.5, top: 156, width: 3.5, height: 72, background: "#1a1a1a", borderRadius: "0 2px 2px 0" }} />
    </div>
  );
}