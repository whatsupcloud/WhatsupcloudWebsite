import EnquiryForm from "../components/EnquiryForm.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Contact() {
  return (
    <section className="section bg-blue-50/70">
      <div className="container-max grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionTitle eyebrow="Contact" title="Submit Enquiry" text="Share your details and our team will contact you soon with the right course or program guidance." />
          <div className="rounded-3xl bg-primary p-6 text-white shadow-premium">
            <p className="text-sm font-bold text-accent">WhatsUpCloud</p>
            <p className="mt-3 text-2xl font-black">AI Training Institute</p>
            <p className="mt-3 text-sm leading-6 text-blue-50">Powered by Inovalytics Technology</p>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
