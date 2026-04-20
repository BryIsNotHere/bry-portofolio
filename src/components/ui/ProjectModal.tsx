"use client"

import { useEffect, useState } from "react"
import type { Project } from "@/lib/config"

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [zoomed, setZoomed] = useState<number | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        zoomed !== null ? setZoomed(null) : onClose()
      }
    }
    window.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [zoomed, onClose])

  return (
    <div
      onClick={() => (zoomed !== null ? setZoomed(null) : onClose())}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        className="modal-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0a1a",
          border: "1px solid #00f0ff",
          boxShadow: "0 0 60px rgba(0,240,255,0.15)",
          width: "100%",
          maxWidth: 680,
          maxHeight: "85vh",
          overflowY: "auto",
          borderRadius: 2,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px 16px",
            borderBottom: "1px solid rgba(0,240,255,0.15)",
            position: "sticky",
            top: 0,
            background: "#0a0a1a",
            zIndex: 10,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              className="neon-yellow"
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 10,
                letterSpacing: 1,
              }}
            >
              {project.name}
            </div>
            <div
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 7,
                color: "#555",
                marginTop: 6,
              }}
            >
              YEAR: {project.year}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: 8,
              background: "none",
              border: "1px solid #444",
              color: "#888",
              padding: "6px 10px",
              cursor: "crosshair",
              borderRadius: 2,
              transition: "all 0.15s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ff006e"
              e.currentTarget.style.color = "#ff006e"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#444"
              e.currentTarget.style.color = "#888"
            }}
          >
            ✕ CLOSE
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 24 }}>
          {project.images.map((img, i) => (
            <div key={i}>
              <div
                onClick={() => setZoomed(zoomed === i ? null : i)}
                style={{
                  aspectRatio: zoomed === i ? undefined : "16/9",
                  minHeight: 200,
                  background: "#1a1a2e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                  border: "1px solid #2a2a4a",
                  borderRadius: 2,
                  cursor: zoomed === i ? "zoom-out" : "zoom-in",
                  overflow: "hidden",
                  transition: "border-color 0.15s",
                  ...(zoomed === i
                    ? {
                        position: "fixed" as const,
                        inset: 20,
                        zIndex: 3000,
                        background: "#000",
                        borderColor: "#00f0ff",
                        boxShadow: "0 0 60px rgba(0,240,255,0.3)",
                      }
                    : {}),
                }}
                onMouseEnter={(e) => {
                  if (zoomed !== i)
                    e.currentTarget.style.borderColor = "#00f0ff"
                }}
                onMouseLeave={(e) => {
                  if (zoomed !== i)
                    e.currentTarget.style.borderColor = "#2a2a4a"
                }}
              >
                {img.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      background: "#0a0a0a",
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
                    [ SCREENSHOT {i + 1} ]
                  </span>
                )}
              </div>
              <p
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 12,
                  color: "#666",
                  marginBottom: 20,
                  paddingLeft: 8,
                  borderLeft: "2px solid #00f0ff",
                }}
              >
                {img.caption}
              </p>
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {project.desc.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 14,
                  color: "#ccc",
                  lineHeight: 1.8,
                }}
              >
                {para.text}{" "}
                {para.link && (
                  <a
                    href={para.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#00f0ff",
                      textDecoration: "none",
                      borderBottom: "1px solid #00f0ff",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.color = "#ffe600")
                    }
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.color = "#00f0ff")
                    }
                  >
                    {para.link.label}
                  </a>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
