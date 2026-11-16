import React from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  Microscope,
  Brain,
  HeartPulse,
  FileText,
} from "lucide-react";
export default function PortfolioWebsite() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      {/* Hero */}
<section className="px-6 py-20 md:px-16 bg-white">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* Left Side */}
    <div>
      <p className="text-sm uppercase tracking-widest text-slate-500 mb-3">
        Biomedical Engineering PhD Candidate
      </p>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
        Melisa Kafalı
      </h1>

      <p className="text-lg text-slate-700 mb-6 leading-relaxed">
        I work at the intersection of regenerative medicine, wound healing,
        biomaterials, single-cell analysis, and biomedical AI. My research
        focuses on developing translational technologies for pressure ulcer
        prevention, tissue regeneration, and digital histology analysis.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:bulusmelisa@gmail.com"
          className="px-5 py-3 rounded-2xl bg-slate-900 text-white flex items-center gap-2 shadow-sm hover:bg-slate-700"
        >
          <Mail size={18} /> Contact Me
        </a>

        <a
          href="#projects"
          className="px-5 py-3 rounded-2xl bg-slate-100 text-slate-900 flex items-center gap-2 hover:bg-slate-200"
        >
          View Projects <ExternalLink size={18} />
        </a>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="flex justify-center">
      <Image
        src="/melisa.jpg"
        alt="Melisa Kafalı"
        width={420}
        height={520}
        className="rounded-3xl shadow-lg object-cover"
        priority
      />
    </div>

  </div>
</section>
      
      {/* About */}
      <section id="about" className="px-6 py-16 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            I am a Biomedical Engineering PhD student at the University of Arizona with research experience in orthopedic surgery, regenerative medicine, wound healing, biomaterials, single-cell RNA sequencing, and histology-based tissue analysis. I am passionate about translating biological discoveries into clinically meaningful technologies, especially for chronic wounds and tissue regeneration.
          </p>
        </div>
      <section className="px-6 py-16 md:px-16 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">
      Current Position
    </h2>

    <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-2">
        Graduate Research Assistant
      </h3>

      <p className="text-slate-700">
        Department of Surgery, University of Arizona
      </p>

      <p className="text-slate-700 mt-4 leading-relaxed">
        Developing biomaterial-based regenerative therapies, microfluidic
        wound models, and computational approaches to study pressure ulcer
        pathogenesis, tissue regeneration, and wound healing mechanisms.
      </p>
    </div>
  </div>
</section>
      </section>{/* Research Interests */}
<section id="interests" className="px-6 py-16 md:px-16 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Current Research Interests</h2>

    <div className="grid md:grid-cols-3 gap-4">
      {[
        "Pressure ulcer prevention",
        "Regenerative biomaterials",
        "Wound healing mechanisms",
        "Single-cell transcriptomics",
        "Digital pathology AI",
        "Histology image analysis",
        "Skin-on-chip systems",
        "Biomedical data science",
        "Translational medicine",
      ].map((interest) => (
        <div
          key={interest}
          className="rounded-2xl bg-slate-50 p-4 text-slate-700 shadow-sm"
        >
          {interest}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard
              icon={<HeartPulse />}
              title="Nanosilk for Pressure Ulcer Prevention"
              text="Investigating how topical silk fibroin modulates fibroblast activation, macrophage resolution, ECM remodeling, and regenerative healing after pressure-induced injury."
            />
            <ProjectCard
              icon={<Brain />}
              title="Single-Cell Wound Healing Analysis"
              text="Using scRNA-seq, Seurat, CellChat, and pathway analysis to identify cellular mechanisms of wound repair, inflammation resolution, and angiogenesis."
            />
            <ProjectCard
              icon={<Microscope />}
              title="AI-Assisted Histology Analysis"
              text="Developing a digital pathology workflow to quantify collagen deposition, immune infiltration, angiogenesis, and tissue damage from histology slides."
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-16 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SkillBox title="Experimental Skills" items={["Histology", "Immunohistochemistry", "qPCR", "Mice and sheep models", "Biomaterial production", "Development of Skin-on-a-chip model"]} />
            <SkillBox title="Computational & AI" items={["R", "Seurat", "CellChat", "scRNA-seq", "QuPath", "Python learning in progress", "Digital pathology AI in progress"]} />
          </div>
        </div>
      </section>

      <section id="publications" className="px-6 py-16 md:px-16 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">
      {/* Research Presentations */}
<section id="presentations" className="px-6 py-16 md:px-16 bg-white">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-8">
      Research Presentations
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Surgery Research Day */}
      <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm">
        <Image
          src="/surgery-day.jpg"
          alt="Department of Surgery Presentation"
          width={700}
          height={500}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-6">
          <h3 className="text-4xl font-semibold mb-2">
            Department of Surgery Research Day
          </h3>

          <p className="text-base text-slate-700 leading-relaxed">
            Presented research on "Topical Silk Fibroin Reprograms Fibroblast and Macrophage Responses to Promote Regenerative Healing in Pressure Ulcers" at the University of Arizona Department
            of Surgery Research Day.
          </p>
        </div>
      </div>

      {/* WHS */}
      <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm">
        <Image
          src="/whs.jpg"
          alt="WHS Presentation"
          width={700}
          height={500}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-6">
          <h3 className="text-4xl font-semibold mb-2">
            Wound Healing Society (WHS)
          </h3>

          <p className="text-base text-slate-700 leading-relaxed">
            Delivered an oral presentation on "Silk Fibroin-Based Gel Reprograms Fibroblast and Macrophage Responses to Promote Regenerative Healing in Pressure Ulcers"
            at the Wound Healing Society conference in Charlotte, NC.
          </p>
        </div>
      </div>
{/* BMES Conference */}
      <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm">
        <Image
          src="/BMES.jpg"
          alt="BMES Conference Presentation"
          width={700}
          height={500}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-6">
          <h3 className="text-4xl font-semibold mb-2">
            Biomedical Engineering Society (BMES) Conference
          </h3>

          <p className="text-base text-slate-700 leading-relaxed">
            Presented a poster on how NanoSilk modulates communication between
      fibroblasts and immune cells in a preclinical model of pressure injury
      at the 2026 BMES Annual Meeting in Orlando, Florida.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      Publications, Abstracts & Awards
    </h2>

    <div className="space-y-6">

      {/* Publications */}
      
      <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Publications
        </h3>

        <div className="space-y-5 text-slate-700">
          <div>
    <p className="font-semibold">
    CNP-miR146a Promotes NRF2-Related Ferroptosis-Protective Myeloid
    Programs and Immune–Vascular Regeneration in Diabetic Wounds
  </p>

  <p className="text-sm mt-1 text-slate-500">
    Kafali M, et al. · First author · <em>Pharmaceutics</em>, 2026, 18(9), 1116
  </p>

  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
    <a
      href="https://doi.org/10.3390/pharmaceutics18091116"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      View Publication
    </a>

    <a
      href="https://atlas.melisakafali.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      View Interactive Research Atlas
    </a>
  </div>
</div>

          <div>
            <p className="font-semibold">
              Antibacterial Properties and Osteoblast Interactions of Microfluidically Synthesized Chitosan – SPION Composite Nanoparticles
            </p>

            <p className="text-sm mt-1 text-slate-500">
              Kafalı M, et al. Development and characterization of advanced biomaterial systems for biomedical applications.
            </p>

            <a
              href="https://onlinelibrary.wiley.com/doi/full/10.1002/jbm.a.37575"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Publication
            </a>

            <p className="text-sm mt-1 text-amber-800">
              Received Most Cited Article certification.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Multifunctional POSS-based Nanoparticles Functionalized with Silver,
    SPIONs, and Rhamnolipid for Antibacterial Applications
            </p>
            <p className="text-sm mt-1 text-slate-500">
              Kafalı M, et al. Advanced biomaterials and translational regenerative medicine applications.
            </p>

            <a
              href="https://www.sciencedirect.com/science/article/pii/S2772950825005059"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Publication
            </a>
          </div>

          <div>
            <p className="font-semibold">
              Structural, Cytocompatibility and Antibacterial Evaluation of DMAHDM-Modified Dental Resin Matrices for Bulk-Fill Applications
            </p>
            <p className="text-sm mt-1 text-slate-500">
              Kafalı M, et al. Biomaterial engineering and polymer applications for biomedical systems.
            </p>

            <a
              href="https://onlinelibrary.wiley.com/doi/full/10.1002/app.57703"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Publication
            </a>
          </div>

        </div>
      </div>

      {/* Abstracts */}
      <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Conference Abstracts & Presentations
        </h3>

        <div className="space-y-5 text-slate-700">
          <div>
  <p className="font-semibold">
    Preventive Silk Fibroin Reprograms Macrophage Responses to Protect
    Against Pressure Injury
  </p>
  <p className="text-sm mt-1 text-slate-500">
    Accepted for oral presentation · 22nd Annual Academic Surgical Congress
    · February 9–11, 2027 · Washington, DC
  </p>
</div>
<div>
  <p className="font-semibold">
    Nanosilk Enhances Fibroblast–Immune Cell Communication Through Adhesion-Mediated Signaling to Promote Regenerative Responses Following Pressure-Induced Injury
  </p>
  <p className="text-sm mt-1 text-slate-500">
    Accepted for poster presentation · Biomedical Engineering Society (BMES) 2026 Annual Meeting
    · October 21–24, 2026 · Orlando, FL
  </p>
</div>

          <div>
            <p className="font-semibold">
              Silk Fibroin-Based Gel Reprograms Fibroblast Toward A Regenerative Phenotype to Prevent Pressure Ulcers
            </p>
            <p className="text-sm mt-1 text-slate-500">
    Accepted for oral presentation · WHS 2026 Meeting
    · April 8–11, 2026 · Charlotte, NC
  </p>

            <a
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1GpZgRQAAAAJ&citation_for_view=1GpZgRQAAAAJ:zYLM7Y9cAGgC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Abstract
            </a>
          </div>

          <div>
            <p className="font-semibold">
              CXCR4 Agonist UCUF-965 Restores Angiogenic and Immune Function Through Malat-1 Driven Regenerative Pathways in Diabetic Wounds
            </p>
            <p className="text-sm mt-1 text-slate-500">
              Accepted for oral presentation · WHS 2026 Meeting
              · April 8–11, 2026 · Charlotte, NC
            </p>

            <a
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1GpZgRQAAAAJ&citation_for_view=1GpZgRQAAAAJ:Tyk-4Ss8FVUC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Abstract
            </a>
          </div>

        </div>
      </div>

      {/* Awards */}
      <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">
          Awards & Recognition
        </h3>

        <div className="space-y-5 text-slate-700">

          <div>
            <p className="font-semibold">
              Highberger Research Award
            </p>

            <p>
              Department of Surgery, University of Arizona
            </p>

            <a
              href="https://www.instagram.com/p/DYVIiAwib1n/?img_index=9&hl=da"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Award Announcement
            </a>
          </div>

          <div>
            <p className="font-semibold">
              University of Arizona Student Forge Award
            </p>

            <p>
              Awarded University of Arizona Student Forge funding for NuevaNephTech, a biotech startup focused on developing kidney-on-chip disease models and translational biomedical technologies.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
{/* Certificates */}
<section id="certificates" className="px-6 py-16 md:px-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">
      Certificates & Recognition
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <Image
          src="/emrs.png"
          alt="EMRS Certificate"
          width={500}
          height={350}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold">
            E-MRS International Presentation
          </h3>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <Image
          src="/top-cited.png"
          alt="Top Cited Article"
          width={500}
          height={350}
          className="w-full h-[300px] object-contain bg-white"
        />
        <div className="p-4">
          <h3 className="font-semibold">
            Wiley Top Cited Article
          </h3>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <Image
          src="/nih.png"
          alt="NIH Certificate"
          width={500}
          height={350}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold">
            NIH Responsible Conduct of Research
          </h3>
        </div>
      </div>

      

<div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <Image
          src="/phisigmapi.jpg"
          alt="Phi Sigma Pi Certificate"
          width={500}
          height={350}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold">
            Phi Sigma Pi Certificate
          </h3>
        </div>
      </div>
<div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <Image
          src="/Highberger award.jpg"
          alt="Highberger Award"
          width={500}
          height={350}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold">
            Highberger Research Award
          </h3>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Contact */}
      <section id="contact" className="px-6 py-16 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-slate-700 mb-6">Interested in biomedical AI, regenerative medicine, wound healing, or translational biomaterials? Let’s connect.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <a href="mailto:bulusmelisa@gmail.com" className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-700"><Mail size={18} /> Email</a>
            <a
  href="https://www.linkedin.com/in/melisa-kafali-0ba596100/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200"
>
  LinkedIn
</a>

<a
  href="https://github.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200"
>
  GitHub
</a>

<a
  href="https://scholar.google.com/citations?user=1GpZgRQAAAAJ&hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200"
>
  Google Scholar
</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-slate-50 p-6 shadow-sm hover:shadow-md transition">
      <div className="mb-4 text-slate-800">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}

function SkillBox({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-2 rounded-full bg-slate-100 text-sm text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
