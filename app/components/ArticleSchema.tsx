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


"@type":"Organization",

"name":

page.author


},



"reviewedBy":{


"@type":"Organization",

"name":

page.reviewedBy


},




"publisher":{


"@type":"Organization",

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
