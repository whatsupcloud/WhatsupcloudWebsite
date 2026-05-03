import { Award, BriefcaseBusiness, CheckCircle2, Clock, HelpCircle, Lightbulb, Linkedin, MonitorCheck, Presentation, SearchCheck, Star, Users, Workflow } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm.jsx";
import LogoRibbon from "../components/LogoRibbon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import trainerPhoto from "../assets/trainer-photo.jpg";

function scrollToForm() {
  const form = document.getElementById("enquiry-form");
  if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionCTA({ label = "Enquire Now" }) {
  return (
    <div className="mt-10 text-center lg:col-span-full">
      <button type="button" onClick={scrollToForm} className="btn-primary">
        {label}
      </button>
    </div>
  );
}

export default function Home() {
  const [selectedHeroPoint, setSelectedHeroPoint] = useState("Live Training");
  const heroPoints = [
    ["Live Training", "Interactive live sessions with trainer guidance."],
    ["Certificate", "Completion certificate support for your learning profile."],
    ["Projects", "Hands-on practice with real AI and automation use cases."],
    ["Career Support", "Resume, LinkedIn and interview guidance for better confidence."]
  ];
  const benefits = [
    ["Beginner Friendly", Users],
    ["Practical Training", Workflow],
    ["Live Sessions", Clock],
    ["Certificate", Award],
    ["Career Support", BriefcaseBusiness]
  ];
  const joinItems = ["Students", "Job seekers", "Business owners", "Freelancers"];
  const careerSupport = [
    ["AI Resume Building", "ATS-friendly resume, project wording and role-based profile positioning.", Presentation],
    ["LinkedIn Optimization", "Headline, about section, skills, featured projects and recruiter-ready profile cleanup.", Linkedin],
    ["Portfolio Projects", "GitHub, project documentation and demo-ready work samples for interviews.", MonitorCheck],
    ["Mock Interviews", "HR, technical, communication and confidence practice for freshers and professionals.", Users],
    ["Job Search Strategy", "Role targeting, application tracking, interview preparation and follow-up guidance.", SearchCheck],
    ["Freelance Readiness", "Service packaging, client communication and practical AI work presentation.", BriefcaseBusiness]
  ];
  const flow = ["Register", "Attend Live Workshop", "Start using AI"];
  const faqs = [
    ["Can beginners join?", "Yes. The training is beginner friendly and no prior experience is required."],
    ["Will I get a certificate?", "Yes. Certificate guidance and completion support are included."],
    ["How can I know the fees?", "Please submit the enquiry form and our team will contact you with complete details."],
    ["Will recording be available?", "Recording availability depends on the batch or workshop format. Our team will confirm it after enquiry."],
    ["What is the course/workshop duration?", "Duration depends on the selected course, workshop or internship track. Submit the form for exact details."],
    ["Who can join this training?", "Students, job seekers, professionals, business owners and freelancers can join."]
  ];
  return (
    <>
      <section className="section orb-free-gradient">
        <div className="container-max grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="eyebrow">WhatsUpCloud AI Training Institute</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal text-primary sm:text-5xl lg:text-6xl">
              Learn AI Skills for Career, Business & Growth
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Practical AI training with latest tools, automation and real projects.
            </p>
            <p className="mt-4 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-brandGreen">
              No prior experience required
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/courses" className="btn-primary">Explore Courses</Link>
              <button type="button" onClick={scrollToForm} className="btn-primary">Register Now</button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroPoints.map(([badge]) => (
                <button
                  key={badge}
                  type="button"
                  onClick={() => setSelectedHeroPoint(badge)}
                  className={`rounded-2xl border px-3 py-3 text-center text-xs font-black shadow-sm transition hover:-translate-y-1 hover:border-brandGreen hover:bg-brandGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-brandGreen focus:ring-offset-2 ${
                    selectedHeroPoint === badge ? "border-brandGreen bg-brandGreen text-white" : "border-white bg-white/85 text-primary"
                  }`}
                >
                  {badge}
                </button>
              ))}
            </div>
            <p className="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold leading-6 text-brandGreen">
              {heroPoints.find(([badge]) => badge === selectedHeroPoint)?.[1]}
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-premium">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-blue-50">
                <img src={trainerPhoto} alt="Founder and mentor" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/92 p-4 shadow-xl backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-brandGreen">Founder | Mentor | Woman Entrepreneur | AI Expert</p>
                  <p className="mt-1 text-lg font-black text-primary">Practical learning with guided support</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-8 hidden rounded-2xl bg-brandGreen px-5 py-4 text-sm font-black text-white shadow-lg sm:block">
              Live Workshop
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Benefits" title="Built for fast understanding and practical action" center />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map(([title, Icon]) => (
              <div key={title} className="rounded-2xl bg-white p-6 text-center font-black text-primary shadow-premium">
                <Icon className="mx-auto mb-4 text-brandGreen" size={30} />
                {title}
              </div>
            ))}
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Who Can Join" title="Open for learners, creators and business teams" text="Training is designed for practical learning, clear guidance and confident next steps." center />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {joinItems.map((item) => (
              <Link key={item} to="/contact" className="premium-card block">
                <Users className="text-brandGreen" size={28} />
                <h3 className="mt-4 text-xl font-black text-primary">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Get the right course or workshop guidance through the enquiry form.</p>
              </Link>
            ))}
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Workshop Flow" title="Simple path from enquiry to AI execution" center />
          <div className="grid gap-5 md:grid-cols-3">
            {flow.map((item, index) => (
              <div key={item} className="rounded-3xl bg-primary p-6 text-white shadow-premium">
                <p className="grid h-12 w-12 place-items-center rounded-2xl bg-brandGreen text-xl font-black text-white">{index + 1}</p>
                <h3 className="mt-8 text-2xl font-black">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-50">A clear, guided step that keeps the learning process simple and action-focused.</p>
              </div>
            ))}
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Social Proof" title="Trusted workshop-style learning experience" center />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["500+ Students", "Learners guided through AI and digital skills."],
              ["100+ Workshops", "Practical sessions across AI tools and growth workflows."],
              ["Star Ratings", "Positive learning feedback and real workshop reviews."]
            ].map(([title, text]) => (
              <div key={title} className="premium-card text-center">
                <div className="mx-auto flex justify-center gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <h3 className="mt-5 text-2xl font-black text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <SectionCTA label="Register Now" />
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Courses" title="Explore all AI and technology programs in one place" text="The complete course list is kept on the Courses page so learners can compare options clearly without repetition." center />
          <div className="mx-auto flex max-w-2xl flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-premium sm:flex-row sm:items-center sm:justify-center">
            <Link to="/courses" className="btn-primary">View All Courses</Link>
            <button type="button" onClick={scrollToForm} className="rounded-full border border-brandGreen px-6 py-3 text-sm font-black text-brandGreen transition hover:bg-brandGreen hover:text-white">
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionTitle eyebrow="Internship" title="AI Internship with real projects and certificate support" text="A focused internship path with real projects, certificate, resume support and mock interview guidance." />
            <div className="grid gap-3">
              {["AI Internship", "Real projects", "Certificate", "Resume support"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="shrink-0 text-brandGreen" size={21} />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <EnquiryForm compact />
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Career Support" title="Latest career support for student and professional growth" text="Career support is focused on current hiring expectations, profile clarity, portfolio proof and interview confidence." center />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careerSupport.map(([title, description, Icon]) => (
              <Link key={title} to="/contact" className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <Icon className="text-brandGreen" size={30} />
                <h3 className="mt-4 text-xl font-black text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </Link>
            ))}
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Workshops" title="AI workshops beyond digital marketing" text="Explore practical workshops in Generative AI, Prompt Engineering, AI Automation, Business AI, Content Creation and AI Digital Marketing." center />
          <div className="grid gap-5 md:grid-cols-3">
            {["Generative AI", "Prompt Engineering", "AI Digital Marketing", "AI Automation", "AI for Business", "AI Content Creation"].map((item) => (
              <Link key={item} to="/workshop" className="rounded-2xl bg-white p-6 text-center font-black text-primary shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <Lightbulb className="mx-auto mb-4 text-accent" size={28} />
                {item}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button type="button" onClick={scrollToForm} className="btn-primary">Register Now</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Projects" title="Real-world AI project gallery" text="Build practical outputs for internships, portfolios and business automation use cases." center />
          <div className="grid gap-5 md:grid-cols-3">
            {["AI Projects", "Internship projects", "Real-world project gallery"].map((project, index) => (
              <div key={project} className="min-h-64 rounded-3xl bg-primary p-6 text-white shadow-premium tech-grid">
                <p className="inline-flex rounded-full bg-brandGreen px-4 py-2 text-xs font-black text-white">Project {index + 1}</p>
                <h3 className="mt-20 text-2xl font-black">{project}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-50">Guided project work with practical problem statements and presentation-ready outcomes.</p>
              </div>
            ))}
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="FAQ" title="Common questions before you register" center />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <article key={question} className="premium-card">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-1 shrink-0 text-brandGreen" size={22} />
                  <div>
                    <h3 className="text-lg font-black text-primary">{question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <SectionCTA label="Enquire Now" />
        </div>
      </section>

      <LogoRibbon />
    </>
  );
}
