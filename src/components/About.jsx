import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData, landingPageText } from '../data/siteData';


export default function About() {
  return (
    <section id="about" className="py-20 border-b border-clay">
      <div className="space-y-6">
        <div className="inline-block px-3.5 py-1 text-xs font-medium text-white bg-sage border border-sage/100 rounded-full">
          {landingPageText.calloutBubble}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-espresso">
          {landingPageText.welcomeHeader}
        </h1>

        <p className="text-xl text-taupe font-medium">
          {profileData.role}; {profileData.education}
        </p>

        <p className="text-espresso/90 leading-relaxed max-w-2xl">
          {profileData.bio}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {profileData.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-sand text-espresso border border-clay rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {profileData.githubHandles ? (
            profileData.githubHandles.map((gh) => (
              <a
                key={gh.url}
                href={gh.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-sm text-taupe hover:text-terracotta bg-sand hover:bg-blush/60 rounded-xl border border-clay transition"
                aria-label={gh.label}
              >
                <GithubIcon className="w-4 h-4 text-terracotta" />
                <span>{gh.label}</span>
              </a>
            ))
          ) : (
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 text-taupe hover:text-terracotta bg-sand hover:bg-blush/60 rounded-xl border border-clay transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 text-taupe hover:text-terracotta bg-sand hover:bg-blush/60 rounded-xl border border-clay transition"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          {/* <a
            href={`mailto:${profileData.email}`}
            className="p-2.5 text-taupe hover:text-terracotta bg-sand hover:bg-blush/60 rounded-xl border border-clay transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a> */}
        </div>
      </div>
    </section>
  );
}
