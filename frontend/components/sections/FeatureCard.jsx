export default function FeatureCard({ 
  icon: Icon,
  title, 
  description,
  link = null
}) {
  const content = (
    <div className="h-full p-6 sm:p-8 rounded-lg border border-slate-200 bg-white hover:shadow-lg hover:border-accent-300 transition-all duration-300">
      {Icon && (
        <div className="mb-4">
          <div className="inline-block p-3 rounded-lg bg-accent-50">
            <Icon size={28} className="text-accent-600" />
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-primary-900 mb-2">
        {title}
      </h3>
      
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      {link && (
        <p className="mt-4 text-accent-600 font-medium text-sm hover:text-accent-700">
          Learn more →
        </p>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}
