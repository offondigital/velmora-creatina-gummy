import type { MetadataRoute } from "next";


import products from "@/data/products.json";

import seoPages from "@/data/seo-pages.json";

import clusters from "@/data/clusters.json";





export default function sitemap(): MetadataRoute.Sitemap {



const baseUrl =

"https://creatinagummy.com.br";



const now = new Date();







const productUrls = products.map((product:any)=>({



url:

`${baseUrl}/produto/${product.slug}`,



lastModified:

now,



changeFrequency:

"weekly" as const,



priority:

0.9



}));








const seoUrls = seoPages.map((page:any)=>({



url:

`${baseUrl}/${page.slug}`,



lastModified:

now,



changeFrequency:

"monthly" as const,



priority:

0.8



}));









const benefitUrls = seoPages.map((page:any)=>({



url:

`${baseUrl}/beneficios/${page.slug}`,



lastModified:

now,



changeFrequency:

"monthly" as const,



priority:

0.8



}));









const clusterUrls = Object.keys(clusters).map((slug)=>({



url:

`${baseUrl}/clusters/${slug}`,



lastModified:

now,



changeFrequency:

"monthly" as const,



priority:

0.7



}));









const institutionalUrls = [



"sobre-creatina-gummy",


"quem-somos",


"metodologia",


"revisao-cientifica"



].map((slug)=>(



{


url:

`${baseUrl}/institucional/${slug}`,



lastModified:

now,



changeFrequency:

"yearly" as const,



priority:

0.6



}



));









return [



{


url:

baseUrl,



lastModified:

now,



changeFrequency:

"daily" as const,



priority:

1



},






{


url:

`${baseUrl}/creatina-gummy`,



lastModified:

now,



changeFrequency:

"weekly" as const,



priority:

1



},




...productUrls,


...seoUrls,


...benefitUrls,


...clusterUrls,


...institutionalUrls



];



}
