import author from "@/data/authors.json";


export default function AuthorSchema(){


const data = author[0];



const schema = {


"@context":"https://schema.org",




"@type":"Person",




"@id":

"https://creatinagummy.com.br/#author",





"name":

data.name,





"jobTitle":

data.jobTitle,






"description":

data.description,






"memberOf":{


"@type":"Organization",


"@id":

"https://creatinagummy.com.br/#organization",


"name":

"Creatina Gummy"


},





"authorOf":{


"@type":"Article",


"name":

"Conteúdos educativos sobre creatina e suplementação"


},






"knowsAbout":[


"Creatina",

"Creatina em goma",

"Suplementação esportiva",

"Performance física",

"Treinamento esportivo",

"AEO",

"GEO"

],




"expertise":[


"Educação esportiva",

"Conteúdo científico",

"Performance física"

],




"sameAs":

data.sameAs



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
