const fs = require("fs");

const keywords = require("./keywords.json");
const products = require("./products.json");
const entities = require("./entities.json");


const clusterTemplates = {


modalidade:{

experience:
"Praticantes de esportes utilizam estratégias de suplementação para apoiar rotinas de treino, recuperação e desempenho.",

authority:
"A creatina é um dos suplementos esportivos mais estudados e utilizada em diferentes modalidades.",

context:
"Modalidades esportivas possuem diferentes demandas físicas, mas todas dependem de consistência e planejamento."

},


objetivo:{

experience:
"Pessoas que treinam com objetivos específicos buscam estratégias nutricionais alinhadas com suas metas.",

authority:
"A creatina é amplamente pesquisada em contextos relacionados à força, potência e treinamento físico.",

context:
"Objetivos como hipertrofia e performance envolvem treino consistente e hábitos adequados."

},


publico:{

experience:
"Diferentes perfis de praticantes podem incluir suplementação dentro de uma rotina organizada.",

authority:
"A creatina possui ampla pesquisa científica relacionada ao desempenho físico.",

context:
"A escolha de suplementos deve considerar rotina, objetivos e preferências individuais."

},


informacao:{

experience:
"Entender como a creatina funciona ajuda usuários a tomar melhores decisões.",

authority:
"A creatina está entre os suplementos esportivos mais pesquisados mundialmente.",

context:
"Informação de qualidade melhora a experiência de busca e decisão do usuário."

}


};



function slugify(text){

return text
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.replaceAll(" ","-");

}




const pages = keywords.map((item,index)=>{


const template =
clusterTemplates[item.cluster] ||
clusterTemplates.informacao;



const categoriaCapitalizada =
item.categoria.charAt(0).toUpperCase()
+
item.categoria.slice(1);



return {


slug:slugify(item.keyword),

cluster:item.cluster,

categoria:item.categoria,

keyword:item.keyword,


title:
`Creatina Gummy para ${categoriaCapitalizada}: benefícios, uso e praticidade`,


metaDescription:
`Descubra informações sobre Creatina Gummy para ${item.categoria}, benefícios, 
utilização e suplementação.`,


h1:
`Creatina Gummy para ${categoriaCapitalizada}`,


intro:
`A Creatina Gummy oferece uma forma prática de consumir creatina dentro de uma 
rotina relacionada a ${item.categoria}.`,


experience:template.experience,

authority:template.authority,

context:template.context,



entities:

entities.entities.map(entity=>({

name:entity.name,

relation:entity.relation

})),



brandEntity:entities.brand,


productEntity:entities.product,



section1Title:
`Creatina Gummy e ${categoriaCapitalizada}`,


section1Content:
template.context,



section2Title:
"Como a Creatina Gummy pode ajudar",


section2Content:
template.experience,



section3Title:
"Informações importantes sobre creatina",


section3Content:
template.authority,



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
"A Creatina Gummy fornece creatina em um formato prático dentro de uma rotina de suplementação."

},

{

question:
"Creatina precisa ser tomada todos os dias?",

answer:
"A consistência faz parte de uma rotina organizada de suplementação."

}

],



internalLinks:

keywords

.filter((_,i)=>i!==index)

.slice(0,5)

.map(k=>slugify(k.keyword)),



relatedProducts:

products.map(p=>p.slug)



};


});




fs.writeFileSync(

"./data/seo-pages.json",

JSON.stringify(pages,null,2)

);



console.log(`${pages.length} páginas com entidades SEO geradas.`);
