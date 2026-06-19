import products from "@/data/products.json";
import Link from "next/link";


export function generateStaticParams(){


return products.map((product)=>({


slug:product.slug


}));


}




export default function ProductPage({

params,

}:{

params:{slug:string}

}){



const product = products.find(

(item)=>item.slug===params.slug

);



if(!product){

return null;

}



return (


<main className="max-w-6xl mx-auto px-8 py-16">



<section className="grid md:grid-cols-2 gap-12 items-center">


<div>



<h1 className="text-5xl font-bold leading-tight">

{product.name}

</h1>




<p className="mt-6 text-xl text-gray-600">

{product.description}

</p>




<Link

href="#comprar"

className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold"

>

Comprar agora

</Link>


</div>






<div className="bg-purple-100 rounded-3xl p-12">


<h2 className="text-3xl font-bold">

Performance na sua rotina

</h2>


<p className="mt-4">

Uma nova experiência em suplementação.

</p>


</div>



</section>








<section className="py-20">


<h2 className="text-3xl font-bold">

Benefícios do {product.name}

</h2>



<div className="grid md:grid-cols-3 gap-6 mt-10">


<div className="border rounded-2xl p-6">

<h3 className="font-bold text-xl">

Praticidade

</h3>

<p>

Formato em goma fácil de consumir.

</p>

</div>




<div className="border rounded-2xl p-6">

<h3 className="font-bold text-xl">

Performance

</h3>

<p>

Para acompanhar seus objetivos.

</p>

</div>





<div className="border rounded-2xl p-6">


<h3 className="font-bold text-xl">

Sabor

</h3>


<p>

Uma forma diferente de consumir creatina.

</p>


</div>



</div>


</section>








<section

id="comprar"

className="bg-black text-white rounded-3xl p-12 text-center"

>


<h2 className="text-4xl font-bold">

Experimente {product.name}

</h2>



<button

className="mt-8 bg-purple-600 px-10 py-4 rounded-xl font-bold"

>

Comprar

</button>


</section>




</main>


);


}
