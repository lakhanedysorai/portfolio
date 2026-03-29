import { CONTACT_EMAIL, MAILTO_HREF } from "../lib/contact";
import { HeroButtons } from "./HeroButtons";
import { Reveal } from "./Reveal";

export function PortfolioContent() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-section__glow" aria-hidden />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="greeting">Hi, I&apos;m</div>
              <p className="hero-badge">
                <span className="hero-badge__dot" aria-hidden />
                Open to opportunities · 6+ yrs shipping production
              </p>
              <h1 className="hero-title">
                <span className="hero-title__gradient">Lakhan Sharma</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              <p className="hero-description">
                Full Stack Developer with 6+ years of experience in frontend and
                backend development, specializing in the MERN stack and PHP
                frameworks. Expert in building responsive UIs with React and
                scalable backends using Express.js and Laravel.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <svg
                    className="icon"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Udaipur, Rajasthan 313001</span>
                </div>
                <div className="contact-item">
                  <svg
                    className="icon"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 8949497570</span>
                </div>
                <div className="contact-item">
                  <svg
                    className="icon"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>
                    <a href={MAILTO_HREF}>{CONTACT_EMAIL}</a>
                  </span>
                </div>
                <div className="contact-item">
                  <svg
                    className="icon"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/lakhan-sharmaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/lakhan-sharmaa
                  </a>
                </div>
              </div>
              <HeroButtons />
            </div>
            <div className="hero-image-container">
              <div className="profile-ring" />
              <div className="hero-avatar-fallback">LS</div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <Reveal>
          <div className="container">
            <h2 className="section-title">
              <span className="section-title__accent" aria-hidden />
              <svg
                className="icon-large"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span className="section-title__text">Professional Experience</span>
            </h2>
          <div className="experience-list">
            <ExperienceCard
              title="Sr. Full Stack Developer"
              company="EdysorAI (Udaipur)"
              period="Jun 2025 – Present"
              location="Udaipur"
              points={[
                "Led architecture, database design, and end-to-end development of scalable B2B SaaS and HR automation platforms using Node.js, FastAPI, and React, managing a team of 10 engineers and delivering production-grade systems.",
                "Built fully automated, AI-powered, 24/7 event-driven systems (Kafka) for business operations and recruitment workflows, reducing operational costs by ~55% and ~47% while eliminating manual intervention.",
                "Designed and deployed resilient, high-performance systems with CI/CD pipelines (Jenkins, ArgoCD), optimizing queries and response times to improve system throughput, reliability, and uptime for distributed services.",
                "Ensured enterprise-grade compliance (GDPR, ISO, DPDP Act) and system stability by resolving production issues, driving POCs for new technologies, and implementing robust testing (Pytest).",
              ]}
            />
            <ExperienceCard
              title="Sr. Full Stack Developer"
              company="Webanix Solutions (Udaipur)"
              period="Nov 2020 – Jun 2025"
              location="Udaipur"
              points={[
                "Built and scaled multiple B2B web applications using React, Node.js, Express, Laravel, and MongoDB/MySQL, delivering high-performance and maintainable systems.",
                "Designed and owned backend architecture for billing and order management systems, handling async workflows, role-based access, and third-party integrations.",
                "Engineered a custom billing system that recovered ~80% of unpaid invoices, significantly improving revenue flow and financial efficiency.",
                "Systematized order tracking and approval workflows, reducing processing time from 30–45 days to under 7 days and accelerating business operations.",
                "Guided digital transformation initiatives, converting manual, paper-based processes into fully mechanized systems, reducing operational overhead by ~90%.",
                "Managed a team of 7–8 developers, driving code quality (code reviews, Jest/Pest testing), database optimization, and consistent on-time delivery of scalable solutions.",
              ]}
            />
            <ExperienceCard
              title="QA Tester"
              company="NoverERP (Hybrid)"
              period="Sep 2020 – Nov 2020"
              location="Hybrid"
              points={[
                "Implemented automation testing using JMeter and Selenium (Java), delivering ~85% bug-free, client-ready releases, and contributed to building a scalable ERP platform with Next.js for a solar domain client.",
              ]}
            />
            <ExperienceCard
              title="Web Developer"
              company="Papasiddhi"
              period="Feb 2020 – Sep 2020"
              location="Udaipur"
              points={[
                "Built and optimized a Laravel & CodeIgniter portal for Zambia's pollution control permits, automating workflows and reducing ~35% paperwork, enabling fully online submissions for all companies and improving government service efficiency.",
              ]}
            />
          </div>
          </div>
        </Reveal>
      </section>

      <section id="projects" className="section projects-section">
        <Reveal delayMs={60}>
          <div className="container">
            <h2 className="section-title">
              <span className="section-title__accent" aria-hidden />
              <svg
                className="icon-large"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span className="section-title__text">Featured Projects</span>
            </h2>
          <div className="projects-grid">
            <ProjectCard
              title="Web Portals"
              description="Created Dharohar, Bharat Aatma, Third.space, Five5 Digital, Webank Solutions, Eragon."
              tags={["React", "Node.js", "MongoDB", "Next.js", "Docker"]}
            />
            <ProjectCard
              title="CRM/ERP Solutions"
              description="Developed 20M Konnect, Abhi Construction, WebPM, UCCI."
              tags={["MERN", "MySQL", "REST API"]}
            />
            <ProjectCard
              title="E-commerce Platform"
              description="Built Minfert, NM, India, 20 MCC, Price360, Vaibhav Stores, Makeup biography."
              tags={["MERN Stack", "Next.js", "Laravel", "Docker"]}
            />
            <ProjectCard
              title="AI-Powered HR Automation Platform"
              description="Worked on gorec.ai, edysorai."
              tags={["Node.js", "FastAPI", "Kafka", "React"]}
            />
            <ProjectCard
              title="Zambia Pollution Control Portal"
              description="ZEMA."
              tags={["Laravel", "CodeIgniter", "PHP", "MySQL"]}
            />
            
          </div>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="section skills-section">
        <Reveal delayMs={40}>
          <div className="container">
            <h2 className="section-title">
              <span className="section-title__accent" aria-hidden />
              <svg
                className="icon-large"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span className="section-title__text">Technical Skills</span>
            </h2>
          <div className="skills-grid">
            <SkillBlock
              category="Languages"
              tags={[
                "JavaScript",
                "TypeScript",
                "PHP",
                "SQL",
                "Python",
              ]}
            />
            <SkillBlock
              category="Frontend"
              tags={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "Bootstrap",
                "CSS",
              ]}
            />
            <SkillBlock
              category="Backend"
              tags={[
                "Node.js",
                "Express.js",
                "Laravel",
                "FastAPI",
                "CodeIgniter",
              ]}
            />
            <SkillBlock
              category="Databases"
              tags={["MySQL", "MongoDB", "PostgreSQL", "Oracle"]}
            />
            <SkillBlock
              category="Architecture"
              tags={[
                "REST APIs",
                "Microservices",
                "Event-Driven",
                "MVC",
                "GraphQL",
              ]}
            />
            <SkillBlock
              category="Testing"
              tags={[
                "Jest (JS)",
                "Pest (PHP)",
                "Pytest (Python)",
                "JMeter",
                "Selenium",
              ]}
            />
            <div className="skill-card skill-card-wide">
              <h3 className="skill-category">DevOps & Tools</h3>
              <div className="skill-tags">
                {[
                  "Docker",
                  "Kafka",
                  "Jenkins",
                  "ArgoCD",
                  "GitHub",
                  "GitLab",
                  "Bitbucket",
                  "CI/CD",
                  "AWS (basic)",
                  "Azure (basic)",
                  "MongoDB Atlas",
                  "Jira",
                  "Trello",
                ].map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="education-card">
            <h3 className="skill-category">Education</h3>
            <div className="education-content">
              <div>
                <p className="education-degree">Master of Computer Applications</p>
                <p className="education-university">
                  Janardan Rai Nagar Rajasthan Vidyapeeth University, DCS & IT
                  (Udaipur)
                </p>
              </div>
              <div className="education-meta">
                <p className="education-date">2013 – 2016</p>
                <p className="education-location">Udaipur</p>
              </div>
            </div>
            <div
              className="education-content"
              style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div>
                <p className="education-degree">
                  Bachelor of Computer Applications
                </p>
                <p className="education-university">
                  Janardan Rai Nagar Rajasthan Vidyapeeth University, DCS & IT
                  (Udaipur)
                </p>
              </div>
              <div className="education-meta">
                <p className="education-date">2016 – 2019</p>
                <p className="education-location">Udaipur</p>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      <section id="contact" className="section contact-section">
        <Reveal delayMs={80}>
          <div className="container">
            <h2 className="contact-title">Let&apos;s Build Something Together</h2>
          <p className="contact-description">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/lakhan-sharmaa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={MAILTO_HREF} className="social-link" aria-label="Email">
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
            <a href={MAILTO_HREF} className="btn btn-primary btn-primary--lg">
              Get In Touch
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} Lakhan Sharma.
          </p>
        </div>
      </footer>
    </>
  );
}

function CodeIcon() {
  return (
    <svg
      className="icon-medium"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  location,
  points,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3 className="experience-title">{title}</h3>
          <p className="experience-company">{company}</p>
        </div>
        <div className="experience-meta">
          <p className="experience-period">{period}</p>
          <p className="experience-location">{location}</p>
        </div>
      </div>
      <ul className="experience-points">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="project-card">
      <div className="project-header">
        <CodeIcon />
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillBlock({
  category,
  tags,
}: {
  category: string;
  tags: string[];
}) {
  return (
    <div className="skill-card">
      <h3 className="skill-category">{category}</h3>
      <div className="skill-tags">
        {tags.map((t) => (
          <span key={t} className="skill-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
