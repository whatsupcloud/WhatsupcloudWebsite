import { BookOpen, Download } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import { additionalCourses, aiCourses } from "../data.js";

export default function Ebook() {
  const guides = [
    ...aiCourses.map(([title]) => `${title} Guide`),
    ...additionalCourses.map((title) => `${title} Guide`)
  ];

  return (
    <section className="section orb-free-gradient">
      <div className="container-max">
        <SectionTitle
          eyebrow="E-Book Library"
          title="Course-wise practical guides for every WhatsUpCloud program"
          text="Explore focused e-books for AI, automation, marketing, cloud, DevOps, MLOps, DevOps using AI, development and programming courses."
          center
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((title) => (
            <div key={title} className="premium-card text-center">
              <BookOpen className="mx-auto text-brandGreen" size={34} />
              <h3 className="mt-4 text-lg font-black text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">A focused learning guide to understand the course path and practical outcomes.</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/contact#enquiry-form" className="btn-primary"><Download size={18} /> Download E-Book</Link>
        </div>
      </div>
    </section>
  );
}
