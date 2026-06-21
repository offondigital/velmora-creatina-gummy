export default function ImageSchema(){


const schema = {


"@context":"https://schema.org",


"@type":"ImageObject",



"@id":

"https://creatinagummy.com.br/images/creatina-gummy.webp#image",




"contentUrl":

"https://creatinagummy.com.br/images/creatina-gummy.webp",




"url":

"https://creatinagummy.com.br/images/creatina-gummy.webp",




"name":

"Creatina Gummy - creatina em goma",




"description":

"Imagem oficial do produto Creatina Gummy, suplemento esportivo em formato gummy.",




"encodingFormat":

"image/webp",




"representativeOfPage":true,




"about":{


"@type":"Product",


"name":"Creatina Gummy",


"url":

"https://creatinagummy.com.br/produto/creatina-gummy"


},




"creator":{


"@type":"Organization",


"@id":

"https://creatinagummy.com.br/#organization",


"name":

"Creatina Gummy"


},




"creditText":

"Creatina Gummy"



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

