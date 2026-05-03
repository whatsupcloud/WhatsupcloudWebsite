import SectionTitle from "./SectionTitle.jsx";

const ecosystem = [
  ["AWS Cloud", "Cloud platform"],
  ["Microsoft Azure", "Cloud platform"],
  ["Google Cloud", "Cloud platform"],
  ["Docker", "DevOps tool"],
  ["Kubernetes", "DevOps tool"],
  ["Jenkins", "CI/CD"],
  ["Terraform", "Infrastructure"],
  ["Linux", "Server skills"],
  ["Python", "Automation"],
  ["GitHub", "Projects"],
  ["MLOps", "AI operations"],
  ["AI Tools", "Productivity"]
];

export default function LogoRibbon({ compact = false }) {
  return (
    <section className={compact ? "" : "section"}>
      <div className="container-max">
        <SectionTitle
          eyebrow="Learning Ecosystem"
          title="Tools and platforms learners prepare for"
          text="Clear technology labels instead of unclear partner logos, so students can instantly understand the learning ecosystem."
          center
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {ecosystem.map(([name, type]) => (
            <div key={name} className="rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <p className="text-base font-black text-primary">{name}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-brandGreen">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
