import { ImageResponse } from "next/og";
import { team, getMember, initials } from "@/lib/team";
import { brand } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "FBM Yazılım ekip üyesi";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export default async function MemberOG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  const name = member?.name ?? brand.name;
  const role = member?.role ?? brand.role;

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
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: 999,
            background: "rgba(20,58,41,0.08)",
            border: "2px solid rgba(20,58,41,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#143a29",
            fontSize: 74,
            fontWeight: 700,
          }}
        >
          {initials(name)}
        </div>

        <div
          style={{
            marginTop: 38,
            fontSize: 64,
            fontWeight: 700,
            color: "#16150d",
          }}
        >
          {name}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 27,
            color: "#a9772a",
            letterSpacing: 1,
          }}
        >
          {role}
        </div>
        <div style={{ marginTop: 30, fontSize: 24, color: "#54513f" }}>
          {brand.name}
        </div>
      </div>
    ),
    { ...size }
  );
}
