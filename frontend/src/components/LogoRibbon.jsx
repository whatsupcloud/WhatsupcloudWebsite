import { BriefcaseBusiness, GraduationCap, Handshake, UsersRound } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

const collaborations = [
  ["Campus Workshops", "AI awareness sessions, hands-on workshops and student skill programs for colleges.", GraduationCap],
  ["Industry Projects", "Practical assignments based on automation, marketing, cloud, DevOps and AI use cases.", BriefcaseBusiness],
  ["Internship Pathways", "Project-based internships with certificate guidance, resume support and mock interviews.", UsersRound],
  ["Training Collaborations", "Custom batches for campus cells, business teams, training partners and learning groups.", Handshake]
];

export default function LogoRibbon({ compact = false }) {
  return (
    <section className={compact ? "py-12" : "section"}>
      <div className="container-max overflow-hidden">
        <SectionTitle
          eyebrow="Learning Network"
          title="Industry and campus collaboration for practical learning"
          text="No placeholder partner names. This section shows how WhatsUpCloud connects workshops, internships, projects and tool-based training into one practical learning ecosystem."
          center
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {collaborations.map(([title, text, Icon]) => (
            <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-primary">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-lg font-black text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
