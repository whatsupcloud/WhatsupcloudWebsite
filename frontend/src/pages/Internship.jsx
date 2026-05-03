import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Internship() {
  const items = ["AI Internship", "Project-based learning", "30 / 45 / 60 days", "Certificate", "Resume + LinkedIn support", "Mock interviews"];
  return (
    <section className="section orb-free-gradient">
      <div className="container-max grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle eyebrow="Internship" title="AI Internship with projects, certificates and career support" text="A focused internship path for students and professionals who want practical exposure and portfolio-ready outcomes." />
          <Link to="/contact" className="btn-primary">Enquire Now</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="premium-card flex items-center gap-3">
              <CheckCircle2 className="shrink-0 text-brandGreen" size={23} />
              <span className="font-black text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
