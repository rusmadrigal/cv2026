"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { Resume as ResumeType, EducationItem, ExperienceItem } from "@/app/resumeData";

const SOCIAL_HANDLE = "@rusmadrigal";

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={15}
      height={15}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={15}
      height={15}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Resume({ data }: { data: ResumeType }) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = useReactToPrint({
  contentRef,
  documentTitle: `${data.basics.name.replace(/\s+/g, "_")}_CV`,
  pageStyle: `@page{size:A4;margin:12mm;}
    @media print{
      .cv__pdfBtn{display:none!important;}
      .cv__sheet,.cv__section,.cv__item{break-inside:avoid;page-break-inside:avoid;}
      .cv__side{background:#fff!important;}
      *{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    }`,
});


  return (
    <main className="cv">
      {/* ✅ esto es lo que se imprime */}
      <div ref={contentRef} className="cv__sheet">
        {/* HEADER */}
        <header className="cv__top">
          <div className="cv__topRow">
            <div className="cv__topIntro">
              <h1 className="cv__name">{data.basics.name}</h1>
              <p className="cv__headline">{data.basics.headline}</p>

              <div className="cv__meta">
                <span>{data.basics.location}</span>
                <a href={`mailto:${data.basics.email}`}>{data.basics.email}</a>
                {data.basics.phone ? (
                  <a
                    href={`tel:+506${data.basics.phone.replace(/\D/g, "")}`}
                    title={`+506 ${data.basics.phone}`}
                  >
                    +506 {data.basics.phone}
                  </a>
                ) : null}

                {data.basics.linkedin ? (
                  <a
                    href={data.basics.linkedin}
                    className="cv__metaSocial"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`LinkedIn ${SOCIAL_HANDLE}`}
                  >
                    <IconLinkedIn className="cv__metaIcon" />
                    {SOCIAL_HANDLE}
                  </a>
                ) : null}

                {data.basics.website ? (
                  <a
                    href={data.basics.website}
                    className="cv__metaSocial"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub ${SOCIAL_HANDLE}`}
                  >
                    <IconGitHub className="cv__metaIcon" />
                    {SOCIAL_HANDLE}
                  </a>
                ) : null}

                {data.basics.personalWebsite ? (
                  <a href={data.basics.personalWebsite} target="_blank" rel="noreferrer">
                    www.rusmadrigal.com
                  </a>
                ) : null}
              </div>
            </div>

            <div className="cv__topPdf">
              <button type="button" onClick={() => handleDownloadPDF()} className="cv__pdfBtn">
                Download PDF
              </button>
            </div>
          </div>
        </header>

        {/* BODY */}
        <div className="cv__body">
          {/* LEFT */}
          <aside className="cv__side">
            {/* Summary */}
            <section className="cv__section">
              <h2 className="cv__title">Summary</h2>
              <div className="cv__summary">
                {data.basics.summary.map((item: string, i: number) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="cv__section">
              <h2 className="cv__title">Skills</h2>
              <div className="cv__skills">
                {data.basics.skills.map((skill: string) => (
                  <span key={skill} className="cv__badge">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            {data.basics.languages?.length ? (
              <section className="cv__section">
                <h2 className="cv__title">Languages</h2>
                <ul className="cv__list">
                  {data.basics.languages.map((lang: string) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </aside>

          {/* RIGHT */}
          <section className="cv__main">
            {/* Experience */}
            <section className="cv__section">
              <h2 className="cv__title">Experience</h2>

              {data.experience.map((job: ExperienceItem, i: number) => (
                <article key={i} className="cv__item">
                  <div className="cv__itemTop">
                    <div>
                      <div className="cv__role">{job.role}</div>
                      <div className="cv__company">
                        {job.company}
                        {job.location ? ` · ${job.location}` : ""}
                      </div>
                    </div>
                    <div className="cv__period">{job.period}</div>
                  </div>

                  <ul className="cv__list">
                    {job.highlights.map((h: string, j: number) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            {/* Education Summary */}
            <section className="cv__section">
              <h2 className="cv__title">Education Summary</h2>

              {data.education.map((edu: EducationItem, i: number) => (
                <article key={i} className="cv__item">
                  <div className="cv__itemTop">
                    <div>
                      <div className="cv__role">{edu.institution}</div>
                      <div className="cv__company">
                        {edu.program}
                        {edu.field ? ` · ${edu.field}` : ""}
                      </div>
                    </div>
                    <div className="cv__period">{edu.period}</div>
                  </div>
                </article>
              ))}
            </section>
          </section>
        </div>

        <footer className="cv__foot">Last updated · {new Date().getFullYear()}</footer>
      </div>
    </main>
  );
}
