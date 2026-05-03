import { MessageSquareText, Star } from "lucide-react";

const reviews = [
  ["New learning and confidence", "The digital marketing and AI class helped me learn something new. I received proper guidance, new opportunities and confidence to move ahead.", "Shilpa Suradkar"],
  ["Useful for small businesses", "The AI workshop was very useful for small business owners. The guidance for business growth, marketing, AI and Gemini was very helpful.", "Chhaya Madam's Coaching Classes"],
  ["Clear and affordable learning", "The session gave clear digital marketing knowledge at an affordable cost. Everything was explained in a simple and easy-to-understand way.", "Sampada Gokhale"],
  ["Hands-on practice", "Thank you Snehal mam. Practicing during the workshop was the biggest achievement for me, and it helped me create work confidently.", "Shubhangi Govin"],
  ["Business growth workshop", "Thank you Snehal mam and team for conducting a resourceful and valuable workshop that helped enhance digital marketing skills for business growth.", "Sonal Malatpure"],
  ["Inspiring session", "The digital marketing session was very informative and inspiring. The teaching method was simple, clear and easy to understand.", "Usha Lendave"],
  ["Practical implementation", "Thank you for the learning. I practiced what was taught in the session and understood how to apply it for real work.", "Nilima Shinde"],
  ["Business promotion support", "The session helped me understand how to create advertising for my business using digital marketing and AI guidance.", "Vijay Nimse"],
  ["Creative independence", "The course helped me create urgent creatives without depending on others. It was practical, useful and confidence building.", "Rajashree Gagare"],
  ["Helpful for career growth", "The session helped me understand how AI tools can support projects, internship work and career growth.", "SMBS Team"],
  ["Professional guidance", "Thank you Snehal mam. The workshop was well organized, practical and focused on real use cases.", "Rajashri"]
];

export default function ReviewsSection() {
  return (
    <section className="section bg-blue-50/70">
      <div className="container-max">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-2 text-3xl font-black text-primary sm:text-4xl">Student feedback</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-brandGreen shadow-sm">
            <MessageSquareText size={18} />
            Workshop learners
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map(([title, text, name]) => (
            <div key={`${name}-${title}`} className="premium-card">
              <div className="flex gap-1 text-accent" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
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
