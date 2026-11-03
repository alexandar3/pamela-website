import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Pamela — AI Virtual Tours";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="88" height="88" viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r="11"
              fill="none"
              stroke="#ff7a29"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="53.8 15.3"
              transform="rotate(-110 16 16)"
            />
            <circle cx="12.2" cy="5.7" r="1.7" fill="#ff7a29" />
          </svg>
          <span
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "#f5f5f7",
              letterSpacing: "-0.03em",
            }}
          >
            Pamela
          </span>
        </div>
        <span
          style={{
            marginTop: 22,
            fontSize: 32,
            fontWeight: 500,
            color: "#ff7a29",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          AI Virtual Tours
        </span>
      </div>
    ),
    { ...size },
  );
}
