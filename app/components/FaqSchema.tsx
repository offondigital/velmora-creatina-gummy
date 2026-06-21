import SchemaValidator from "./SchemaValidator";



export default function FaqSchema({

faq

}:{

faq:any[];

}){



if(!faq || faq.length===0){

return null;

}





const schema = {



"@context":"https://schema.org",



"@type":"FAQPage",




"mainEntity":

faq.map((item:any)=>(



{

"@type":"Question",


"name":

item.question,



"acceptedAnswer":{


"@type":"Answer",


"text":

item.answer



}



}



))



};





return (

<SchemaValidator schema={schema}/>

);



}
