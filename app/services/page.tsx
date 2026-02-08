import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Moon,
  Sun,
  Clock,
  Users,
  Shield,
  Wind,
  Thermometer,
  Brain,
  BookOpen,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | The Sleep Route",
  description:
    "Explore our baby sleep plans, toddler sleep support, sleep pattern guidance, and 1:1 consulting packages.",
}

const babyFeatures = [
  { icon: Shield, text: "Safe sleep practices and positioning" },
  { icon: Wind, text: "Respiratory and environment considerations" },
  { icon: Clock, text: "Understanding newborn sleep cycles" },
  { icon: Moon, text: "Gentle, age-appropriate routines" },
]

const toddlerFeatures = [
  { icon: Moon, text: "Night waking support" },
  { icon: Sun, text: "Early rising strategies" },
  { icon: Brain, text: "Developmental sleep changes" },
  { icon: BookOpen, text: "Behavioural and biological factors" },
]

const patternFeatures = [
  { icon: Clock, text: "Normal sleep expectations by age" },
  { icon: Brain, text: "Developmental milestones and sleep" },
  { icon: HeartHandshake, text: "Growth, learning, and emotional regulation" },
  { icon: Thermometer, text: "Environment optimisation" },
]

const packages = [
  {
    name: "Starter",
    description: "A focused consultation to get you on the right track.",
    features: [
      "30-minute initial assessment call",
      "Summary of key recommendations",
      "Email follow-up within 48 hours",
      "Safe sleep environment checklist",
    ],
  },
  {
    name: "Comprehensive",
    description: "Our most popular package with a full personalised plan.",
    features: [
      "60-minute in-depth assessment call",
      "Personalised written sleep plan",
      "Two weeks of follow-up support",
      "Routine and environment review",
      "Adjustments as needed",
    ],
    featured: true,
  },
  {
    name: "Premium",
    description: "Extended support for families who want ongoing guidance.",
    features: [
      "Everything in the Comprehensive package",
      "Four weeks of ongoing support",
      "Additional follow-up calls",
      "Developmental milestone check-ins",
      "Priority email and message support",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Our Services
                </p>
                <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl text-balance">
                  Sleep support for every stage
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  From newborns to toddlers, we offer personalised,
                  evidence-based sleep guidance tailored to your child and your
                  family.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/services.jpg"
                    alt="A calm, beautifully decorated baby nursery"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Baby Sleep Support */}
        <section id="baby" className="border-t border-border bg-card py-20 md:py-28 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Moon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                Baby Sleep Support
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              For newborns and infants, safe sleep is the foundation. We help you
              understand your baby&apos;s sleep needs, build gentle routines, and
              create a safe, supportive environment informed by paediatric
              respiratory experience.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {babyFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-start gap-4 rounded-lg border border-border bg-background p-5"
                >
                  <feature.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Toddler Sleep Support */}
        <section id="toddler" className="py-20 md:py-28 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Sun className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                Toddler Sleep Support
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Toddler sleep brings its own challenges. From night waking and
              early rising to transitions and developmental changes, we help you
              understand what is normal and what you can gently adjust.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {toddlerFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <feature.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sleep Patterns & Development */}
        <section id="patterns" className="border-t border-border bg-card py-20 md:py-28 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                Sleep Patterns & Development
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Sleep is not just about rest. It is essential for healthy growth,
              development, and emotional wellbeing. We help you understand what
              is normal at each stage and why sleep matters for your child&apos;s
              overall development.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {patternFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-start gap-4 rounded-lg border border-border bg-background p-5"
                >
                  <feature.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="consulting" className="py-20 md:py-28 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                  1:1 Consulting & Packages
                </h2>
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Choose the level of support that suits your family. Every package
                includes personalised, nurse-led guidance.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col rounded-xl border p-8 ${
                    pkg.featured
                      ? "border-primary bg-card shadow-sm"
                      : "border-border bg-card"
                  }`}
                >
                  {pkg.featured && (
                    <span className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-serif text-xl text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${
                      pkg.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border bg-transparent text-foreground hover:bg-accent"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
