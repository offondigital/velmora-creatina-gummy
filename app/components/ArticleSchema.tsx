interface ArticleSchemaProps {

page:any;

}



export default function ArticleSchema({

page

}:ArticleSchemaProps){



const schema = {


"@context":"https://schema.org",


"@type":"Article",



"@id":

`https://creatinagummy.com.br/${page.slug}#article`,



"headline":

page.title,



"description":

page.metaDescription,





"author":{


"@id":

"https://creatinagummy.com.br/#author"


},





"reviewedBy":{


"@id":

"https://creatinagummy.com.br/#reviewer"


},





"publisher":{


"@id":

"https://creatinagummy.com.br/#organization"


},





"datePublished":

page.updatedAt,



"dateModified":

page.updatedAt,






"mainEntityOfPage":{


"@type":"WebPage",


"@id":

`https://creatinagummy.com.br/${page.slug}#webpage`


},






"about":{


"@type":"Thing",


"name":

page.keyword || "Creatina Gummy"


},






"mentions":[



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
