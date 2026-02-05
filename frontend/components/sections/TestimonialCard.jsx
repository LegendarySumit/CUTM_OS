import { Star } from 'lucide-react';

export default function TestimonialCard({ 
  name, 
  program,
  image = null,
  testimonial,
  rating = 5
}) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-slate-700 mb-6 leading-relaxed italic">
        "{testimonial}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {image && (
          <img 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-accent-200"
          />
        )}
        <div>
          <p className="font-semibold text-primary-900">
            {name}
          </p>
          <p className="text-sm text-slate-600">
            {program}
          </p>
        </div>
      </div>
    </div>
  );
}
