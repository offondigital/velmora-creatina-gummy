import type { Metadata } from "next";

import Link from "next/link";

import { createMetadata } from "@/app/lib/metadata";

import ArticleSchema from "@/app/components/ArticleSchema";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import FaqSchema from "@/app/components/FaqSchema";
import AeoSchema from "@/app/components/AeoSchema";
import InternalLinks from "@/app/components/InternalLinks";
import EntityContext from "@/app/components/EntityContext";
import TopicAuthority from "@/app/components/TopicAuthority";



const pages = require("../../data/pages.json");





export async function generateStaticParams(){


return pages.map((page:any)=>(


{

slug:page.slug

}


));


}








export async function generateMetadata({

params

}:{

params:Promise<{slug:string}>

}):Promise<Metadata>{



const {slug}=await params;



const page = pages.find(

(p:any)=>p.slug===slug

);





return createMetadata({



title:

page?.title || "Creatina Gummy",





description:

page?.metaDescription ||

page?.description ||

"Conteúdos sobre creatina em goma, suplementação esportiva e performance.",





slug,





image:

page?.image,





type:

"article"



});



}









export default async function Page({

params

}:{

params:Promise<{slug:string}>

}){





const {slug}=await params;





const page = pages.find(

(p:any)=>p.slug===slug

);





if(!page){

return null;

}









const breadcrumb = [



{

name:"Início",


url:"https://creatinagummy.com.br"

},



{

name:

page.title,


url:

`https://creatinagummy.com.br/${slug}`

}



];









return (



<>



<ArticleSchema page={page}/>



<AeoSchema page={page}/>



<FaqSchema faq={page.faq}/>



<BreadcrumbSchema items={breadcrumb}/>







<main className="max-w-5xl mx-auto px-6 py-16">







<h1 className="text-5xl font-bold">

{page.title}

</h1>







<p className="mt-6 text-xl">

{page.description}

</p>









<section className="mt-14">


<h2 className="text-3xl font-bold">

Sobre este conteúdo

</h2>



<p className="mt-5">

{page.content}

</p>



</section>









{page.faq && page.faq.length > 0 && (



<section className="mt-14">


<h2 className="text-3xl font-bold">

Perguntas frequentes

</h2>





<div className="mt-6 space-y-6">


{page.faq.map((item:any)=>(



<article

key={item.question}

className="border rounded-xl p-6"

>


<h3 className="font-bold text-xl">

{item.question}

</h3>



<p className="mt-3">

{item.answer}

</p>



</article>



))}


</div>





</section>



)}









<EntityContext


entity={page.entity || "Creatina Gummy"}


category={page.category || "Suplementação esportiva"}


related={page.related || []}


/>









<TopicAuthority />









<InternalLinks currentSlug={slug}/>









<section className="mt-16 bg-gray-100 rounded-3xl p-8">


<h2 className="text-3xl font-bold">

Conheça a Creatina Gummy

</h2>




<p className="mt-4">

Creatina em goma desenvolvida para praticidade,
performance e rotina de suplementação.

</p>





<Link


href="/produto/creatina-gummy"


className="inline-block mt-6 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold"


>


Ver produto


</Link>





</section>







</main>



</>



);



}
