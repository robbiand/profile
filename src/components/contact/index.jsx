import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import { contacts } from '../../data/content'

const tints = ['bg-brand-soft text-brand', 'bg-accent-soft text-accent', 'bg-berry-soft text-berry', 'bg-brand-soft text-brand']
const icons = { mail: Mail, linkedin: Linkedin, github: Github, phone: Phone }

const Contact = () => (
  <section id="contact" className="scroll-mt-20 py-12 md:py-20">
    <SectionHeading title="Contact" description="Open to discussing work opportunities and collaboration." />

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {contacts.map(({ label, value, href, icon }, i) => {
        const Icon = icons[icon]
        return (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="group block"
          >
            <Card className="flex items-center gap-4 group-hover:border-brand">
              <span className={`rounded-lg p-3 ${tints[i % tints.length]}`}>
                <Icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
            </Card>
          </a>
        )
      })}
    </div>

    <footer className="mt-16 border-t border-line pt-6 text-sm text-muted">
      © {new Date().getFullYear()} Andrian Robby Pratama
    </footer>
  </section>
)

export default Contact
