import React from 'react'
import { ExternalLink } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Gallery from '../ui/Gallery'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/content'

const Projects = () => (
  <section id="projects" className="scroll-mt-20 py-12 md:py-20">
    <SectionHeading title="Projects" description="Selected products I have built and the impact I contributed." />

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <Card
          key={project.name}
          as="article"
          className={`flex flex-col ${project.featured ? 'md:col-span-2' : ''}`}
        >
          {project.highlight && (
            <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-berry-soft px-3 py-1 text-xs font-semibold text-berry">
              <span className="h-1.5 w-1.5 rounded-full bg-berry" aria-hidden />
              {project.highlight}
            </p>
          )}

          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <h3 className="text-lg font-bold">{project.name}</h3>
            {project.links && (
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {project.links.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                    >
                      {label}
                      <ExternalLink size={14} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-muted">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {project.images && <Gallery images={project.images} label={project.name} />}
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>
)

export default Projects
