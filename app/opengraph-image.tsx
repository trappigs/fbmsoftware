import { ImageResponse } from "next/og";
import { brand } from "@/lib/content";

export const alt = `${brand.name} — ${brand.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "#f4efe3",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* fbm wordmark + ochre dot — centered so square crops still read */}
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div
            style={{
              fontSize: 220,
              fontWeight: 700,
              letterSpacing: -14,
              lineHeight: 1,
              color: "#143a29",
            }}
          >
            fbm
          </div>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              background: "#a9772a",
              marginLeft: 10,
              marginBottom: 22,
            }}
          />
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 42,
            fontWeight: 600,
            color: "#16150d",
          }}
        >
          {brand.name}
        </div>
        <div style={{ marginTop: 10, fontSize: 28, color: "#54513f" }}>
          {`Web & SaaS Yazılım Stüdyosu · ${brand.domain}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
