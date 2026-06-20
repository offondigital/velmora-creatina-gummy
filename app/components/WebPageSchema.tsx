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

"https://creatinagummy.com.br/#website",


"name":

"Creatina Gummy"


},






"about":{


"@type":"Thing",


"name":

page.keyword || "Creatina Gummy",



"description":

"Conteúdos educativos sobre creatina em goma, suplementação esportiva e performance."

},






"mainEntity":{


"@type":"Article",


"@id":

`https://creatinagummy.com.br/${page.slug}#article`



},







"mentions":[



{


"@type":"Product",


"name":

"Creatina Gummy",


"url":

"https://creatinagummy.com.br/produto/creatina-gummy"


},



{


"@type":"Thing",


"name":

"Creatina em goma"


},



{


"@type":"Thing",


"name":

"Creatina gummy"


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
