interface FaqSchemaProps {

faq:any[];

}



export default function FaqSchema({

faq

}:FaqSchemaProps){



if(!faq || faq.length === 0){

return null;

}





const schema = {



"@context":

"https://schema.org",





"@type":

"FAQPage",






"mainEntity":

faq.map((item:any)=>({



"@type":

"Question",



"name":

item.question,





"acceptedAnswer":{



"@type":

"Answer",



"text":

item.answer



}



}))





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
