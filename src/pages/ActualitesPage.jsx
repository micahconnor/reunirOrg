import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';
import ArticleCard from '../components/common/ArticleCard.jsx';
import { articles } from '../data/homepageContent.js';

const ActualitesPage = () => {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Magazine"
        title="Les actualités du réseau Réunir"
        description="Retrouvez les temps forts, retours d’expériences et initiatives portés par nos adhérents et partenaires."
      />
      <Container className="space-y-8 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ActualitesPage;
