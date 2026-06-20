const fs = require("fs");

const keywords = require("./keywords.json");
const entities = require("./entities.json");


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



const relatedPages = keywords

.filter((_,i)=>i!==index)

.filter((page)=>{

return (

page.cluster === item.cluster

||
page.cluster !== item.cluster

);

})

.slice(0,6)

.map(page=>({

title:

`Creatina Gummy para ${page.categoria}`,

slug:

slugify(page.keyword)

}));






const relatedEntities = entities

.slice(0,5)

.map(entity=>({

name:entity.name,

relation:entity.relation

}));







return {


slug:slugify(item.keyword),


cluster:item.cluster,


categoria:item.categoria,


keyword:item.keyword,



title:

`Creatina Gummy para ${categoriaCapitalizada}: benefícios, uso e praticidade`,



metaDescription:

`Descubra como a Creatina Gummy pode fazer parte da rotina de ${item.categoria}, com 
informações sobre creatina, suplementação e performance.`,



h1:

`Creatina Gummy para ${categoriaCapitalizada}`,



quickAnswer:

`A Creatina Gummy é uma forma prática de consumir creatina em uma rotina de 
suplementação esportiva.`,



intro:

`A Creatina Gummy oferece praticidade para pessoas interessadas em 
${item.categoria}, unindo formato em goma e rotina esportiva.`,



experience:

`Praticantes de diferentes modalidades utilizam estratégias de suplementação para 
apoiar seus objetivos de treino e performance.`,



scientificBasis:

`A creatina é um dos suplementos esportivos mais estudados, sendo pesquisada em 
diferentes contextos relacionados ao desempenho físico.`,



authority:

`Informações sobre suplementação devem considerar qualidade, consistência e 
orientação adequada para cada rotina.`,



trust:

`Conteúdo estruturado com foco em experiência, informação e educação sobre 
creatina.`,



author:

"Equipe Creatina Gummy",



reviewedBy:

"Especialistas em conteúdo esportivo",



updatedAt:

"2026-06-20",





entities:relatedEntities,




internalLinks:relatedPages,




section1Title:

`Creatina Gummy e ${categoriaCapitalizada}`,



section1Content:

`A rotina de ${item.categoria} pode envolver diferentes estratégias de treino e 
suplementação.`,




section2Title:

"Como a Creatina Gummy pode ajudar",



section2Content:

`O formato em goma facilita a inclusão da creatina na rotina diária.`,




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

"A Creatina Gummy oferece creatina em um formato prático dentro de uma rotina 
organizada."

},


{

question:

"Creatina precisa ser tomada todos os dias?",

answer:

"A consistência é uma característica importante de uma rotina de suplementação."

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
