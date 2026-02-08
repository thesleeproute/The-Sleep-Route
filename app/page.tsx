import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Heart, Baby, Users, ArrowRight, Moon, Sun, Clock, Check, X } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

const trustSignals = [
  {
    icon: Shield,
    title: "Paediatric Respiratory Background",
    description: "Clinical knowledge informing every recommendation",
  },
  {
    icon: Heart,
    title: "Nurse-Led Approach",
    description: "Medically informed, gentle, and evidence-based",
  },
  {
    icon: Baby,
    title: "Safe Sleep Focused",
    description: "Safety-first advice grounded in best practice",
  },
  {
    icon: Users,
    title: "1:1 Personalised Support",
    description: "Plans tailored to your child and family",
  },
]

const services = [
  {
    icon: Moon,
    title: "Baby Sleep Plans",
    description:
      "Gentle routines, safe sleep practices, and environment guidance for newborns and infants.",
    href: "/services#baby",
  },
  {
    icon: Sun,
    title: "Toddler Sleep Plans",
    description:
      "Support for night waking, early rising, transitions, and developmental sleep changes.",
    href: "/services#toddler",
  },
  {
    icon: Clock,
    title: "Sleep Pattern Support",
    description:
      "Understanding normal sleep expectations and developmental milestones.",
    href: "/services#patterns",
  },
  {
    icon: Users,
    title: "1:1 Consultations",
    description:
      "In-depth assessment and personalised written sleep plans with ongoing guidance.",
    href: "/services#consulting",
  },
]

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a relaxed conversation about your child, your family, and your sleep goals.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "A thorough review of sleep patterns, routines, environment, and any relevant health considerations.",
  },
  {
    number: "03",
    title: "Your Sleep Route Plan",
    description:
      "A personalised, written sleep plan with clear, gentle steps tailored to your child.",
  },
  {
    number: "04",
    title: "Ongoing Guidance",
    description:
      "Continued support and adjustments as your child develops and your family settles into a new routine.",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
                  Gentle, nurse-led sleep support
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Personalised sleep plans for babies and toddlers, rooted in
                  safety, development, and evidence-based care.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="A peaceful nursery with soft morning light"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="border-y border-border bg-card py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {trustSignals.map((signal) => (
                <div key={signal.title} className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <signal.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-medium text-foreground">
                    {signal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                What We Offer
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
                Sleep support tailored to your family
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Every child is different. Every family is unique. Our approach
                begins with understanding yours.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-y border-border bg-card py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                How It Works
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
                Your journey to better sleep
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <span className="font-serif text-4xl font-light text-primary/20">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-serif text-lg text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founding Families / Beta */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5" />
              <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-primary/5" />
              <div className="relative px-8 py-16 md:px-16">
                <div className="flex flex-col items-center text-center">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
                    Now Welcoming Families
                  </span>
                  <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
                    Join as a founding family
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    The Sleep Route is a brand-new, nurse-led sleep consultancy
                    and I am looking for my first families to work with. As a
                    founding family, you will receive personalised 1:1 support at
                    an introductory rate while helping shape the service from the
                    very beginning.
                  </p>
                  <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="flex flex-col items-center rounded-xl bg-card/80 border border-border p-6">
                      <span className="font-serif text-lg text-foreground">
                        Introductory Pricing
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Discounted rates for early families as I build my
                        practice
                      </p>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-card/80 border border-border p-6">
                      <span className="font-serif text-lg text-foreground">
                        Full Personalised Support
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        The same thorough, nurse-led care -- assessment, plan,
                        and follow-up
                      </p>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-card/80 border border-border p-6">
                      <span className="font-serif text-lg text-foreground">
                        Limited Availability
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Only a small number of founding family spots to ensure
                        dedicated attention
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Enquire About Founding Family Spots
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Is This Right for Us? */}
        <section className="border-y border-border bg-card py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Find Your Fit
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
                Is this right for your family?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Honest guidance matters. Here is a quick look at who The Sleep
                Route is designed for -- and when another type of support might
                be a better fit.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* This is for you */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
                <h3 className="font-serif text-xl text-foreground">
                  This is for you if...
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {[
                    "You want gentle, safety-led sleep support",
                    "You value medical insight and an understanding of development",
                    "You want a personalised plan, not rigid rules",
                    "You are looking for a nurse-led, evidence-based approach",
                    "You want someone who listens without judgement",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* This may not be for you */}
              <div className="rounded-xl border border-border bg-muted/50 p-8">
                <h3 className="font-serif text-xl text-foreground">
                  This may not be for you if...
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {[
                    "You want instant results or a quick-fix guarantee",
                    "You are looking for strict, cry-it-out sleep training",
                    "You need a medical diagnosis or clinical treatment",
                    "You want a one-size-fits-all programme",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted-foreground/10">
                        <X className="h-3 w-3 text-muted-foreground" />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Common Questions
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
                Frequently asked questions
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                We know you have questions -- here are honest answers to the
                ones we hear most often.
              </p>
            </div>
            <div className="mt-12">
              <FAQAccordion
                items={[
                  {
                    question: "Is this sleep training?",
                    answer:
                      "No. The Sleep Route does not use any form of cry-it-out or controlled crying. Our approach is gentle and responsive, focused on gradually building healthy sleep habits while always keeping your child\u2019s emotional needs at the centre. We work with your parenting style, not against it.",
                  },
                  {
                    question:
                      "How is this different from a sleep coach?",
                    answer:
                      "As a registered nurse with a paediatric respiratory background, I bring clinical insight that goes beyond standard sleep coaching. I consider your child\u2019s health, development, and temperament alongside their sleep, and I can recognise when something may need further medical attention.",
                  },
                  {
                    question:
                      "Will you tell us to leave our baby to cry?",
                    answer:
                      "Absolutely not. Every recommendation I make prioritises your baby\u2019s emotional wellbeing. You will never be asked to ignore your child. Our plans are built around responsiveness, comfort, and gradual change at a pace that feels right for your family.",
                  },
                  {
                    question: "What ages do you work with?",
                    answer:
                      "I work with families from the newborn stage through to toddlerhood (roughly 0\u20133 years). Sleep needs change dramatically during this period, and each plan is tailored to your child\u2019s specific age and developmental stage.",
                  },
                  {
                    question:
                      "What if my child has medical needs?",
                    answer:
                      "My nursing background means I\u2019m able to consider medical factors as part of your sleep plan. However, The Sleep Route is not a medical service. If I feel your child needs clinical assessment, I will always recommend you speak to your GP or health visitor. I\u2019m happy to work alongside your healthcare team.",
                  },
                  {
                    question: "Do you offer ongoing support?",
                    answer:
                      "Yes. All packages include follow-up support after your initial plan is delivered. I understand that sleep isn\u2019t a one-night fix -- it\u2019s a process. I\u2019m here to guide you through adjustments, answer questions, and provide reassurance as things settle.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center rounded-2xl bg-card border border-border px-8 py-16 text-center md:px-16">
              <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
                Ready to start your sleep route?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Every family deserves restful nights. Let us guide you with
                gentle, personalised support that puts your child&apos;s safety
                and wellbeing first.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
