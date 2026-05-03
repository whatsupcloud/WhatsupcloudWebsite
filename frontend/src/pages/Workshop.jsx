import { Bot, BrainCircuit, Building2, Cpu, GraduationCap, Megaphone, Palette, Sparkles, Target, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import courseData from "../assets/showcase/course-data.jpg";
import courseDevops from "../assets/showcase/course-devops.jpg";
import courseGenai from "../assets/showcase/course-genai.jpg";
import courseMarketing from "../assets/showcase/course-marketing.jpg";
import internshipCloud from "../assets/showcase/internship-cloud.jpg";
import internshipDevops from "../assets/showcase/internship-devops.jpg";
import internshipGenai from "../assets/showcase/internship-genai.jpg";
import placementMock from "../assets/showcase/placement-mock.jpg";
import placementResume from "../assets/showcase/placement-resume.jpg";

export default function Workshop() {
  const workshops = [
    ["Generative AI Workshop", BrainCircuit, courseGenai, "GenAI fundamentals, tools, real use cases and hands-on practice."],
    ["Prompt Engineering Workshop", Bot, courseData, "Prompt structure, role prompts, templates and output improvement."],
    ["AI Digital Marketing Workshop", Megaphone, courseMarketing, "AI campaigns, social media planning, content workflow and lead systems."],
    ["AI Automation Workshop", Workflow, courseDevops, "No-code workflows, task automation and business productivity."],
    ["AI for Business Workshop", Building2, internshipCloud, "AI adoption, team productivity, customer support and reporting use cases."],
    ["AI Content Creation Workshop", Palette, internshipGenai, "Captions, reels, blogs, presentations and brand content workflows."]
  ];

  const highlights = [
    ["Hands-on activities", Cpu],
    ["Real AI tools", Sparkles],
    ["Project practice", Target],
    ["Certificate guidance", GraduationCap],
    ["Automation basics", Workflow]
  ];
  const reviews = [
    ["Very practical session", "Thank you Snehal mam. The workshop was very practical and helped me understand how to use AI tools in daily work.", "Shilpa Suradkar"],
    ["Easy to understand", "Thank you Snehal mam for explaining everything step by step. The session was beginner friendly and clear.", "Sampada Gokhale"],
    ["Useful for marketing", "The AI poster, content and lead generation examples were useful and easy to apply.", "Chhaya Madam's Coaching Classes"],
    ["Good learning experience", "The hands-on examples made the workshop simple, practical and confidence building.", "Shubhangi Govin"],
    ["Helpful for career growth", "The session helped me understand how AI tools can support projects, internship work and career growth.", "SMBS Team"],
    ["Professional guidance", "Thank you Snehal mam. The workshop was well organized, practical and focused on real use cases.", "Rajashri"]
  ];
  const gallery = [
    ["Live AI Training", courseGenai],
    ["Digital Marketing Practice", courseMarketing],
    ["Prompt Engineering Lab", courseData],
    ["Automation Demo", courseDevops],
    ["Internship Project Work", internshipGenai],
    ["Cloud Workshop", internshipCloud],
    ["DevOps Session", internshipDevops],
    ["Resume Guidance", placementResume],
    ["Mock Interview Practice", placementMock]
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
            {workshops.map(([title, Icon, image, text]) => (
              <div key={title} className="premium-card group overflow-hidden p-0">
                <div className="aspect-[16/10] overflow-hidden bg-blue-50">
                  <img src={image} alt={`${title} visual`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <Icon className="text-brandGreen" size={32} />
                  <h3 className="mt-4 text-xl font-black text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                  <Link to="/contact" className="mt-5 inline-flex text-sm font-black text-brandGreen">
                    Enquire Now
                  </Link>
                </div>
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

      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Reviews" title="Testimonials from workshop learners" text="Learners appreciated the practical, step-by-step and beginner-friendly workshop experience." center />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([title, text, name]) => (
              <div key={title} className="premium-card">
                <div className="flex gap-1 text-accent" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
                </div>
                <h3 className="mt-4 text-xl font-black text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-black text-brandGreen">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Workshop Gallery" title="Professional training visuals and hands-on learning moments" center />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map(([title, image]) => (
              <div key={title} className="group overflow-hidden rounded-3xl bg-white shadow-premium">
                <div className="aspect-[4/3] overflow-hidden bg-blue-50">
                  <img src={image} alt={`${title} visual`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Practical, mentor-led learning with real project and career outcomes.</p>
                </div>
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

