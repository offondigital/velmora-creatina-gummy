import Link from "next/link";

import AnswerBox from "@/app/components/AnswerBox";

import seoPages from "@/data/seo-pages.json";

import products from "@/data/products.json";


export async function generateStaticParams(){


return seoPages.map((page:any)=>({


slug:page.slug


}));


}



export async function generateMetadata({

params

}:{

params:Promise<{slug:string}>

}){


const {slug}=await params;


const page:any = seoPages.find(

(item:any)=>item.slug===slug

);



return {


title:page?.title,


description:page?.metaDescription


};


}





export default async function IntentPage({

params

}:{

params:Promise<{slug:string}>

}){


const {slug}=await params;



const page:any = seoPages.find(

(item:any)=>item.slug===slug

);



if(!page){


return <div>Página não encontrada</div>


}




const product:any = products.find(

(item:any)=>

item.slug==="creatina-gummy"

);





return (



<main className="max-w-5xl mx-auto px-8 py-16">



<h1 className="text-5xl font-bold">


{page.h1}


</h1>





<AnswerBox


title={`Resposta direta: ${page.h1}`}


answer={page.quickAnswer}


/>





<section className="mt-14">


<h2 className="text-3xl font-bold">

Experiência prática

</h2>


<p className="mt-4">

{page.experience}

</p>


</section>







<section className="mt-14">


<h2 className="text-3xl font-bold">

Base científica

</h2>


<p className="mt-4">

{page.scientificBasis}

</p>


</section>







<section className="mt-14">


<h2 className="text-3xl font-bold">

Autoridade e confiança

</h2>


<p className="mt-4">

{page.authority}

</p>


<p className="mt-4">

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

Benefícios da Creatina Gummy

</h2>



<ul className="mt-6 space-y-3">


{page.benefits.map((item:string)=>(


<li key={item}>

✓ {item}

</li>


))}


</ul>


</section>








<section className="mt-14">


<h2 className="text-3xl font-bold">

Perguntas frequentes

</h2>



{page.faq.map((item:any)=>(


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



<p className="mt-4">

Descubra uma forma prática de incluir creatina na sua rotina.

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
