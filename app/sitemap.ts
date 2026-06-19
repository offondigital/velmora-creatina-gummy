import type { MetadataRoute } from "next";

import products from "@/data/products.json";
import seoPages from "@/data/seo-pages.json";


export default function sitemap(): MetadataRoute.Sitemap {


const baseUrl =
"https://creatinagummy.com.br";



const productUrls = products.map((product)=>({

url:
`${baseUrl}/produto/${product.slug}`,

lastModified:
new Date(),

changeFrequency:
"weekly" as const,

priority:
0.8


}));




const seoUrls = seoPages.map((page)=>({

url:
`${baseUrl}/${page.slug}`,

lastModified:
new Date(),

changeFrequency:
"weekly" as const,

priority:
0.7


}));




const benefitUrls = seoPages.map((page)=>({

url:
`${baseUrl}/beneficios/${page.slug}`,

lastModified:
new Date(),

changeFrequency:
"weekly" as const,

priority:
0.8


}));






return [


{

url:
baseUrl,

lastModified:
new Date(),

changeFrequency:
"daily",

priority:
1


},


...productUrls,


...seoUrls,


...benefitUrls


];


}

