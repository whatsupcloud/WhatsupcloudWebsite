import { Bot, BrainCircuit, Building2, Cpu, GraduationCap, Image, Megaphone, Palette, Sparkles, Target, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import LogoRibbon from "../components/LogoRibbon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import review01 from "../assets/reviews/review-story-01.jpg";
import review02 from "../assets/reviews/review-story-02.jpg";
import review03 from "../assets/reviews/review-story-03.jpg";
import review04 from "../assets/reviews/review-story-04.jpg";
import review05 from "../assets/reviews/review-story-05.jpg";
import review06 from "../assets/reviews/review-story-06.jpg";

export default function Workshop() {
  const workshops = [
    ["Generative AI Workshop", BrainCircuit, "GenAI fundamentals, tools, real use cases and hands-on practice."],
    ["Prompt Engineering Workshop", Bot, "Prompt structure, role prompts, templates and output improvement."],
    ["AI Digital Marketing Workshop", Megaphone, "AI content, posters, campaigns, social media and lead systems."],
    ["AI Automation Workshop", Workflow, "No-code workflows, task automation and business productivity."],
    ["AI for Business Workshop", Building2, "AI adoption, team productivity, customer support and reporting use cases."],
    ["AI Content Creation Workshop", Palette, "Images, captions, reels, blogs, presentations and brand content."]
  ];

  const highlights = [
    ["Hands-on activities", Cpu],
    ["Real AI tools", Sparkles],
    ["Project practice", Target],
    ["Certificate guidance", GraduationCap],
    ["Image and poster creation", Image],
    ["Automation basics", Workflow]
  ];

  const companyPartners = ["Inovalytics Technology", "Cloud Labs", "AI Studio", "Tech Mentors"];
  const collegePartners = ["College Partner 01", "College Partner 02", "Campus Partner", "Training Cell"];
  const reviews = [review01, review02, review03, review04, review05, review06];

  return (
    <>
      <section className="section bg-green-50/70">
        <div className="container-max">
          <SectionTitle
            eyebrow="AI Workshops"
            title="Practical AI workshops for students, professionals and businesses"
            text="Choose from GenAI, Prompt Engineering, AI Digital Marketing, Automation, Business AI and Content Creation workshops. Each session is practical, tool-based and enquiry-led."
            center
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workshops.map(([title, Icon, text]) => (
              <div key={title} className="premium-card">
                <Icon className="text-brandGreen" size={32} />
                <h3 className="mt-4 text-xl font-black text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <Link to="/contact" className="mt-5 inline-flex text-sm font-black text-brandGreen">
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map(([topic, Icon]) => (
              <div key={topic} className="rounded-2xl bg-white p-6 text-center font-black text-primary shadow-sm">
                <Icon className="mx-auto mb-4 text-accent" size={28} />
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Partners" title="Company and college partner network" text="Partnership spaces for industry collaborators, colleges, campus cells and training partners." center />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-black text-primary">Company Partners</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {companyPartners.map((partner) => (
                  <div key={partner} className="grid min-h-24 place-items-center rounded-2xl border border-slate-100 bg-white px-4 text-center text-sm font-black text-primary shadow-sm">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-black text-primary">College Partners</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {collegePartners.map((partner) => (
                  <div key={partner} className="grid min-h-24 place-items-center rounded-2xl border border-slate-100 bg-white px-4 text-center text-sm font-black text-brandGreen shadow-sm">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoRibbon compact />

      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Student Reviews" title="Workshop feedback from learners" text="Real review snapshots from WhatsUpCloud workshop participants." center />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={review} className="overflow-hidden rounded-3xl bg-white p-3 shadow-premium">
                <img src={review} alt={`Student workshop review ${index + 1}`} loading="lazy" decoding="async" className="h-full w-full rounded-2xl object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Workshop Gallery" title="Seminars, hands-on practice and automation demos" center />
          <div className="grid gap-5 md:grid-cols-3">
            {["Live seminar setup", "Hands-on AI practice", "Automation demo"].map((item, index) => (
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
    </>
  );
}
