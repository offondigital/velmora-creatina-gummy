export default function TopicAuthoritySchema(){


const schema = {


"@context":"https://schema.org",


"@type":"CollectionPage",


"@id":

"https://creatinagummy.com.br/#topic-authority",



"name":

"Universo Creatina Gummy",



"description":

"Conteúdos organizados sobre creatina em goma, suplementação esportiva, performance física e treinamento.",





"hasPart":[



{


"@type":"WebPage",


"name":

"Creatina Gummy",


"url":

"https://creatinagummy.com.br/creatina-gummy"


},



{


"@type":"WebPage",


"name":

"Benefícios da Creatina",


"url":

"https://creatinagummy.com.br/beneficios/creatina-gummy-beneficios"


},



{


"@type":"WebPage",


"name":

"Creatina para corrida",


"url":

"https://creatinagummy.com.br/creatina-gummy-para-corrida"


},



{


"@type":"WebPage",


"name":

"Creatina para crossfit",


"url":

"https://creatinagummy.com.br/creatina-gummy-para-crossfit"


},



{


"@type":"WebPage",


"name":

"Revisão científica sobre creatina",


"url":

"https://creatinagummy.com.br/institucional/revisao-cientifica"


}



]



};





return (


<script


type="application/ld+json"


dangerouslySetInnerHTML={{



__html:

JSON.stringify(schema)



}}


/>



);


}

