import { Image, Megaphone, Palette, Sparkles, Target, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Workshop() {
  const topics = [
    ["AI image creation", Image],
    ["AI poster design", Palette],
    ["Instagram content", Sparkles],
    ["WhatsApp Business", Megaphone],
    ["Lead generation", Target],
    ["Automation basics", Workflow]
  ];
  return (
    <section className="section bg-green-50/70">
      <div className="container-max">
        <SectionTitle eyebrow="Workshop" title="AI Digital Marketing Workshop" text="Learn practical AI workflows for campaigns, social media, lead generation and automation." center />
        <div className="grid gap-5 md:grid-cols-3">
          {topics.map(([topic, Icon]) => (
            <div key={topic} className="premium-card text-center">
              <Icon className="mx-auto text-brandGreen" size={30} />
              <h3 className="mt-4 text-lg font-black text-primary">{topic}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Live seminar setup", "Hands-on design practice", "Automation demo"].map((item, index) => (
            <div key={item} className="min-h-56 rounded-3xl bg-primary p-6 text-white shadow-premium tech-grid">
              <p className="text-sm font-bold text-accent">Gallery {index + 1}</p>
              <h3 className="mt-16 text-2xl font-black">{item}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/contact" className="btn-primary">Enquire Now</Link>
        </div>
      </div>
    </section>
  );
}
