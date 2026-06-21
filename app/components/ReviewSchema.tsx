export default function ReviewSchema(){


const schema = {


"@context":"https://schema.org",


"@type":"Review",


"@id":

"https://creatinagummy.com.br/#review-creatina-gummy",



"itemReviewed":{


"@type":"Product",


"name":

"Creatina Gummy",


"url":

"https://creatinagummy.com.br/produto/creatina-gummy"


},





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

"Creatina Gummy é uma opção prática de creatina em goma, com sabor agradável e facilidade para incluir na rotina de suplementação."





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
