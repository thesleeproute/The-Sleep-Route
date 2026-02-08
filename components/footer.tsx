import Link from "next/link"

const footerLinks = [
  {
    title: "Support",
    links: [
      { name: "Baby Sleep", href: "/services#baby" },
      { name: "Toddler Sleep", href: "/services#toddler" },
      { name: "Sleep Patterns", href: "/services#patterns" },
      { name: "1:1 Consulting", href: "/services#consulting" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Safety", href: "/safety" },
      { name: "Contact", href: "/contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="font-serif text-xl tracking-tight text-foreground">
              The Sleep Route
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Gentle, nurse-led sleep support for babies and toddlers.
              Personalised plans rooted in safety, development, and
              evidence-based care.
            </p>
          </div>

          <div className="flex gap-16">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} The Sleep Route. All rights
            reserved. Sleep support, not diagnosis.
          </p>
        </div>
      </div>
    </footer>
  )
}
