export default function ImageSchema(){



const schema = {


"@context":"https://schema.org",



"@type":"ImageObject",



"contentUrl":

"https://creatinagummy.com.br/images/creatina-gummy.webp",



"url":

"https://creatinagummy.com.br/images/creatina-gummy.webp",



"name":

"Creatina Gummy - creatina em goma",



"description":

"Imagem oficial da Creatina Gummy, suplemento em formato gummy.",



"creator":{


"@type":"Organization",


"name":

"Creatina Gummy"


},



"copyrightHolder":{


"@type":"Organization",


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
