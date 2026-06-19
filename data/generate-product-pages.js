const fs = require("fs");

const pages = require("./product-pages.json");
const products = require("./products.json");


const generatedPages = pages.map((page) => {

  const product = products.find(
    (item) => item.slug === page.product
  );


  return {

    slug: page.slug,

    product: page.product,

    keyword: page.keyword,

    title: page.title,

    description: page.description,


    h1: page.title,


    intro:
      page.description,


    sections: [

      {
        title: `O que é ${product.name}?`,

        content:
          product.description
      },


      {
        title:
          `Benefícios do ${product.name}`,

        content:
          `O ${product.name} foi desenvolvido para complementar a rotina de pessoas 
que buscam praticidade, desempenho e qualidade de vida.`
      },


      {
        title:
          `Como utilizar ${product.name}`,

        content:
          `A utilização deve seguir as orientações do fabricante e fazer parte de 
uma rotina consistente.`
      }

    ],


    relatedProducts:
      product.relatedProducts

  };

});


fs.writeFileSync(
  "./data/seo-product-pages.json",
  JSON.stringify(
    generatedPages,
    null,
    2
  )
);


console.log(
  `${generatedPages.length} páginas de produto geradas.`
);
