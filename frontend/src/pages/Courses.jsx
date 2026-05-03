import { Link } from "react-router-dom";
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

  return (
    <>
      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Courses" title="AI programs for practical career and business growth" text="One clean course list with visual learning paths and enquiry-based guidance." center />
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
              <Link key={course} to="/contact" className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <h3 className="text-lg font-black text-primary">{course}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{syllabus}</p>
                <p className="mt-4 text-sm font-black text-brandGreen">Enquire Now</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
