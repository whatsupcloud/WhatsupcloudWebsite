import { Instagram, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/whatsupcloud-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-primary text-white">
      <div className="container-max grid gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr] lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="WhatsUpCloud logo" className="h-12 w-12 rounded-full bg-white object-contain" />
            <div>
              <p className="text-xl font-black">WhatsUpCloud</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-blue-50">
            Practical AI training, automation, digital skills, internships and workshops for students, professionals and businesses.
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
          </div>
        </div>
        <div>
          <p className="font-bold text-accent">Connect</p>
          <div className="mt-4 flex gap-3">
            <a aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={18} />
            </a>
            <a aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" href="https://youtube.com" target="_blank" rel="noreferrer">
              <Youtube size={18} />
            </a>
            <a aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" href="mailto:info@whatsupcloud.com">
              <Mail size={18} />
            </a>
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
