import { BriefcaseBusiness, GraduationCap, Handshake, UsersRound } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

const collaborations = [
  ["Campus Workshops", "AI awareness sessions, hands-on workshops and student skill programs for colleges.", GraduationCap],
  ["Industry Projects", "Practical assignments based on automation, marketing, cloud, DevOps and AI use cases.", BriefcaseBusiness],
  ["Internship Pathways", "Project-based internships with certificate guidance, resume support and mock interviews.", UsersRound],
  ["Training Collaborations", "Custom batches for campus cells, business teams, training partners and learning groups.", Handshake]
];

const ecosystem = [
  ["ChatGPT", "AI assistant", "openai", "0B3C8C"],
  ["Google Gemini", "AI assistant", "googlegemini", "0F5DB8"],
  ["Claude", "AI assistant", "anthropic", "168A3A"],
  ["Perplexity", "AI research", "perplexity", "0B3C8C"],
  ["Canva", "Design", "canva", "168A3A"],
  ["Adobe Firefly", "Creative AI", "adobe", "0F5DB8"],
  ["Zapier", "Automation", "zapier", "FF4A00"],
  ["Make", "Automation", "make", "168A3A"],
  ["n8n", "AI workflows", "n8n", "EA4B71"],
  ["GitHub Copilot", "Coding AI", "githubcopilot", "0B3C8C"],
  ["AWS Cloud", "Cloud", "amazonwebservices", "FF9900"],
  ["Microsoft Azure", "Cloud", "microsoftazure", "0F5DB8"],
  ["Google Cloud", "Cloud", "googlecloud", "4285F4"],
  ["Docker", "Containers", "docker", "2496ED"],
  ["Kubernetes", "Orchestration", "kubernetes", "326CE5"],
  ["Python", "Automation", "python", "3776AB"]
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
              <h3 className="mt-2 text-2xl font-black text-primary">Latest market tools for AI, marketing, cloud and automation</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Logos and labels show the real tools learners use for content, research, campaigns, workflows, coding and deployment.
            </p>
          </div>
          <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max gap-4">
            {items.map(([name, type, slug, color], index) => (
              <div key={`${name}-${index}`} className="flex min-w-56 items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                  <img
                    src={`https://cdn.simpleicons.org/${slug}/${color}`}
                    alt={`${name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="h-7 w-7 object-contain"
                  />
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
