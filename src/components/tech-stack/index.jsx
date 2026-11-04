import React from 'react'
import Card from '../ui/Card'
import Badge, { tones } from '../ui/Badge'
import SectionHeading from '../ui/SectionHeading'
import { techStack } from '../../data/content'

const cycle = ['cobalt', 'teal', 'wine']

const TechStack = () => (
  <section id="tech-stack" className="scroll-mt-20 py-12 md:py-20">
    <SectionHeading
      title="Tech Stack"
      description="Technologies I use in my day-to-day work and past projects. Highlighted badges are my core skills."
    />

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {techStack.map(({ title, items, core, span }, i) => {
        const tone = cycle[i % cycle.length]
        const t = tones[tone]
        return (
          <Card key={title} className={span}>
            <h3 className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wide ${t.title}`}>
              <span className={`h-2 w-2 rounded-full ${t.dot}`} aria-hidden />
              {title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} tone={tone} strong={core.includes(item)}>
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        )
      })}
    </div>
  </section>
)

export default TechStack
