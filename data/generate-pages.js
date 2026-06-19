const fs = require("fs");

const keywords = require("./keywords.json");
const products = require("./products.json");

const templates = {
  corrida: {
    section1: "A corrida exige resistência, recuperação muscular e consistência nos treinos. A creatina é frequentemente utilizada por corredores que buscam complementar sua estratégia nutricional e melhorar a qualidade das sessões de treino.",
    section2: "A Creatina Gummy oferece praticidade para corredores que possuem rotina corrida. O formato em goma facilita o consumo diário e ajuda na adesão à suplementação.",
    benefits: [
      "Suporte à recuperação muscular",
      "Praticidade no consumo",
      "Auxílio na rotina esportiva"
    ]
  },

  crossfit: {
    section1: "O Crossfit combina exercícios de força, potência e alta intensidade. Muitos praticantes utilizam creatina como parte da estratégia nutricional voltada para performance.",
    section2: "A Creatina Gummy permite consumir creatina de forma prática antes ou após os treinos.",
    benefits: [
      "Mais praticidade",
      "Suporte ao desempenho físico",
      "Recuperação muscular"
    ]
  },

  futebol: {
    section1: "O futebol exige velocidade, explosão e recuperação constante entre treinos e partidas. A creatina é utilizada por muitos praticantes de esportes intensos.",
    section2: "A Creatina Gummy facilita a suplementação diária para jogadores e praticantes de futebol.",
    benefits: [
      "Praticidade diária",
      "Suporte ao treinamento",
      "Recuperação muscular"
    ]
  },

  ciclismo: {
    section1: "O ciclismo demanda resistência física e recuperação adequada entre sessões de treino.",
    section2: "A versão em goma torna o consumo simples para quem possui rotina intensa.",
    benefits: [
      "Consumo prático",
      "Recuperação muscular",
      "Suporte à performance"
    ]
  },

  natacao: {
    section1: "A natação exige coordenação, resistência e força muscular.",
    section2: "A Creatina Gummy facilita a suplementação diária sem preparo.",
    benefits: [
      "Praticidade",
      "Rotina simplificada",
      "Suporte ao desempenho físico"
    ]
  }
};


function slugify(text){

  return text
    .toLowerCase()
    .replaceAll(" ", "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"");

}


const pages = keywords.map((item,index)=>{

  const categoriaCapitalizada =
    item.categoria.charAt(0).toUpperCase() +
    item.categoria.slice(1);


  const template =
    templates[item.categoria] || templates.corrida;


  const internalLinks = keywords
    .filter((_,i)=>i !== index)
    .slice(0,3)
    .map(k=>slugify(k.keyword));


  const relatedProducts = products.map(
    product => product.slug
  );


  return {

    slug: slugify(item.keyword),

    cluster: item.cluster,

    categoria: item.categoria,

    keyword: item.keyword,


    title:
    `Creatina Gummy para ${categoriaCapitalizada}: Benefícios e Como Utilizar`,


    metaDescription:
    `Descubra como a Creatina Gummy pode ajudar praticantes de ${item.categoria} com praticidade e desempenho físico.`,


    h1:
    `Creatina Gummy para ${categoriaCapitalizada}`,


    intro:
    `A Creatina Gummy oferece uma forma prática de consumir creatina para praticantes de ${item.categoria}.`,


    section1Title:
    `Creatina e ${categoriaCapitalizada}`,


    section1Content:
    template.section1,


    section2Title:
    "Como a Creatina Gummy pode ajudar",


    section2Content:
    template.section2,


    section3Title:
    "Quando consumir Creatina Gummy",


    section3Content:
    "A regularidade do consumo é um dos fatores mais importantes para manter os estoques musculares de creatina.",


    section4Title:
    "Vale a pena para iniciantes?",


    section4Content:
    "A creatina pode ser utilizada por iniciantes e praticantes avançados conforme seus objetivos.",


    benefits:
    template.benefits,


    faq:[
      {
        question:
        `Quem pratica ${item.categoria} pode tomar creatina?`,

        answer:
        "Sim. A creatina é um dos suplementos mais estudados para praticantes de atividades físicas."
      }
    ],


    internalLinks,

    relatedProducts

  };

});


fs.writeFileSync(
"./data/seo-pages.json",
JSON.stringify(pages,null,2)
);


console.log(`${pages.length} páginas geradas.`);
