import CanonicalSchema from "@/app/components/CanonicalSchema";

import AnswerBox from "@/app/components/AnswerBox";

import AeoSchema from "@/app/components/AeoSchema";

import EntityContext from "@/app/components/EntityContext";

import InternalLinks from "@/app/components/InternalLinks";

import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";



const pages = require("../../data/pages.json");





export async function generateStaticParams(){


return pages.map((page:any)=>({


slug:page.slug


}));


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







return (



<>



<CanonicalSchema


path={`/${slug}`}


title={page.title}


description={page.metaDescription}


/>






<AeoSchema page={page}/>





<BreadcrumbSchema

items={[

{

name:"Home",

url:"https://creatinagummy.com.br"

},

{

name:page.title,

url:`https://creatinagummy.com.br/${slug}`

}

]}

/>







<main className="max-w-5xl mx-auto px-6 py-16">





<h1 className="text-5xl font-bold">


{page.title}


</h1>





<p className="mt-6 text-xl">


{page.metaDescription}


</p>







<AnswerBox


title={page.answerTitle || "Resposta rápida"}


answer={page.answer || page.metaDescription}


/>







<EntityContext


entity={page.entity}


category={page.category}


related={page.related || []}


/>







<section className="mt-14">


<h2 className="text-3xl font-bold">


Perguntas frequentes


</h2>




{page.faq?.map((item:any)=>(



<div

key={item.question}

className="mt-6"



>


<h3 className="font-bold">


{item.question}


</h3>



<p className="mt-2">


{item.answer}


</p>



</div>



))}





</section>







<InternalLinks

currentSlug={slug}

/>






</main>



</>



);


}
