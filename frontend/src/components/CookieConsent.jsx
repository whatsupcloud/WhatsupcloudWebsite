import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const storageKey = "whatsupcloud-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(storageKey) !== "accepted");
  }, []);

  function acceptCookies() {
    localStorage.setItem(storageKey, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-20 z-50 rounded-3xl border border-slate-100 bg-white p-5 shadow-premium md:left-auto md:right-6 md:max-w-md">
      <p className="text-sm font-black text-primary">Cookies Notice</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        WhatsUpCloud uses essential cookies and basic local storage to improve your website experience and remember preferences.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" onClick={acceptCookies} className="rounded-full bg-brandGreen px-5 py-2 text-sm font-black text-white transition hover:bg-primary">
          Accept
        </button>
        <Link to="/cookies-policy" className="text-sm font-black text-primary transition hover:text-brandGreen">
          Cookies Policy
        </Link>
        <Link to="/privacy-policy" className="text-sm font-black text-primary transition hover:text-brandGreen">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
