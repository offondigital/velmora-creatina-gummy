interface ArticleSchemaProps {

page:any;

}



export default function ArticleSchema({

page

}:ArticleSchemaProps){



const schema = {


"@context":"https://schema.org",


"@type":"Article",



"headline":

page.title,



"description":

page.metaDescription,




"author":{


"@type":"Person",

"@id":

"https://creatinagummy.com.br/#author-creatina-gummy",

"name":

page.author || "Equipe Creatina Gummy"


},




"reviewedBy":{


"@type":"Person",

"@id":

"https://creatinagummy.com.br/#reviewer-creatina-gummy",

"name":

page.reviewedBy || "Equipe Creatina Gummy"


},





"publisher":{


"@type":"Organization",

"@id":

"https://creatinagummy.com.br/#organization",

"name":

"Creatina Gummy"


},





"datePublished":

page.updatedAt,



"dateModified":

page.updatedAt,





"mainEntityOfPage":{


"@type":"WebPage",


"@id":

`https://creatinagummy.com.br/${page.slug}`


},




"about":{


"@type":"Thing",


"name":

"Creatina Gummy"


}



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
