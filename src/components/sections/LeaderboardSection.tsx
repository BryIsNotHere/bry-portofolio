"use client";

import { useEffect, useRef } from "react";
import { LEADERBOARD } from "@/lib/config";

const RANK_COLORS: Record<number, string> = { 0:"#ffe600", 1:"#aaaaaa", 2:"#c87533" };

export default function LeaderboardSection() {
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = matrixRef.current;
    if (!el || el.childElementCount > 0) return;
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
    for (let i = 0; i < 22; i++) {
      const col = document.createElement("div");
      let text = "";
      for (let j = 0; j < 35; j++) text += chars[Math.floor(Math.random() * chars.length)] + "\n";
      col.textContent = text;
      col.style.cssText = `
        position:absolute;top:0;left:${i*4.8}%;
        font-family:'Share Tech Mono',monospace;font-size:12px;
        color:#39ff14;line-height:1.4;opacity:0.12;white-space:pre;
        animation:matrixFall ${3+Math.random()*6}s ${-Math.random()*8}s linear infinite;
      `;
      el.appendChild(col);
    }
  }, []);

  return (
    <section className="page-in" style={{ minHeight:"100vh", paddingTop:112, paddingBottom:64, paddingLeft:"5%", paddingRight:"5%", maxWidth:700, margin:"0 auto", position:"relative" }}>
      {/* Matrix rain */}
      <div ref={matrixRef} style={{ position:"fixed", inset:0, zIndex:-1, overflow:"hidden", pointerEvents:"none" }} />

      <div className="neon-green" style={{ fontFamily:"'Press Start 2P',monospace", fontSize:10, letterSpacing:3, marginBottom:6 }}>
        HIGH SCORES
      </div>
      <div style={{ fontFamily:"'Press Start 2P',monospace", fontSize:7, color:"#555", letterSpacing:2, marginBottom:40 }}>
        // CAREER ACHIEVEMENTS — BRYAN.EXE
      </div>

      <table style={{ width:"100%", borderCollapse:"collapse" }}>
        <thead>
          <tr>
            {["#","TAG","ACHIEVEMENT","SCORE"].map((h,i) => (
              <th key={h} style={{ fontFamily:"'Press Start 2P',monospace", fontSize:6, color:"#555", letterSpacing:2,
                padding:"8px 12px", textAlign: i===3 ? "right" : "left", borderBottom:"1px solid #2a2a2a" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {LEADERBOARD.map((entry, i) => (
            <tr key={i} style={{ borderBottom:"1px solid #1a1a1a", transition:"background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background="rgba(57,255,20,0.04)")}
              onMouseLeave={e => (e.currentTarget.style.background="transparent")}>
              <td style={{ fontFamily:"'Press Start 2P',monospace", fontSize:8, color:RANK_COLORS[i]??"#555", padding:12, width:50 }}>{entry.rank}</td>
              <td style={{ fontFamily:"'Press Start 2P',monospace", fontSize:9, color:"#39ff14", textShadow:"0 0 6px #39ff14", padding:12, width:55 }}>{entry.initials}</td>
              <td style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:13, color:"#ccc", padding:12 }}>
                {entry.achievement}
                <small style={{ display:"block", fontSize:11, color:"#555", marginTop:2 }}>{entry.sub}</small>
              </td>
              <td style={{ fontFamily:"'Press Start 2P',monospace", fontSize:8, color:"#ffe600", textAlign:"right", padding:12, letterSpacing:1 }}>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="blink" style={{ fontFamily:"'Press Start 2P',monospace", fontSize:8, color:"#39ff14",
        textAlign:"center", marginTop:32, letterSpacing:2 }}>
        — ENTER YOUR INITIALS —
      </div>
    </section>
  );
}
