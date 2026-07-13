import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Frank Ateh — Full-Stack Developer & Network Engineer, Yaoundé, Cameroon";

/**
 * Link-preview card in the current "Quiet Signal" identity — regenerated at
 * every build, so previews never drift from the live design.
 */
export default function OgImage() {
  const bone = "#EDECE6";
  const silver = "#8F8F8A";
  const brass = "#C2A57B";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070707",
          padding: "56px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* faint network in the corner */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M 900 40 L 1050 120 L 980 250 L 1150 320 M 1050 120 L 1150 60 M 980 250 L 860 180 L 900 40 M 860 180 L 720 90"
            stroke="rgba(237,236,230,0.14)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="900" cy="40" r="3" fill={brass} />
          <circle cx="1050" cy="120" r="3" fill="rgba(237,236,230,0.5)" />
          <circle cx="980" cy="250" r="3" fill="rgba(237,236,230,0.5)" />
          <circle cx="860" cy="180" r="3" fill={brass} />
          <circle cx="1150" cy="320" r="3" fill="rgba(237,236,230,0.4)" />
          <circle cx="720" cy="90" r="3" fill="rgba(237,236,230,0.4)" />
          <circle cx="1150" cy="60" r="3" fill="rgba(237,236,230,0.4)" />
        </svg>

        {/* top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: bone, letterSpacing: 1 }}>
            ATEH FRANK ATEH<span style={{ color: brass }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 18, color: silver, letterSpacing: 4 }}>
            ATEHFRANK.COM
          </div>
        </div>

        {/* name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 124, fontWeight: 700, color: bone, lineHeight: 1.02, letterSpacing: -3 }}>
            Frank Ateh<span style={{ color: brass }}>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: bone, letterSpacing: 2 }}>
            FULL-STACK DEVELOPER
            <span style={{ color: brass, margin: "0 16px" }}>•</span>
            NETWORK ENGINEER
          </div>
          <div style={{ display: "flex", marginTop: 14, fontSize: 22, color: silver }}>
            Premium websites, resilient networks, secure systems — Yaoundé, Cameroon
          </div>
        </div>

        {/* bottom rule */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", width: 40, height: 2, background: brass }} />
          <div style={{ display: "flex", flex: 1, height: 1, background: "rgba(237,236,230,0.15)" }} />
          <div style={{ display: "flex", fontSize: 17, color: silver, letterSpacing: 4, marginLeft: 18 }}>
            21 DOCUMENTED PROJECTS
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
