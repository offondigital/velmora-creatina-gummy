import organization from "@/data/organization.json";

import authors from "@/data/authors.json";

import reviewers from "@/data/reviewers.json";



export default function GlobalEntityGraph(){



const schema = {


"@context":"https://schema.org",


"@graph":[



{


"@type":"Organization",


"@id":

"https://creatinagummy.com.br/#organization",


"name":

organization.name,


"url":

organization.url,


"description":

organization.description,


"sameAs":

organization.sameAs,


"knowsAbout":

organization.knowsAbout



},




{


"@type":"Brand",


"@id":

"https://creatinagummy.com.br/#brand",


"name":

"Creatina Gummy",


"url":

"https://creatinagummy.com.br",


"parentOrganization":{


"@id":

"https://creatinagummy.com.br/#organization"


}



},






{


"@type":"Product",


"@id":

"https://creatinagummy.com.br/produto/creatina-gummy#product",


"name":

"Creatina Gummy",


"category":

"Suplemento alimentar esportivo",


"brand":{


"@id":

"https://creatinagummy.com.br/#brand"


},


"about":[


{

"@type":"Thing",

"name":"Creatina"

},


{

"@type":"Thing",

"name":"Creatina em goma"

},


{

"@type":"Thing",

"name":"Suplementação esportiva"

}


]



},






{


"@type":"Person",


"@id":

"https://creatinagummy.com.br/#author",


"name":

authors[0].name,


"jobTitle":

authors[0].jobTitle,


"description":

authors[0].description,


"knowsAbout":

authors[0].knowsAbout



},







{


"@type":"Person",


"@id":

"https://creatinagummy.com.br/#reviewer",


"name":

reviewers[0].name,


"jobTitle":

reviewers[0].jobTitle,


"description":

reviewers[0].description,


"knowsAbout":

reviewers[0].knowsAbout



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


"about":{


"@id":

"https://creatinagummy.com.br/#brand"


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
