import React from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import SectionHeading from '../ui/SectionHeading'
import { techStack } from '../../data/content'

const TechStack = () => (
  <section id="tech-stack" className="scroll-mt-20 py-12 md:py-20">
    <SectionHeading
      title="Tech Stack"
      description="Technologies I use in my day-to-day work and past projects. Highlighted badges are my core skills."
    />

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {techStack.map(({ title, items, core, span }) => (
        <Card key={title} className={span}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <Badge key={item} strong={core.includes(item)}>
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>
)

export default TechStack
