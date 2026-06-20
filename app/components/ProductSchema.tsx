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

"Creatina Gummy é creatina em goma desenvolvida para praticidade, performance e rotina de treinos.",



"brand":{


"@type":"Brand",


"name":

"Creatina Gummy",



"url":

"https://creatinagummy.com.br"


},



"category":

"Suplemento alimentar esportivo",



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


"@type":"Organization",


"name":

"Creatina Gummy"


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
