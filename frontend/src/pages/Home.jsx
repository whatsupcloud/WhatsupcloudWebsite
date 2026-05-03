import { Award, BookOpen, BriefcaseBusiness, GraduationCap, HelpCircle, Lightbulb, Star, Users, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm.jsx";
import LogoRibbon from "../components/LogoRibbon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import courseGenai from "../assets/showcase/course-genai.jpg";
import courseMarketing from "../assets/showcase/course-marketing.jpg";
import trainerPhoto from "../assets/trainer-photo.jpg";

function scrollToForm() {
  const form = document.getElementById("enquiry-form");
  if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const heroPoints = [
    ["Live Training", "/workshop"],
    ["Certificate", "/courses"],
    ["Projects", "/internship"],
    ["Career Support", "/contact"]
  ];
  const programs = [
    ["Courses", "AI, DevOps, Cloud, MLOps and Full Stack learning paths.", "/courses", BookOpen, "View Courses"],
    ["Internship", "Project-based internships with certificate and profile support.", "/internship", GraduationCap, "View Internship"],
    ["Workshop", "Practical AI workshops for students, professionals and businesses.", "/workshop", Lightbulb, "View Workshops"],
    ["E-Book", "Course-wise guides and learning resources.", "/ebook", Award, "View E-Books"],
    ["Career Support", "Resume, LinkedIn, portfolio and mock interview guidance.", "/contact", BriefcaseBusiness, "Get Guidance"],
    ["Enquiry", "Get complete course details from the team.", "/contact", Workflow, "Enquire Now"]
  ];
  const faqs = [
    ["Can beginners join?", "Yes. The training is beginner friendly and no prior experience is required."],
    ["Will I get a certificate?", "Yes. Certificate guidance and completion support are included."],
    ["How can I know the fees?", "Please submit the enquiry form and our team will contact you with complete details."],
    ["Who can join this training?", "Students, job seekers, professionals, business owners and freelancers can join."]
  ];

  return (
    <>
      <section className="section orb-free-gradient">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="eyebrow">WhatsUpCloud AI Training Institute</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal text-primary sm:text-5xl lg:text-6xl">
              Learn AI Skills for Career, Business & Growth
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Practical AI training with latest tools, automation, real projects and career support.
            </p>
            <p className="mt-4 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-brandGreen">
              No prior experience required
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/courses" className="btn-primary text-center">Explore Courses</Link>
              <button type="button" onClick={scrollToForm} className="btn-primary">Register Now</button>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroPoints.map(([badge, path]) => (
                <Link
                  key={badge}
                  to={path}
                  className="rounded-2xl border border-white bg-white/90 px-3 py-3 text-center text-xs font-black text-primary shadow-sm transition hover:-translate-y-1 hover:border-brandGreen hover:bg-brandGreen hover:text-white"
                >
                  {badge}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-premium sm:rounded-[2rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-blue-50 sm:rounded-[1.5rem]">
                <img src={trainerPhoto} alt="Founder and mentor" loading="eager" decoding="async" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/92 p-4 shadow-xl backdrop-blur sm:inset-x-5 sm:bottom-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-brandGreen sm:text-xs">Founder | Mentor | Woman Entrepreneur | AI Expert</p>
                  <p className="mt-1 text-base font-black text-primary sm:text-lg">Practical learning with guided support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-max grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            <img src={courseGenai} alt="AI training visual" loading="lazy" decoding="async" className="aspect-[4/5] rounded-3xl object-cover shadow-premium" />
            <img src={courseMarketing} alt="AI digital marketing visual" loading="lazy" decoding="async" className="mt-8 aspect-[4/5] rounded-3xl object-cover shadow-premium" />
          </div>
          <div>
            <SectionTitle
              eyebrow="What is WhatsUpCloud?"
              title="A practical AI training institute for real skills"
              text="WhatsUpCloud helps students, job seekers, professionals, freelancers and business owners learn AI in a practical way. Training focuses on live sessions, latest AI tools, automation, digital growth, real projects and career support."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {["Learn by doing", "Tool-based training", "Project practice", "Career guidance"].map((item) => (
                <div key={item} className="rounded-2xl bg-green-50 p-4 text-sm font-black text-brandGreen">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Explore" title="Choose the right path" text="Home page is kept simple. Detailed information is available on separate pages." center />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map(([title, text, path, Icon, action]) => (
              <Link key={title} to={path} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium sm:p-6">
                <Icon className="text-brandGreen" size={30} />
                <h2 className="mt-4 text-xl font-black text-primary">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                <span className="mt-5 inline-flex rounded-full bg-brandGreen px-4 py-2 text-sm font-black text-white">
                  {action}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Trust" title="Practical learning with real support" center />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["500+ Students", "Learners guided through AI and digital skills."],
              ["100+ Workshops", "Practical sessions across AI tools and growth workflows."],
              ["Career Support", "Resume, LinkedIn, portfolio and interview guidance."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 text-center shadow-premium">
                <div className="mx-auto flex justify-center gap-1 text-brandGreen">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <h2 className="mt-5 text-2xl font-black text-primary">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max max-w-3xl">
          <EnquiryForm compact />
        </div>
      </section>

      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="FAQ" title="Common questions" center />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <article key={question} className="premium-card">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-1 shrink-0 text-brandGreen" size={22} />
                  <div>
                    <h2 className="text-lg font-black text-primary">{question}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LogoRibbon />
    </>
  );
}
