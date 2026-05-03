import LogoRibbon from "../components/LogoRibbon.jsx";
import ProgramCard from "../components/ProgramCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import courseCloud from "../assets/showcase/course-cloud.jpg";
import courseData from "../assets/showcase/course-data.jpg";
import courseDevops from "../assets/showcase/course-devops.jpg";
import courseGenai from "../assets/showcase/course-genai.jpg";
import courseMarketing from "../assets/showcase/course-marketing.jpg";
import courseSoftware from "../assets/showcase/course-software.jpg";

export default function Courses() {
  const aiPrograms = [
    ["Generative AI", "AI", "Create content, prompts, images, workflows and practical AI use cases.", courseGenai, ["Prompting", "AI tools", "Projects"]],
    ["AI Digital Marketing", "Marketing", "Use AI for campaigns, social content, posters, lead generation and growth workflows.", courseMarketing, ["Content", "Campaigns", "Leads"]],
    ["AI Prompt Engineering", "Prompting", "Build better prompts for research, content, business tasks and automation.", courseData, ["Prompts", "Templates", "Output quality"]],
    ["AI Automation", "Automation", "Design practical automations for repeated business and career tasks.", courseDevops, ["Workflows", "No-code", "Productivity"]],
    ["AI for Business", "Business", "Apply AI to operations, sales, support, reporting and team productivity.", courseCloud, ["Business AI", "Reporting", "Support"]],
    ["AI Project Development", "Projects", "Build portfolio-ready AI projects with real-world problem statements.", courseSoftware, ["Portfolio", "Development", "Use cases"]]
  ];
  const technologyTracks = [
    ["DevOps", "Linux, Git, Docker, Kubernetes, Jenkins, Terraform, CI/CD, monitoring and deployment automation."],
    ["AWS Cloud", "AWS fundamentals, compute, storage, networking, IAM, cloud architecture and deployment basics."],
    ["MLOps", "Model deployment lifecycle, pipelines, monitoring, versioning and production ML workflow basics."],
    ["DevOps using AI", "Use AI tools to speed up scripting, troubleshooting, documentation, CI/CD support and cloud automation."],
    ["Python", "Programming foundations, automation scripts, data handling and practical coding confidence."],
    ["Java", "Core Java, OOP concepts, backend foundations and project-oriented programming practice."],
    ["Full Stack Development", "Frontend, backend, APIs, database integration and complete project development."]
  ];
  const reviews = [
    ["Practical learning", "The course examples were practical and easy to connect with daily work, projects and career goals.", "Shilpa Suradkar"],
    ["Clear explanation", "Concepts were explained step by step, so beginners could understand AI tools without confusion.", "Sampada Gokhale"],
    ["Useful projects", "The project-based approach helped me build confidence and understand how to apply the tools.", "Chhaya Madam's Coaching Classes"],
    ["Career focused", "The training gave useful direction for resume, LinkedIn, interviews and practical skill development.", "Shubhangi Govin"]
  ];

  return (
    <>
      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Courses" title="AI programs for practical career and business growth" text="One clean course list with visual learning paths. No public course prices are shown." center />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiPrograms.map(([title, subtitle, description, image, tags]) => (
              <ProgramCard key={title} title={title} subtitle={subtitle} description={description} image={image} tags={tags} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Additional Courses" title="Technology skills that strengthen your AI journey" center />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologyTracks.map(([course, syllabus]) => (
              <div key={course} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <h3 className="text-lg font-black text-primary">{course}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{syllabus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-green-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Reviews" title="What learners say about the courses" text="Short, practical feedback from learners who joined WhatsUpCloud training programs." center />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map(([title, text, name]) => (
              <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <div className="flex gap-1 text-brandGreen" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
                </div>
                <h3 className="mt-4 text-lg font-black text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-black text-brandGreen">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoRibbon />
    </>
  );
}
