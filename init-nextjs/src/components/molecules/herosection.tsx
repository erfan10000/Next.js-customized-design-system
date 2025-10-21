import { LuSparkles } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import { InitButton } from "../atoms/Button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <LuSparkles className="h-4 w-4" />
            <span>Modern Design System</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Build with{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            A comprehensive design system that provides the building blocks for creating consistent, accessible, and
            beautiful user interfaces across all your projects.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <InitButton size="full" className="gap-2 max-w-70">
              Get Started
              <FaLongArrowAltRight className="h-4 w-4" />
            </InitButton>
            <InitButton type="outline" size="full" className="max-w-70">
              View Components
            </InitButton>
          </div>
        </div>
      </div>
    </section>
  )
}