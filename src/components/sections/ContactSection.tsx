"use client"

import { useState, useEffect } from "react"
import { CONTACT, EASTER_EGG } from "@/lib/config"

const LINKS = [
  { label: "INSTAGRAM", href: CONTACT.instagram, color: "#ff006e" },
  { label: "LINKEDIN", href: CONTACT.linkedin, color: "#00f0ff" },
  { label: "GITHUB", href: CONTACT.github, color: "#2323FF" },
  { label: "EMAIL", href: CONTACT.email, color: "#ffe600" },
]

export default function ContactSection() {
  const [count, setCount] = useState(9)

  useEffect(() => {
    if (count <= 0) return
    const t = setTimeout(() => setCount((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count])

  return (
    <section
      className="page-in"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: 80,
      }}
    >
      {/* Ghostface */}
      <div
        className="ghostface-peek"
        style={{
          position: "fixed",
          bottom: -60,
          right: 40,
          fontSize: 52,
          zIndex: 10,
          pointerEvents: "none",
          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
        }}
      >
        👻
      </div>

      {/* Shining Easter egg */}
      <div
        style={{
          position: "fixed",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 10,
          color: "#2a2a2a",
          letterSpacing: 2,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {EASTER_EGG}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 14,
            color: "#ffe600",
            textShadow: "0 0 20px #ffe600",
            letterSpacing: 3,
            marginBottom: 24,
          }}
        >
          CONTINUE?
        </p>

        <div
          className="count-pulse"
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: "clamp(60px,12vw,100px)",
            color: "#ff006e",
            textShadow: "0 0 40px #ff006e,0 0 80px rgba(255,0,110,0.3)",
            lineHeight: 1,
            marginBottom: 40,
          }}
        >
          {count}
        </div>

        <p
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 7,
            color: "#555",
            letterSpacing: 3,
            marginBottom: 24,
          }}
        >
          // SELECT YOUR CHANNEL
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 9,
                padding: "14px 32px",
                border: `1px solid ${link.color}`,
                color: link.color,
                textDecoration: "none",
                letterSpacing: 2,
                display: "flex",
                alignItems: "center",
                gap: 12,
                minWidth: 280,
                justifyContent: "center",
                borderRadius: 2,
                transition: "all 0.15s",
                cursor: "crosshair",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = link.color
                el.style.color = "#080810"
                el.style.boxShadow = `0 0 20px ${link.color}`
                el.style.transform = "scale(1.03)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = "transparent"
                el.style.color = link.color
                el.style.boxShadow = "none"
                el.style.transform = "scale(1)"
              }}
            >
              <span>◈</span> {link.label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 6,
            color: "#333",
            letterSpacing: 2,
          }}
        >
          © LIU INDUSTRIES — ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  )
}
