import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import courseCloud from "../assets/showcase/course-cloud.jpg";
import courseGenai from "../assets/showcase/course-genai.jpg";
import courseSoftware from "../assets/showcase/course-software.jpg";

export default function About() {
  const focusAreas = [
    "Practical AI training for beginners and working professionals",
    "Live sessions with tool-based learning and guided practice",
    "Automation, digital marketing, cloud, DevOps and project skills",
    "Career support through resume, LinkedIn, portfolio and mock interviews"
  ];

  return (
    <>
      <section className="section orb-free-gradient">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionTitle
              eyebrow="About WhatsUpCloud"
              title="An AI training institute powered by Inovalytics Technology"
              text="WhatsUpCloud is built for learners who want practical AI skills, not only theory. We train students, job seekers, professionals, freelancers and business owners with real tools, automation workflows, projects and career-focused guidance."
            />
            <div className="grid gap-3">
              {focusAreas.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">
                  <CheckCircle2 className="shrink-0 text-brandGreen" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={courseGenai} alt="Generative AI training" loading="lazy" decoding="async" className="col-span-2 aspect-[16/9] rounded-3xl object-cover shadow-premium" />
            <img src={courseCloud} alt="Cloud and AI learning" loading="lazy" decoding="async" className="aspect-square rounded-3xl object-cover shadow-premium" />
            <img src={courseSoftware} alt="Project development training" loading="lazy" decoding="async" className="aspect-square rounded-3xl object-cover shadow-premium" />
          </div>
        </div>
      </section>

      <section className="section bg-blue-50/70">
        <div className="container-max grid gap-6 md:grid-cols-2">
          <div className="premium-card">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-4 text-2xl font-black text-primary">To make AI education practical, affordable and accessible.</h2>
          </div>
          <div className="premium-card">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-4 text-2xl font-black text-primary">To train students and professionals with real AI skills, automation and career support.</h2>
          </div>
        </div>
      </section>
    </>
  );
}
