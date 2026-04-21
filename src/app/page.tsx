"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/layout/Navbar"
import LandingSection from "@/components/sections/LandingSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection from "@/components/sections/ContactSection"
import ProjectModal from "@/components/ui/ProjectModal"
import { PROJECTS, type Project } from "@/lib/config"

export type PageId = "landing" | "about" | "projects" | "contact"

export default function Home() {
  const [activePage, setActivePage] = useState<PageId>("landing")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [navTrigger, setNavTrigger] = useState(0)

  const navigate = (page: PageId) => {
    setActivePage(page)
    setNavTrigger((n) => n + 1)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      setNavTrigger((n) => n + 1)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div className="scanlines" />
      <div className="crt-flicker" />

      <Navbar
        activePage={activePage}
        navigate={navigate}
        scrolled={scrolled}
        triggerCount={navTrigger}
      />

      <main>
        {activePage === "landing" && (
          <LandingSection key="landing" navigate={navigate} />
        )}
        {activePage === "about" && <AboutSection key="about" />}
        {activePage === "projects" && (
          <ProjectsSection
            key="projects"
            projects={PROJECTS}
            onSelect={setSelectedProject}
          />
        )}
        {activePage === "leaderboard" && (
          <LeaderboardSection key="leaderboard" />
        )}
        {activePage === "contact" && <ContactSection key="contact" />}
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
