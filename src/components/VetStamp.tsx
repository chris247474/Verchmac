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
          border: "6px solid rgba(185, 28, 28, 0.18)",
          borderRadius: "8px",
          padding: "14px 28px",
          textAlign: "center",
          color: "rgba(185, 28, 28, 0.18)",
          fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ fontSize: "clamp(22px, 4vw, 42px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1 }}>
          Built at the Vet
        </div>
        <div style={{ fontSize: "clamp(12px, 2vw, 22px)", fontWeight: 700, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          That&apos;s $10k Please
        </div>
      </div>
    </div>
  );
}
