import { BookOpen, Download } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Ebook() {
  return (
    <section className="section orb-free-gradient">
      <div className="container-max">
        <SectionTitle eyebrow="E-Book" title="Practical guides for AI tools and digital growth" text="Explore easy-to-follow learning guides for tools, digital marketing and better prompting." center />
        <div className="grid gap-6 md:grid-cols-3">
          {["AI Tools Guide", "AI Digital Marketing Guide", "Prompt Engineering Guide"].map((title) => (
            <div key={title} className="premium-card text-center">
              <BookOpen className="mx-auto text-brandGreen" size={34} />
              <h3 className="mt-4 text-xl font-black text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">A focused guide to help you learn faster and apply AI in real work.</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/contact" className="btn-primary"><Download size={18} /> Download E-Book</Link>
        </div>
      </div>
    </section>
  );
}
