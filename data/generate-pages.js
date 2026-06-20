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

title:`Creatina Gummy para ${page.categoria}`,

slug:slugify(page.keyword)

}));





const pageEntities = entities

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

`Entenda como a Creatina Gummy pode fazer parte da rotina de ${item.categoria}, com informações sobre creatina, suplementação 
e praticidade.`,





h1:

`Creatina Gummy para ${categoriaCapitalizada}`,





quickAnswer:

`Quem busca uma rotina de suplementação mais prática costuma procurar opções que facilitem a constância no dia a dia. A 
Creatina Gummy apresenta a creatina em formato de goma, unindo praticidade e uma experiência diferente de consumo.`,





intro:

`A rotina de quem pratica ${item.categoria} envolve muito mais do que apenas treino. Organização, alimentação, descanso e 
hábitos consistentes fazem parte da evolução. Dentro desse contexto, a creatina é um dos suplementos mais estudados no 
esporte e a Creatina Gummy surge como uma alternativa prática para incluir esse hábito na rotina.`,





experience:

`Pessoas que praticam ${item.categoria} normalmente buscam formas de manter uma rotina mais organizada. A suplementação, 
quando associada a bons hábitos, faz parte da estratégia de muitos praticantes que valorizam consistência e planejamento.`,





scientificBasis:

`A creatina é uma substância naturalmente estudada na área esportiva e possui ampla pesquisa científica relacionada ao 
metabolismo energético e desempenho físico. Por isso, é um dos ingredientes mais conhecidos dentro da suplementação 
esportiva.`,





authority:

`Conteúdos sobre suplementação precisam considerar contexto, objetivo e rotina individual. Informações claras ajudam 
consumidores a entender melhor como diferentes estratégias podem fazer parte dos seus hábitos.`,





trust:

`Este conteúdo foi desenvolvido com foco em informação, experiência prática e organização de conhecimento sobre creatina e 
suplementação esportiva.`,





author:

"Equipe Creatina Gummy",





reviewedBy:

"Equipe de conteúdo esportivo",





updatedAt:

"2026-06-20",





articleSchema:{


type:"Article",


headline:

`Creatina Gummy para ${categoriaCapitalizada}: benefícios, uso e praticidade`,


author:

"Equipe Creatina Gummy",


reviewedBy:

"Equipe de conteúdo esportivo",


datePublished:

"2026-06-20",


dateModified:

"2026-06-20",


about:[

"Creatina",

"Suplementação esportiva",

item.categoria

],


mentions:[

"Creatina Gummy",

"Treinamento físico",

"Performance esportiva"

]


},





entities:pageEntities,





internalLinks,





section1Title:

`Creatina Gummy e ${categoriaCapitalizada}`,





section1Content:

`Cada modalidade possui características próprias. Para quem pratica ${item.categoria}, manter uma rotina organizada pode 
fazer diferença na evolução dos treinos e na construção de hábitos consistentes.`,





section2Title:

"Como a Creatina Gummy pode ajudar",





section2Content:

`O formato em goma facilita a inclusão da creatina na rotina diária, principalmente para pessoas que valorizam praticidade e 
uma experiência diferente de suplementação.`,





section3Title:

"Informações importantes sobre creatina",





section3Content:

`A creatina é um dos suplementos esportivos mais pesquisados mundialmente e faz parte da rotina de muitos praticantes de 
atividades físicas.`,





benefits:[


"Praticidade no consumo",


"Formato em goma fácil de incluir na rotina",


"Suporte para uma rotina esportiva consistente"


],





faq:[


{

question:

`Creatina Gummy funciona para ${item.categoria}?`,


answer:

`A Creatina Gummy oferece creatina em um formato prático dentro de uma rotina organizada de suplementação.`

},



{

question:

"Creatina precisa ser tomada todos os dias?",


answer:

"A consistência faz parte de uma estratégia de suplementação organizada."

}



],





relatedProducts:[


"creatina-gummy",

"creagym",

"velmo-black",

"clarize"


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

`${pages.length} páginas com human content engine geradas.`

);
