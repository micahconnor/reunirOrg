import Container from '../layout/Container.jsx';
import ArticleCard from '../common/ArticleCard.jsx';
import { articles } from '../../data/homepageContent.js';

const LatestNewsSection = () => {
  const sortedArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section className="bg-black text-white">
      <Container className="space-y-8 py-20">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Magazine</p>
          <h2 className="text-4xl font-semibold">Les dernières actualités</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestNewsSection;
