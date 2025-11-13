import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  if (!article) return null;
  const { title, excerpt, date, image, to = '/actualites' } = article;
  const formattedDate = date ? new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }) : '';

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{formattedDate}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-white/70">{excerpt}</p>
        <Link to={to} className="mt-auto text-sm font-semibold text-white hover:text-[#A76F6F]">
          Lire l’article →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
