import React from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import SectionHeading from '../ui/SectionHeading'
import { experience } from '../../data/content'

const Experience = () => (
  <section id="experience" className="scroll-mt-20 py-12 md:py-20">
    <SectionHeading title="Experience" description="Work history as a frontend and fullstack engineer since 2017." />

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {experience.map((job) => (
        <Card key={job.company} as="article" className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{job.period}</p>
          <h3 className="mt-2 text-lg font-bold">{job.role}</h3>
          <p className="text-sm font-medium text-brand">{job.company}</p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-muted">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          {job.tech.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {job.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          )}
        </Card>
      ))}
    </div>
  </section>
)

export default Experience
