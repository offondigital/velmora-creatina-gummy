export default function GlobalEntityGraph(){

const schema = {

"@context":"https://schema.org",

"@graph":[

{

"@type":"Organization",

"@id":"https://creatinagummy.com.br/#organization",

"name":"Creatina Gummy",

"url":"https://creatinagummy.com.br",

"description":"Marca especializada em creatina em goma, suplementação esportiva e conteúdos educativos sobre performance.",

"sameAs":[
"https://creatinagummy.com.br"
],

"knowsAbout":[
"Creatina",
"Creatina em goma",
"Suplementação esportiva",
"Performance física",
"Treinamento esportivo"
]

},


{

"@type":"Brand",

"@id":"https://creatinagummy.com.br/#brand",

"name":"Creatina Gummy",

"url":"https://creatinagummy.com.br"

},


{

"@type":"Product",

"@id":"https://creatinagummy.com.br/produto/creatina-gummy#product",

"name":"Creatina Gummy",

"brand":{

"@id":"https://creatinagummy.com.br/#brand"

},

"category":"Suplemento alimentar esportivo",

"description":"Creatina em goma desenvolvida para praticidade, performance e rotina de treinos."

},


{

"@type":"WebSite",

"@id":"https://creatinagummy.com.br/#website",

"url":"https://creatinagummy.com.br",

"name":"Creatina Gummy",

"publisher":{

"@id":"https://creatinagummy.com.br/#organization"

}

},


{

"@type":"CollectionPage",

"@id":"https://creatinagummy.com.br/#topics",

"name":"Universo Creatina Gummy",

"about":[

{

"@type":"Thing",

"name":"Creatina"

},

{

"@type":"Thing",

"name":"Suplementação esportiva"

},

{

"@type":"Thing",

"name":"Performance física"

}

]

}

]

};


return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>

);

}
