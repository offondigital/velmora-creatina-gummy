export function createProductSchema(page:any){


return {


"@context":"https://schema.org",


"@type":"Product",


"name":"Creatina Gummy",


"description":page.metaDescription,


"brand":{


"@type":"Brand",


"name":"Creatina Gummy"

},


"category":"Suplemento alimentar",


"keywords":[

page.keyword,

"creatina gummy",

"creatina em goma",

"suplemento de creatina",

"performance"

],


"offers":{


"@type":"Offer",


"priceCurrency":"BRL",


"availability":"https://schema.org/InStock",


"url":

`https://creatinagummy.com.br/${page.slug}`


}



};



}






export function createFAQSchema(page:any){



return {


"@context":"https://schema.org",


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


};



}






export function createBreadcrumbSchema(page:any){



return {


"@context":"https://schema.org",


"@type":"BreadcrumbList",


"itemListElement":[


{


"@type":"ListItem",


"position":1,


"name":"Home",


"item":"https://creatinagummy.com.br"

},



{


"@type":"ListItem",


"position":2,


"name":page.h1,


"item":

`https://creatinagummy.com.br/${page.slug}`


}



]

};



}






export function createOrganizationSchema(){



return {


"@context":"https://schema.org",


"@type":"Organization",


"name":"Creatina Gummy",


"url":"https://creatinagummy.com.br"


};



}
