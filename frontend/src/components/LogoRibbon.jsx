import { Cloud, Code2, Container, DatabaseZap, GitBranch, Server, Settings, Workflow } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

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
          eyebrow="Technology Stack"
          title="Tools and platforms learners work with"
          text="A practical ecosystem for AI, cloud, DevOps, MLOps, automation and project work."
          center
        />
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
    </section>
  );
}
