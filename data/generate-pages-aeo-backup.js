const fs = require("fs");

const keywords = require("./keywords.json");
const products = require("./products.json");


const templates = {

corrida: {

section1:
"A corrida exige resistência, recuperação muscular e consistência nos treinos. A creatina é um dos suplementos mais estudados para pessoas que praticam atividades físicas e buscam melhorar sua estratégia nutricional.",

section2:
"A Creatina Gummy facilita a rotina de suplementação por estar em formato de goma, ajudando praticantes de corrida a manterem uma rotina simples e prática.",

experience:
"Corredores costumam buscar soluções que encaixem facilmente antes ou depois dos treinos, principalmente quando possuem uma rotina esportiva intensa.",

comparison:
"A Creatina Gummy oferece praticidade em comparação ao formato tradicional em pó, sendo uma alternativa para quem prefere facilidade de consumo.",

usage:
"A creatina pode fazer parte da rotina diária de suplementação conforme orientação adequada e objetivos individuais.",

science:
"A creatina é um dos compostos mais pesquisados na área de nutrição esportiva.",

benefits:[
"Praticidade no consumo",
"Suporte à recuperação muscular",
"Apoio à rotina esportiva"
]

},


crossfit: {

section1:
"O Crossfit combina força, potência e exercícios de alta intensidade. Muitos praticantes utilizam creatina como parte da estratégia nutricional esportiva.",

section2:
"A Creatina Gummy oferece uma forma prática de consumir creatina durante uma rotina intensa de treinos.",

experience:
"Atletas de modalidades intensas geralmente valorizam suplementos fáceis de consumir e manter diariamente.",

comparison:
"A versão em goma atende pessoas que preferem praticidade em relação ao preparo tradicional da creatina em pó.",

usage:
"A consistência no consumo é um dos pontos mais importantes dentro de uma rotina de suplementação.",

science:
"A creatina possui amplo histórico de estudos relacionados ao desempenho físico.",

benefits:[
"Suporte ao desempenho físico",
"Praticidade diária",
"Recuperação muscular"
]

},


futebol: {

section1:
"O futebol exige velocidade, explosão e recuperação entre treinos e partidas. A creatina é utilizada por praticantes de esportes que envolvem esforço intenso.",

section2:
"A Creatina Gummy facilita o consumo de creatina para jogadores que possuem rotina esportiva movimentada.",

experience:
"Jogadores costumam buscar praticidade para manter hábitos de suplementação durante períodos de treino.",

comparison:
"O formato gummy elimina etapas de preparo e pode facilitar a adesão ao consumo.",

usage:
"A creatina costuma ser utilizada de forma regular dentro de uma estratégia nutricional.",

science:
"A creatina está entre os suplementos esportivos mais investigados cientificamente.",

benefits:[
"Suporte ao treinamento",
"Praticidade",
"Recuperação muscular"
]

}

};



function slugify(text){

return text
.toLowerCase()
.replaceAll(" ","-")
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"");

}




const pages = keywords.map((item,index)=>{


const categoriaCapitalizada =
item.categoria.charAt(0).toUpperCase()
+
item.categoria.slice(1);



const template =
templates[item.categoria] || templates.corrida;



return {


slug:slugify(item.keyword),


cluster:item.cluster,


categoria:item.categoria,


keyword:item.keyword,


title:
`Creatina Gummy para ${categoriaCapitalizada}: Benefícios, Uso e Performance`,



metaDescription:
`Entenda como a Creatina Gummy pode fazer parte da rotina de praticantes de ${item.categoria} com 
praticidade e suplementação inteligente.`,



h1:
`Creatina Gummy para ${categoriaCapitalizada}`,



intro:
`A Creatina Gummy é uma alternativa prática para quem pratica ${item.categoria} e busca incluir 
creatina na rotina esportiva.`,



answerBox:
`A Creatina Gummy é uma forma prática de consumir creatina diariamente, oferecendo conveniência para 
praticantes de ${item.categoria}.`,



section1Title:
`Creatina e ${categoriaCapitalizada}`,

section1Content:
template.section1,



section2Title:
"Como a Creatina Gummy pode ajudar",

section2Content:
template.section2,



experience:
template.experience,


comparison:
template.comparison,


usageGuide:
template.usage,


science:
template.science,



whoIsItFor:
`Indicada para pessoas que praticam ${item.categoria} e procuram praticidade na rotina de 
suplementação.`,


whoIsNotFor:
"Não substitui alimentação equilibrada ou acompanhamento profissional quando necessário.",



benefits:
template.benefits,



faq:[

{
question:
`Quem pratica ${item.categoria} pode tomar creatina?`,

answer:
"A creatina é um suplemento amplamente utilizado por praticantes de atividades físicas."
},


{
question:
"Creatina Gummy funciona?",

answer:
"A Creatina Gummy fornece creatina em um formato prático para consumo diário."
},


{
question:
"Qual melhor horário para consumir creatina?",

answer:
"A regularidade do consumo costuma ser mais importante do que um horário específico."
}


],



cta:
`Veja como a Creatina Gummy pode se encaixar na rotina de ${item.categoria}.`,



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



console.log(
`${pages.length} páginas SEO E-E-A-T geradas.`
);
