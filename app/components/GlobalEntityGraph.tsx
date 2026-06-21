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


"parentOrganization":{


"@id":

"https://creatinagummy.com.br/#organization"


}



},








{


"@type":"Person",


"@id":

"https://creatinagummy.com.br/#author",


"name":

authors[0].name,


"jobTitle":

authors[0].jobTitle,


"knowsAbout":

authors[0].knowsAbout,


"worksFor":{


"@id":

"https://creatinagummy.com.br/#organization"


}



},








{


"@type":"Person",


"@id":

"https://creatinagummy.com.br/#reviewer",


"name":

reviewers[0].name,


"jobTitle":

reviewers[0].jobTitle,


"knowsAbout":

reviewers[0].knowsAbout,


"affiliation":{


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


"brand":{


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
