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






"worksFor":{


"@type":"Organization",


"@id":

"https://creatinagummy.com.br/#organization",


"name":

"Creatina Gummy"


},






"knowsAbout":

data.knowsAbout,







"expertise":[


"Creatina em goma",

"Suplementação esportiva",

"Performance física",

"Treinamento esportivo"


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
