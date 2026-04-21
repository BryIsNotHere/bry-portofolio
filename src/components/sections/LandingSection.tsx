"use client"

import { useEffect, useRef } from "react"
import type { PageId } from "@/app/page"
import { PLAYER } from "@/lib/config"

export default function LandingSection({
  navigate,
}: {
  navigate: (p: PageId) => void
}) {
  const debrisRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = debrisRef.current
    if (!el || el.childElementCount > 0) return
    const colors = ["#ff006e", "#00f0ff", "#ffe600", "#39ff14"]
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div")
      const size = 2 + Math.random() * 4
      p.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;
        background:${colors[i % colors.length]};
        opacity:${0.15 + Math.random() * 0.25};
        animation:floatDebris ${4 + Math.random() * 8}s ${
        -Math.random() * 8
      }s linear infinite;
      `
      el.appendChild(p)
    }
  }, [])

  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        overflow: "hidden",
      }}
      className="page-in"
    >
      {/* BG layers */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center,#0a0a2e 0%,#080810 70%)",
        }}
      />
      <div className="absolute inset-0 grid-scroll" />
      <div className="absolute inset-0 bg-white pointer-events-none vs-flash" />
      <div ref={debrisRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        <p
          className="challenger-in"
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 11,
            color: "#ff006e",
            letterSpacing: 4,
            textShadow: "0 0 20px #ff006e",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <span>CHALLENGER APPROACHING</span>
        </p>

        <h1
          className="name-in-1"
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: "clamp(24px,5vw,48px)",
            lineHeight: 1.4,
            marginBottom: 8,
            background: "linear-gradient(180deg,#fff 0%,#00f0ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {PLAYER.name}
        </h1>

        <p
          className="name-in-2"
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 14,
            color: "#ffe600",
            letterSpacing: 3,
            textShadow: "0 0 10px #ffe600",
            marginBottom: 40,
          }}
        >
          {PLAYER.title}
        </p>

        {/* Health bars */}
        <div
          className="name-in-3"
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {PLAYER.healthBars.map((bar) => (
            <div key={bar.label}>
              <div
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: 7,
                  color: "#888",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                {bar.label}
              </div>
              <div
                style={{
                  width: 160,
                  height: 14,
                  border: "1px solid #444",
                  background: "#111",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${bar.value}%`,
                    background: "linear-gradient(90deg,#39ff14,#aaff00)",
                    boxShadow: "0 0 8px #39ff14",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p
          className="blink name-in-4"
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 11,
            color: "#ffe600",
            letterSpacing: 3,
          }}
        >
          — INSERT COIN —
        </p>

        <button
          onClick={() => navigate("about")}
          className="name-in-5"
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 9,
            marginTop: 24,
            background: "transparent",
            border: "2px solid #00f0ff",
            color: "#00f0ff",
            padding: "14px 28px",
            letterSpacing: 2,
            cursor: "crosshair",
            borderRadius: 2,
            textShadow: "0 0 8px #00f0ff",
            boxShadow: "0 0 16px rgba(0,240,255,0.3)",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = "#00f0ff"
            el.style.color = "#080810"
            el.style.textShadow = "none"
            el.style.transform = "scale(1.05)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = "transparent"
            el.style.color = "#00f0ff"
            el.style.textShadow = "0 0 8px #00f0ff"
            el.style.transform = "scale(1)"
          }}
        >
          PRESS START
        </button>
      </div>
    </section>
  )
}
