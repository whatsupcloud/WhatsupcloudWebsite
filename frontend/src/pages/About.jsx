import SectionTitle from "../components/SectionTitle.jsx";

export default function About() {
  return (
    <section className="section orb-free-gradient">
      <div className="container-max">
        <SectionTitle eyebrow="About" title="WhatsUpCloud is an AI training institute powered by Inovalytics Technology." text="We focus on practical learning, latest AI tools, automation workflows, real projects and career support for students, professionals and growing businesses." />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="premium-card">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-4 text-2xl font-black text-primary">To make AI education practical, affordable and accessible.</h2>
          </div>
          <div className="premium-card">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-4 text-2xl font-black text-primary">To train students and professionals with real AI skills, automation and career support.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
