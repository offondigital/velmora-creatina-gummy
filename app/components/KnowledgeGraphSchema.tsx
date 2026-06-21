export default function KnowledgeGraphSchema(){


const schema = {


"@context":"https://schema.org",


"@graph":[


{


"@type":"Organization",


"@id":

"https://creatinagummy.com.br/#organization",


"name":

"Creatina Gummy",


"url":

"https://creatinagummy.com.br",


"description":

"Marca especializada em creatina em goma, suplementação esportiva, performance física e conteúdos educativos.",



"brand":{


"@id":

"https://creatinagummy.com.br/#brand"


},



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


"@id":

"https://creatinagummy.com.br/#brand",


"name":

"Creatina Gummy",


"url":

"https://creatinagummy.com.br"


},




{


"@type":"WebSite",


"@id":

"https://creatinagummy.com.br/#website",


"url":

"https://creatinagummy.com.br",


"name":

"Creatina Gummy",



"publisher":{


"@id":

"https://creatinagummy.com.br/#organization"


},




"potentialAction":{


"@type":"SearchAction",



"target":{


"@type":"EntryPoint",


"urlTemplate":

"https://creatinagummy.com.br/?s={search_term_string}"


},



"query-input":

"required name=search_term_string"


}



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
