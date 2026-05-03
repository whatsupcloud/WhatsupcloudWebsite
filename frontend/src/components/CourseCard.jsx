import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({ title, description }) {
  return (
    <article className="premium-card">
      <div className="mb-5 h-2 w-16 rounded-full bg-gradient-to-r from-brandGreen via-lightGreen to-accent" />
      <h3 className="text-xl font-black text-primary">{title}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">{description}</p>
      <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brandGreen">
        Enquire Now <ArrowRight size={17} />
      </Link>
    </article>
  );
}
