import Link from "next/link";


import Breadcrumb from "@/app/components/Breadcrumb";

import ArticleSchema from "@/app/components/ArticleSchema";

import WebPageSchema from "@/app/components/WebPageSchema";

import FaqSchema from "@/app/components/FaqSchema";

import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

import AeoSchema from "@/app/components/AeoSchema";

import EntityContext from "@/app/components/EntityContext";



const pages = require("../../data/seo-pages.json");

const products = require("../../data/products.json");





export async function generateStaticParams(){


return pages.map((page:any)=>(


{

slug:page.slug

}


));


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






const product = products.find(

(p:any)=>p.slug==="creatina-gummy"

);






const breadcrumbItems=[



{

name:"Creatina Gummy",

url:"https://creatinagummy.com.br/creatina-gummy"

},



{

name:page.h1 || page.title,

url:

`https://creatinagummy.com.br/${page.slug}`

}



];







return (



<main className="max-w-5xl mx-auto px-6 py-16">





<WebPageSchema page={page}/>




<ArticleSchema page={page}/>





<FaqSchema faq={page.faq}/>





<BreadcrumbSchema items={breadcrumbItems}/>






<AeoSchema page={page}/>







<Breadcrumb


items={[



{

name:"Creatina Gummy",

url:"/creatina-gummy"

},



{

name:

page.h1 || page.title,

url:

`/${page.slug}`

}



]}


/>









<EntityContext



entity={page.keyword || "Creatina Gummy"}



category={page.category || "Suplementação esportiva"}



related={page.relatedProducts || []}



/>










<h1 className="text-5xl font-bold">


{page.h1}


</h1>







<p className="mt-6 text-xl">


{page.quickAnswer}


</p>









<section className="mt-14">


<h2 className="text-3xl font-bold">

Introdução

</h2>


<p className="mt-5">

{page.intro}

</p>


</section>









<section className="mt-14">


<h2 className="text-3xl font-bold">

Experiência prática

</h2>


<p className="mt-5">

{page.experience}

</p>


</section>









<section className="mt-14">


<h2 className="text-3xl font-bold">

Base científica

</h2>


<p className="mt-5">

{page.scientificBasis}

</p>


</section>









<section className="mt-14">


<h2 className="text-3xl font-bold">

Autoridade e confiança

</h2>



<p className="mt-5">

{page.authority}

</p>



<p className="mt-5">

{page.trust}

</p>


</section>









<section className="mt-14">


<h2 className="text-3xl font-bold">

{page.section1Title}

</h2>



<p className="mt-5">

{page.section1Content}

</p>


</section>









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



<p>

{item.answer}

</p>



</div>


))}




</section>









<section className="mt-14 bg-gray-100 rounded-3xl p-8">


<h2 className="text-3xl font-bold">

Conteúdo revisado

</h2>




<p>

Autor: {page.author}

</p>



<p>

Revisado por: {page.reviewedBy}

</p>




<p>

Atualizado em: {page.updatedAt}

</p>



</section>









<section className="mt-16 bg-purple-100 rounded-3xl p-10">


<h2 className="text-3xl font-bold">

Conheça a Creatina Gummy

</h2>




<p className="mt-5">

{page.cta || "Creatina em goma para uma rotina prática de suplementação."}

</p>






<Link


href={`/produto/${product?.slug}`}


className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold"



>


Ver Creatina Gummy


</Link>





</section>








</main>



);


}
