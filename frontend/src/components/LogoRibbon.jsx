import { BriefcaseBusiness, Cloud, Code2, Container, DatabaseZap, GitBranch, GraduationCap, Handshake, Server, Settings, UsersRound, Workflow } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

const collaborations = [
  ["Campus Workshops", "AI awareness sessions, hands-on workshops and student skill programs for colleges.", GraduationCap],
  ["Industry Projects", "Practical assignments based on automation, marketing, cloud, DevOps and AI use cases.", BriefcaseBusiness],
  ["Internship Pathways", "Project-based internships with certificate guidance, resume support and mock interviews.", UsersRound],
  ["Training Collaborations", "Custom batches for campus cells, business teams, training partners and learning groups.", Handshake]
];

const ecosystem = [
  ["AWS Cloud", "Cloud", Cloud],
  ["Microsoft Azure", "Cloud", Cloud],
  ["Google Cloud", "Cloud", Cloud],
  ["Docker", "Containers", Container],
  ["Kubernetes", "Orchestration", Settings],
  ["Jenkins", "CI/CD", Workflow],
  ["Terraform", "Infrastructure", Server],
  ["Linux", "Servers", Server],
  ["Python", "Automation", Code2],
  ["GitHub", "Projects", GitBranch],
  ["MLOps", "AI Ops", DatabaseZap],
  ["AI Tools", "Productivity", Workflow]
];

export default function LogoRibbon({ compact = false }) {
  const items = [...ecosystem, ...ecosystem];

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

        <div className="mt-10 rounded-3xl bg-green-50/80 p-5 md:p-7">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brandGreen">Tools learners practice on</p>
              <h3 className="mt-2 text-2xl font-black text-primary">Real platforms for AI, cloud, DevOps and automation</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Clear technology labels help students understand the actual tools covered in training and projects.
            </p>
          </div>
          <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max gap-4">
            {items.map(([name, type, Icon], index) => (
              <div key={`${name}-${index}`} className="flex min-w-56 items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-brandGreen">
                  <Icon size={24} />
                </span>
                <div>
                  <p className="text-base font-black text-primary">{name}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-brandGreen">{type}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
