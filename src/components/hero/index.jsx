import React from 'react'
import profilePic from './../../assets/profile.webp'
import Card from '../ui/Card'
import { profile, stats } from '../../data/content'

const Hero = () => (
  <section id="about" className="scroll-mt-20 py-10 md:py-16">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
      <Card className="flex flex-col justify-center p-8 md:col-span-4 md:p-10">
        <p className="text-sm font-semibold text-brand">
          {profile.role} · {profile.company}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">{profile.summary}</p>
        <div className="mt-3 space-y-1 text-sm text-muted">
          <p>{profile.location}</p>
          <p>{profile.education}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#experience"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
          >
            Contact Me
          </a>
        </div>
      </Card>

      <Card className="overflow-hidden p-0 md:col-span-2">
        <img
          src={profilePic}
          alt={`Illustrated portrait of ${profile.name}`}
          className="h-full max-h-64 w-full object-cover object-top md:max-h-none"
        />
      </Card>

      {stats.map(({ value, label, small }) => (
        <Card key={label} className="md:col-span-2">
          <p className={`font-bold tracking-tight text-brand ${small ? 'text-xl leading-9' : 'text-4xl'}`}>{value}</p>
          <p className="mt-1 text-sm text-muted">{label}</p>
        </Card>
      ))}
    </div>
  </section>
)

export default Hero
