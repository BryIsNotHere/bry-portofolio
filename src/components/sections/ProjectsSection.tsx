"use client"

import { useState } from "react"
import type { Project } from "@/lib/config"

interface Props {
  projects: Project[]
  onSelect: (p: Project) => void
}

export default function ProjectsSection({ projects, onSelect }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleSelect = (project: Project, index: number) => {
    setActiveIndex(index)
    onSelect(project)
  }

  const featuredIndex = hoveredIndex !== null ? hoveredIndex : activeIndex
  const featured = projects[featuredIndex]

  return (
    <>
      <style>{`
        .projects-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
          flex: 1;
          min-width: 0;
        }
        .projects-grid-panel {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        @media (max-width: 768px) {
          .projects-layout {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .projects-grid-panel {
            order: -1;
          }
        }
      `}</style>

      <section
        className="page-in"
        style={{
          minHeight: "100vh",
          paddingTop: 100,
          paddingBottom: 64,
          paddingLeft: "4%",
          paddingRight: "4%",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          className="neon-blue"
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 10,
            letterSpacing: 3,
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#555" }}>// </span>MY PROJECTS
        </div>

        <div className="projects-layout">
          {/* LEFT — Featured preview panel */}
          <div
            onClick={() => featured && onSelect(featured)}
            style={{
              border: "1px solid #00f0ff",
              background: "#0a0a1a",
              position: "relative",
              overflow: "hidden",
              boxShadow:
                "0 0 40px rgba(0,240,255,0.08), inset 0 0 60px rgba(0,0,0,0.6)",
              minHeight: 480,
              display: "flex",
              flexDirection: "column",
              cursor: "crosshair",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ff006e"
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(255,0,110,0.12), inset 0 0 60px rgba(0,0,0,0.6)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#00f0ff"
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(0,240,255,0.08), inset 0 0 60px rgba(0,0,0,0.6)"
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, #00f0ff, #ff006e, #ffe600, #00f0ff)",
              }}
            />

            {/* Background grid */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Diagonal stripes */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,0,110,0.015) 40px, rgba(255,0,110,0.015) 80px)",
              }}
            />

            {/* Corner brackets */}
            {[
              {
                top: 12,
                left: 12,
                borderTop: "2px solid #00f0ff",
                borderLeft: "2px solid #00f0ff",
              },
              {
                top: 12,
                right: 12,
                borderTop: "2px solid #00f0ff",
                borderRight: "2px solid #00f0ff",
              },
              {
                bottom: 12,
                left: 12,
                borderBottom: "2px solid #00f0ff",
                borderLeft: "2px solid #00f0ff",
              },
              {
                bottom: 12,
                right: 12,
                borderBottom: "2px solid #00f0ff",
                borderRight: "2px solid #00f0ff",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{ position: "absolute", width: 20, height: 20, ...s }}
              />
            ))}

            {/* Click hint */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 6,
                color: "#ff006e",
                letterSpacing: 2,
                pointerEvents: "none",
                zIndex: 3,
                whiteSpace: "nowrap",
              }}
            >
              CLICK TO VIEW DETAILS
            </div>

            {/* Screenshot */}
            <div
              style={{
                position: "relative",
                flex: 1,
                overflow: "hidden",
                aspectRatio: "16/9",
                maxHeight: 360,
                background: "#000",
              }}
            >
              {featured?.images[0]?.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={featured.name}
                  src={featured.images[0].src}
                  alt={featured.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    opacity: 0.85,
                    transition: "opacity 0.3s",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Press Start 2P',monospace",
                      fontSize: 8,
                      color: "#333",
                    }}
                  >
                    [ NO SCREENSHOT ]
                  </span>
                </div>
              )}

              {/* Scanline overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
                  pointerEvents: "none",
                }}
              />

              {/* Bottom fade */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background: "linear-gradient(transparent, #0a0a1a)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Info panel */}
            <div
              style={{
                position: "relative",
                padding: "16px 20px 20px",
                zIndex: 2,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 16,
                  gap: 12,
                  minWidth: 0,
                }}
              >
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Press Start 2P',monospace",
                      fontSize: "clamp(8px, 2.5vw, 13px)",
                      color: "#ffe600",
                      textShadow:
                        "0 0 20px #ffe600, 0 0 40px rgba(255,230,0,0.3)",
                      letterSpacing: 2,
                      marginBottom: 10,
                      wordBreak: "break-word",
                    }}
                  >
                    {featured?.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Share Tech Mono',monospace",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "#888",
                      letterSpacing: 1,
                      wordBreak: "break-word",
                    }}
                  >
                    {featured?.tag}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Press Start 2P',monospace",
                    fontSize: 8,
                    color: "#39ff14",
                    border: "1px solid #39ff14",
                    padding: "6px 10px",
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                >
                  {featured?.year}
                </div>
              </div>

              {/* Action row */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    featured && onSelect(featured)
                  }}
                  style={{
                    fontFamily: "'Press Start 2P',monospace",
                    fontSize: 8,
                    padding: "10px 20px",
                    background: "transparent",
                    border: "1px solid #ff006e",
                    color: "#ff006e",
                    cursor: "crosshair",
                    borderRadius: 2,
                    letterSpacing: 1,
                    transition: "all 0.15s",
                    textShadow: "0 0 8px #ff006e",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ff006e"
                    e.currentTarget.style.color = "#080810"
                    e.currentTarget.style.textShadow = "none"
                    e.currentTarget.style.boxShadow = "0 0 20px #ff006e"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent"
                    e.currentTarget.style.color = "#ff006e"
                    e.currentTarget.style.textShadow = "0 0 8px #ff006e"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  VIEW DETAILS
                </button>
                <div
                  style={{
                    fontFamily: "'Press Start 2P',monospace",
                    fontSize: 7,
                    color: "#555",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    className="blink"
                    style={{ color: "#00f0ff", paddingBottom: 4 }}
                  >
                    ●
                  </span>
                  {featuredIndex + 1} / {projects.length}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Character select grid */}
          <div className="projects-grid-panel">
            <div
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 7,
                color: "#555",
                letterSpacing: 3,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              — SELECT PROJECT —
            </div>

            <div
              style={{
                border: "1px solid #2a2a4a",
                background: "#080810",
                flex: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, #00f0ff, transparent)",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 2,
                  padding: 2,
                }}
              >
                {projects.map((project, index) => (
                  <CharacterSlot
                    key={project.name}
                    project={project}
                    index={index}
                    isHighlighted={
                      hoveredIndex === index ||
                      (hoveredIndex === null && activeIndex === index)
                    }
                    onHover={() => setHoveredIndex(index)}
                    onLeave={() => setHoveredIndex(null)}
                    onSelect={() => handleSelect(project, index)}
                  />
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 10,
                border: "1px solid #1a1a2e",
                padding: "10px 14px",
                background: "#080810",
              }}
            >
              <div
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: 6,
                  color: "#333",
                  letterSpacing: 1,
                  lineHeight: 2,
                }}
              >
                <span style={{ color: "#00f0ff" }}>HOVER TO PREVIEW,</span>
                {"   "}
                <span style={{ color: "#ff006e" }}>CLICK FOR DETAILS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CharacterSlot({
  project,
  index,
  isHighlighted,
  onHover,
  onLeave,
  onSelect,
}: {
  project: Project
  index: number
  isHighlighted: boolean
  onHover: () => void
  onLeave: () => void
  onSelect: () => void
}) {
  return (
    <div
      onClick={onSelect}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        aspectRatio: "1/1",
        background: isHighlighted ? "#0d0d20" : "#090912",
        border: `1px solid ${isHighlighted ? "#ff006e" : "#1a1a2e"}`,
        cursor: "crosshair",
        overflow: "hidden",
        transition: "border-color 0.15s, box-shadow 0.15s, background 0.15s",
        boxShadow: isHighlighted
          ? "0 0 16px rgba(255,0,110,0.3), inset 0 0 20px rgba(255,0,110,0.05)"
          : "none",
      }}
    >
      {project.images[0]?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.images[0].src}
          alt={project.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: isHighlighted ? 0.9 : 0.35,
            filter: isHighlighted ? "none" : "grayscale(80%)",
            transition: "opacity 0.15s, filter 0.15s",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0d0d20, #1a0a20)",
          }}
        >
          <span
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: 5,
              color: "#333",
              textAlign: "center",
              padding: 4,
            }}
          >
            {project.name.slice(0, 8)}
          </span>
        </div>
      )}

      {/* Hover overlay */}
      {isHighlighted && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: 5,
              color: "#ff006e",
              textAlign: "center",
              letterSpacing: 1,
              lineHeight: 2,
              padding: "6px 8px",
              border: "1px solid #ff006e",
              background: "rgba(0,0,0,0.75)",
            }}
          >
            CLICK FOR
            <br />
            DETAILS
          </div>
        </div>
      )}

      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)",
          pointerEvents: "none",
        }}
      />

      {/* Name strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: isHighlighted
            ? "linear-gradient(transparent, rgba(255,0,110,0.85))"
            : "linear-gradient(transparent, rgba(0,0,0,0.85))",
          padding: "14px 4px 5px",
          transition: "background 0.15s",
        }}
      >
        <div
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 5,
            color: isHighlighted ? "#fff" : "#555",
            textAlign: "center",
            letterSpacing: 0.5,
            lineHeight: 1.4,
            textShadow: isHighlighted
              ? "0 0 8px rgba(255,255,255,0.5)"
              : "none",
            transition: "color 0.15s",
          }}
        >
          {project.name.length > 10
            ? project.name.slice(0, 10) + "…"
            : project.name}
        </div>
      </div>

      {isHighlighted && (
        <div
          style={{
            position: "absolute",
            top: 4,
            left: 4,
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 8,
            color: "#ff006e",
            textShadow: "0 0 8px #ff006e",
            animation: "blink 0.6s step-end infinite",
            pointerEvents: "none",
          }}
        >
          ▶
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: 4,
          right: 4,
          fontFamily: "'Press Start 2P',monospace",
          fontSize: 5,
          color: isHighlighted ? "#ff006e" : "#2a2a2a",
          transition: "color 0.15s",
          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  )
}
