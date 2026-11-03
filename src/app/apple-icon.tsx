import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 32 32">
          <circle
            cx="16"
            cy="16"
            r="11"
            fill="none"
            stroke="#00e0d6"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeDasharray="53.8 15.3"
            transform="rotate(-110 16 16)"
          />
          <circle cx="12.2" cy="5.7" r="1.9" fill="#00e0d6" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
