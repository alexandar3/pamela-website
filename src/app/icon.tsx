import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32">
          <circle
            cx="16"
            cy="16"
            r="11"
            fill="none"
            stroke="#ff7a29"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="53.8 15.3"
            transform="rotate(-110 16 16)"
          />
          <circle cx="12.2" cy="5.7" r="2" fill="#ff7a29" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
