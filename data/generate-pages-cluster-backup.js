const fs = require("fs");

const keywords = require("./keywords.json");
const products = require("./products.json");


const templates = {

corrida: {

section1:
"A corrida exige resistência, recuperação muscular e consistência nos treinos. A creatina é um dos suplementos mais estudados para praticantes de atividades físicas.",

section2:
"A Creatina Gummy facilita a rotina de suplementação por estar em formato de goma, ajudando praticantes de corrida a manterem consistência.",

experience:
"Praticantes de corrida normalmente buscam soluções simples que se encaixem antes ou depois dos treinos.",

scientificBasis:
"A creatina possui diversos estudos científicos relacionados ao desempenho físico e metabolismo energético.",

authority:
"A creatina é utilizada por atletas profissionais, amadores e praticantes recreativos de diferentes modalidades.",

trust:
"Informações baseadas em conhecimento científico sobre suplementação esportiva.",

benefits:[
"Praticidade no consumo",
"Suporte à recuperação muscular",
"Apoio à rotina esportiva"
]

},


crossfit: {

section1:
"O Crossfit combina força, potência e alta intensidade. Muitos praticantes utilizam creatina dentro da estratégia nutricional esportiva.",

section2:
"A Creatina Gummy oferece uma maneira prática de consumir creatina durante uma rotina intensa de treinos.",

experience:
"Atletas de alta intensidade valorizam suplementos fáceis de manter no dia a dia.",

scientificBasis:
"A creatina está entre os suplementos esportivos mais pesquisados atualmente.",

authority:
"Presente na rotina de diversos praticantes de treinamento de força e performance.",

trust:
"Conteúdo educativo baseado em pesquisas de nutrição esportiva.",

benefits:[
"Suporte ao desempenho físico",
"Praticidade diária",
"Recuperação muscular"
]

},


futebol: {

section1:
"O futebol exige velocidade, explosão e recuperação constante entre treinos e partidas.",

section2:
"A Creatina Gummy facilita o consumo diário para jogadores e praticantes de futebol.",

experience:
"Jogadores procuram estratégias práticas para manter hábitos consistentes.",

scientificBasis:
"A creatina apresenta ampla literatura científica na área esportiva.",

authority:
"Utilizada por praticantes de esportes que exigem força e potência.",

trust:
"Informações organizadas com base em estudos de suplementação.",

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
`Conheça como a Creatina Gummy pode fazer parte da rotina de praticantes de ${item.categoria} com 
praticidade e suplementação inteligente.`,



h1:
`Creatina Gummy para ${categoriaCapitalizada}`,



intro:
`A Creatina Gummy é uma forma prática de consumir creatina para pessoas que praticam 
${item.categoria}.`,



quickAnswer:
`Creatina Gummy para ${item.categoria} é uma alternativa prática para consumir creatina diariamente 
dentro de uma rotina esportiva.`,



expertNote:
`A creatina é um dos suplementos mais estudados na nutrição esportiva e é utilizada por praticantes 
de diferentes modalidades.`,



author:
"Equipe Creatina Gummy",



reviewedBy:
"Especialistas em conteúdo esportivo",



updatedAt:
"2026-06-19",



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


scientificBasis:
template.scientificBasis,


authority:
template.authority,


trust:
template.trust,



whoIsItFor:
`Indicada para praticantes de ${item.categoria} que buscam praticidade na suplementação.`,



whoIsNotFor:
"Não substitui alimentação equilibrada ou orientação profissional quando necessária.",



benefits:
template.benefits,



faq:[

{
question:
`Quem pratica ${item.categoria} pode tomar creatina?`,

answer:
"A creatina é amplamente utilizada por praticantes de atividades físicas."
},


{
question:
"Creatina Gummy funciona?",

answer:
"A Creatina Gummy fornece creatina em formato prático para consumo."
},


{
question:
"Creatina precisa ser tomada todos os dias?",

answer:
"A consistência é um dos principais fatores dentro da suplementação com creatina."
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
`${pages.length} páginas AEO GEO E-E-A-T geradas.`
);
