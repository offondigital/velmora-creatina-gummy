interface WebPageSchemaProps {

page:any;

}



export default function WebPageSchema({

page

}:WebPageSchemaProps){



const schema = {


"@context":"https://schema.org",



"@type":"WebPage",





"@id":

`https://creatinagummy.com.br/${page.slug}#webpage`,





"url":

`https://creatinagummy.com.br/${page.slug}`,





"name":

page.h1 || page.title,





"description":

page.metaDescription || page.description,







"isPartOf":{


"@type":"WebSite",


"@id":

"https://creatinagummy.com.br/#website"


},







"about":{


"@type":"Thing",


"name":

page.keyword || "Creatina Gummy",



"description":

"Creatina em goma, suplementação esportiva, performance e treinamento físico."

},






"mainEntity":{


"@type":"Article",


"@id":

`https://creatinagummy.com.br/${page.slug}#article`


},








"author":{


"@type":"Organization",

"@id":

"https://creatinagummy.com.br/#organization",


"name":

"Creatina Gummy"



},








"reviewedBy":{


"@type":"Person",

"@id":

"https://creatinagummy.com.br/#reviewer"



},







"publisher":{


"@type":"Organization",

"@id":

"https://creatinagummy.com.br/#organization"


},







"mentions":[



{


"@type":"Product",


"@id":

"https://creatinagummy.com.br/produto/creatina-gummy#product",


"name":

"Creatina Gummy"


},





{


"@type":"Thing",


"name":

"Creatina em goma"


},





{


"@type":"Thing",


"name":

"Suplementação esportiva"


},





{


"@type":"Thing",


"name":

"Performance física"


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
