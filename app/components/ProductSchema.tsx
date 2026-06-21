interface ProductSchemaProps {

product:any;

}



export default function ProductSchema({

product

}:ProductSchemaProps){



const schema = {


"@context":"https://schema.org",


"@type":"Product",



"@id":

"https://creatinagummy.com.br/produto/creatina-gummy#product",





"name":

product?.name || "Creatina Gummy",





"description":

product?.description ||

"Creatina em goma com creatina, praticidade e sabor para rotina de suplementação esportiva.",





"brand":{


"@type":"Brand",


"@id":

"https://creatinagummy.com.br/#brand",


"name":

"Creatina Gummy"


},





"manufacturer":{


"@type":"Organization",


"@id":

"https://creatinagummy.com.br/#organization",


"name":

"Creatina Gummy"


},






"category":

"Suplemento alimentar esportivo",







"about":[



{


"@type":"Thing",


"name":

"Creatina"


},



{


"@type":"Thing",


"name":

"Creatina em goma"


},



{


"@type":"Thing",


"name":

"Performance física"


}



],






"image":[


"https://creatinagummy.com.br/images/creatina-gummy.webp"


],







"offers":{


"@type":"Offer",


"url":

"https://creatinagummy.com.br/produto/creatina-gummy",



"priceCurrency":

"BRL",



"price":

"99.90",



"availability":

"https://schema.org/InStock",



"itemCondition":

"https://schema.org/NewCondition",



"seller":{


"@id":

"https://creatinagummy.com.br/#organization"


}


},








"aggregateRating":{


"@type":"AggregateRating",


"ratingValue":

"5",


"reviewCount":

"25"


},







"review":[


{


"@type":"Review",



"author":{


"@type":"Person",


"name":

"Cliente Creatina Gummy"


},



"reviewRating":{


"@type":"Rating",


"ratingValue":

"5",


"bestRating":

"5"


},



"reviewBody":

"Produto prático, sabor agradável e fácil de incluir na rotina de suplementação."

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
