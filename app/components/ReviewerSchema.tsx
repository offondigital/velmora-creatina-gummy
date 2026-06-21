import SchemaValidator from "./SchemaValidator";

import reviewer from "@/data/reviewers.json";



export default function ReviewerSchema(){



const data = reviewer[0];



const schema = {



"@context":"https://schema.org",



"@type":"Person",




"@id":

"https://creatinagummy.com.br/#reviewer",





"name":

data.name,





"description":

data.description,





"knowsAbout":[


"Creatina",

"Creatina em goma",

"Suplementação esportiva"



]



};





return (

<SchemaValidator schema={schema}/>

);



}
