const assets = {
  hero: '/src/assets/images/homepage/figmaTailwind/heroHomepage.svg',
  discover: 'https://www.figma.com/api/mcp/asset/dd4c8b0f-4178-4cd2-b91f-e2bd389269f9',
  promotionGallery: [
    'https://www.figma.com/api/mcp/asset/4bac06ab-13de-467e-986e-4fd239f774d6',
    'https://www.figma.com/api/mcp/asset/2938939f-9647-4bfe-a437-173dd42d5d30',
    'https://www.figma.com/api/mcp/asset/dbc5019a-5669-4cbc-a528-63ea0d6ddf7a',
  ],
  partners: [
    'https://www.figma.com/api/mcp/asset/27e0fdfc-a797-41c5-9613-db8bb6a2170b',
    'https://www.figma.com/api/mcp/asset/e410c468-efa6-40a8-93c9-33060799f71c',
    'https://www.figma.com/api/mcp/asset/2b0bd627-f0c6-4362-80dd-ffe428f8c236',
    'https://www.figma.com/api/mcp/asset/674fc376-9823-4b58-873c-7c2d83c425a7',
    'https://www.figma.com/api/mcp/asset/cb05f9b9-e322-4f90-8822-9344b62b85a0',
    'https://www.figma.com/api/mcp/asset/394ef09f-18ed-45d2-964a-380d2ee1f756',
  ],
  book: 'https://www.figma.com/api/mcp/asset/ba345d6b-1333-4412-b028-2d91e0276165',
  engagements: 'https://www.figma.com/api/mcp/asset/5c4f5148-323f-437c-85e1-00934e24e184',
  servicesBanner: 'https://www.figma.com/api/mcp/asset/b22d3aca-37ce-425d-86bf-5ea663a8253a',
  placeholder: 'https://placehold.co/960x640/0D142D/FFFFFF?text=Réunir',
};

export const heroContent = {
  kicker: 'Collectif Réunir',
  title: 'La force du collectif au service de la mobilité',
  description:
    'Du local au national, Réunir met en commun les expertises, les services mutualisés et des partenaires engagés pour accompagner les PME du transport routier de voyageurs.',
  personas: ['Un Transporteur', 'Un Partenaire', 'Une Autorité Organisatrice'],
  ctas: [
    { label: 'Découvrir Réunir', to: '/le-groupe', variant: 'primary' },
    { label: 'Prendre rendez-vous', to: '/contact', variant: 'ghost' },
  ],
  media: assets.hero,
  stats: [
    { value: '13 500', label: 'Collaborateurs engagés' },
    { value: '+200', label: 'PME adhérentes' },
    { value: '350', label: 'Sites d’exploitation' },
    { value: '+12 500', label: 'Véhicules' },
  ],
};

export const discoverContent = {
  kicker: 'Notre histoire',
  title: 'Découvrir Réunir',
  paragraphs: [
    'Depuis plus de 25 ans, Réunir accompagne les PME du transport routier de voyageurs dans leur développement, la transformation de leurs pratiques et la conquête de nouveaux marchés.',
    'Véritable trait d’union entre transporteurs, partenaires et autorités organisatrices, Réunir incarne une vision responsable et collaborative de la mobilité.',
  ],
  bullets: [
    'Outils partagés, appels d’offres et achats mutualisés',
    'Programmes dédiés aux territoires et partenaires nationaux',
  ],
  cta: { label: 'En savoir plus', to: '/le-groupe' },
  image: assets.discover,
};

export const promotionContent = {
  title: 'Rejoignez la promotion d’adhérents 2027',
  description:
    'Vous êtes une PME tournée vers la performance, la sécurité et les opportunités ? Intégrez une promotion qui mutualise offres commerciales, achats, veille et accompagnements d’experts.',
  features: [
    'Veille & appels d’offres',
    'Label RSE reconnu',
    'Assurances & gestion des sinistres',
    'Accompagnement d’experts',
    'Avantages au quotidien',
    'Notoriété & promotion du secteur',
  ],
  stats: [
    { value: '206', label: 'PME du transport routier ont rejoint Réunir' },
    { value: '56', label: 'Partenaires référencés' },
    { value: '13 500', label: 'Collaborateurs accompagnés' },
  ],
  gallery: assets.promotionGallery,
};

export const whyJoinContent = {
  kicker: 'Vous êtes un transporteur',
  title: 'Pourquoi intégrer la Promotion Réunir ?',
  description:
    'Un parcours unique pour les PME du transport routier de voyageurs : mentoring, outils partagés et accès à des opportunités business réservées aux adhérents.',
  cta: { label: 'Devenir adhérent', to: '/reunir-association' },
  cards: [
    { title: 'Les avantages Réunir', description: 'Groupes de travail, achats mutualisés, offres commerciales.' },
    { title: 'Nos engagements', description: 'Sécurité, qualité de service et accompagnement RSE.' },
    { title: 'Les conditions d’accès', description: 'Parcours d’intégration personnalisé et parrainage.' },
    { title: 'Nos outils digitaux', description: 'Book partenaires, veille appels d’offres et CRM Saybus.' },
  ],
};

export const partnersContent = {
  kicker: 'Constructeurs, fournisseurs & institutionnels',
  title: '+ de 50 partenaires nous font confiance',
  description: 'Devenir partenaire, c’est participer activement à la transformation du secteur aux côtés de dirigeants engagés.',
  logos: assets.partners,
};

export const bookContent = {
  kicker: 'Vous êtes un partenaire',
  title: 'Pourquoi intégrer notre Book Partenaires 2027 ?',
  description:
    'Être partenaire de Réunir, c’est participer activement à la transformation du secteur aux côtés de dirigeants engagés et bénéficier d’une visibilité nationale auprès des PME adhérentes.',
  bullets: ['Les avantages Réunir', 'Vos engagements', 'Les conditions d’accès', 'Support dédié'],
  cta: { label: 'Devenir partenaire', to: '/partenaire' },
  image: assets.book,
};

export const engagementsContent = {
  kicker: 'PÉRÉNISATION DE L’ACTIVITÉ',
  title: 'Nos engagements',
  description:
    'Réunir assume pleinement sa responsabilité sociétale et s’engage pour ses collaborateurs, l’environnement et les territoires où ses PME sont implantées.',
  image: assets.engagements,
  actions: [
    { number: '01', title: 'Label RSE', description: 'Nous accompagnons les PME vers un modèle responsable et labellisé.' },
    { number: '02', title: 'Préservation de la biodiversité', description: 'Partenariat EcoTree et actions concrètes pour protéger les territoires.' },
    { number: '03', title: 'Promotion des jeunes talents', description: 'Programmes de formation et montée en compétence des équipes.' },
    { number: '04', title: 'Démarche QVCT', description: 'Qualité de vie au travail et sécurité ancrées dans nos process.' },
  ],
};

export const articles = [
  {
    id: 1,
    title: 'Réunir annonce de nouvelles lignes express',
    excerpt: 'Des solutions pragmatiques pour accompagner les besoins des territoires et voyager bas carbone.',
    date: '2024-11-05',
    image: 'https://placehold.co/600x360/101322/FFFFFF?text=Actualité+01',
  },
  {
    id: 2,
    title: 'Promotion 2027 : immersion au cœur des PME',
    excerpt: 'Entre partage de bonnes pratiques, ateliers innovation et visites terrain.',
    date: '2024-10-20',
    image: 'https://placehold.co/600x360/0D142D/FFFFFF?text=Actualité+02',
  },
  {
    id: 3,
    title: 'Réunir signe un partenariat mobilité inclusive',
    excerpt: 'Une alliance pour accélérer la transition énergétique au service des habitants.',
    date: '2024-09-12',
    image: 'https://placehold.co/600x360/1A1D2F/FFFFFF?text=Actualité+03',
  },
  {
    id: 4,
    title: 'La communauté RH Réunir se retrouver à Lyon',
    excerpt: 'Retour sur deux jours d’ateliers dédiés à la QVCT et au recrutement.',
    date: '2024-08-30',
    image: 'https://placehold.co/600x360/151823/FFFFFF?text=Actualité+04',
  },
  {
    id: 5,
    title: 'Saybus dévoile de nouveaux services digitaux',
    excerpt: 'Une plateforme unifiée pour piloter les offres commerciales et les trajets.',
    date: '2024-08-10',
    image: 'https://placehold.co/600x360/121420/FFFFFF?text=Actualité+05',
  },
];

export const partnershipsContent = {
  title: 'Des partenariats qui ont du sens',
  description:
    'Des solutions pragmatiques pour les constructeurs, fournisseurs et institutionnels qui accompagnent les PME dans leur transition.',
  cards: [
    {
      title: 'Partenaire stratégique',
      description: 'Un pilote unique pour co-construire des offres commerciales et des achats groupés.',
    },
    {
      title: 'Écosystème',
      description: 'Accès privilégié aux clubs Réunir, aux événements et aux besoins terrains.',
    },
    {
      title: 'Institutionnel',
      description: 'Dialogue permanent avec les territoires et les autorités organisatrices.',
    },
  ],
};

export const servicesBannerContent = {
  title: 'Tous nos services en un clic.',
  description: 'Téléchargez notre plaquette et contactez les équipes Réunir pour explorer les solutions adaptées à votre activité.',
  cta: { label: 'Télécharger la plaquette', to: '/contact' },
  image: assets.servicesBanner,
};

export default {
  heroContent,
  discoverContent,
  promotionContent,
  whyJoinContent,
  partnersContent,
  bookContent,
  engagementsContent,
  articles,
  partnershipsContent,
  servicesBannerContent,
};
