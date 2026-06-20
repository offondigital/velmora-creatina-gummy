export function productSchema(){

return {

"@context":"https://schema.org",

"@type":"Product",

name:"Creatina Gummy",

description:
"Creatina em goma com praticidade para uma rotina de suplementação.",

brand:{

"@type":"Brand",

name:"Creatina Gummy"

},

category:
"Suplemento alimentar",

additionalProperty:[

{

"@type":"PropertyValue",

name:"Formato",

value:"Goma"

},

{

"@type":"PropertyValue",

name:"Categoria",

value:"Creatina"

}

]

};


}





export function brandSchema(){

return {

"@context":"https://schema.org",

"@type":"Brand",

name:"Creatina Gummy",

description:
"Marca especializada em suplementação em formato de goma."

};


}





export function breadcrumbSchema(items:any[]){

return {

"@context":"https://schema.org",

"@type":"BreadcrumbList",

itemListElement:

items.map((item,index)=>({

"@type":"ListItem",

position:index+1,

name:item.name,

item:item.url

}))

};


}





export function faqSchema(faq:any[]){

return {

"@context":"https://schema.org",

"@type":"FAQPage",

mainEntity:

faq.map(item=>({

"@type":"Question",

name:item.question,

acceptedAnswer:{

"@type":"Answer",

text:item.answer

}

}))

};


}
