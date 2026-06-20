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

"performance esportiva"

],


"aggregateRating":{

"@type":"AggregateRating",

"ratingValue":"4.8",

"reviewCount":"127"

},


"offers":{

"@type":"Offer",

"priceCurrency":"BRL",

"availability":"https://schema.org/InStock",

"url":

`https://creatinagummy.com.br/${page.slug}`

}


};


}





export function createOrganizationSchema(){


return {


"@context":"https://schema.org",


"@type":"Organization",


"name":"Creatina Gummy",


"url":"https://creatinagummy.com.br",


"sameAs":[

"https://instagram.com/creatinagummy"

]


};


}







export function createPersonSchema(){


return {


"@context":"https://schema.org",


"@type":"Person",


"name":"Equipe Creatina Gummy",


"jobTitle":"Especialistas em suplementação esportiva",


"worksFor":{

"@type":"Organization",

"name":"Creatina Gummy"

}


};


}







export function createArticleSchema(page:any){


return {


"@context":"https://schema.org",


"@type":"Article",


"headline":page.title,


"description":page.metaDescription,


"author":{


"@type":"Person",


"name":"Equipe Creatina Gummy"


},


"publisher":{


"@type":"Organization",


"name":"Creatina Gummy"


},


"mainEntityOfPage":{

"@type":"WebPage",

"@id":

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







export function createWebPageSchema(page:any){


return {


"@context":"https://schema.org",


"@type":"WebPage",


"name":page.title,


"url":

`https://creatinagummy.com.br/${page.slug}`,


"description":page.metaDescription,


"isPartOf":{


"@type":"WebSite",


"name":"Creatina Gummy",


"url":"https://creatinagummy.com.br"


}


};


}
