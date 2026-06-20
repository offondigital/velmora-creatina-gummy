import Link from "next/link";
import products from "@/data/products.json";
import seoPages from "@/data/seo-pages.json";



export function generateStaticParams(){

return seoPages.map((page)=>({

slug: page.slug

}));

}




export async function generateMetadata({

params

}:{

params:{slug:string}

}){


const page:any = seoPages.find(

(item)=>item.slug === params.slug

);



if(!page){

return {};

}



return {


title: page.title,


description: page.metaDescription,


keywords:[

page.keyword,

"creatina gummy",

"creatina em goma",

"suplemento de creatina",

"performance"

],


alternates:{


canonical:

`https://creatinagummy.com.br/${page.slug}`


},



openGraph:{


title:page.title,


description:page.metaDescription,


type:"article"


},



twitter:{


card:"summary_large_image",


title:page.title,


description:page.metaDescription


}


};



}






export default function IntentPage({

params

}:{

params:{slug:string}

}){


const page:any = seoPages.find(

(item)=>item.slug === params.slug

);



if(!page){

return null;

}



const product = products.find(

(item)=>item.slug==="creatina-gummy"

);




return (


<main className="max-w-5xl mx-auto px-8 py-16">



<h1 className="text-5xl font-bold">

{page.h1}

</h1>



<p className="mt-8 text-xl text-gray-600">

{page.intro}

</p>





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

{page.section3Title}

</h2>


<p className="mt-5">

{page.section3Content}

</p>


</section>






<section className="mt-14">


<h2 className="text-3xl font-bold">

{page.section4Title}

</h2>


<p className="mt-5">

{page.section4Content}

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







<section className="mt-16 bg-purple-100 rounded-3xl p-10">


<h2 className="text-3xl font-bold">

Conheça a Creatina Gummy

</h2>


<p className="mt-4">

{page.cta}

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
