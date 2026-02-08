import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Stethoscope, Heart, Shield, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "About | The Sleep Route",
  description:
    "Learn about the nurse-led, evidence-based approach behind The Sleep Route and the paediatric respiratory background informing our sleep guidance.",
}

const values = [
  {
    icon: Stethoscope,
    title: "Clinically Informed",
    description:
      "A paediatric respiratory nursing background means every recommendation is grounded in medical knowledge and clinical experience.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Safe sleep is the foundation of everything we do. Our guidance prioritises your child's safety above all else.",
  },
  {
    icon: Heart,
    title: "Gentle & Personalised",
    description:
      "No rigid methods or one-size-fits-all approaches. Every plan is tailored to your child and your family's needs.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based",
    description:
      "Our recommendations are informed by the latest evidence and best practice in paediatric sleep and development.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  About
                </p>
                <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl text-balance">
                  The nurse behind The Sleep Route
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  With a paediatric respiratory nursing background and a deep
                  understanding of child development, I created The Sleep Route
                  to help families find calm, safe, and restful sleep.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about.jpg"
                    alt="A caring nurse in a warm nursery setting"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="border-t border-border bg-card py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl text-balance">
              Why I chose holistic sleep support
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
              <p>
                After years working in paediatric respiratory care, I saw
                first-hand how sleep impacts every aspect of a child&apos;s
                health, development, and wellbeing. I also saw how exhausted and
                overwhelmed parents often felt, unsure where to turn for
                reliable, safe advice.
              </p>
              <p>
                I created The Sleep Route because I believe every family
                deserves access to sleep support that is medically informed,
                gentle, and personalised. Not rigid sleep training, but a
                thoughtful, step-by-step approach that respects your child&apos;s
                development and your family&apos;s unique needs.
              </p>
              <p>
                My paediatric respiratory background gives me a unique
                perspective on safe sleep, breathing, and environmental factors
                that many sleep consultants simply do not have. This clinical
                foundation, combined with a holistic view of routines,
                development, and family dynamics, is what makes The Sleep Route
                different.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-border bg-background p-6">
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;While I do not diagnose medical conditions, my guidance is
                informed by clinical experience, evidence-based practice, and a
                strong focus on safe sleep and child wellbeing.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Our Approach
              </p>
              <h2 className="mt-3 font-serif text-2xl tracking-tight text-foreground md:text-3xl text-balance">
                What guides everything we do
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col rounded-xl border border-border bg-card p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl text-balance">
                Let us walk this route together
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                If you are looking for calm, credible, and personalised sleep
                support, I would love to help your family find its way to
                better rest.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
