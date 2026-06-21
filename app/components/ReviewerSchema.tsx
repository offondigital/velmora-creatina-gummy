import reviewer from "@/data/reviewers.json";


export default function ReviewerSchema(){


const data = reviewer[0];



const schema = {


"@context":"https://schema.org",



"@type":"Person",



"@id":

"https://creatinagummy.com.br/#reviewer",






"name":

data.name,





"jobTitle":

data.jobTitle,






"description":

data.description,







"affiliation":{


"@type":"Organization",


"@id":

"https://creatinagummy.com.br/#organization",


"name":

"Creatina Gummy"


},







"knowsAbout":[


"Creatina",

"Creatina em goma",

"Suplementação esportiva",

"Performance física",

"Treinamento esportivo"


],








"expertise":[


"Revisão de conteúdos sobre suplementação",

"Educação esportiva",

"Performance e treinamento"



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
