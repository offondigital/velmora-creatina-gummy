import type { MetadataRoute } from "next";


const pages = require("@/data/pages.json");

const products = require("@/data/products.json");



export default function sitemap(): MetadataRoute.Sitemap {



const baseUrl =

"https://creatinagummy.com.br";





const contentPages = pages.map((page:any)=>({


url:

`${baseUrl}/${page.slug}`,


lastModified:

new Date(),


changeFrequency:

"weekly" as const,


priority:

0.8



}));







const productPages = products.map((product:any)=>(



{


url:

`${baseUrl}/produto/${product.slug}`,



lastModified:

new Date(),



changeFrequency:

"monthly" as const,



priority:

0.9


}



));









return [




{


url:baseUrl,


lastModified:new Date(),


changeFrequency:"weekly",


priority:1



},







{


url:`${baseUrl}/creatina-gummy`,


lastModified:new Date(),


changeFrequency:"weekly",


priority:1



},







...contentPages,

...productPages



];



}
