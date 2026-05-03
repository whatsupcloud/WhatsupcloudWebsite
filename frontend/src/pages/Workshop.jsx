import { Bot, BrainCircuit, Building2, Cpu, GraduationCap, Image, Megaphone, Palette, Sparkles, Target, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import LogoRibbon from "../components/LogoRibbon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

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
  const reviews = [
    ["Very practical session", "The workshop helped me understand how AI tools can be used for content, posters and daily work."],
    ["Beginner friendly", "The trainer explained every step clearly. I could follow the session even without technical background."],
    ["Useful for business", "The lead generation and automation examples were very useful for business and marketing work."],
    ["Good learning experience", "I liked the hands-on approach. The session was clear, simple and easy to apply."],
    ["Career focused", "The workshop gave me confidence to explore AI tools for projects, internship and career growth."],
    ["Professional guidance", "The session felt organized and practical. The examples were relevant and easy to understand."]
  ];

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

      <LogoRibbon compact />

      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Learner Reviews" title="Workshop feedback from learners" text="Clean English feedback cards for a professional and readable review section." center />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([title, text]) => (
              <div key={title} className="premium-card">
                <div className="flex gap-1 text-accent" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
                </div>
                <h3 className="mt-4 text-xl font-black text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
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

