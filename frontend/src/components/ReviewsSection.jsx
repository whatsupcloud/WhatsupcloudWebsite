const reviews = [
  ["Very practical session", "Thank you Snehal mam. The workshop was very practical and helped me understand how to use AI tools in daily work.", "Shilpa Suradkar"],
  ["Easy to understand", "Thank you Snehal mam for explaining everything step by step. The session was beginner friendly and clear.", "Sampada Gokhale"],
  ["Useful for marketing", "The AI poster, content and lead generation examples were useful and easy to apply.", "Chhaya Madam's Coaching Classes"],
  ["Good learning experience", "The hands-on examples made the workshop simple, practical and confidence building.", "Shubhangi Govin"],
  ["Helpful for career growth", "The session helped me understand how AI tools can support projects, internship work and career growth.", "SMBS Team"],
  ["Professional guidance", "Thank you Snehal mam. The workshop was well organized, practical and focused on real use cases.", "Rajashri"]
];

export default function ReviewsSection() {
  return (
    <section className="section bg-blue-50/70">
      <div className="container-max">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map(([title, text, name]) => (
            <div key={title} className="premium-card">
              <div className="flex gap-1 text-accent" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
              </div>
              <h3 className="mt-4 text-xl font-black text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-black text-brandGreen">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
