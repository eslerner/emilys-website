import { ExternalLink, FolderHeart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/siteData';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 border-b border-clay">
      <div className="flex items-center gap-2 mb-8">
        <FolderHeart className="w-6 h-6 text-terracotta" />
        <h2 className="text-2xl font-bold text-espresso">Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between p-6 bg-sand/70 border border-clay rounded-2xl hover:border-terracotta/50 hover:shadow-sm transition"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-espresso">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-taupe">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-terracotta transition"
                      aria-label="Source Code"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-terracotta transition"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-taupe leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-sage bg-sage-soft px-3 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
