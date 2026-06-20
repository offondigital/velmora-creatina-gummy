export default function AeoSchema({

page

}:{

page:any;

}){


const schema = {


"@context":"https://schema.org",


"@graph":[



{


"@type":"FAQPage",


"mainEntity":

page.faq.map((item:any)=>(


{


"@type":"Question",


"name":item.question,


"acceptedAnswer":{


"@type":"Answer",


"text":item.answer


}


}


))


},






{


"@type":"Product",


"name":"Creatina Gummy",


"description":

"Creatina em goma para praticidade, performance e rotina de suplementação.",



"brand":{


"@type":"Brand",


"name":"Creatina Gummy"


}


},







{


"@type":"Article",


"headline":page.title,


"description":page.metaDescription,



"about":{


"@type":"Thing",


"name":"Creatina Gummy"


}


}



]


};






return (


<script


type="application/ld+json"


dangerouslySetInnerHTML={{


__html:JSON.stringify(schema)


}}


/>


);


}
