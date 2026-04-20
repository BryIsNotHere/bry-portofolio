"use client"

import type { Project } from "@/lib/config"

interface Props {
  projects: Project[]
  onSelect: (p: Project) => void
}

export default function ProjectsSection({ projects, onSelect }: Props) {
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
      <div
        className="neon-blue"
        style={{
          fontFamily: "'Press Start 2P',monospace",
          fontSize: 10,
          letterSpacing: 3,
          marginBottom: 40,
        }}
      >
        <span style={{ color: "#555" }}>// </span>MY PROJECTS
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: 24,
        }}
      >
        {projects.map((p) => (
          <Card key={p.name} project={p} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}

function Card({
  project,
  onSelect,
}: {
  project: Project
  onSelect: (p: Project) => void
}) {
  return (
    <div
      onClick={() => onSelect(project)}
      style={{
        background: "#0d0d20",
        border: "1px solid #2a2a4a",
        position: "relative",
        overflow: "hidden",
        cursor: "crosshair",
        borderRadius: 2,
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = "#ff006e"
        el.style.boxShadow = "0 0 24px rgba(255,0,110,0.2)"
        el.style.transform = "translateY(-4px)"
        ;(el.querySelector(".sel") as HTMLElement).style.opacity = "1"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = "#2a2a4a"
        el.style.boxShadow = "none"
        el.style.transform = "translateY(0)"
        ;(el.querySelector(".sel") as HTMLElement).style.opacity = "0"
      }}
    >
      {/* Thumb */}
      <div
        style={{
          aspectRatio: "16/9",
          background: "linear-gradient(135deg,#0d0d20,#1a0a20)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #1a1a3a",
        }}
      >
        <div
          style={{
            aspectRatio: "16/9",
            background: "linear-gradient(135deg,#0d0d20,#1a0a20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid #1a1a3a",
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
              }}
            />
          ) : (
            <span
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 7,
                color: "#333",
              }}
            >
              [ SCREENSHOT ]
            </span>
          )}
        </div>
        <svg
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 60,
            opacity: 0.12,
          }}
          viewBox="0 0 60 80"
          fill="none"
        >
          <rect x="10" y="0" width="40" height="60" rx="4" fill="#fff" />
          <rect
            x="5"
            y="55"
            width="50"
            height="25"
            rx="2"
            fill="#fff"
            opacity="0.8"
          />
          <rect
            x="15"
            y="5"
            width="30"
            height="40"
            rx="2"
            fill="#000"
            opacity="0.4"
          />
        </svg>
      </div>
      {/* Info */}
      <div style={{ padding: 16 }}>
        <div
          className="neon-yellow"
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 8,
            letterSpacing: 1,
            marginBottom: 8,
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 11,
            color: "#888",
            marginBottom: 10,
          }}
        >
          {project.tag}
        </div>
        <div
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 6,
            color: "#555",
          }}
        >
          YEAR: {project.year}
        </div>
      </div>
      {/* Hover tag */}
      <div
        className="sel blink"
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          fontFamily: "'Press Start 2P',monospace",
          fontSize: 6,
          color: "#ff006e",
          opacity: 0,
          transition: "opacity 0.15s",
        }}
      >
        ▶ SELECT
      </div>
    </div>
  )
}
