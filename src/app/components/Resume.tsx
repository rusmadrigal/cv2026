"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { Resume as ResumeType, EducationItem, ExperienceItem } from "@/app/resumeData";

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
            <div>
              <h1 className="cv__name">{data.basics.name}</h1>
              <p className="cv__headline">{data.basics.headline}</p>

              <div className="cv__meta">
                <span>{data.basics.location}</span>
                <a href={`mailto:${data.basics.email}`}>{data.basics.email}</a>

                {data.basics.linkedin ? (
                  <a href={data.basics.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                ) : null}

                {data.basics.website ? (
                  <a href={data.basics.website} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>

            <button type="button" onClick={() => handleDownloadPDF()} className="cv__pdfBtn">
              Download PDF
            </button>
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

            {/* Education */}
            <section className="cv__section">
              <h2 className="cv__title">Education</h2>

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
