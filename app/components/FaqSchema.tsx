interface FaqSchemaProps {

faq:any[];

page?:any;

}



export default function FaqSchema({

faq,

page

}:FaqSchemaProps){



if(!faq || faq.length===0){

return null;

}





const schema = {


"@context":"https://schema.org",



"@type":"FAQPage",



"@id":

`https://creatinagummy.com.br/${page?.slug || ""}#faq`,




"about":{


"@type":"Product",


"name":"Creatina Gummy",


"url":

"https://creatinagummy.com.br/produto/creatina-gummy"


},




"mainEntity":


faq.map((item:any)=>(



{


"@type":"Question",


"name":item.question,



"acceptedAnswer":{


"@type":"Answer",


"text":item.answer


}


}


))



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
