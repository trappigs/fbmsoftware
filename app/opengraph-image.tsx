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
          justifyContent: "space-between",
          background: "#f4efe3",
          padding: "80px",
          color: "#16150d",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#143a29",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f4efe3",
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>{brand.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 940,
            }}
          >
            Karmaşık fikirleri sade, ölçeklenebilir yazılıma çeviririz.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#54513f" }}>
            Web &amp; SaaS Yazılım Stüdyosu
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: "#54513f",
          }}
        >
          <div
            style={{ width: 12, height: 12, borderRadius: 99, background: "#a9772a" }}
          />
          {brand.domain}
        </div>
      </div>
    ),
    { ...size }
  );
}
