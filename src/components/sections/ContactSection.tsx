"use client"

import { useState, useEffect, useRef } from "react"
import {
  CONTACT,
  EASTER_EGG,
  GHOSTFACE_FAREWELL,
  GHOSTFACE_QUOTES,
} from "@/lib/config"

const LINKS = [
  { label: "INSTAGRAM", href: CONTACT.instagram, color: "#ff006e" },
  { label: "LINKEDIN", href: CONTACT.linkedin, color: "#00f0ff" },
  { label: "GITHUB", href: CONTACT.github, color: "#39ff14" },
  { label: "EMAIL", href: CONTACT.email, color: "#ffe600" },
]

type Phase = "countdown" | "gameover"

export default function ContactSection() {
  const [count, setCount] = useState(9)
  const [phase, setPhase] = useState<Phase>("countdown")
  const [gameOverIn, setGameOverIn] = useState(false)

  // Ghostface easter egg state
  const [ghostFrozen, setGhostFrozen] = useState(false)
  const [ghostVisible, setGhostVisible] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [showQuote, setShowQuote] = useState(false)
  const [quoteText, setQuoteText] = useState("")
  const typeRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const peekTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Countdown logic
  useEffect(() => {
    if (phase !== "countdown") return
    if (count <= 0) {
      setPhase("gameover")
      setTimeout(() => setGameOverIn(true), 50)
      return
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count, phase])

  // Ghostface peek cycle — only when not frozen
  useEffect(() => {
    if (ghostFrozen) return

    const schedulePeek = () => {
      // Peek after random 6–10s interval
      peekTimer.current = setTimeout(() => {
        setGhostVisible(true)
        // Slide back down after 3s
        peekTimer.current = setTimeout(() => {
          setGhostVisible(false)
          schedulePeek()
        }, 3000)
      }, 6000 + Math.random() * 4000)
    }

    schedulePeek()
    return () => {
      if (peekTimer.current) clearTimeout(peekTimer.current)
    }
  }, [ghostFrozen])

  // Type out quote character by character
  const typeQuote = (text: string) => {
    setQuoteText("")
    setShowQuote(true)
    let i = 0
    if (typeRef.current) clearInterval(typeRef.current)
    typeRef.current = setInterval(() => {
      setQuoteText(text.slice(0, ++i))
      if (i >= text.length) clearInterval(typeRef.current!)
    }, 35)
  }

  const handleGhostClick = () => {
    if (!ghostVisible) return
    if (ghostFrozen) {
      // Cycle to next quote
      const next = (quoteIndex + 1) % GHOSTFACE_QUOTES.length
      setQuoteIndex(next)
      typeQuote(GHOSTFACE_QUOTES[next])
      return
    }
    // First click — freeze and show first quote
    if (peekTimer.current) clearTimeout(peekTimer.current)
    setGhostFrozen(true)
    setQuoteIndex(0)
    typeQuote(GHOSTFACE_QUOTES[0])
  }

  const releaseGhost = () => {
    typeQuote(GHOSTFACE_FAREWELL)

    const farewellDuration = GHOSTFACE_FAREWELL.length * 35 + 800
    setTimeout(() => {
      setGhostFrozen(false)
      setShowQuote(false)
      setQuoteText("")
      if (typeRef.current) clearInterval(typeRef.current)
      setGhostVisible(false)
    }, farewellDuration)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && ghostFrozen) releaseGhost()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [ghostFrozen])

  return (
    <>
      <style>{`
        @keyframes gameOverSlideIn {
          0%   { transform: translateY(-60px) scaleY(1.2); opacity: 0; }
          40%  { transform: translateY(8px) scaleY(0.96); opacity: 1; }
          60%  { transform: translateY(-4px) scaleY(1.01); }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes gameOverFlicker {
          0%,100% { opacity: 1; }
          92%     { opacity: 1; }
          93%     { opacity: 0; }
          94%     { opacity: 1; }
          96%     { opacity: 0; }
          97%     { opacity: 1; }
        }
        @keyframes scanlineFlash {
          0%   { opacity: 0; }
          10%  { opacity: 0.6; }
          100% { opacity: 0; }
        }
        @keyframes ghostSlideUp {
          from { transform: translateY(0); }
          to   { transform: translateY(-140px); }
        }
        @keyframes ghostSlideDown {
          from { transform: translateY(-140px); }
          to   { transform: translateY(0); }
        }
        @keyframes quotePopIn {
          0%   { opacity: 0; transform: scale(0.85) translateX(10px); }
          100% { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes redScanlines {
          0%   { background-position: 0 0; }
          100% { background-position: 0 4px; }
        }
      `}</style>

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
          overflow: "hidden",
        }}
      >
        {/* Red scanline flash on game over */}
        {gameOverIn && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1,
              background:
                "repeating-linear-gradient(0deg, rgba(255,0,0,0.04) 0px, rgba(255,0,0,0.04) 2px, transparent 2px, transparent 4px)",
              pointerEvents: "none",
              animation: "scanlineFlash 1.5s ease-out forwards",
            }}
          />
        )}

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
            zIndex: 0,
          }}
        >
          {EASTER_EGG}
        </div>

        {/* Ghostface */}
        <div
          onClick={handleGhostClick}
          style={{
            position: "fixed",
            bottom: -160,
            right: 40,
            width: 90,
            height: 120,
            zIndex: 20,
            cursor: ghostVisible ? "crosshair" : "default",
            transform: ghostFrozen
              ? "translateY(-140px)"
              : ghostVisible
              ? "translateY(-140px)"
              : "translateY(0px)",
            transition: ghostFrozen
              ? "none"
              : "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            filter: ghostFrozen
              ? "drop-shadow(0 0 12px rgba(255,255,255,0.5)) drop-shadow(0 0 24px rgba(255,0,0,0.3))"
              : "none",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ghostface.png"
            alt="Ghostface"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Ghostface dialogue bubble */}
        {showQuote && ghostFrozen && (
          <div
            style={{
              position: "fixed",
              bottom: 90,
              right: 120,
              zIndex: 21,
              animation: "quotePopIn 0.2s ease-out forwards",
              maxWidth: 220,
            }}
          >
            <div
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 6,
                color: "#555",
                marginBottom: 3,
                textAlign: "right",
                letterSpacing: 1,
              }}
            >
              PRESS{" "}
              <span
                style={{ color: "#ff006e" }}
                onClick={(e) => {
                  e.stopPropagation()
                  releaseGhost()
                }}
              >
                ESC
              </span>{" "}
              TO DISMISS
            </div>
            {/* Speech bubble */}
            <div
              style={{
                background: "#0a0a1a",
                border: "1px solid #fff",
                borderRadius: 4,
                padding: "10px 14px",
                position: "relative",
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 12,
                  color: "#fff",
                  lineHeight: 1.6,
                  margin: 0,
                  textAlign: "left",
                }}
              >
                {quoteText}
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 12,
                    background: "#fff",
                    marginLeft: 2,
                    verticalAlign: "middle",
                    animation: "blink 0.6s step-end infinite",
                  }}
                />
              </p>
              {/* Bubble tail */}
              <div
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: 1,
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "8px solid #fff",
                }}
              />
            </div>
            {/* Click hint */}
            <div
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 6,
                color: "#555",
                marginTop: 3,
                marginRight: 15,
                textAlign: "right",
                letterSpacing: 1,
              }}
            >
              CLICK GHOSTFACE FOR MORE
            </div>
          </div>
        )}

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* COUNTDOWN phase */}
          {phase === "countdown" && (
            <>
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
                  textShadow: "0 0 40px #ff006e, 0 0 80px rgba(255,0,110,0.3)",
                  lineHeight: 1,
                  marginBottom: 48,
                }}
              >
                {count}
              </div>
            </>
          )}

          {/* GAME OVER phase */}
          {phase === "gameover" && (
            <div
              style={{
                marginBottom: 48,
                opacity: gameOverIn ? 1 : 0,
                animation: gameOverIn
                  ? "gameOverSlideIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards, gameOverFlicker 4s 0.6s ease-in-out infinite"
                  : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: "clamp(28px, 6vw, 52px)",
                  color: "#ff006e",
                  textShadow:
                    "0 0 30px #ff006e, 0 0 60px rgba(255,0,110,0.4), 4px 4px 0 #800020",
                  letterSpacing: 4,
                  lineHeight: 1.3,
                }}
              >
                GAME
              </div>
              <div
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: "clamp(28px, 6vw, 52px)",
                  color: "#ff006e",
                  textShadow:
                    "0 0 30px #ff006e, 0 0 60px rgba(255,0,110,0.4), 4px 4px 0 #800020",
                  letterSpacing: 4,
                  lineHeight: 1.3,
                }}
              >
                OVER
              </div>
              <div
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: 8,
                  color: "#555",
                  letterSpacing: 3,
                  marginTop: 16,
                  animation: "blink 1s step-end infinite",
                }}
              >
                — OR IS IT? —
              </div>
            </div>
          )}

          {/* Contact links — always visible */}
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
    </>
  )
}
