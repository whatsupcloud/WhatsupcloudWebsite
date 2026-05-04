import { BookOpen, CheckCircle2, Download, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import { additionalCourses, aiCourses } from "../data.js";
import courseCloud from "../assets/showcase/course-cloud.jpg";
import courseData from "../assets/showcase/course-data.jpg";
import courseDevops from "../assets/showcase/course-devops.jpg";
import courseGenai from "../assets/showcase/course-genai.jpg";
import courseMarketing from "../assets/showcase/course-marketing.jpg";
import courseSoftware from "../assets/showcase/course-software.jpg";

const imageMap = {
  "Generative AI": courseGenai,
  "AI Digital Marketing": courseMarketing,
  "AI Prompt Engineering": courseData,
  "Multi Agent AI": courseGenai,
  "AI Automation": courseDevops,
  "AI Content Creation": courseMarketing,
  "AI for Business": courseCloud,
  "AI Project Development": courseSoftware,
  "DevOps": courseDevops,
  "AWS Cloud": courseCloud,
  "MLOps": courseData,
  "DevOps using AI": courseDevops,
  "Python": courseData,
  "Java": courseSoftware,
  "Full Stack Development": courseSoftware
};

export default function Ebook() {
  const guides = useMemo(() => [
    ...aiCourses.map(([title]) => title),
    ...additionalCourses
  ], []);
  const [selected, setSelected] = useState(guides[0]);

  return (
    <section className="section orb-free-gradient">
      <div className="container-max">
        <SectionTitle
          eyebrow="E-Book Library"
          title="Course-wise practical guides for every WhatsUpCloud program"
          center
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {guides.map((title) => (
              <button
                key={title}
                type="button"
                onClick={() => setSelected(title)}
                className={`overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-premium ${selected === title ? "border-brandGreen ring-4 ring-green-100" : "border-slate-100"}`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-blue-50">
                  <img src={imageMap[title] || courseGenai} alt={`${title} e-book`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <BookOpen className="text-brandGreen" size={28} />
                  <h3 className="mt-3 text-lg font-black text-primary">{title} Guide</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Course roadmap, tools, practice topics and learning outcomes.</p>
                </div>
              </button>
            ))}
          </div>

          <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-6 shadow-premium lg:sticky lg:top-28">
            <p className="eyebrow">Selected E-Book</p>
            <div className="mt-5 overflow-hidden rounded-2xl bg-blue-50">
              <img src={imageMap[selected] || courseGenai} alt={`${selected} selected e-book`} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover" />
            </div>
            <h2 className="mt-5 text-2xl font-black text-primary">{selected} Guide</h2>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-700">
              {["Course overview", "Tools and topics", "Practice roadmap", "Career use cases"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-brandGreen" size={18} />
                  {item}
                </div>
              ))}
            </div>
            <Link to={`/contact#enquiry-form`} className="btn-primary mt-6 w-full">
              <ShoppingBag size={18} /> Purchase / Get Details
            </Link>
            <Link to="/contact#enquiry-form" className="btn-secondary mt-3 w-full">
              <Download size={18} /> Download E-Book
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
