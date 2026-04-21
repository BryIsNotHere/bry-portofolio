"use client"

import { useEffect, useRef, useState } from "react"
import type { PageId } from "@/app/page"

interface NavbarProps {
  activePage: PageId
  navigate: (page: PageId) => void
  scrolled: boolean
  triggerCount: number
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: "landing", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
]

const DOT_COUNT = 10
const LOOP_MS = 6000
const KICK_AT = 5200
const KICK_MS = 700
const FLYBACK_AT = KICK_AT + 80

// ── Sprite sheet measurements (px in the original 656×472 image) ──────────
// Row 1, Col 1 — idle standing pose
const IDLE_FRAME = { x: 30, y: 0, w: 110, h: 180 }
// Row 1, Col 2 — kick pose (big white leg extended left)
const KICK_FRAME = { x: 122, y: 0, w: 130, h: 160 }

// Render size inside the navbar (keep aspect ratio)
const SPRITE_H = 44 // navbar is 56px tall, leave a little breathing room
const IDLE_RW = Math.round((IDLE_FRAME.w / IDLE_FRAME.h) * SPRITE_H)
const KICK_RW = Math.round((KICK_FRAME.w / KICK_FRAME.h) * SPRITE_H)

// Scale factors from original → render size
const IDLE_SCALE = SPRITE_H / IDLE_FRAME.h
const KICK_SCALE = SPRITE_H / KICK_FRAME.h

export default function Navbar({
  activePage,
  navigate,
  scrolled,
}: NavbarProps) {
  const [eatenDots, setEatenDots] = useState<boolean[]>(
    Array(DOT_COUNT).fill(false)
  )
  const [kicking, setKicking] = useState(false)
  const [pacFlyback, setPacFlyback] = useState(false)

  const startTime = useRef<number>(performance.now())
  const rafId = useRef<number>(0)

  useEffect(() => {
    const tick = (now: number) => {
      const elapsed = (now - startTime.current) % LOOP_MS
      const progress = elapsed / LOOP_MS

      setEatenDots((prev) => {
        const next = [...prev]
        let changed = false
        for (let i = 0; i < DOT_COUNT; i++) {
          const dotP = (i + 1) / (DOT_COUNT + 1)
          if (!prev[i] && progress > dotP * 0.88) {
            next[i] = true
            changed = true
          }
          if (prev[i] && progress < 0.05) {
            next[i] = false
            changed = true
          }
        }
        return changed ? next : prev
      })

      setKicking(elapsed >= KICK_AT && elapsed < KICK_AT + KICK_MS)
      setPacFlyback(elapsed >= FLYBACK_AT && elapsed < LOOP_MS - 50)

      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId.current)
  }, [])

  const dotPositions = Array.from(
    { length: DOT_COUNT },
    (_, i) => `${((i + 1) / (DOT_COUNT + 1)) * 100}%`
  )

  return (
    <>
      <style>{`
        @keyframes pacmanWalk {
          0%   { left: -22px; }
          86%  { left: calc(100% - 36px); opacity: 1; }
          87%  { left: calc(100% - 36px); opacity: 1; }
          88%  { left: calc(100% - 36px); opacity: 0; }
          100% { left: -22px; opacity: 0; }
        }
        @keyframes pacmanFlyback {
          0%   { left: calc(100% - 36px); opacity:1; transform: translateY(-50%) rotate(0deg) scaleX(1); }
          60%  { left: 10%;               opacity:1; transform: translateY(-50%) rotate(-540deg) scaleX(-1); }
          90%  { left: -30px;             opacity:0; transform: translateY(-50%) rotate(-720deg) scaleX(-1); }
          100% { left: -30px;             opacity:0; transform: translateY(-50%) rotate(-720deg) scaleX(-1); }
        }
        @keyframes chomp {
          0%  { clip-path: polygon(50% 50%,100% 20%,100% 0%,0% 0%,0% 100%,100% 100%,100% 80%); }
          50% { clip-path: polygon(50% 50%,100% 35%,100% 0%,0% 0%,0% 100%,100% 100%,100% 65%); }
        }
        @keyframes juriIdle {
          0%,100% { transform: translateY(-50%); }
          50%      { transform: translateY(-53%); }
        }
        @keyframes juriKick {
          0%   { transform: translateY(-50%) scale(1); }
          20%  { transform: translateY(-53%) scale(1.06); }
          55%  { transform: translateY(-50%) scale(1.04); }
          100% { transform: translateY(-50%) scale(1); }
        }
        @keyframes kickEnergy {
          0%   { opacity:0;   transform: translateY(-50%) translateX(0)     scale(0.2); }
          15%  { opacity:1;   transform: translateY(-50%) translateX(-6px)  scale(1.3); }
          55%  { opacity:0.9; transform: translateY(-50%) translateX(-50px) scale(1); }
          100% { opacity:0;   transform: translateY(-50%) translateX(-90px) scale(0.4); }
        }
        @keyframes kickGlow {
          0%   { filter: drop-shadow(0 0 0px #a020f0); }
          50%  { filter: drop-shadow(0 0 10px #a020f0) drop-shadow(0 0 20px #cc44ff); }
          100% { filter: drop-shadow(0 0 4px #a020f0); }
        }
        @media (max-width: 768px) {
          .nav-mobile-border {
            border-color: #00f0ff !important;
            box-shadow: 0 0 20px rgba(0,240,255,0.3), inset 0 0 20px rgba(0,240,255,0.03) !important;
          }
          .arcade-lane {
            display: none !important;
          }
          .arcade-lane * {
            animation-play-state: paused !important;
          }
        }
        @media (max-width: 480px) {
          .nav-links-wrap {
            gap: 8px !important;
          }
          .nav-links-wrap button {
            font-size: 6px !important;
            padding: 3px 5px !important;
          }
        }
      `}</style>

      <nav
        className="nav-mobile-border"
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: 940,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          padding: "0 20px",
          background: "rgba(8,8,16,0.92)",
          border: `1px solid ${kicking ? "#a020f0" : "#00f0ff"}`,
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          boxShadow: kicking
            ? "0 0 24px rgba(160,32,240,0.5), inset 0 0 20px rgba(160,32,240,0.05)"
            : scrolled
            ? "0 0 30px rgba(0,240,255,0.4),inset 0 0 20px rgba(0,240,255,0.05)"
            : "0 0 20px rgba(0,240,255,0.3),inset 0 0 20px rgba(0,240,255,0.03)",
          transition: "box-shadow 0.3s, border-color 0.3s",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 9,
            color: "#ffe600",
            textShadow: "0 0 10px #ffe600",
            letterSpacing: 1,
            lineHeight: 1,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            paddingTop: 3,
          }}
        >
          P1<span style={{ paddingBottom: 5 }}>▶</span>
        </div>

        {/* Arcade lane */}
        <div
          className="arcade-lane"
          style={{
            flex: 1,
            position: "relative",
            height: "100%",
            overflow: "hidden",
            margin: "0 10px",
          }}
        >
          {/* Dots */}
          {dotPositions.map((left, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left,
                transform: "translate(-50%,-50%)",
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: eatenDots[i] ? "transparent" : "#ffe600",
                boxShadow: eatenDots[i] ? "none" : "0 0 4px #ffe600",
                opacity: eatenDots[i] ? 0 : 0.8,
                transition: "opacity 0.06s",
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Pac-Man walk */}
          {!pacFlyback && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: 18,
                height: 18,
                animation: "pacmanWalk 6s linear infinite",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  background: "#ffe600",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px #ffe600",
                  clipPath:
                    "polygon(50% 50%,100% 20%,100% 0%,0% 0%,0% 100%,100% 100%,100% 80%)",
                  animation: "chomp 0.2s steps(1) infinite",
                }}
              />
            </div>
          )}

          {/* Pac-Man flyback */}
          {pacFlyback && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                width: 18,
                height: 18,
                animation: "pacmanFlyback 0.7s ease-in forwards",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  background: "#ffe600",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px #ffe600",
                }}
              />
            </div>
          )}

          {/* Kick energy burst */}
          {kicking && (
            <div
              style={{
                position: "absolute",
                right: KICK_RW + 6,
                top: "50%",
                zIndex: 5,
                pointerEvents: "none",
                animation: "kickEnergy 0.65s ease-out forwards",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, #fff 0%, #c060ff 35%, #7010b0 65%, transparent 100%)",
                  boxShadow: "0 0 16px #a020f0, 0 0 32px rgba(160,32,240,0.5)",
                }}
              >
                {/* Inner core */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 0 8px #fff",
                  }}
                />
              </div>
              {/* Trailing sparks */}
              {[0, 1, 2].map((j) => (
                <div
                  key={j}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 20 + j * 7,
                    transform: "translateY(-50%)",
                    width: 6 - j * 1.5,
                    height: 6 - j * 1.5,
                    borderRadius: "50%",
                    background: "#a020f0",
                    opacity: 0.9 - j * 0.25,
                    boxShadow: `0 0 ${8 - j * 2}px #a020f0`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Juri sprite */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "90%",
              pointerEvents: "none",
              zIndex: 4,
              animation: kicking
                ? "juriKick 0.65s ease-out forwards, kickGlow 0.65s ease-out forwards"
                : "juriIdle 2s ease-in-out infinite",
              filter: kicking
                ? "drop-shadow(0 0 8px #a020f0) drop-shadow(0 0 16px #cc44ff)"
                : "drop-shadow(0 0 3px #7010b0)",
            }}
          >
            <JuriSprite kicking={kicking} />
          </div>
        </div>

        {/* Nav links */}
        <div
          className="nav-links-wrap"
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = activePage === link.id
            return (
              <button
                key={link.id}
                onClick={() => navigate(link.id)}
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: 7,
                  letterSpacing: 1,
                  padding: "4px 8px",
                  color: active ? "#00f0ff" : "#888",
                  border: `1px solid ${active ? "#00f0ff" : "transparent"}`,
                  borderRadius: 2,
                  textShadow: active ? "0 0 8px #00f0ff" : "none",
                  boxShadow: active ? "0 0 8px rgba(0,240,255,0.2)" : "none",
                  background: "none",
                  cursor: "crosshair",
                  transition: "all 0.15s",
                }}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

// ── Juri sprite ──────────────
function JuriSprite({ kicking }: { kicking: boolean }) {
  const frame = kicking ? KICK_FRAME : IDLE_FRAME
  const scale = kicking ? KICK_SCALE : IDLE_SCALE
  const rw = kicking ? KICK_RW : IDLE_RW

  return (
    <div
      style={{
        width: rw,
        height: SPRITE_H,
        transform: "translateY(-50%) scaleX(-1.4) scaleY(1.4)",
        imageRendering: "pixelated",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          // The sheet is rendered at IDLE_SCALE / KICK_SCALE of its original size
          width: Math.round(656 * scale),
          height: Math.round(472 * scale),
          backgroundImage: "url('/images/juri-sprite.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: `${Math.round(656 * scale)}px ${Math.round(
            472 * scale
          )}px`,
          // Offset so the chosen frame is in view
          backgroundPosition: `${-Math.round(frame.x * scale)}px ${-Math.round(
            frame.y * scale
          )}px`,
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}
