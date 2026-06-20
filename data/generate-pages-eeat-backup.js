const fs = require("fs");

const keywords = require("./keywords.json");
const products = require("./products.json");


const templates = {

corrida:{
intro:"A corrida exige resistência, recuperação muscular e consistência nos treinos. A Creatina Gummy apresenta uma forma prática de incluir creatina na rotina de corredores.",
section1:"A creatina é um dos suplementos mais estudados na nutrição esportiva. Corredores utilizam estratégias nutricionais para apoiar treinos, recuperação e evolução esportiva.",
section2:"A Creatina Gummy facilita o consumo diário por ser uma alternativa prática ao formato tradicional em pó.",
benefits:[
"Praticidade na suplementação",
"Suporte à recuperação muscular",
"Facilidade de consumo diário"
]
},

crossfit:{
intro:"O Crossfit combina força, potência e exercícios de alta intensidade. A creatina é frequentemente utilizada por praticantes que buscam otimizar sua estratégia esportiva.",
section1:"Treinos intensos exigem recuperação adequada. A creatina possui amplo estudo científico relacionado ao desempenho físico.",
section2:"A Creatina Gummy une suplementação e praticidade para atletas com rotina intensa.",
benefits:[
"Suporte ao desempenho físico",
"Praticidade antes ou depois do treino",
"Apoio à rotina esportiva"
]
},

futebol:{
intro:"O futebol exige explosão, velocidade e recuperação constante. A creatina é utilizada por muitos atletas como parte da preparação física.",
section1:"Jogadores precisam manter consistência nos treinos e partidas. A creatina faz parte da estratégia nutricional de muitos esportistas.",
section2:"A Creatina Gummy facilita a suplementação diária sem necessidade de preparo.",
benefits:[
"Rotina simplificada",
"Suporte ao treinamento",
"Praticidade diária"
]
},

ciclismo:{
intro:"O ciclismo exige resistência e recuperação entre sessões. A Creatina Gummy oferece uma forma prática de consumir creatina.",
section1:"Ciclistas buscam estratégias para manter qualidade nos treinos.",
section2:"A goma facilita a adesão ao consumo diário.",
benefits:[
"Consumo fácil",
"Suporte esportivo",
"Praticidade"
]
},

natacao:{
intro:"A natação combina técnica, resistência e força muscular. A Creatina Gummy oferece praticidade para atletas.",
section1:"A suplementação esportiva faz parte da rotina de muitos praticantes.",
section2:"O formato em goma facilita o consumo.",
benefits:[
"Praticidade",
"Rotina simplificada",
"Suporte esportivo"
]
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


const categoria =
item.categoria.charAt(0).toUpperCase()
+ item.categoria.slice(1);


const template =
templates[item.categoria] || templates.corrida;



return {


slug:slugify(item.keyword),

cluster:item.cluster,

categoria:item.categoria,

keyword:item.keyword,


title:
`Creatina Gummy para ${categoria}: Benefícios, Uso e Performance`,


metaDescription:
`Veja como a Creatina Gummy pode fazer parte da rotina de praticantes de ${item.categoria} com praticidade e suplementação inteligente.`,


h1:
`Creatina Gummy para ${categoria}`,



intro:template.intro,



section1Title:
`Creatina e ${categoria}`,

section1Content:
template.section1,



section2Title:
"Como a Creatina Gummy pode ajudar",

section2Content:
template.section2,



section3Title:
"Creatina Gummy ou creatina tradicional?",

section3Content:
"A principal diferença está na experiência de consumo. A Creatina Gummy oferece praticidade para pessoas que preferem uma alternativa ao suplemento tradicional em pó.",



section4Title:
"Vale a pena utilizar Creatina Gummy?",

section4Content:
"A escolha depende da rotina, objetivos esportivos e preferência de consumo. A creatina é um suplemento amplamente estudado na área esportiva.",



authorityTitle:
"Por que a creatina é tão utilizada no esporte?",


authorityContent:
"A creatina é um dos suplementos mais pesquisados do mundo. Diversos estudos analisam sua relação com desempenho físico, força e recuperação muscular.",



benefits:template.benefits,



faq:[

{
question:`Quem pratica ${item.categoria} pode tomar creatina?`,
answer:"Sim. A creatina é utilizada por praticantes de diferentes modalidades esportivas."
},

{
question:"Creatina Gummy funciona?",
answer:"A Creatina Gummy fornece creatina de forma prática dentro de uma rotina de suplementação."
},

{
question:"Qual melhor horário para tomar creatina?",
answer:"A regularidade diária costuma ser mais importante do que um horário específico."
},

{
question:"Creatina precisa ser tomada todos os dias?",
answer:"A consistência de consumo é um dos principais fatores relacionados à suplementação."
},

{
question:"Creatina Gummy é melhor que creatina em pó?",
answer:"As duas formas podem atender diferentes preferências. A goma se destaca pela praticidade."
}

],



cta:
`Descubra como a Creatina Gummy pode se encaixar na sua rotina de ${item.categoria}.`,



internalLinks:
keywords
.filter((_,i)=>i!==index)
.slice(0,3)
.map(k=>slugify(k.keyword)),


relatedProducts:
products.map(p=>p.slug)



};


});



fs.writeFileSync(
"./data/seo-pages.json",
JSON.stringify(pages,null,2)
);


console.log(`${pages.length} páginas SEO avançadas geradas.`);

