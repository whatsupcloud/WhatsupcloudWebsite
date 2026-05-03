import { Instagram, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/whatsupcloud-logo.png";

const instagramUrl = "https://www.instagram.com/whats_upcloud/";
const emailAddress = "whatsupcloud26@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-primary text-white">
      <div className="container-max grid gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr] lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="WhatsUpCloud logo" loading="lazy" decoding="async" className="h-12 w-12 rounded-full bg-white object-contain" />
            <div>
              <p className="text-xl font-black">WhatsUpCloud</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-blue-50">
            Practical AI training, automation, digital skills, internships and workshops for students, professionals and businesses.
          </p>
          <p className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-accent">
            Made for Students, Professionals & Business Owners
          </p>
        </div>
        <div>
          <p className="font-bold text-accent">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-blue-50">
            <Link to="/courses">Courses</Link>
            <Link to="/internship">Internship</Link>
            <Link to="/workshop">Workshop</Link>
            <Link to="/ebook">E-Book</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookies-policy">Cookies Policy</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-accent">Connect</p>
          <div className="mt-4 grid gap-3">
            <a aria-label="Instagram" className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-black text-primary shadow-sm transition hover:-translate-y-1 hover:bg-accent" href={instagramUrl} target="_blank" rel="noreferrer">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brandGreen text-white">
                <Instagram size={19} />
              </span>
              Instagram
            </a>
            <a aria-label="YouTube" className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-black text-primary shadow-sm transition hover:-translate-y-1 hover:bg-accent" href="https://youtube.com" target="_blank" rel="noreferrer">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-red-600 text-white">
                <Youtube size={19} />
              </span>
              YouTube
            </a>
            <a aria-label="Email" className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-black text-primary shadow-sm transition hover:-translate-y-1 hover:bg-accent" href={`mailto:${emailAddress}`}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-white">
                <Mail size={19} />
              </span>
              Email
            </a>
          </div>
          <a href={`mailto:${emailAddress}`} className="mt-4 inline-flex text-sm font-semibold text-blue-50 transition hover:text-accent">
            {emailAddress}
          </a>
        </div>
        <div className="md:col-span-3 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-2">
          <div>
            <p className="font-bold text-accent">Vision</p>
            <p className="mt-3 text-sm leading-6 text-blue-50">To make AI education practical, affordable and accessible.</p>
          </div>
          <div>
            <p className="font-bold text-accent">Mission</p>
            <p className="mt-3 text-sm leading-6 text-blue-50">To train students and professionals with real AI skills, automation and career support.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-blue-100">
        <p>Copyright 2026 WhatsUpCloud. All rights reserved.</p>
        <p className="mt-2 font-semibold text-green-100">Powered by Inovalytics Technology</p>
      </div>
    </footer>
  );
}
