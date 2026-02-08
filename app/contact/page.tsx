"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Clock, Heart, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We typically respond within 24 hours",
    detail: "hello@thesleeproute.com",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "Most enquiries answered within one working day",
    detail:
  },
  {
    icon: Heart,
    title: "No Judgement",
    description: "Every family's situation is different",
    detail: "We are here to help, not judge",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Contact
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl text-balance">
              Book a consultation
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us a little about your situation and we will be in touch to
              arrange your consultation.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="border-t border-border bg-card py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-2xl px-6">
            {submitted ? (
              <div className="flex flex-col items-center rounded-2xl border border-border bg-card px-8 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-6 font-serif text-2xl text-foreground">
                  Thank you for getting in touch
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  We have received your enquiry and will be in touch within one
                  working day. In the meantime, you might find our{" "}
                  <Link
                    href="/services"
                    className="text-primary underline underline-offset-4"
                  >
                    services page
                  </Link>{" "}
                  helpful.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 md:p-10"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex flex-1 flex-col gap-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-foreground"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-foreground"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="childAge"
                    className="text-sm font-medium text-foreground"
                  >
                    Child&apos;s age
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g. 6 months, 2 years"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Tell us about your situation
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Briefly describe your child's sleep patterns and what you'd like help with..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send Enquiry
                  <Send className="ml-2 h-4 w-4" />
                </button>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  By submitting this form, you agree to us contacting you
                  regarding your enquiry. We respect your privacy and will never
                  share your information. See our{" "}
                  <Link
                    href="/safety"
                    className="text-primary underline underline-offset-4"
                  >
                    safety and disclaimer
                  </Link>{" "}
                  page for more information.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
