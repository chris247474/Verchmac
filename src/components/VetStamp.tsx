"use client";

export default function VetStamp() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(-22deg)",
        zIndex: 9999,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          border: "clamp(3px, 0.8vw, 6px) solid #dc2626",
          borderRadius: "8px",
          padding: "clamp(8px, 2vw, 14px) clamp(14px, 3.5vw, 28px)",
          textAlign: "center",
          color: "#dc2626",
          fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ fontSize: "clamp(14px, 4vw, 42px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1 }}>
          Built at the Vet
        </div>
        <div style={{ fontSize: "clamp(8px, 2vw, 22px)", fontWeight: 700, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          That&apos;s $10k Please
        </div>
      </div>
    </div>
  );
}
