import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Safety & Disclaimer | The Sleep Route",
  description:
    "Important information about the scope of our sleep guidance, medical disclaimers, and our commitment to safe, evidence-based support.",
}

const points = [
  {
    title: "Sleep support, not diagnosis",
    description:
      "The Sleep Route provides educational, supportive sleep guidance. We do not diagnose or treat medical conditions, and our service is not a replacement for medical advice.",
  },
  {
    title: "Medical care comes first",
    description:
      "We do not replace your GP, paediatrician, health visitor, or any other medical professional. If your child has a medical condition or you have concerns about their health, we always recommend seeking appropriate medical review first.",
  },
  {
    title: "Safety-first recommendations",
    description:
      "All our guidance is informed by current safe sleep best practice and evidence-based recommendations. Your child's safety is our absolute priority in every plan we create.",
  },
  {
    title: "Nurse-led, evidence-informed",
    description:
      "Our recommendations are informed by paediatric respiratory nursing experience and current evidence. This clinical background helps us provide guidance that is both safe and effective.",
  },
  {
    title: "Referrals encouraged",
    description:
      "Where we believe a medical review may be needed, we will always encourage you to speak with your child's healthcare provider. We work alongside medical care, not in place of it.",
  },
  {
    title: "Developmentally appropriate",
    description:
      "Every recommendation takes into account your child's age, stage of development, and individual needs. We never apply a one-size-fits-all approach.",
  },
]

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl text-balance">
              Safety & Medical Disclaimer
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Transparency and trust are central to everything we do. Here is
              important information about the scope of our service.
            </p>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="border-t border-border bg-card py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex flex-col gap-10">
              {points.map((point) => (
                <div key={point.title} className="flex flex-col gap-3">
                  <h2 className="font-serif text-xl text-foreground">
                    {point.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Phrases */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl text-balance text-center">
              Our commitment to you
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Nurse-led, evidence-informed guidance",
                "Safety-first recommendations",
                "Developmentally appropriate support",
                "Informed by paediatric respiratory experience",
              ].map((phrase) => (
                <div
                  key={phrase}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Shield className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {phrase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-base leading-relaxed text-muted-foreground">
              If you have any questions about our approach or would like to
              discuss your child&apos;s needs, we are here to help.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
