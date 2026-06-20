const fs = require("fs");

const keywords = require("./keywords.json");
const entities = require("./entities.json");


function slugify(text){

return String(text)
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.replaceAll(" ","-");

}



const pages = keywords.map((item,index)=>{


const categoriaCapitalizada =
item.categoria.charAt(0).toUpperCase()
+
item.categoria.slice(1);



const internalLinks = keywords

.filter((_,i)=>i !== index)

.slice(0,6)

.map(page=>({

title:`Creatina Gummy para ${page.categoria}`,

slug:slugify(page.keyword)

}));





const pageEntities = Array.isArray(entities)

?

entities.slice(0,5)

.map(entity=>({

name:entity.name || "",

relation:entity.relation || ""

}))

:

[];






return {

slug:slugify(item.keyword),

cluster:item.cluster,

categoria:item.categoria,

keyword:item.keyword,


title:`Creatina Gummy para ${categoriaCapitalizada}: benefícios, uso e praticidade`,


metaDescription:`Conteúdo sobre Creatina Gummy para ${item.categoria}, suplementação esportiva e rotina de treino.`,


h1:`Creatina Gummy para ${categoriaCapitalizada}`,


quickAnswer:`A Creatina Gummy é creatina em formato de goma criada para facilitar a rotina de suplementação.`,


intro:`A Creatina Gummy oferece praticidade para pessoas interessadas em ${item.categoria}.`,


experience:`Atletas e praticantes de ${item.categoria} buscam estratégias para melhorar consistência e rotina esportiva.`,


scientificBasis:`A creatina é um dos suplementos mais estudados dentro da nutrição esportiva.`,


authority:`Informações sobre suplementação devem considerar contexto esportivo e conhecimento científico.`,


trust:`Conteúdo estruturado com foco em experiência, informação e transparência.`,


author:"Equipe Creatina Gummy",


reviewedBy:"Equipe de conteúdo esportivo",


updatedAt:"2026-06-20",


entities:pageEntities,


internalLinks,



section1Title:`Creatina Gummy e ${categoriaCapitalizada}`,


section1Content:`A prática de ${item.categoria} envolve diferentes objetivos e rotinas de treinamento.`,



benefits:[

"Praticidade no consumo",

"Formato em goma",

"Facilidade para incluir na rotina"

],



faq:[


{

question:`Quem pratica ${item.categoria} pode usar Creatina Gummy?`,

answer:`A Creatina Gummy oferece creatina em formato de goma para uma rotina prática de suplementação.`

},



{

question:"Qual a diferença da Creatina Gummy para a creatina tradicional?",

answer:`A diferença está principalmente no formato. A Creatina Gummy apresenta creatina em goma, enquanto versões 
tradicionais geralmente utilizam pó.`

},



{

question:"Creatina precisa fazer parte de uma rotina?",

answer:"A consistência é um ponto importante dentro de estratégias de suplementação."

}


],



relatedProducts:[

"creatina-gummy",

"creagym",

"velmo-black"

]


};


});





fs.writeFileSync(

"./data/seo-pages.json",

JSON.stringify(

pages,

null,

2

)

);



console.log(

`${pages.length} páginas SEO geradas.`

);
