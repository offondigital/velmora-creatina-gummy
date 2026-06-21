import SchemaValidator from "./SchemaValidator";



export default function BreadcrumbSchema({

items

}:{

items:any[];

}){



if(!items || items.length===0){

return null;

}





const schema = {



"@context":"https://schema.org",



"@type":"BreadcrumbList",




"itemListElement":

items.map((item,index)=>(



{


"@type":"ListItem",



"position":

index+1,



"name":

item.name,



"item":

item.url



}



))



};





return (

<SchemaValidator schema={schema}/>

);



}
