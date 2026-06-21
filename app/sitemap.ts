import type { MetadataRoute } from "next";

import pages from "@/data/pages.json";


export default function sitemap(): MetadataRoute.Sitemap {


const baseUrl =
"https://creatinagummy.com.br";



const staticPages = [


"",


"creatina-gummy",


"produto/creatina-gummy",


"beneficios/creatina-gummy-beneficios",


"institucional/sobre-creatina-gummy",


"institucional/quem-somos",


"institucional/metodologia",


"institucional/revisao-cientifica",


"clusters/modalidade",


"clusters/objetivo",


"clusters/publico"


];





const generatedPages = Object.keys(pages).map((slug)=>({


url:

`${baseUrl}/${slug}`,



lastModified:

new Date()



}));





return [



...staticPages.map((page)=>({


url:

`${baseUrl}/${page}`,



lastModified:

new Date(),



changeFrequency:

"weekly" as const,



priority:

0.8



})),





...generatedPages.map((page)=>({


url:

page.url,


lastModified:

page.lastModified,


changeFrequency:

"weekly" as const,


priority:

0.7



}))



];



}
