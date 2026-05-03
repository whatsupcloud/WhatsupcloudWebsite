export default function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black tracking-normal text-primary sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>}
    </div>
  );
}
