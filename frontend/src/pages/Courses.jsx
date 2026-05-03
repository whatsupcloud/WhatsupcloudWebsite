import CourseCard from "../components/CourseCard.jsx";
import LogoRibbon from "../components/LogoRibbon.jsx";
import ProgramCard from "../components/ProgramCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { additionalCourses, aiCourses } from "../data.js";
import courseCloud from "../assets/showcase/course-cloud.jpg";
import courseData from "../assets/showcase/course-data.jpg";
import courseDevops from "../assets/showcase/course-devops.jpg";
import courseGenai from "../assets/showcase/course-genai.jpg";
import courseMarketing from "../assets/showcase/course-marketing.jpg";
import courseSoftware from "../assets/showcase/course-software.jpg";

export default function Courses() {
  const featuredPrograms = [
    ["Generative AI", "AI and ML", "Prompting, LLM workflows, AI productivity and applied automation projects.", courseGenai, ["Prompting", "AI tools", "Projects"]],
    ["AI Digital Marketing", "Growth", "Campaign thinking, content creation, poster design, social media and lead systems.", courseMarketing, ["Content", "Campaigns", "Leads"]],
    ["AWS Cloud", "Cloud", "Cloud fundamentals, compute, storage, IAM, networking and architecture basics.", courseCloud, ["AWS", "Cloud labs", "Architecture"]],
    ["DevOps", "Automation", "Linux, Docker, Kubernetes, Jenkins, Terraform, CI/CD and deployment workflows.", courseDevops, ["CI/CD", "Docker", "Kubernetes"]],
    ["Full Stack Development", "Software", "Build strong application development foundations with frontend, backend and project practice.", courseSoftware, ["React", "Node", "Projects"]],
    ["Python and Data Skills", "Data", "Python foundations, analytics thinking, reporting, visualization and business insights.", courseData, ["Python", "Analytics", "Reports"]]
  ];

  return (
    <>
      <section className="section bg-blue-50/70">
        <div className="container-max">
          <SectionTitle eyebrow="Courses" title="AI programs for practical career and business growth" text="Every course is designed around hands-on tools, guided assignments and real output." center />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiCourses.map(([title, description]) => <CourseCard key={title} title={title} description={description} />)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Featured Tracks" title="Career-ready programs with visual learning paths" text="Useful assets from the older WhatsUpCloud project are now reused here as richer program visuals." center />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map(([title, subtitle, description, image, tags]) => (
              <ProgramCard key={title} title={title} subtitle={subtitle} description={description} image={image} tags={tags} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Additional Courses" title="Technology skills that strengthen your AI journey" center />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalCourses.map((course) => (
              <CourseCard key={course} title={course} description="Build practical technical foundations through guided, career-focused training." />
            ))}
          </div>
        </div>
      </section>
      <LogoRibbon />
    </>
  );
}
