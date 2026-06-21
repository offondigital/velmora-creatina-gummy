import SchemaValidator from "./SchemaValidator";



export default function AeoSchema({

page

}:{

page:any;

}){



const schema = {



"@context":"https://schema.org",



"@type":"Article",





"headline":

page.title,





"description":

page.metaDescription,





"mainEntity":{


"@type":"Thing",


"name":

"Creatina Gummy"



}






};





return (

<SchemaValidator schema={schema}/>

);



}
