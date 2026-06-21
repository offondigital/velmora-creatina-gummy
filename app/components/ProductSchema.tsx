import SchemaValidator from "./SchemaValidator";



interface ProductSchemaProps {

product:any;

}





export default function ProductSchema({

product

}:ProductSchemaProps){



const schema = {



"@context":"https://schema.org",



"@type":"Product",




"@id":

`https://creatinagummy.com.br/produto/${product.slug}#product`,





"name":

product.name,





"description":

product.description,





"brand":{


"@type":"Brand",


"name":

product.brand || "Creatina Gummy"


},





"image":[

`https://creatinagummy.com.br${product.image}`

],





"offers":{


"@type":"Offer",


"url":

product.buyUrl,



"priceCurrency":

"BRL",



"price":

product.price,



"availability":

"https://schema.org/InStock"



}



};





return (

<SchemaValidator schema={schema}/>

);



}
