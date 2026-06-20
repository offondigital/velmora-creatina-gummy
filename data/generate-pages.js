const fs = require("fs");

const keywords = require("./keywords.json");
const products = require("./products.json");


const clusterTemplates = {


modalidade:{


experience:
"Praticantes dessa modalidade costumam buscar estratégias de suplementação que se adaptem à rotina de treinos e evolução esportiva.",


authority:
"A creatina é um dos suplementos mais estudados na área de desempenho físico e é utilizada por diferentes perfis de praticantes de atividades físicas.",


context:
"Cada modalidade possui demandas específicas relacionadas a força, recuperação, intensidade e consistência dos treinos."

},



objetivo:{


experience:
"Pessoas com diferentes objetivos esportivos procuram formas práticas de manter uma rotina consistente de suplementação.",


authority:
"A creatina possui ampla pesquisa científica relacionada ao suporte de desempenho físico e composição corporal.",


context:
"Objetivos como força, hipertrofia e performance dependem de treinamento adequado, alimentação e regularidade."

},



publico:{


experience:
"Diferentes públicos procuram maneiras simples de inserir suplementação na rotina diária.",


authority:
"A creatina é amplamente estudada e utilizada por pessoas que praticam atividades físicas.",


context:
"A escolha da suplementação deve considerar objetivos individuais e rotina de treinamento."

},



comercial:{


experience:
"Consumidores buscam praticidade, segurança e informações claras antes de escolher um suplemento.",


authority:
"A Creatina Gummy apresenta uma alternativa prática para quem prefere o formato em goma.",


context:
"A decisão de compra envolve qualidade, composição, praticidade e adequação à rotina."

},



comparacao:{


experience:
"Consumidores frequentemente comparam formatos diferentes de creatina antes de escolher a melhor opção para sua rotina.",


authority:
"Diferentes formas de consumo podem atender preferências distintas de praticidade e experiência.",


context:
"A melhor escolha depende da preferência pessoal e consistência de consumo."

},



informacao:{


experience:
"Quem pesquisa sobre creatina normalmente busca entender como incluir o suplemento corretamente na rotina.",


authority:
"A creatina está entre os suplementos esportivos mais pesquisados e utilizados mundialmente.",


context:
"Informação adequada ajuda usuários a tomar melhores decisões sobre suplementação."

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



const internalLinks = keywords

.filter((_,i)=>i!==index)

.slice(0,5)

.map(k=>slugify(k.keyword));





return {



slug:slugify(item.keyword),


cluster:item.cluster,


categoria:item.categoria,


keyword:item.keyword,



title:

`Creatina Gummy para ${categoriaCapitalizada}: benefícios, uso e praticidade`,



metaDescription:

`Descubra como a Creatina Gummy pode ajudar em ${item.categoria}, com informações sobre benefícios, 
utilização e suplementação.`,



h1:

`Creatina Gummy para ${categoriaCapitalizada}`,



intro:

`A Creatina Gummy oferece uma forma prática de consumir creatina para pessoas interessadas em 
${item.categoria}.`,





experience:template.experience,


authority:template.authority,


context:template.context,





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

"Como tomar Creatina Gummy?",


answer:

"A regularidade de consumo é um dos principais fatores relacionados ao uso de creatina."

},



{

question:

"Creatina Gummy é indicada para iniciantes?",


answer:

"A creatina é utilizada por diferentes níveis de praticantes de atividades físicas."


}


],



cta:

`Conheça a Creatina Gummy e veja como ela pode fazer parte da sua rotina de ${item.categoria}.`,



internalLinks,


relatedProducts:

products.map(p=>p.slug)



};



});






fs.writeFileSync(

"./data/seo-pages.json",

JSON.stringify(pages,null,2)

);





console.log(

`${pages.length} páginas SEO cluster profundo geradas.`

);
