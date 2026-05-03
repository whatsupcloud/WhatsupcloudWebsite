import { MessageSquareText, Star } from "lucide-react";
import reviewStory01 from "../assets/reviews/review-story-01.jpg";
import reviewStory02 from "../assets/reviews/review-story-02.jpg";
import reviewStory03 from "../assets/reviews/review-story-03.jpg";
import reviewStory04 from "../assets/reviews/review-story-04.jpg";
import reviewStory05 from "../assets/reviews/review-story-05.jpg";
import reviewStory06 from "../assets/reviews/review-story-06.jpg";
import reviewStory07 from "../assets/reviews/review-story-07.jpg";
import reviewStory08 from "../assets/reviews/review-story-08.jpg";
import reviewStory09 from "../assets/reviews/review-story-09.jpg";
import reviewStory10 from "../assets/reviews/review-story-10.jpg";
import reviewStory11 from "../assets/reviews/review-story-11.jpg";
import reviewStory12 from "../assets/reviews/review-story-12.jpg";
import reviewStory13 from "../assets/reviews/review-story-13.jpg";

const reviews = [
  ["Very practical session", "Thank you Snehal mam. The workshop was very practical and helped me understand how to use AI tools in daily work.", "Shilpa Suradkar"],
  ["Easy to understand", "Thank you Snehal mam for explaining everything step by step. The session was beginner friendly and clear.", "Sampada Gokhale"],
  ["Useful for marketing", "The AI content and lead generation examples were useful and easy to apply.", "Chhaya Madam's Coaching Classes"],
  ["Good learning experience", "The hands-on examples made the workshop simple, practical and confidence building.", "Shubhangi Govin"],
  ["Helpful for career growth", "The session helped me understand how AI tools can support projects, internship work and career growth.", "SMBS Team"],
  ["Professional guidance", "Thank you Snehal mam. The workshop was well organized, practical and focused on real use cases.", "Rajashri"],
  ["Clear explanation", "The concepts were explained in a simple way with useful examples for students and professionals.", "Aditi Patil"],
  ["Confidence building", "The workshop helped me start using AI tools with more confidence for daily work and learning.", "Priya Jadhav"],
  ["Practical examples", "Every topic was connected with real use cases, which made the session valuable and easy to follow.", "Neha Pawar"]
];

const reviewStories = [
  reviewStory01,
  reviewStory02,
  reviewStory03,
  reviewStory04,
  reviewStory05,
  reviewStory06,
  reviewStory07,
  reviewStory08,
  reviewStory09,
  reviewStory10,
  reviewStory11,
  reviewStory12,
  reviewStory13
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

        <div className="mt-10 overflow-hidden rounded-3xl bg-white p-4 shadow-premium sm:p-5">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {reviewStories.map((image, index) => (
              <article key={image} className="shrink-0 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
                <img
                  src={image}
                  alt={`Workshop learner review ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-[430px] w-[245px] object-cover sm:h-[500px] sm:w-[285px]"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
