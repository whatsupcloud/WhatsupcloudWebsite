import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ProgramCard from "../components/ProgramCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import internshipCloud from "../assets/showcase/internship-cloud.jpg";
import internshipDevops from "../assets/showcase/internship-devops.jpg";
import internshipGenai from "../assets/showcase/internship-genai.jpg";
import courseMarketing from "../assets/showcase/course-marketing.jpg";

export default function Internship() {
  const items = ["AI Internship", "Project-based learning", "30 / 45 / 60 days", "Certificate", "Resume + LinkedIn support", "Mock interviews"];
  const tracks = [
    ["Generative AI Internship", "AI Track", "Prompt systems, AI workflows, use-case research and guided project execution.", internshipGenai, ["Use cases", "AI workflows"]],
    ["AI Digital Marketing Internship", "Marketing Track", "AI posters, campaign planning, Instagram content, lead generation and automation practice.", courseMarketing, ["AI content", "Leads"]],
    ["Cloud Internship", "Cloud Track", "Cloud service basics, deployment exposure and practical platform understanding.", internshipCloud, ["Cloud labs", "Deployment"]],
    ["DevOps Internship", "DevOps Track", "Linux, Docker, Kubernetes, Jenkins, Terraform, CI/CD thinking and deployment practice.", internshipDevops, ["CI/CD", "Automation"]]
  ];

  return (
    <>
      <section className="section orb-free-gradient">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow="Internship" title="Internships with projects, certificates and career support" text="Focused internship paths for students and professionals who want practical exposure and portfolio-ready outcomes." />
            <Link to="/contact" className="btn-primary">Enquire Now</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="premium-card flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-brandGreen" size={23} />
                <span className="font-black text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-max">
          <SectionTitle eyebrow="Internship Tracks" title="Choose a practical internship pathway" center />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tracks.map(([title, subtitle, description, image, tags]) => (
              <ProgramCard key={title} title={title} subtitle={subtitle} description={description} image={image} tags={tags} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
