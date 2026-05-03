import { Award, BriefcaseBusiness, CheckCircle2, Clock, GraduationCap, Lightbulb, Rocket, Sparkles, Star, Users, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import LogoRibbon from "../components/LogoRibbon.jsx";
import ProgramCard from "../components/ProgramCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import trainerPhoto from "../assets/trainer-photo.jpg";
import { additionalCourses, aiCourses } from "../data.js";
import placementLinkedin from "../assets/showcase/placement-linkedin.jpg";
import placementMock from "../assets/showcase/placement-mock.jpg";
import placementResume from "../assets/showcase/placement-resume.jpg";

export default function Home() {
  const heroPoints = ["Live Training", "Certificate", "Projects", "Career Support", "Limited Seats Available"];
  const benefits = [
    ["Beginner Friendly", Users],
    ["Practical Training", Workflow],
    ["Live Sessions", Clock],
    ["Certificate", Award],
    ["Career Support", BriefcaseBusiness]
  ];
  const learnItems = ["AI image creation", "AI posters", "Instagram growth", "WhatsApp Business", "Lead generation", "Automation"];
  const joinItems = ["Students", "Job seekers", "Business owners", "Freelancers"];
  const flow = ["Register", "Attend Live Workshop", "Start using AI"];
  const focusedCourses = aiCourses.filter(([title]) => ["Generative AI", "AI Digital Marketing", "AI Automation", "AI Prompt Engineering"].includes(title));
  const focusedAdditional = additionalCourses.filter((course) => ["DevOps", "AWS Cloud", "Full Stack Development"].includes(course));

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
              <Link to="/contact" className="btn-secondary">Register Now</Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {heroPoints.map((badge) => (
                <div key={badge} className="rounded-2xl border border-white bg-white/85 px-3 py-3 text-center text-xs font-black text-primary shadow-sm">
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-premium">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-blue-50">
                <img src={trainerPhoto} alt="AI Trainer and Mentor" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/92 p-4 shadow-xl backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-brandGreen">Founder | Mentor | Woman Entrepreneur | AI Expert</p>
                  <p className="mt-1 text-lg font-black text-primary">Practical AI learning with guided support</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-8 hidden rounded-2xl bg-accent px-5 py-4 text-sm font-black text-primary shadow-lg sm:block">
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
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="What You Will Learn" title="Hands-on AI skills for daily work and digital growth" text="The workshop style is practical, tool-based and designed for learners who want usable outcomes quickly." />
            <div className="grid gap-4 sm:grid-cols-2">
              {learnItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-sm">
                  <CheckCircle2 className="shrink-0 text-brandGreen" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Who Can Join" title="Open for learners, creators and business teams" />
            <div className="grid gap-4 sm:grid-cols-2">
              {joinItems.map((item) => (
                <div key={item} className="premium-card">
                  <Users className="text-brandGreen" size={28} />
                  <h3 className="mt-4 text-xl font-black text-primary">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Learn practical AI workflows without needing advanced technical background.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Workshop Flow" title="Simple path from enquiry to AI execution" center />
          <div className="grid gap-5 md:grid-cols-3">
            {flow.map((item, index) => (
              <div key={item} className="rounded-3xl bg-primary p-6 text-white shadow-premium">
                <p className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-xl font-black text-primary">{index + 1}</p>
                <h3 className="mt-8 text-2xl font-black">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-50">A clear, guided step that keeps the learning process simple and action-focused.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Social Proof" title="Trusted workshop-style learning experience" center />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["100+ Students", "Learners guided through AI and digital skills."],
              ["10+ Workshops", "Practical sessions across AI tools and growth workflows."],
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
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Courses" title="Focused AI and technology programs" text="No public course prices are shown. Submit an enquiry and the team will guide you." center />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusedCourses.map(([title, description]) => <CourseCard key={title} title={title} description={description} />)}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {focusedAdditional.map((course) => (
              <div key={course} className="rounded-2xl bg-blue-50 px-5 py-5 text-center text-sm font-black text-primary">
                {course}
              </div>
            ))}
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
          <SectionTitle eyebrow="Career Support" title="Placement readiness support for stronger student presentation" center />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Resume Building", "Profile", "ATS-friendly resume structure, project framing and role-focused presentation.", placementResume, ["Resume", "Projects"]],
              ["LinkedIn Optimization", "Branding", "Better profile clarity, professional positioning and visibility support.", placementLinkedin, ["LinkedIn", "Profile"]],
              ["Mock Interviews", "Practice", "Technical, HR and communication practice to improve confidence.", placementMock, ["Interview", "Confidence"]]
            ].map(([title, subtitle, description, image, tags]) => (
              <ProgramCard key={title} title={title} subtitle={subtitle} description={description} image={image} tags={tags} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Workshops" title="AI workshops beyond digital marketing" text="Explore practical workshops in Generative AI, Prompt Engineering, AI Automation, Business AI, Content Creation and AI Digital Marketing." center />
          <div className="grid gap-5 md:grid-cols-3">
            {["Generative AI", "Prompt Engineering", "AI Digital Marketing", "AI Automation", "AI for Business", "AI Content Creation"].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 text-center font-black text-primary shadow-sm">
                <Lightbulb className="mx-auto mb-4 text-accent" size={28} />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="btn-primary">Register Now</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Projects" title="Real-world AI project gallery" text="Build practical outputs for internships, portfolios and business automation use cases." center />
          <div className="grid gap-5 md:grid-cols-3">
            {["AI Projects", "Internship projects", "Real-world project gallery"].map((project, index) => (
              <div key={project} className="min-h-64 rounded-3xl bg-primary p-6 text-white shadow-premium tech-grid">
                <p className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-black text-primary">Project {index + 1}</p>
                <h3 className="mt-20 text-2xl font-black">{project}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-50">Guided project work with practical problem statements and presentation-ready outcomes.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoRibbon />
    </>
  );
}
