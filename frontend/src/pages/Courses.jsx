import CourseCard from "../components/CourseCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { additionalCourses, aiCourses } from "../data.js";

export default function Courses() {
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
          <SectionTitle eyebrow="Additional Courses" title="Technology skills that strengthen your AI journey" center />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalCourses.map((course) => (
              <CourseCard key={course} title={course} description="Build practical technical foundations through guided, career-focused training." />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
