const fs = require("fs");

const keywords = require("./keywords.json");

const pages = keywords.map((item) => {
  const categoriaCapitalizada =
    item.categoria.charAt(0).toUpperCase() +
    item.categoria.slice(1);

  return {
    slug: item.keyword
      .toLowerCase()
      .replaceAll(" ", "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""),

    cluster: item.cluster,

    categoria: item.categoria,

    keyword: item.keyword,

    title: `Creatina Gummy para ${categoriaCapitalizada}: Benefícios e Como Utilizar`,

    metaDescription: `Descubra como a Creatina Gummy pode ajudar praticantes de ${item.categoria} a melhorar desempenho, recuperação e praticidade na suplementação.`,

    h1: `Creatina Gummy para ${categoriaCapitalizada}`,

    intro: `A Creatina Gummy oferece uma forma prática de consumir creatina para praticantes de ${item.categoria}.`,

    section1Title: `Por que praticantes de ${item.categoria} utilizam creatina`,

    section1Content: `A creatina é um dos suplementos mais estudados do mundo. Pessoas que praticam ${item.categoria} frequentemente utilizam creatina como parte da estratégia nutricional voltada para desempenho físico e recuperação muscular.`,

    section2Title: `Como a Creatina Gummy pode ajudar`,

    section2Content: `A versão em goma oferece praticidade no consumo diário, ajudando na consistência da suplementação ao longo do tempo.`,

    section3Title: `Quando consumir Creatina Gummy`,

    section3Content: `O mais importante costuma ser a regularidade do consumo. O uso diário ajuda a manter os estoques musculares de creatina.`,

    section4Title: `Vale a pena para iniciantes?`,

    section4Content: `Praticantes iniciantes e avançados podem utilizar creatina conforme seus objetivos e orientação profissional.`,

    benefits: [
      "Mais praticidade",
      "Melhor recuperação muscular",
      "Suporte ao desempenho físico"
    ],

    faq: [
      {
        question: `Quem pratica ${item.categoria} pode tomar creatina?`,
        answer:
          "Sim. A creatina é amplamente utilizada por praticantes de atividades físicas e esportivas."
      }
    ],

    internalLinks: []
  };
});

fs.writeFileSync(
  "./data/seo-pages.json",
  JSON.stringify(pages, null, 2)
);

console.log(`${pages.length} páginas geradas.`);