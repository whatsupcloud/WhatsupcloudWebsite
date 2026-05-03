import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramCard({ title, subtitle, description, image, tags = [], to = "/contact" }) {
  return (
    <Link to={to} className="block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-premium transition duration-300 hover:-translate-y-1">
      {image && (
        <div className="aspect-[16/10] overflow-hidden bg-blue-50">
          <img src={image} alt={`${title} training visual`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="p-6">
        {subtitle && <p className="text-xs font-black uppercase tracking-[0.16em] text-brandGreen">{subtitle}</p>}
        <h3 className="mt-2 text-xl font-black text-primary">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-secondary">
                {tag}
              </span>
            ))}
          </div>
        )}
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brandGreen">
          Enquire Now <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}
