import Link from "next/link";


import ProductSchema from "@/app/components/ProductSchema";

import ImageSchema from "@/app/components/ImageSchema";



const products = require("../../../data/products.json");





export async function generateStaticParams(){


return products.map((product:any)=>(


{

slug:product.slug

}


));


}





export default async function ProductPage({

params

}:{

params:Promise<{slug:string}>

}){



const {slug}=await params;




const product = products.find(

(p:any)=>p.slug===slug

);





if(!product){

return null;

}






return (



<>



<ProductSchema product={product}/>



<ImageSchema/>





<main className="max-w-5xl mx-auto px-6 py-16">






<h1 className="text-5xl font-bold">


{product.title || product.name}


</h1>







<p className="mt-6 text-xl">


{product.description}


</p>







<section className="mt-14">


<h2 className="text-3xl font-bold">

Sobre o produto

</h2>



<p className="mt-5">


A Creatina Gummy combina praticidade e suplementação em um formato de goma desenvolvido para 
acompanhar diferentes rotinas de treino.


</p>



</section>









<section className="mt-14">


<h2 className="text-3xl font-bold">

Benefícios

</h2>




<ul className="list-disc pl-6 mt-5">


<li>

Praticidade no consumo

</li>


<li>

Formato gummy fácil de incluir na rotina

</li>


<li>

Suporte para treinos e performance

</li>


</ul>



</section>







<section className="mt-14 bg-gray-100 rounded-3xl p-8">


<h2 className="text-3xl font-bold">


Creatina Gummy


</h2>



<p className="mt-4">


Creatina em goma para quem busca uma experiência diferente de suplementação.


</p>



<Link

href="/creatina-gummy"

className="inline-block mt-6 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold"


>


Conheça a Creatina Gummy


</Link>




</section>






</main>



</>



);


}
