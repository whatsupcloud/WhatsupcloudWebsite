import { Instagram, Mail, Menu, X, Youtube } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/whatsupcloud-logo.png";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Internship", "/internship"],
  ["Workshop", "/workshop"],
  ["E-Book", "/ebook"],
  ["Contact Us", "/contact"]
];

const instagramUrl = "https://www.instagram.com/whats_upcloud/";
const emailAddress = "whatsupcloud26@gmail.com";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/92 backdrop-blur">
      <div className="container-max flex h-24 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="WhatsUpCloud logo" className="h-16 w-16 rounded-full object-contain sm:h-20 sm:w-20" />
          <div>
            <p className="text-lg font-black leading-none text-primary">WhatsUpCloud</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${isActive ? "text-brandGreen" : "text-slate-700 hover:text-primary"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a aria-label="Instagram" href={instagramUrl} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-green-50 text-brandGreen transition hover:-translate-y-1 hover:bg-brandGreen hover:text-white">
            <Instagram size={18} />
          </a>
          <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-green-50 text-brandGreen transition hover:-translate-y-1 hover:bg-brandGreen hover:text-white">
            <Youtube size={18} />
          </a>
          <a aria-label="Email" href={`mailto:${emailAddress}`} className="grid h-10 w-10 place-items-center rounded-full bg-green-50 text-brandGreen transition hover:-translate-y-1 hover:bg-brandGreen hover:text-white">
            <Mail size={18} />
          </a>
          <Link to="/contact" className="btn-primary">Enquire Now</Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-primary lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="container-max grid gap-2">
            {links.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-primary"
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Enquire Now
            </Link>
            <div className="mt-3 flex gap-3">
              <a aria-label="Instagram" href={instagramUrl} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-green-50 text-brandGreen">
                <Instagram size={18} />
              </a>
              <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-green-50 text-brandGreen">
                <Youtube size={18} />
              </a>
              <a aria-label="Email" href={`mailto:${emailAddress}`} className="grid h-10 w-10 place-items-center rounded-full bg-green-50 text-brandGreen">
                <Mail size={18} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
