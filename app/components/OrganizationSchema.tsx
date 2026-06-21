import SchemaValidator from "./SchemaValidator";



export default function OrganizationSchema(){



const schema = {


"@context":"https://schema.org",


"@type":"Organization",



"@id":

"https://creatinagummy.com.br/#organization",



"name":

"Creatina Gummy",



"url":

"https://creatinagummy.com.br",



"description":

"Marca especializada em creatina em goma e suplementação esportiva.",



"sameAs":[]



};




return (

<SchemaValidator schema={schema}/>

);



}
