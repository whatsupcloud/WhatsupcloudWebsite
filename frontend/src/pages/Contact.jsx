import { Instagram, Mail } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const instagramUrl = "https://www.instagram.com/whats_upcloud/";
const emailAddress = "whatsupcloud26@gmail.com";

export default function Contact() {
  return (
    <section className="section bg-blue-50/70">
      <div className="container-max grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionTitle eyebrow="Contact" title="Submit Enquiry" text="Share your details and our team will contact you soon with the right course or program guidance." />
          <div className="rounded-3xl bg-primary p-6 text-white shadow-premium">
            <p className="text-sm font-bold text-green-100">WhatsUpCloud</p>
            <p className="mt-3 text-2xl font-black">AI Training Institute</p>
            <a href={`mailto:${emailAddress}`} className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white transition hover:bg-white/20">
              <Mail size={17} />
              {emailAddress}
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white transition hover:bg-white/20">
              <Instagram size={17} />
              Follow WhatsUpCloud on Instagram
            </a>
          </div>
        </div>
        <EnquiryForm compact />
      </div>
    </section>
  );
}
