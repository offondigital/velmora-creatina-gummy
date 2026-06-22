export default function EntityContextSchema(){


const schema={


"@context":"https://schema.org",

"@type":"Product",


"name":"Creatina Gummy",


"description":

"Creatina em goma com praticidade para suplementação esportiva.",



"brand":{


"@type":"Brand",

"name":"Creatina Gummy"


},


"category":

"Suplemento esportivo"



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
