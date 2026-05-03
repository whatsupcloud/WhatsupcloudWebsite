import { Link } from "react-router-dom";

const instagramUrl = "https://www.instagram.com/whats_upcloud/";
const emailAddress = "whatsupcloud26@gmail.com";
const socialLinks = [
  ["Instagram", instagramUrl, "https://cdn.simpleicons.org/instagram/E4405F", "Instagram logo"],
  ["YouTube", "https://youtube.com", "https://cdn.simpleicons.org/youtube/FF0000", "YouTube logo"],
  ["Email", `mailto:${emailAddress}`, "https://cdn.simpleicons.org/gmail/EA4335", "Gmail logo"]
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-primary text-white">
      <div className="container-max grid gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr] lg:px-12">
        <div>
          <p className="font-bold text-accent">Quick links</p>
          <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-blue-50 md:grid-cols-1">
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
          <div className="mt-3 flex flex-col items-start gap-3">
            {socialLinks.map(([label, href, icon, alt]) => (
              <a key={label} aria-label={label} className="transition hover:-translate-y-1 hover:opacity-80" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                <img src={icon} alt={alt} loading="lazy" decoding="async" className="h-8 w-8 object-contain" />
              </a>
            ))}
          </div>
          <a href={`mailto:${emailAddress}`} className="mt-3 inline-flex text-sm font-semibold text-blue-50 transition hover:text-accent">
            {emailAddress}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-3 text-center text-sm text-blue-100">
        <p>Copyright 2026 WhatsUpCloud. All rights reserved.</p>
        <p className="mt-1 font-semibold text-green-100">Powered by Inovalytics Technology</p>
      </div>
    </footer>
  );
}
