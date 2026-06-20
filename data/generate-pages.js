const fs = require("fs");

const keywords = require("./keywords.json");

const entitiesData = require("./entities.json");

const entities = Array.isArray(entitiesData)
? entitiesData
: entitiesData.entities || [];



function slugify(text){

return text
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

title:
`Creatina Gummy para ${page.categoria}`,

slug:
slugify(page.keyword)

}));





const pageEntities = entities

.slice(0,5)

.map(entity=>({

name:entity.name,

relation:entity.relation

}));






return {


slug:
slugify(item.keyword),



cluster:
item.cluster,



categoria:
item.categoria,



keyword:
item.keyword,




title:

`Creatina Gummy para ${categoriaCapitalizada}: benefícios, uso e praticidade`,





metaDescription:

`Descubra informações sobre Creatina Gummy para ${item.categoria}, benefícios, utilização e suplementação.`,





h1:

`Creatina Gummy para ${categoriaCapitalizada}`,





quickAnswer:

`A Creatina Gummy é uma forma prática de consumir creatina dentro de uma rotina de suplementação.`,





intro:

`A Creatina Gummy oferece praticidade para pessoas interessadas em ${item.categoria}.`,





experience:

`Praticantes de esportes utilizam estratégias de suplementação para apoiar treino, recuperação e performance.`,





scientificBasis:

`A creatina é um dos suplementos esportivos mais estudados e pesquisados mundialmente.`,





authority:

`Informações adequadas ajudam usuários a tomar melhores decisões sobre suplementação.`,





trust:

`Conteúdo desenvolvido com foco em experiência, informação e autoridade no tema.`,





author:

"Equipe Creatina Gummy",





reviewedBy:

"Equipe de conteúdo esportivo",





updatedAt:

"2026-06-20",





entities:

pageEntities,





internalLinks:

internalLinks,





section1Title:

`Creatina Gummy e ${categoriaCapitalizada}`,





section1Content:

`A categoria ${item.categoria} possui diferentes objetivos e necessidades dentro de uma rotina esportiva.`,





section2Title:

"Como a Creatina Gummy pode ajudar",





section2Content:

"Seu formato em goma facilita a inclusão da creatina na rotina diária.",





benefits:[


"Praticidade no consumo",


"Formato em goma fácil de incluir na rotina",


"Suporte para rotina esportiva"


],





faq:[


{

question:

`Creatina Gummy funciona para ${item.categoria}?`,


answer:

"A Creatina Gummy oferece creatina em um formato prático dentro de uma rotina organizada."

},



{

question:

"Creatina precisa ser tomada todos os dias?",


answer:

"A consistência faz parte de uma estratégia de suplementação."

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

`${pages.length} páginas com topical authority e internal links geradas.`

);
