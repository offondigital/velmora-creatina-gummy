import SchemaValidator from "./SchemaValidator";

import author from "@/data/authors.json";



export default function AuthorSchema(){



const data = author[0];



const schema = {



"@context":"https://schema.org",



"@type":"Person",




"@id":

"https://creatinagummy.com.br/#author",





"name":

data.name,





"description":

data.description,





"knowsAbout":

data.knowsAbout || []





};





return (

<SchemaValidator schema={schema}/>

);



}
