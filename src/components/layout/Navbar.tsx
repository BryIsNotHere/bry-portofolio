"use client";

import { useEffect, useRef } from "react";
import type { PageId } from "@/app/page";

interface NavbarProps {
  activePage: PageId;
  navigate:   (page: PageId) => void;
  scrolled:   boolean;
  galaFiring: boolean;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: "landing",     label: "HOME"     },
  { id: "about",       label: "ABOUT"    },
  { id: "projects",    label: "PROJECTS" },
  { id: "leaderboard", label: "SCORES"   },
  { id: "contact",     label: "CONTACT"  },
];

export default function Navbar({ activePage, navigate, scrolled, galaFiring }: NavbarProps) {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trail = trailRef.current;
    if (!trail || trail.childElementCount > 0) return;
    for (let i = 0; i < 14; i++) {
      const dot = document.createElement("div");
      dot.style.cssText = `
        width:5px;height:5px;border-radius:50%;
        background:#ffe600;box-shadow:0 0 4px #ffe600;
        opacity:0.7;flex-shrink:0;
      `;
      trail.appendChild(dot);
    }
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 20, left: "50%",
        transform: "translateX(-50%)",
        width: "90%", maxWidth: 940,
        zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56, padding: "0 24px",
        background: "rgba(8,8,16,0.92)",
        border: "1px solid #00f0ff",
        borderRadius: 3,
        backdropFilter: "blur(10px)",
        boxShadow: scrolled
          ? "0 0 30px rgba(0,240,255,0.4),inset 0 0 20px rgba(0,240,255,0.05)"
          : "0 0 20px rgba(0,240,255,0.3),inset 0 0 20px rgba(0,240,255,0.03)",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Logo */}
      <div style={{ fontFamily:"'Press Start 2P',monospace", fontSize:9, color:"#ffe600", textShadow:"0 0 10px #ffe600", letterSpacing:1, flexShrink:0 }}>
        P1▶
      </div>

      {/* Arcade lane */}
      <div style={{ flex:1, position:"relative", height:"100%", overflow:"hidden", margin:"0 12px" }}>
        {/* Dot trail */}
        <div
          ref={trailRef}
          style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", left:0, display:"flex", gap:8, alignItems:"center" }}
        />

        {/* Pac-Man */}
        <div className="pacman-move" style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", width:18, height:18 }}>
          <div
            className="chomp"
            style={{ width:18, height:18, background:"#ffe600", borderRadius:"50%", boxShadow:"0 0 8px #ffe600",
              clipPath:"polygon(50% 50%,100% 20%,100% 0%,0% 0%,0% 100%,100% 100%,100% 80%)" }}
          />
        </div>

        {/* Galaga ship */}
        <div style={{ position:"absolute", bottom:2, left:"50%", transform:"translateX(-50%)", opacity: galaFiring ? 1 : 0, transition:"opacity 0.1s" }}>
          <div className={galaFiring ? "galaga-firing" : ""} style={{ position:"relative" }}>
            <div style={{ width:16, height:14, background:"#00f0ff",
              clipPath:"polygon(50% 0%,100% 100%,70% 80%,30% 80%,0% 100%)",
              boxShadow:"0 0 8px #00f0ff" }} />
            {galaFiring && (
              <div style={{ position:"absolute", width:2, height:14, background:"#ff006e",
                left:"50%", top:-18, transform:"translateX(-50%)", boxShadow:"0 0 6px #ff006e" }} />
            )}
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div style={{ display:"flex", gap:16, alignItems:"center", flexShrink:0 }}>
        {NAV_LINKS.map((link) => {
          const active = activePage === link.id;
          return (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 7, letterSpacing: 1,
                padding: "4px 8px",
                color: active ? "#00f0ff" : "#888",
                border: `1px solid ${active ? "#00f0ff" : "transparent"}`,
                borderRadius: 2,
                textShadow: active ? "0 0 8px #00f0ff" : "none",
                boxShadow:  active ? "0 0 8px rgba(0,240,255,0.2)" : "none",
                background: "none", cursor: "crosshair",
                transition: "all 0.15s",
              }}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
