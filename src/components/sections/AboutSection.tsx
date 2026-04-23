"use client"

import { useState, useEffect, useRef } from "react"
import {
  PLAYER,
  DIALOGS,
  FRONTEND_STACK,
  BACKEND_STACK,
  TOOLS_STACK,
  LANGUAGES,
} from "@/lib/config"

export default function AboutSection() {
  const [displayText, setDisplayText] = useState("")
  const [dialogIndex, setDialogIndex] = useState(0)
  const [typing, setTyping] = useState(false)
  const [showArrow, setShowArrow] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const typeText = (text: string) => {
    setDisplayText("")
    setShowArrow(false)
    setTyping(true)
    let i = 0
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDisplayText(text.slice(0, ++i))
      if (i >= text.length) {
        clearInterval(timerRef.current!)
        setTyping(false)
        setShowArrow(true)
      }
    }, 28)
  }

  const advance = () => {
    if (typing) {
      clearInterval(timerRef.current!)
      setDisplayText(DIALOGS[dialogIndex - 1] ?? DIALOGS[0])
      setTyping(false)
      setShowArrow(true)
      return
    }
    const next = dialogIndex < DIALOGS.length ? dialogIndex : 0
    typeText(DIALOGS[next])
    setDialogIndex(next + 1)
  }

  useEffect(() => {
    const t = setTimeout(() => {
      typeText(DIALOGS[0])
      setDialogIndex(1)
    }, 400)
    return () => {
      clearTimeout(t)
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const statusColor =
    PLAYER.status === "AVAILABLE"
      ? "#39ff14"
      : PLAYER.status === "OPEN TO OFFERS"
      ? "#ffe600"
      : "#ff006e"

  return (
    <section
      className="page-in"
      style={{
        minHeight: "100vh",
        paddingTop: 112,
        paddingBottom: 64,
        paddingLeft: "5%",
        paddingRight: "5%",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        className="neon-pink"
        style={{
          fontFamily: "'Press Start 2P',monospace",
          fontSize: 10,
          letterSpacing: 3,
          marginBottom: 40,
        }}
      >
        <span style={{ color: "#555" }}>// </span>ABOUT ME
      </div>

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        {/* Character card */}
        <div
          style={{
            border: "1px solid #00f0ff",
            background: "#0d0d20",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "0 0 20px rgba(0,240,255,0.1),inset 0 0 30px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "linear-gradient(90deg,#00f0ff,#ff006e,#00f0ff)",
            }}
          />

          {/* Photo */}
          <div
            style={{
              aspectRatio: "3/4",
              background: "#1a1a2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me.jpeg"
              alt="Bryan Nicholas"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,240,255,0.02) 3px,rgba(0,240,255,0.02) 4px)",
              }}
            />
            <div className="char-corner tl" />
            <div className="char-corner tr" />
            <div className="char-corner bl" />
            <div className="char-corner br" />
          </div>

          {/* Stat rows */}
          <div
            style={{
              padding: "18px 16px",
              borderTop: "1px solid rgba(0,240,255,0.2)",
            }}
          >
            {[
              { label: "CLASS", value: PLAYER.class },
              { label: "ORIGIN", value: PLAYER.origin },
              { label: "STATUS", value: PLAYER.status, color: statusColor },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: 6,
                  color: "#888",
                  padding: "5px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <span>{row.label}</span>
                <span style={{ color: row.color ?? "#ffe600" }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div>
          {/* Pokemon dialog */}
          <div className="pokemon-box" onClick={advance}>
            <div
              style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 14,
                color: "#111",
                lineHeight: 1.8,
                minHeight: 60,
              }}
            >
              {displayText}
              {typing && (
                <span
                  style={{
                    display: "inline-block",
                    width: 10,
                    height: 14,
                    background: "#222",
                    marginLeft: 2,
                    verticalAlign: "middle",
                    animation: "blink 0.6s step-end infinite",
                  }}
                />
              )}
            </div>
            {showArrow && (
              <div
                className="bounce-arrow"
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 12,
                  fontSize: 14,
                  color: "#555",
                }}
              >
                Click to Continue ▼
              </div>
            )}
          </div>

          {/* Frontend */}
          <div
            className="neon-yellow"
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "clamp(7px, 2vw, 8px)",
              letterSpacing: 2,
              marginTop: 32,
              marginBottom: 14,
            }}
          >
            FRONTEND
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {FRONTEND_STACK.map((t) => (
              <span key={t.label} className={`tech-badge ${t.color}`}>
                {t.label}
              </span>
            ))}
          </div>

          {/* Backend */}
          <div
            className="neon-yellow"
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "clamp(7px, 2vw, 8px)",
              letterSpacing: 2,
              marginTop: 24,
              marginBottom: 14,
            }}
          >
            BACKEND
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {BACKEND_STACK.map((t) => (
              <span key={t.label} className={`tech-badge ${t.color}`}>
                {t.label}
              </span>
            ))}
          </div>

          {/* Tools */}
          <div
            className="neon-yellow"
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "clamp(7px, 2vw, 8px)",
              letterSpacing: 2,
              marginTop: 24,
              marginBottom: 14,
            }}
          >
            TOOLS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TOOLS_STACK.map((t) => (
              <span key={t.label} className={`tech-badge ${t.color}`}>
                {t.label}
              </span>
            ))}
          </div>

          {/* Languages */}
          <div
            className="neon-yellow"
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "clamp(7px, 2vw, 8px)",
              letterSpacing: 2,
              marginTop: 24,
              marginBottom: 14,
            }}
          >
            LANGUAGES
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {LANGUAGES.map((lang) => (
              <div
                key={lang.label}
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: 7,
                  padding: "6px 10px",
                  border: "1px solid #555",
                  borderRadius: 2,
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#fff" }}>{lang.label}</span>
                <span style={{ color: "#444" }}>—</span>
                <span style={{ color: "#ffe600" }}>{lang.level}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons*/}
          <div
            style={{
              paddingTop: 24,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a
              href="/cv/bryan-nicholas-cv.pdf"
              download="Bryan_Nicholas_CV.pdf"
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 7,
                padding: "12px 16px",
                border: "1px solid #39ff14",
                color: "#39ff14",
                textDecoration: "none",
                letterSpacing: 1,
                borderRadius: 2,
                transition: "all 0.15s",
                cursor: "crosshair",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#39ff14"
                e.currentTarget.style.color = "#080810"
                e.currentTarget.style.boxShadow = "0 0 16px #39ff14"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#39ff14"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              DOWNLOAD CV
            </a>

            <button
              onClick={() => navigate("projects")}
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 7,
                padding: "12px 16px",
                border: "1px solid #00f0ff",
                color: "#00f0ff",
                background: "transparent",
                letterSpacing: 1,
                borderRadius: 2,
                transition: "all 0.15s",
                cursor: "crosshair",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00f0ff"
                e.currentTarget.style.color = "#080810"
                e.currentTarget.style.boxShadow = "0 0 16px #00f0ff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#00f0ff"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              MY PROJECTS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
