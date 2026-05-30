// "use client";

// import { useState } from "react";

// // ─── Data ────────────────────────────────────────────────────────────────────
// const data = {
//   name: "Mahmoud Amr Hassan",
//   title: "Data Management Specialist · Data Engineer · Full Stack Developer",
//   contact: {
//     location: "Bani Suef, Egypt (Willing to Relocate)",
//     phone: "+201060027136",
//     email: "Mahmoud.amr.hassn@gmail.com",
//     linkedin: "https://www.linkedin.com/in/mahmoudamrhassan/",
//   },
//   summary:
//     "Results-driven Data Management Specialist with hands-on experience in leading data governance and quality initiatives using Informatica's enterprise solutions — PowerCenter, Axon, EDC, and DPM. Strong software development foundation from ITI and advanced data engineering training at NTI. Currently driving data management improvements at Bussma, optimizing workflows and ensuring compliance with best practices.",
//   skills: [
//     { label: "Data Governance", tags: ["Informatica Axon", "EDC", "DPM", "PowerCenter"] },
//     { label: "Data Engineering", tags: ["Azure Data Factory", "Apache Spark", "SSIS", "ETL Pipelines"] },
//     { label: "Databases", tags: ["SQL", "PostgreSQL", "MongoDB", "Data Warehousing"] },
//     { label: "Analytics", tags: ["Power BI", "Azure Synapse", "Pandas", "Python"] },
//     { label: "Full Stack", tags: ["React", "Angular", "Node.js", "Django", "Flask", "Laravel", "MERN"] },
//     { label: "Cloud", tags: ["Microsoft Azure", "Azure Data Factory", "Firebase"] },
//   ],
//   experience: [
//     {
//       role: "Data Management Specialist",
//       company: "Bussma",
//       location: "Cairo, Egypt",
//       period: "Jun 2025 – Present",
//       bullets: [
//         "Lead data governance and data quality initiatives using Informatica Axon, EDC, and DPM.",
//         "Standardized data handling and governance processes to ensure data integrity and compliance.",
//         "Collaborated with stakeholders to define data standards, metadata, and ownership models.",
//       ],
//     },
//     {
//       role: "Freelance Coach",
//       company: "E-Youth",
//       location: "Cairo, Egypt",
//       period: "Apr 2025 – Sep 2025",
//       bullets: [
//         "Delivered coaching sessions on leadership, entrepreneurship, and personal development.",
//         "Mentored youth participants to improve professional skills and career readiness.",
//       ],
//     },
//     {
//       role: "Freelancer – Full Stack Developer & Data Engineer",
//       company: "Self-Employed",
//       location: "Cairo, Egypt",
//       period: "Apr 2024",
//       bullets: [
//         "Designed and developed responsive web apps using React, Angular, Node.js, Django, and Flask.",
//         "Built and maintained ETL pipelines using SQL, Apache Spark, Pandas, and Python.",
//         "Implemented database solutions ensuring data accuracy, integrity, and optimized performance.",
//       ],
//     },
//     {
//       role: "Full Stack Developer (MERN Stack)",
//       company: "Firrans",
//       location: "Cairo, Egypt",
//       period: "Jan 2024 – Dec 2024",
//       bullets: [
//         "Developed scalable web applications using MongoDB, Express.js, React, and Node.js.",
//         "Integrated third-party APIs and implemented secure backend services.",
//         "Collaborated with cross-functional teams to deliver user-focused solutions.",
//       ],
//     },
//   ],
//   education: [
//     {
//       institution: "Bani Suef University",
//       degree: "Bachelor of Commerce – Accounting",
//       period: "Sep 2016 – May 2019",
//       note: "Grade: Good",
//     },
//     {
//       institution: "National Information Institute (NTI)",
//       degree: "Microsoft Data Engineer Track",
//       period: "Apr 2024 – Dec 2024",
//       note: "Azure Data Factory · Azure Synapse Analytics · Python",
//     },
//     {
//       institution: "Information Technology Institute (ITI) – Minya",
//       degree: "Full Stack Python Developer – Intensive",
//       period: "Nov 2023 – Apr 2024",
//       note: "React · Django · Flask · Firebase",
//     },
//     {
//       institution: "Information Technology Institute (ITI) – Bani Suef",
//       degree: "Software Development Fundamentals",
//       period: "Jun 2023 – Nov 2024",
//       note: "WordPress · Laravel · HTML/CSS/JS",
//     },
//   ],
//   projects: [
//     {
//       name: "STC Bank – Data Management & Governance",
//       tags: ["Informatica", "Metadata", "Data Privacy"],
//       desc: "Implemented data governance and quality practices in a banking environment. Supported metadata management, data classification, and privacy controls using Informatica governance tools.",
//     },
//     {
//       name: "CAE – Data Management & Governance",
//       tags: ["Informatica Axon", "EDC", "Data Quality"],
//       desc: "Participated in enterprise data management initiatives. Documented data domains, business terms, and metadata; supported governance workflows for consistency and trusted data usage.",
//     },
//     {
//       name: "Real Estate Market Analysis – Azure",
//       tags: ["Azure Data Factory", "Azure Synapse", "Cloud"],
//       desc: "Built a scalable cloud-based data engineering pipeline for real estate analytics using Azure Data Factory for ingestion and Azure Synapse for processing and querying.",
//     },
//     {
//       name: "Institute Management System",
//       tags: ["Python", "Data Handling"],
//       desc: "Designed and implemented a Python-based management system to simulate administrative and operational processes with structured programming and data handling techniques.",
//     },
//   ],
//   awards: [
//     {
//       title: "Certificate of Completion & Appreciation – Digital Egypt Pioneers Program",
//       org: "Ministry of Communications and Information Technology (MCIT)",
//       desc: "Awarded for outstanding leadership and exceptional contributions as a Team Leader.",
//     },
//   ],
//   certifications: [
//     "Google Data Analytics Certification",
//     "IBM Data Warehouse Engineer Professional Certificate",
//     "IBM Data Science Professional Certificate",
//     "Microsoft Power BI Desktop for Business Intelligence",
//     "Python Data Analysis – Udemy",
//     "Python Machine Learning – Udemy",
//     "Python Deep Learning – Udemy",
//     "Alteryx Boot Camp for Data Management",
//     "Informatica Tutorial: Beginner to Expert Level",
//     "Statistics in R Programming – Udemy",
//   ],
// };

// // ─── Helpers ─────────────────────────────────────────────────────────────────
// const NAV = ["About", "Skills", "Experience", "Projects", "Education", "Certifications"];

// const Tag = ({ children }) => (
//   <span style={{
//     display: "inline-block", padding: "2px 10px", borderRadius: 4,
//     background: "rgba(0,229,174,0.12)", color: "#00e5ae",
//     fontSize: 11, fontWeight: 600, letterSpacing: "0.05em",
//     border: "1px solid rgba(0,229,174,0.25)", marginRight: 6, marginBottom: 6,
//   }}>
//     {children}
//   </span>
// );

// // ─── Component ───────────────────────────────────────────────────────────────
// export default function MahmoudPortfolio() {
//   const [active, setActive] = useState("About");

//   const css = `
//     @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//     body { background: #080c12; }

//     .portfolio-root {
//       min-height: 100vh;
//       background: #080c12;
//       color: #c8d4e8;
//       font-family: 'DM Mono', monospace;
//       font-size: 14px;
//       line-height: 1.7;
//     }

//     /* ── Sidebar ── */
//     .sidebar {
//       position: fixed; top: 0; left: 0; bottom: 0;
//       width: 260px;
//       background: #0d1320;
//       border-right: 1px solid rgba(255,255,255,0.06);
//       padding: 40px 24px;
//       display: flex; flex-direction: column; gap: 0;
//       z-index: 100;
//       overflow-y: auto;
//     }
//     .sidebar-name {
//       font-family: 'Syne', sans-serif;
//       font-weight: 800; font-size: 20px;
//       color: #ffffff; line-height: 1.2; margin-bottom: 8px;
//     }
//     .sidebar-title {
//       font-size: 10px; letter-spacing: 0.08em;
//       color: #00e5ae; text-transform: uppercase; margin-bottom: 32px;
//     }
//     .nav-item {
//       display: block; width: 100%;
//       background: none; border: none; text-align: left;
//       padding: 10px 14px; margin-bottom: 2px; border-radius: 6px;
//       font-family: 'Syne', sans-serif; font-weight: 600; font-size: 13px;
//       color: #6b7a96; cursor: pointer; transition: all 0.2s;
//       letter-spacing: 0.04em;
//     }
//     .nav-item:hover { color: #c8d4e8; background: rgba(255,255,255,0.04); }
//     .nav-item.active { color: #00e5ae; background: rgba(0,229,174,0.08); }
//     .nav-item.active::before { content: '▸ '; }

//     .sidebar-contact {
//       margin-top: auto; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.06);
//     }
//     .contact-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-size: 11px; color: #6b7a96; }
//     .contact-row a { color: #6b7a96; text-decoration: none; transition: color 0.2s; word-break: break-all; }
//     .contact-row a:hover { color: #00e5ae; }
//     .contact-icon { color: #00e5ae; font-size: 13px; flex-shrink: 0; }

//     /* ── Main ── */
//     .main {
//       margin-left: 260px;
//       padding: 56px 60px;
//       max-width: 900px;
//     }

//     .section-header {
//       display: flex; align-items: center; gap: 16px; margin-bottom: 40px;
//     }
//     .section-num {
//       font-family: 'DM Mono', monospace; font-size: 11px;
//       color: #00e5ae; letter-spacing: 0.1em;
//     }
//     .section-title {
//       font-family: 'Syne', sans-serif; font-weight: 800; font-size: 32px;
//       color: #ffffff; letter-spacing: -0.02em;
//     }
//     .section-line {
//       flex: 1; height: 1px; background: rgba(255,255,255,0.08);
//     }

//     /* About */
//     .summary-box {
//       background: #0d1320;
//       border: 1px solid rgba(255,255,255,0.06);
//       border-left: 3px solid #00e5ae;
//       border-radius: 8px; padding: 28px 32px;
//       font-size: 14px; line-height: 1.8; color: #9ab0cc;
//     }

//     /* Skills */
//     .skill-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
//     .skill-card {
//       background: #0d1320; border: 1px solid rgba(255,255,255,0.06);
//       border-radius: 10px; padding: 20px;
//     }
//     .skill-label {
//       font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px;
//       color: #ffffff; margin-bottom: 12px; letter-spacing: 0.04em;
//     }

//     /* Timeline */
//     .timeline { position: relative; padding-left: 28px; }
//     .timeline::before {
//       content: ''; position: absolute; left: 0; top: 8px; bottom: 0;
//       width: 1px; background: rgba(0,229,174,0.2);
//     }
//     .tl-item { position: relative; margin-bottom: 40px; }
//     .tl-dot {
//       position: absolute; left: -32px; top: 6px;
//       width: 9px; height: 9px; border-radius: 50%;
//       background: #00e5ae; border: 2px solid #080c12;
//       box-shadow: 0 0 0 3px rgba(0,229,174,0.2);
//     }
//     .tl-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 4px; margin-bottom: 4px; }
//     .tl-role { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 16px; color: #ffffff; }
//     .tl-period { font-size: 11px; color: #00e5ae; letter-spacing: 0.06em; }
//     .tl-company { font-size: 12px; color: #6b7a96; margin-bottom: 12px; }
//     .tl-bullets { list-style: none; }
//     .tl-bullets li { padding: 3px 0 3px 16px; position: relative; color: #9ab0cc; font-size: 13px; }
//     .tl-bullets li::before { content: '–'; position: absolute; left: 0; color: #00e5ae; }

//     /* Projects */
//     .project-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
//     .project-card {
//       background: #0d1320; border: 1px solid rgba(255,255,255,0.06);
//       border-radius: 10px; padding: 24px;
//       transition: border-color 0.2s, transform 0.2s;
//     }
//     .project-card:hover { border-color: rgba(0,229,174,0.3); transform: translateY(-2px); }
//     .project-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; color: #ffffff; margin-bottom: 10px; }
//     .project-desc { font-size: 12px; color: #6b7a96; line-height: 1.7; margin-top: 12px; }

//     /* Education */
//     .edu-item { margin-bottom: 28px; padding-bottom: 28px; border-bottom: 1px solid rgba(255,255,255,0.05); }
//     .edu-item:last-child { border-bottom: none; }
//     .edu-inst { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 16px; color: #ffffff; }
//     .edu-degree { font-size: 13px; color: #9ab0cc; margin: 4px 0; }
//     .edu-meta { display: flex; gap: 20px; font-size: 11px; color: #6b7a96; }

//     /* Certifications */
//     .cert-list { list-style: none; columns: 2; gap: 24px; }
//     .cert-item { padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 13px; color: #9ab0cc; break-inside: avoid; }
//     .cert-item::before { content: '✦  '; color: #00e5ae; font-size: 10px; }

//     /* Award */
//     .award-card {
//       background: linear-gradient(135deg, rgba(0,229,174,0.06), rgba(0,229,174,0.02));
//       border: 1px solid rgba(0,229,174,0.2); border-radius: 10px; padding: 24px; margin-bottom: 32px;
//     }
//     .award-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; color: #ffffff; margin-bottom: 6px; }
//     .award-org { font-size: 11px; color: #00e5ae; letter-spacing: 0.06em; margin-bottom: 8px; text-transform: uppercase; }
//     .award-desc { font-size: 13px; color: #9ab0cc; }

//     /* Responsive */
//     @media (max-width: 900px) {
//       .sidebar { position: static; width: 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); flex-direction: row; flex-wrap: wrap; padding: 20px; }
//       .sidebar-contact { margin-top: 0; padding-top: 0; border-top: none; width: 100%; }
//       .main { margin-left: 0; padding: 32px 20px; }
//       .skill-grid, .project-grid { grid-template-columns: 1fr; }
//       .cert-list { columns: 1; }
//     }
//   `;

//   const sections = {
//     About: (
//       <>
//         <div className="section-header">
//           <span className="section-num">01</span>
//           <h2 className="section-title">About</h2>
//           <div className="section-line" />
//         </div>
//         <div className="summary-box">{data.summary}</div>
//         {data.awards.map((a, i) => (
//           <div key={i} className="award-card" style={{ marginTop: 24 }}>
//             <div className="award-title">🏆 {a.title}</div>
//             <div className="award-org">{a.org}</div>
//             <div className="award-desc">{a.desc}</div>
//           </div>
//         ))}
//       </>
//     ),
//     Skills: (
//       <>
//         <div className="section-header">
//           <span className="section-num">02</span>
//           <h2 className="section-title">Skills</h2>
//           <div className="section-line" />
//         </div>
//         <div className="skill-grid">
//           {data.skills.map((s) => (
//             <div key={s.label} className="skill-card">
//               <div className="skill-label">{s.label}</div>
//               <div>{s.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
//             </div>
//           ))}
//         </div>
//       </>
//     ),
//     Experience: (
//       <>
//         <div className="section-header">
//           <span className="section-num">03</span>
//           <h2 className="section-title">Experience</h2>
//           <div className="section-line" />
//         </div>
//         <div className="timeline">
//           {data.experience.map((e) => (
//             <div key={e.role + e.company} className="tl-item">
//               <div className="tl-dot" />
//               <div className="tl-header">
//                 <span className="tl-role">{e.role}</span>
//                 <span className="tl-period">{e.period}</span>
//               </div>
//               <div className="tl-company">{e.company} · {e.location}</div>
//               <ul className="tl-bullets">
//                 {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </>
//     ),
//     Projects: (
//       <>
//         <div className="section-header">
//           <span className="section-num">04</span>
//           <h2 className="section-title">Projects</h2>
//           <div className="section-line" />
//         </div>
//         <div className="project-grid">
//           {data.projects.map((p) => (
//             <div key={p.name} className="project-card">
//               <div className="project-name">{p.name}</div>
//               <div>{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
//               <div className="project-desc">{p.desc}</div>
//             </div>
//           ))}
//         </div>
//       </>
//     ),
//     Education: (
//       <>
//         <div className="section-header">
//           <span className="section-num">05</span>
//           <h2 className="section-title">Education</h2>
//           <div className="section-line" />
//         </div>
//         {data.education.map((e) => (
//           <div key={e.institution} className="edu-item">
//             <div className="edu-inst">{e.institution}</div>
//             <div className="edu-degree">{e.degree}</div>
//             <div className="edu-meta">
//               <span>{e.period}</span>
//               <span>{e.note}</span>
//             </div>
//           </div>
//         ))}
//       </>
//     ),
//     Certifications: (
//       <>
//         <div className="section-header">
//           <span className="section-num">06</span>
//           <h2 className="section-title">Certifications</h2>
//           <div className="section-line" />
//         </div>
//         <ul className="cert-list">
//           {data.certifications.map((c) => (
//             <li key={c} className="cert-item">{c}</li>
//           ))}
//         </ul>
//       </>
//     ),
//   };

//   return (
//     <div className="portfolio-root">
//       <style>{css}</style>

//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="sidebar-name">{data.name}</div>
//         <div className="sidebar-title">Data · Engineering · Dev</div>

//         <nav>
//           {NAV.map((item) => (
//             <button
//               key={item}
//               className={`nav-item${active === item ? " active" : ""}`}
//               onClick={() => setActive(item)}
//             >
//               {item}
//             </button>
//           ))}
//         </nav>

//         <div className="sidebar-contact">
//           <div className="contact-row">
//             <span className="contact-icon">📍</span>
//             <span>{data.contact.location}</span>
//           </div>
//           <div className="contact-row">
//             <span className="contact-icon">📞</span>
//             <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
//           </div>
//           <div className="contact-row">
//             <span className="contact-icon">✉</span>
//             <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
//           </div>
//           <div className="contact-row">
//             <span className="contact-icon">in</span>
//             <a href={data.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a>
//           </div>
//         </div>
//       </aside>

//       {/* Main content */}
//       <main className="main">
//         {sections[active]}
//       </main>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { FaChartPie } from "react-icons/fa";

// ─── Data ─────────────────────────────────────────────────────────────────────
const data = {
  name: "Mahmoud Amr Hassan",
  initials: "MAH",
  roles: ["Data Management Specialist", "Data Engineer", "Full Stack Developer"],
  contact: {
    location: "Bani Suef, Egypt (Willing to Relocate)",
    phone: "+201060027136",
    email: "Mahmoud.amr.hassn@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahmoudamrhassan/",
  },
  summary:
    "Results-driven Data Management Specialist with hands-on experience leading data governance and quality initiatives using Informatica's enterprise solutions — PowerCenter, Axon, EDC, and DPM. Strong software development foundation from ITI and advanced data engineering training at NTI. Currently driving data management improvements at Bussma, optimizing workflows and ensuring compliance with best practices.",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Certifications" },
    { value: "4+", label: "Major Projects" },
    { value: "6+", label: "Tech Stacks" },
  ],
  skills: [
    { label: "Data Governance", icon: "🛡", tags: ["Informatica Axon", "EDC", "DPM", "PowerCenter"] },
    { label: "Data Engineering", icon: "⚙️", tags: ["Azure Data Factory", "Apache Spark", "SSIS", "ETL Pipelines"] },
    { label: "Databases", icon: "🗄", tags: ["SQL", "PostgreSQL", "MongoDB", "Data Warehousing"] },
    { label: "Analytics & BI", icon: "📊", tags: ["Power BI", "Azure Synapse", "Pandas", "Python"] },
    { label: "Full Stack Dev", icon: "💻", tags: ["React", "Angular", "Node.js", "Django", "Flask", "Laravel", "MERN"] },
    { label: "Cloud Platforms", icon: "☁️", tags: ["Microsoft Azure", "Azure Data Factory", "Firebase"] },
  ],
  experience: [
    {
      role: "Data Management Specialist",
      company: "Bussma",
      location: "Cairo, Egypt",
      period: "Jun 2025 – Present",
      current: true,
      bullets: [
        "Lead data governance and data quality initiatives using Informatica Axon, EDC, and DPM.",
        "Standardized data handling and governance processes to ensure data integrity and compliance.",
        "Collaborated with stakeholders to define data standards, metadata, and ownership models.",
      ],
    },
    {
      role: "Freelance Coach",
      company: "E-Youth",
      location: "Cairo, Egypt",
      period: "Apr 2025 – Sep 2025",
      current: false,
      bullets: [
        "Delivered coaching sessions on leadership, entrepreneurship, and personal development.",
        "Mentored youth participants to improve professional skills and career readiness.",
      ],
    },
    {
      role: "Freelancer – Full Stack & Data Engineer",
      company: "Self-Employed",
      location: "Cairo, Egypt",
      period: "Apr 2024",
      current: false,
      bullets: [
        "Designed and developed responsive web apps using React, Angular, Node.js, Django, and Flask.",
        "Built and maintained ETL pipelines using SQL, Apache Spark, Pandas, and Python.",
        "Implemented database solutions ensuring data accuracy, integrity, and performance.",
      ],
    },
    {
      role: "Full Stack Developer (MERN Stack)",
      company: "Firrans",
      location: "Cairo, Egypt",
      period: "Jan 2024 – Dec 2024",
      current: false,
      bullets: [
        "Developed scalable web applications using MongoDB, Express.js, React, and Node.js.",
        "Integrated third-party APIs and implemented secure backend services.",
        "Collaborated with cross-functional teams to deliver user-focused solutions.",
      ],
    },
  ],
  projects: [
    {
      name: "Ahli Oman Bank – Data Governance",
      tags: ["Informatica Axon", "EDC", "DPM", "Data Quality"],
      desc: "Led end-to-end data governance implementation for Ahli Oman Bank. Established business glossary, data ownership models, and metadata cataloguing using Informatica Axon and EDC. Enforced data privacy controls via DPM to meet regulatory compliance.",
      accent: "#f59e0b",
      icon: "🏛",
      useCases: [
        { title: "Business Glossary Setup", detail: "Defined 200+ business terms and data domains aligned with banking standards across departments." },
        { title: "Data Lineage Mapping", detail: "Mapped end-to-end data lineage for core banking systems using Informatica EDC, enabling full traceability." },
        { title: "Privacy & Compliance", detail: "Applied DPM policies to classify PII and sensitive financial data, ensuring GDPR and local regulatory compliance." },
        { title: "Data Quality Rules", detail: "Configured Axon data quality scorecards to monitor completeness, accuracy, and consistency across datasets." },
      ],
    },
    {
      name: "STC Bank – Data Governance",
      tags: ["Informatica", "Metadata", "Data Privacy"],
      desc: "Implemented data governance and quality practices in a banking environment. Supported metadata management, data classification, and privacy controls using Informatica governance tools.",
      accent: "#00e5ae",
      icon: "🏦",
      useCases: [
        { title: "Metadata Management", detail: "Catalogued data assets across multiple source systems, enabling unified discovery and lineage tracking." },
        { title: "Data Classification", detail: "Tagged sensitive data fields and applied governance policies to ensure correct access control." },
        { title: "Privacy Controls", detail: "Configured DPM to enforce data masking and privacy rules on customer and transaction data." },
      ],
    },
    {
      name: "CAE – Data Management",
      tags: ["Informatica Axon", "EDC", "Data Quality"],
      desc: "Participated in enterprise data management initiatives. Documented data domains, business terms, and metadata; supported governance workflows for consistency and trusted data usage.",
      accent: "#4f9eff",
      icon: "🏢",
      useCases: [
        { title: "Data Domain Documentation", detail: "Structured and documented core data domains and ownership using Informatica Axon business glossary." },
        { title: "Governance Workflow", detail: "Configured stewardship workflows for data issue resolution and approval cycles across teams." },
        { title: "Enterprise Catalogue", detail: "Integrated EDC scans with source databases to auto-harvest and maintain up-to-date metadata." },
      ],
    },
    {
      name: "Real Estate Analysis – Azure",
      tags: ["Azure Data Factory", "Azure Synapse", "Cloud"],
      desc: "Built a scalable cloud-based data engineering pipeline for real estate analytics using Azure Data Factory for ingestion and Azure Synapse for processing and querying.",
      accent: "#a78bfa",
      icon: "🏙",
      useCases: [
        { title: "Data Ingestion", detail: "Designed ADF pipelines to ingest real estate data from multiple APIs and flat files into Azure Data Lake." },
        { title: "Transformation & Modelling", detail: "Transformed raw data using Azure Synapse SQL pools into star-schema models optimised for reporting." },
        { title: "Analytics Dashboards", detail: "Connected processed data to Power BI for market trend and pricing visualisations." },
      ],
    },
    {
      name: "Institute Management System",
      tags: ["Python", "Data Handling", "Backend"],
      desc: "Designed and implemented a Python-based management system to simulate administrative and operational processes with structured programming and data handling techniques.",
      accent: "#fb923c",
      icon: "🖥",
      useCases: [
        { title: "User & Record Management", detail: "Built CRUD operations for managing students, courses, and enrolments using Python data structures." },
        { title: "Workflow Automation", detail: "Automated administrative tasks such as scheduling, notifications, and report generation." },
        { title: "Data Validation", detail: "Implemented input validation and error handling to ensure data integrity across all operations." },
      ],
    },
  ],
  internships: [
    {
      org: "ITI – Minya Branch",
      track: "Full Stack Python Developer – Intensive",
      period: "Nov 2023 – Apr 2024",
      accent: "#00e5ae",
      projects: [
        {
          name: "E-Commerce Web Application",
          tech: ["React", "JavaScript", "CSS"],
          icon: "🛒",
          useCases: [
            { title: "Product Catalogue", detail: "Built dynamic product listing with filtering, search, and category navigation using React state." },
            { title: "Shopping Cart", detail: "Implemented add-to-cart, quantity update, and order summary with real-time total calculation." },
            { title: "Responsive UI", detail: "Designed mobile-first layouts ensuring consistent experience across all screen sizes." },
          ],
        },
        {
          name: "Full CRUD System",
          tech: ["Flask", "Django REST", "Firebase"],
          icon: "🔄",
          useCases: [
            { title: "RESTful API Design", detail: "Built complete REST APIs with Flask and Django for create, read, update, and delete operations." },
            { title: "Authentication", detail: "Integrated Firebase Authentication for secure user login, registration, and session management." },
            { title: "Data Persistence", detail: "Connected backend to Firebase Firestore for real-time data storage and retrieval." },
          ],
        },
        {
          name: "Crowd-Funding Platform",
          tech: ["Django", "PostgreSQL", "HTML/CSS"],
          icon: "💰",
          useCases: [
            { title: "Campaign Management", detail: "Allowed users to create, edit, and manage fundraising campaigns with goals and deadlines." },
            { title: "Donation Flow", detail: "Implemented contribution workflow with payment simulation and progress tracking per campaign." },
            { title: "User Dashboard", detail: "Built admin and user dashboards showing campaign stats, backers, and fund status." },
          ],
        },
        {
          name: "Healthcare Management App",
          tech: ["React", "REST API", "UI/UX"],
          icon: "🏥",
          useCases: [
            { title: "Appointment Scheduling", detail: "Developed interactive calendar UI for booking and managing patient appointments." },
            { title: "Patient Tracking", detail: "Built patient profile views displaying medical history, visit logs, and status indicators." },
            { title: "Dashboard Analytics", detail: "Visualised key metrics like daily appointments, occupancy, and patient flow on a summary dashboard." },
          ],
        },
        {
          name: "Database Engine (Bash)",
          tech: ["Bash Scripting", "Linux", "Shell"],
          icon: "🗄",
          useCases: [
            { title: "Table & Record CRUD", detail: "Simulated database operations — create tables, insert, update, delete, and select records via CLI." },
            { title: "File-Based Storage", detail: "Used structured flat files as storage backend with delimiter-separated values for portability." },
            { title: "Query Parsing", detail: "Parsed user commands to route operations to the correct handler scripts." },
          ],
        },
      ],
    },
    {
      org: "ITI – Bani Suef Branch",
      track: "Software Development Fundamentals",
      period: "Jun 2023 – Nov 2023",
      accent: "#4f9eff",
      projects: [
        {
          name: "WordPress E-Learning Platform (Mshroh)",
          tech: ["WordPress", "PHP", "LMS"],
          icon: "🎓",
          useCases: [
            { title: "Course Creation", detail: "Built structured course content with modules, lessons, and quizzes for higher education audiences." },
            { title: "Student Enrolment", detail: "Configured LMS plugin for user registration, enrolment management, and progress tracking." },
            { title: "Content Management", detail: "Set up WordPress CMS for instructors to publish, edit, and organise educational materials." },
          ],
        },
        {
          name: "E-Commerce – Clothing Store",
          tech: ["HTML", "CSS", "JavaScript"],
          icon: "👗",
          useCases: [
            { title: "Product Gallery", detail: "Designed responsive product grid with hover effects, image zoom, and category filters." },
            { title: "Cart & Checkout", detail: "Implemented client-side cart with item management and a multi-step checkout flow in vanilla JS." },
            { title: "Responsive Layout", detail: "Used CSS Flexbox and Grid to ensure the site adapts cleanly to mobile, tablet, and desktop." },
          ],
        },
        {
          name: "Project Posts Platform",
          tech: ["Laravel", "MySQL", "Blade"],
          icon: "📝",
          useCases: [
            { title: "User Authentication", detail: "Implemented Laravel Auth scaffolding for secure login, registration, and password reset." },
            { title: "Post Management", detail: "Built full CRUD for blog-style posts with rich text, tags, and author attribution." },
            { title: "Access Control", detail: "Applied role-based middleware to restrict editing and deletion to post owners only." },
          ],
        },
      ],
    },
  ],
  training: [
    {
      org: "National Information Institute (NTI)",
      track: "Microsoft Data Engineer Track",
      period: "Apr 2024 – Dec 2024",
      accent: "#a78bfa",
      projects: [
        {
          name: "Real Estate Market Analysis",
          tech: ["Azure Data Factory", "Azure Synapse", "Power BI"],
          icon: "🏙",
          useCases: [
            { title: "Cloud Ingestion Pipeline", detail: "Built ADF pipelines to pull real estate listings from APIs and CSV sources into Azure Data Lake Gen2." },
            { title: "Data Modelling", detail: "Created star-schema dimensional model in Azure Synapse SQL pool for efficient analytical querying." },
            { title: "Market Trend Dashboard", detail: "Connected Synapse to Power BI to deliver interactive reports on pricing trends and regional demand." },
          ],
        },
        {
          name: "Institute Management System",
          tech: ["Python", "OOP", "File I/O"],
          icon: "🏫",
          useCases: [
            { title: "Admin Operations", detail: "Implemented modules for managing students, staff, courses, and schedules with Python OOP." },
            { title: "Data Persistence", detail: "Used file I/O with CSV and JSON to store and retrieve records without a database dependency." },
            { title: "Report Generation", detail: "Automated summary report output for enrolment counts, grades, and attendance statistics." },
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: "Bani Suef University",
      degree: "Bachelor of Commerce – Accounting",
      period: "Sep 2016 – May 2019",
      note: "Grade: Good",
      icon: "🎓",
    },
    {
      institution: "National Information Institute (NTI)",
      degree: "Microsoft Data Engineer Track",
      period: "Apr 2024 – Dec 2024",
      note: "Azure Data Factory · Azure Synapse · Python",
      icon: "🏛",
    },
    {
      institution: "ITI – Minya Branch",
      degree: "Full Stack Python Developer – Intensive",
      period: "Nov 2023 – Apr 2024",
      note: "React · Django · Flask · Firebase",
      icon: "💡",
    },
    {
      institution: "ITI – Bani Suef Branch",
      degree: "Software Development Fundamentals",
      period: "Jun 2023 – Nov 2024",
      note: "WordPress · Laravel · HTML/CSS/JS",
      icon: "⌨️",
    },
  ],
  certifications: [
    { name: "Google Data Analytics Certification", org: "Google", icon: "🔵" },
    { name: "IBM Data Warehouse Engineer Professional Certificate", org: "IBM", icon: "🔷" },
    { name: "IBM Data Science Professional Certificate", org: "IBM", icon: "🔷" },
    { name: "Microsoft Power BI Desktop for Business Intelligence", org: "Microsoft", icon: "🟦" },
    { name: "Python Data Analysis", org: "Udemy – Mostafa Othman", icon: "🐍" },
    { name: "Python Machine Learning", org: "Udemy – Mostafa Othman", icon: "🐍" },
    { name: "Python Deep Learning", org: "Udemy – Mostafa Othman", icon: "🐍" },
    { name: "Alteryx Boot Camp for Data Management", org: "Alteryx", icon: "⚡" },
    { name: "Informatica Tutorial: Beginner to Expert Level", org: "Informatica", icon: "📦" },
    { name: "Statistics in R Programming", org: "Udemy – Mohammed Jarabe", icon: "📈" },
  ],
  award: {
    title: "Certificate of Completion & Appreciation – Digital Egypt Pioneers Program",
    org: "Ministry of Communications and Information Technology (MCIT)",
    desc: "Awarded for outstanding leadership and exceptional contributions as a Team Leader.",
  },
};

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "internships", label: "Internships" },
  { id: "training", label: "Training" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
];

// ─── Tag ──────────────────────────────────────────────────────────────────────
function Tag({ children, color = "#00e5ae" }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 11px", borderRadius: 4,
      background: `${color}18`, color, fontSize: 11, fontWeight: 600,
      letterSpacing: "0.05em", border: `1px solid ${color}30`,
      marginRight: 6, marginBottom: 6,
    }}>
      {children}
    </span>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ num, title }) {
  return (
    <div className="section-header">
      <span className="section-num">{num}</span>
      <div>
        <h2 className="section-title">{title}</h2>
        <div className="section-underline" />
      </div>
    </div>
  );
}

// ─── Pages ────────────────────────────────────────────────────────────────────
function HomePage({ goTo }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [spinning, setSpinning] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % data.roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section home-section">
      <div className="home-bg" />
      <div className="home-grid-overlay" />
      <div className="home-content">
        <div className="home-hero-row">
          {/* ── Text Side ── */}
          <div className="home-hero-text">
            <p className="home-greeting">HELLO, I'M</p>
            <h1 className="home-name">{data.name}</h1>
            <div className="home-role-row">
              <span className="home-role-static">I'm a&nbsp;</span>
              <span className="home-role-dynamic" key={roleIdx}>{data.roles[roleIdx]}</span>
            </div>
            <p className="home-tagline">
              Turning raw data into governance-grade assets &amp; scalable full-stack products.
            </p>
            <div className="home-cta-row">
              <button className="btn-primary" onClick={() => goTo("about")}>View My Work</button>
              <a className="btn-outline" href={`mailto:${data.contact.email}`}>Contact Me</a>
            </div>
            <div className="home-stats">
              {data.stats.map(s => (
                <div key={s.label} className="stat-block">
                  <span className="stat-val">{s.value}</span>
                  <span className="stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Avatar Side ── */}
          <div className="home-avatar-wrap">
            <div className="home-avatar-ring">
              <div className="home-avatar">
                {/* <span className="home-avatar-initials">MAH</span> */}
                <span className="home-avatar-initials">
  <div
  className="home-avatar-wrap"
  onClick={() => setSpinning(s => !s)}
  style={{ cursor: "pointer" }}
>
  <div
    className="home-avatar-ring"
    style={{ animationPlayState: spinning ? "paused" : "running" }}
  >
    <div className="home-avatar">
      <img
        src="/img.jpeg"
        alt="Mahmoud Amr Hassan"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>
</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="scroll-hint" onClick={() => goTo("about")}>
        scroll ↓
      </button>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="section">
      <SectionHeader num="01" title="About Me" />
      <div className="about-layout">
        <div className="about-card summary-card">
          <p className="card-eyebrow">// summary</p>
          <p className="about-text">{data.summary}</p>
        </div>
        <div className="about-side">
          <div className="about-card award-card">
            <div style={{ fontSize: 32, marginBottom: 12 }}>🏆</div>
            <p className="award-title">{data.award.title}</p>
            <p className="award-org">{data.award.org}</p>
            <p className="award-desc">{data.award.desc}</p>
          </div>
          <div className="about-card contact-card">
            <p className="card-eyebrow">// contact</p>
            <div className="contact-list">
              {[
                { icon: "📍", text: data.contact.location },
                { icon: "📞", text: data.contact.phone, href: `tel:${data.contact.phone}` },
                { icon: "✉️", text: data.contact.email, href: `mailto:${data.contact.email}` },
                { icon: "🔗", text: "LinkedIn Profile", href: data.contact.linkedin },
              ].map(({ icon, text, href }) => (
                <div key={text} className="contact-row">
                  <span className="contact-icon">{icon}</span>
                  {href
                    ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{text}</a>
                    : <span>{text}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsPage() {
  return (
    <section className="section">
      <SectionHeader num="02" title="Skills" />
      <div className="skills-grid">
        {data.skills.map(s => (
          <div key={s.label} className="skill-card">
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-name">{s.label}</div>
            <div>{s.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperiencePage() {
  return (
    <section className="section">
      <SectionHeader num="03" title="Experience" />
      <div className="timeline">
        {data.experience.map((e, i) => (
          <div key={i} className="tl-row">
            <div className="tl-spine">
              <div className={`tl-dot${e.current ? " tl-dot-live" : ""}`} />
              {i < data.experience.length - 1 && <div className="tl-line" />}
            </div>
            <div className="tl-card">
              <div className="tl-card-header">
                <div>
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-company">{e.company} · {e.location}</div>
                </div>
                <div className={`tl-badge${e.current ? " tl-badge-live" : ""}`}>
                  {e.current && <span className="live-dot" />}
                  {e.period}
                </div>
              </div>
              <ul className="tl-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Expandable Use Cases ─────────────────────────────────────────────────────
function UseCaseList({ useCases, accent }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="uc-wrapper">
      <button className="uc-toggle" style={{ color: accent }} onClick={() => setOpen(o => !o)}>
        {open ? "▾" : "▸"} Use Cases ({useCases.length})
      </button>
      {open && (
        <div className="uc-list">
          {useCases.map((uc, i) => (
            <div key={i} className="uc-item">
              <div className="uc-title" style={{ color: accent }}>◆ {uc.title}</div>
              <div className="uc-detail">{uc.detail}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectsPage() {
  return (
    <section className="section">
      <SectionHeader num="04" title="Projects" />
      <div className="projects-grid">
        {data.projects.map((p, i) => (
          <div key={i} className="project-card" style={{ "--accent": p.accent }}>
            <div className="project-top-bar" />
            <div className="project-icon">{p.icon}</div>
            <div className="project-name">{p.name}</div>
            <div className="project-tags">
              {p.tags.map(t => <Tag key={t} color={p.accent}>{t}</Tag>)}
            </div>
            <p className="project-desc">{p.desc}</p>
            {p.useCases && <UseCaseList useCases={p.useCases} accent={p.accent} />}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Shared internship/training card renderer ────────────────────────────────
function ProgramPage({ num, title, items }) {
  return (
    <section className="section">
      <SectionHeader num={num} title={title} />
      <div className="program-list">
        {items.map((group, gi) => (
          <div key={gi} className="program-group">
            <div className="program-group-header" style={{ borderColor: group.accent }}>
              <div>
                <div className="program-org" style={{ color: group.accent }}>{group.org}</div>
                <div className="program-track">{group.track}</div>
              </div>
              <div className="program-period">{group.period}</div>
            </div>
            <div className="program-projects">
              {group.projects.map((proj, pi) => (
                <div key={pi} className="prog-proj-card">
                  <div className="prog-proj-top">
                    <div className="prog-proj-icon">{proj.icon}</div>
                    <div>
                      <div className="prog-proj-name">{proj.name}</div>
                      <div className="prog-proj-tech">
                        {proj.tech.map(t => <Tag key={t} color={group.accent}>{t}</Tag>)}
                      </div>
                    </div>
                  </div>
                  <UseCaseList useCases={proj.useCases} accent={group.accent} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InternshipsPage() {
  return <ProgramPage num="07" title="Internships" items={data.internships} />;
}

function TrainingPage() {
  return <ProgramPage num="08" title="Training" items={data.training} />;
}

function EducationPage() {
  return (
    <section className="section">
      <SectionHeader num="05" title="Education" />
      <div className="edu-list">
        {data.education.map((e, i) => (
          <div key={i} className="edu-card">
            <div className="edu-icon-wrap">{e.icon}</div>
            <div className="edu-body">
              <div className="edu-inst">{e.institution}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-meta">
                <span className="edu-period">{e.period}</span>
                <span className="edu-note">{e.note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CertificationsPage() {
  return (
    <section className="section">
      <SectionHeader num="06" title="Certifications" />
      <div className="cert-grid">
        {data.certifications.map((c, i) => (
          <div key={i} className="cert-card">
            <div className="cert-icon">{c.icon}</div>
            <div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-org">{c.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ goTo }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo" onClick={() => goTo("home")}>
          <FaChartPie style={{ color: "#00e5ae", fontSize: 15 }} />
          {data.initials}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Mahmoud Amr Hassan · Built with Next.js</p>
        <div className="footer-links">
          <a href={`mailto:${data.contact.email}`}>Email</a>
          <a href={data.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function MahmoudPortfolio() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.getElementById("mah-root");
    if (!root) return;
    const onScroll = () => setScrolled(root.scrollTop > 40);
    root.addEventListener("scroll", onScroll);
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (page) => {
    setActive(page);
    setMenuOpen(false);
    document.getElementById("mah-root")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = {
    home: <HomePage goTo={goTo} />,
    about: <AboutPage />,
    skills: <SkillsPage />,
    experience: <ExperiencePage />,
    projects: <ProjectsPage />,
    internships: <InternshipsPage />,
    training: <TrainingPage />,
    education: <EducationPage />,
    certifications: <CertificationsPage />,
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    #mah-root {
      height: 100vh;
      overflow-y: auto;
      background: #07090f;
      color: #b0c0d8;
      font-family: 'DM Mono', monospace;
      font-size: 14px;
      line-height: 1.75;
      scroll-behavior: smooth;
    }

    /* ═══════════════════════════════════════
       NAVBAR
    ═══════════════════════════════════════ */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 999;
      height: 68px;
      display: flex; align-items: center;
      justify-content: space-between;
      padding: 0 48px;
      transition: background 0.35s, backdrop-filter 0.35s, border-color 0.35s;
    }
    .navbar.solid {
      background: rgba(7,9,15,0.9);
      backdrop-filter: blur(20px) saturate(1.3);
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }

    .nav-logo {
      font-family: 'Syne', sans-serif; font-weight: 800; font-size: 20px;
      color: #fff; letter-spacing: -0.02em; cursor: pointer;
      display: flex; align-items: center; gap: 9px; user-select: none;
    }

    .nav-center {
      display: flex; align-items: center; gap: 2px;
    }
    .nav-btn {
      background: none; border: none; cursor: pointer;
      padding: 7px 15px; border-radius: 7px;
      font-family: 'Syne', sans-serif; font-weight: 600; font-size: 13px;
      color: #5a6a80; letter-spacing: 0.03em;
      transition: color 0.2s, background 0.2s;
      position: relative;
    }
    .nav-btn:hover { color: #c0d0e8; background: rgba(255,255,255,0.04); }
    .nav-btn.active { color: #00e5ae; }
    .nav-btn.active::after {
      content: ''; position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
      width: 18px; height: 2px; background: #00e5ae; border-radius: 2px;
    }

    .nav-right { display: flex; align-items: center; gap: 12px; }
    .nav-hire {
      background: #00e5ae; color: #07090f;
      padding: 9px 20px; border-radius: 7px; border: none; cursor: pointer;
      font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px;
      transition: opacity 0.2s, transform 0.15s; text-decoration: none;
    }
    .nav-hire:hover { opacity: 0.85; transform: translateY(-1px); }

    .hamburger {
      display: none; background: none; border: none; cursor: pointer;
      color: #c0d0e8; font-size: 24px; padding: 4px; line-height: 1;
    }

    /* Mobile drawer */
    .mobile-drawer {
      position: fixed; top: 68px; left: 0; right: 0;
      z-index: 998;
      background: rgba(7,9,15,0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      padding: 12px 20px 20px;
      display: flex; flex-direction: column; gap: 4px;
      animation: slideDown 0.2s ease;
    }
    @keyframes slideDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
    .mobile-btn {
      background: none; border: none; cursor: pointer; text-align: left;
      padding: 13px 16px; border-radius: 8px;
      font-family: 'Syne', sans-serif; font-weight: 600; font-size: 15px;
      color: #5a6a80; transition: all 0.2s;
    }
    .mobile-btn.active { color: #00e5ae; background: rgba(0,229,174,0.07); }
    .mobile-btn:hover { color: #c0d0e8; background: rgba(255,255,255,0.04); }

    /* ═══════════════════════════════════════
       PAGE / SECTION WRAPPER
    ═══════════════════════════════════════ */
    .section {
      min-height: 100vh;
      padding: 112px 80px 80px;
      max-width: 1140px;
      margin: 0 auto;
      animation: pageIn 0.4s ease both;
    }
    @keyframes pageIn {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Section header ── */
    .section-header { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 56px; }
    .section-num { font-size: 11px; letter-spacing: 0.14em; color: #00e5ae; margin-top: 6px; flex-shrink: 0; }
    .section-title {
      font-family: 'Syne', sans-serif; font-weight: 800; font-size: 38px;
      color: #fff; letter-spacing: -0.03em; line-height: 1.05;
    }
    .section-underline { width: 44px; height: 3px; background: #00e5ae; border-radius: 2px; margin-top: 10px; }

    /* ═══════════════════════════════════════
       HOME
    ═══════════════════════════════════════ */
    .home-section {
      position: relative; overflow: hidden;
      display: flex; flex-direction: column; justify-content: center;
      padding-top: 68px; min-height: 100vh;
    }
    .home-bg {
      position: absolute; inset: 0; z-index: 0;
      background:
        radial-gradient(ellipse 65% 55% at 65% 35%, rgba(0,229,174,0.09) 0%, transparent 65%),
        radial-gradient(ellipse 45% 50% at 20% 75%, rgba(79,158,255,0.06) 0%, transparent 60%);
    }
    .home-grid-overlay {
      position: absolute; inset: 0; z-index: 0;
      background-image: radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 36px 36px;
    }
    .home-content {
      position: relative; z-index: 1;
      padding: 0 80px;
    }

    /* Hero two-column layout */
    .home-hero-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 48px;
    }
    .home-hero-text { flex: 1; min-width: 0; }

    /* Avatar */
    .home-avatar-wrap {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .home-avatar-ring {
      width: 280px; height: 280px;
      border-radius: 50%;
      padding: 4px;
      background: conic-gradient(#00e5ae 0deg, #4f9eff 120deg, #a78bfa 240deg, #00e5ae 360deg);
      animation: spin 8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .home-avatar {
      width: 100%; height: 100%;
      border-radius: 50%;
      background: #0e1620;
      border: 4px solid #07090f;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .home-avatar-initials {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 52px;
      color: #00e5ae;
      letter-spacing: -0.03em;
      user-select: none;
    }

    .home-greeting {
      font-size: 11px; letter-spacing: 0.16em; color: #00e5ae;
      margin-bottom: 18px;
    }
    .home-name {
      font-family: 'Syne', sans-serif; font-weight: 800;
      font-size: clamp(28px, 4vw, 60px);
      color: #fff; letter-spacing: -0.035em; line-height: 1.05;
      margin-bottom: 18px;
    }
    .home-role-row { font-size: 18px; color: #5a6a80; margin-bottom: 26px; }
    .home-role-static { color: #5a6a80; }
    .home-role-dynamic {
      display: inline-block;
      font-family: 'Syne', sans-serif; font-weight: 700; color: #00e5ae;
      animation: roleIn 0.4s ease both;
    }
    @keyframes roleIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .home-tagline { max-width: 500px; color: #7080a0; font-size: 14px; line-height: 1.85; margin-bottom: 44px; }
    .home-cta-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 72px; }
    .btn-primary {
      background: #00e5ae; color: #07090f; border: none; cursor: pointer;
      padding: 14px 34px; border-radius: 8px;
      font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px;
      transition: opacity 0.2s, transform 0.15s;
    }
    .btn-primary:hover { opacity: 0.87; transform: translateY(-2px); }
    .btn-outline {
      display: inline-flex; align-items: center;
      border: 1px solid rgba(255,255,255,0.13); color: #c0d0e8;
      padding: 14px 34px; border-radius: 8px; text-decoration: none;
      font-family: 'Syne', sans-serif; font-weight: 600; font-size: 14px;
      transition: border-color 0.2s, color 0.2s;
    }
    .btn-outline:hover { border-color: #00e5ae; color: #00e5ae; }

    .home-stats { display: flex; gap: 44px; flex-wrap: wrap; }
    .stat-block { display: flex; flex-direction: column; }
    .stat-val { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 34px; color: #fff; line-height: 1; }
    .stat-lbl { font-size: 11px; color: #5a6a80; letter-spacing: 0.07em; margin-top: 5px; }

    .scroll-hint {
      position: absolute; bottom: 36px; left: 50%; transform: translateX(-50%);
      background: none; border: none; cursor: pointer;
      font-size: 11px; color: #3a4a60; letter-spacing: 0.12em;
      animation: bob 2.2s ease-in-out infinite;
    }
    @keyframes bob { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(5px);} }

    /* ═══════════════════════════════════════
       ABOUT
    ═══════════════════════════════════════ */
    .about-layout { display: grid; grid-template-columns: 1.4fr 1fr; gap: 20px; align-items: start; }
    .about-card {
      background: #0b1018; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px; padding: 30px 34px;
    }
    .summary-card { grid-row: span 2; }
    .card-eyebrow { font-size: 11px; color: #00e5ae; letter-spacing: 0.09em; margin-bottom: 16px; }
    .about-text { font-size: 14px; color: #8090a8; line-height: 1.9; }

    .award-card {
      background: linear-gradient(135deg, rgba(0,229,174,0.07), rgba(0,229,174,0.01));
      border-color: rgba(0,229,174,0.2);
    }
    .award-title { font-family:'Syne',sans-serif; font-weight:700; font-size:14px; color:#fff; margin-bottom:6px; }
    .award-org { font-size:11px; color:#00e5ae; letter-spacing:0.07em; text-transform:uppercase; margin-bottom:10px; }
    .award-desc { font-size:13px; color:#8090a8; }

    .contact-list { display: flex; flex-direction: column; gap: 14px; margin-top: 14px; }
    .contact-row { display: flex; gap: 12px; align-items: flex-start; font-size: 13px; color: #708090; }
    .contact-icon { flex-shrink: 0; font-size: 15px; margin-top: 1px; }
    .contact-row a { color: #708090; text-decoration: none; transition: color 0.2s; word-break: break-all; }
    .contact-row a:hover { color: #00e5ae; }

    /* ═══════════════════════════════════════
       SKILLS
    ═══════════════════════════════════════ */
    .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    .skill-card {
      background: #0b1018; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px; padding: 26px;
      transition: border-color 0.2s, transform 0.2s;
    }
    .skill-card:hover { border-color: rgba(0,229,174,0.28); transform: translateY(-3px); }
    .skill-icon { font-size: 26px; margin-bottom: 12px; }
    .skill-name { font-family:'Syne',sans-serif; font-weight:700; font-size:14px; color:#fff; margin-bottom:14px; }

    /* ═══════════════════════════════════════
       EXPERIENCE
    ═══════════════════════════════════════ */
    .timeline { display: flex; flex-direction: column; }
    .tl-row { display: flex; gap: 24px; }
    .tl-spine { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; padding-top: 5px; }
    .tl-dot { width: 13px; height: 13px; border-radius: 50%; background: #1e2a3c; border: 2px solid #2c3e52; flex-shrink: 0; }
    .tl-dot-live { background: #00e5ae; border-color: #00e5ae; box-shadow: 0 0 0 5px rgba(0,229,174,0.14); }
    .tl-line { flex: 1; width: 1px; background: rgba(255,255,255,0.07); min-height: 30px; margin-top: 6px; }
    .tl-card {
      flex: 1;
      background: #0b1018; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px; padding: 26px 30px; margin-bottom: 20px;
    }
    .tl-card-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 8px; }
    .tl-role { font-family:'Syne',sans-serif; font-weight:700; font-size:17px; color:#fff; }
    .tl-company { font-size:12px; color:#5a6a80; margin-top: 2px; margin-bottom: 18px; }
    .tl-badge {
      font-size: 11px; color: #5a6a80; letter-spacing: 0.06em;
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
      padding: 5px 12px; border-radius: 20px; white-space: nowrap;
      display: flex; align-items: center; gap: 7px;
    }
    .tl-badge-live { color: #00e5ae; background: rgba(0,229,174,0.08); border-color: rgba(0,229,174,0.22); }
    .live-dot { width: 6px; height: 6px; border-radius: 50%; background: #00e5ae; animation: blink 1.4s infinite; }
    @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.25;} }
    .tl-bullets { list-style: none; }
    .tl-bullets li { position: relative; padding: 4px 0 4px 20px; color: #7080a0; font-size: 13px; }
    .tl-bullets li::before { content: '—'; position: absolute; left: 0; color: #00e5ae; }

    /* ═══════════════════════════════════════
       PROJECTS
    ═══════════════════════════════════════ */
    .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
    .project-card {
      background: #0b1018; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px; overflow: hidden;
      transition: transform 0.22s, border-color 0.22s;
    }
    .project-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.14); }
    .project-top-bar { height: 3px; background: var(--accent); }
    .project-icon { font-size: 30px; padding: 22px 24px 0; }
    .project-name { font-family:'Syne',sans-serif; font-weight:700; font-size:17px; color:#fff; padding: 12px 24px 10px; }
    .project-tags { padding: 0 24px 14px; }
    .project-desc { font-size: 12px; color: #5a6a80; line-height: 1.75; padding: 14px 24px 14px; border-top: 1px solid rgba(255,255,255,0.05); }

    /* Use Cases */
    .uc-wrapper { padding: 0 24px 20px; }
    .uc-toggle {
      background: none; border: none; cursor: pointer;
      font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 500;
      letter-spacing: 0.04em; padding: 6px 0;
      transition: opacity 0.2s;
    }
    .uc-toggle:hover { opacity: 0.75; }
    .uc-list { margin-top: 12px; display: flex; flex-direction: column; gap: 12px; }
    .uc-item { background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px 16px; }
    .uc-title { font-family:'Syne',sans-serif; font-weight:600; font-size:12px; margin-bottom:5px; }
    .uc-detail { font-size: 12px; color: #5a6a80; line-height: 1.7; }

    /* ═══════════════════════════════════════
       INTERNSHIPS & TRAINING
    ═══════════════════════════════════════ */
    .program-list { display: flex; flex-direction: column; gap: 36px; }
    .program-group {
      background: #0b1018; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px; overflow: hidden;
    }
    .program-group-header {
      display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;
      padding: 24px 30px;
      border-left: 4px solid;
      background: rgba(255,255,255,0.02);
    }
    .program-org { font-family:'Syne',sans-serif; font-weight:800; font-size:17px; margin-bottom:4px; }
    .program-track { font-size:13px; color:#8090a8; }
    .program-period { font-size:11px; color:#5a6a80; letter-spacing:0.06em; white-space: nowrap; padding-top:4px; }
    .program-projects { display: flex; flex-direction: column; gap: 0; }
    .prog-proj-card {
      padding: 22px 30px;
      border-top: 1px solid rgba(255,255,255,0.05);
      transition: background 0.2s;
    }
    .prog-proj-card:hover { background: rgba(255,255,255,0.02); }
    .prog-proj-top { display: flex; gap: 16px; align-items: flex-start; margin-bottom: 10px; }
    .prog-proj-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
    .prog-proj-name { font-family:'Syne',sans-serif; font-weight:700; font-size:15px; color:#fff; margin-bottom:8px; }
    .prog-proj-tech { display: flex; flex-wrap: wrap; }

    /* ═══════════════════════════════════════
       EDUCATION
    ═══════════════════════════════════════ */
    .edu-list { display: flex; flex-direction: column; gap: 16px; }
    .edu-card {
      display: flex; gap: 22px; align-items: flex-start;
      background: #0b1018; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px; padding: 26px 30px;
      transition: border-color 0.2s;
    }
    .edu-card:hover { border-color: rgba(0,229,174,0.22); }
    .edu-icon-wrap { font-size: 30px; flex-shrink: 0; margin-top: 2px; }
    .edu-inst { font-family:'Syne',sans-serif; font-weight:700; font-size:17px; color:#fff; margin-bottom:5px; }
    .edu-degree { font-size:13px; color:#8090a8; margin-bottom:12px; }
    .edu-meta { display: flex; flex-wrap: wrap; gap: 18px; }
    .edu-period { font-size:11px; color:#00e5ae; letter-spacing:0.06em; }
    .edu-note { font-size:11px; color:#5a6a80; }

    /* ═══════════════════════════════════════
       CERTIFICATIONS
    ═══════════════════════════════════════ */
    .cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .cert-card {
      display: flex; gap: 16px; align-items: flex-start;
      background: #0b1018; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px; padding: 18px 22px;
      transition: border-color 0.2s, transform 0.2s;
    }
    .cert-card:hover { border-color: rgba(0,229,174,0.22); transform: translateX(4px); }
    .cert-icon { font-size: 18px; flex-shrink: 0; margin-top: 2px; }
    .cert-name { font-family:'Syne',sans-serif; font-weight:600; font-size:13px; color:#c0d0e8; margin-bottom:4px; }
    .cert-org { font-size:11px; color:#5a6a80; }

    /* ═══════════════════════════════════════
       FOOTER
    ═══════════════════════════════════════ */
    .footer {
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 28px 80px;
    }
    .footer-inner { max-width: 1140px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
    .footer-logo {
      font-family: 'Syne', sans-serif; font-weight: 800; font-size: 16px;
      color: #fff; cursor: pointer; display: flex; align-items: center; gap: 8px;
    }
    .footer-copy { font-size: 12px; color: #3a4a60; }
    .footer-links { display: flex; gap: 20px; }
    .footer-links a { font-size: 12px; color: #3a4a60; text-decoration: none; transition: color 0.2s; }
    .footer-links a:hover { color: #00e5ae; }

    /* ═══════════════════════════════════════
       RESPONSIVE
    ═══════════════════════════════════════ */
    @media (max-width: 960px) {
      .section { padding: 96px 40px 60px; }
      .home-content { padding: 0 40px; }
      .footer { padding: 24px 40px; }
      .navbar { padding: 0 24px; }
      .nav-center { display: none; }
      .nav-right .nav-hire { display: none; }
      .hamburger { display: block; }
      .about-layout { grid-template-columns: 1fr; }
      .summary-card { grid-row: span 1; }
      .skills-grid { grid-template-columns: 1fr 1fr; }
      .projects-grid { grid-template-columns: 1fr; }
      .cert-grid { grid-template-columns: 1fr; }
      .home-hero-row { flex-direction: column-reverse; gap: 36px; }
      .home-avatar-ring { width: 200px; height: 200px; }
      .home-avatar-initials { font-size: 40px; }
    }
    @media (max-width: 560px) {
      .section { padding: 88px 20px 50px; }
      .home-content { padding: 0 20px; }
      .home-stats { gap: 28px; }
      .skills-grid { grid-template-columns: 1fr; }
      .section-title { font-size: 28px; }
      .footer { padding: 20px; }
      .footer-inner { flex-direction: column; align-items: flex-start; }
      .home-avatar-ring { width: 160px; height: 160px; }
      .home-avatar-initials { font-size: 32px; }
    }
  `;

  return (
    <div id="mah-root">
      <style>{css}</style>

      {/* ── Top Navbar ── */}
      <nav className={`navbar${scrolled ? " solid" : ""}`}>
        <div className="nav-logo" onClick={() => goTo("home")}>
          <FaChartPie style={{ color: "#00e5ae", fontSize: 18 }} />
          {data.initials}
        </div>

        <div className="nav-center">
          {NAV_ITEMS.filter(n => n.id !== "home").map(n => (
            <button
              key={n.id}
              className={`nav-btn${active === n.id ? " active" : ""}`}
              onClick={() => goTo(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>

        <div className="nav-right">
          <a className="nav-hire" href={`mailto:${data.contact.email}`}>Hire Me</a>
          <button className="hamburger" onClick={() => setMenuOpen(m => !m)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div className="mobile-drawer">
          {NAV_ITEMS.map(n => (
            <button
              key={n.id}
              className={`mobile-btn${active === n.id ? " active" : ""}`}
              onClick={() => goTo(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Page Content ── */}
      <div key={active}>
        {pages[active]}
      </div>

      {/* ── Footer (hidden on home) ── */}
      {active !== "home" && <Footer goTo={goTo} />}
    </div>
  );
}