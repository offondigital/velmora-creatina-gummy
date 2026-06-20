import Link from "next/link";
import products from "@/data/products.json";
import seoPages from "@/data/seo-pages.json";


export function generateStaticParams(){

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



if(!page){

return {};

}



return {


title:page.title,


description:page.metaDescription,


keywords:[

page.keyword,

"creatina gummy",

"creatina em goma",

"suplemento de creatina"

],



alternates:{


canonical:

`https://creatinagummy.com.br/${page.slug}`


}


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

return null;

}




const product:any = products.find(

(item:any)=>item.slug==="creatina-gummy"

);




return (


<main className="max-w-5xl mx-auto px-8 py-16">


<h1 className="text-5xl font-bold">

{page.h1}

</h1>



<section className="mt-8 bg-purple-50 rounded-3xl p-8">


<h2 className="text-2xl font-bold">

Resposta rápida

</h2>


<p className="mt-4">

{page.quickAnswer}

</p>


</section>





<p className="mt-10 text-xl text-gray-700">

{page.intro}

</p>





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

{page.section2Title}

</h2>


<p className="mt-5">

{page.section2Content}

</p>


</section>





<section className="mt-14">


<h2 className="text-3xl font-bold">

Benefícios da Creatina Gummy

</h2>



<ul className="mt-5 space-y-3">


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


<div key={item.question} className="mt-6">


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

{page.cta}

</p>




<Link

href={`/produto/${product?.slug}`}

className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl 
font-bold"

>


Ver Creatina Gummy

</Link>


</section>


</main>


);


}
