import products from "@/data/products.json";
import Link from "next/link";



export function generateStaticParams(){


return products

.filter(

(product)=>product && typeof product.slug === "string"

)

.map(

(product)=>({

slug:`${product.slug}-beneficios`

})

);


}





export default function BenefitsPage({

params,

}:{

params:{slug:string}

}){



const slug = params?.slug || "";



const productSlug = slug.replace(

"-beneficios",

""

);





const product = products.find(

(item)=>item?.slug===productSlug

);





if(!product){

return (

<main className="p-10">

Produto não encontrado.

</main>

);

}





return (


<main className="max-w-5xl mx-auto px-8 py-16">



<article>



<h1 className="text-5xl font-bold leading-tight">


Benefícios da {product.name}: performance, praticidade e suplementação inteligente


</h1>





<p className="mt-8 text-xl text-gray-600">


A {product.name} é uma opção moderna de suplementação em goma para pessoas que buscam praticidade na rotina esportiva. A creatina é um dos suplementos mais utilizados por atletas e praticantes de exercícios físicos.


</p>






<h2 className="text-3xl font-bold mt-14">

O que é a {product.name}?

</h2>



<p className="mt-5">


A proposta da {product.name} é unir a suplementação tradicional da creatina com um formato mais simples e agradável de consumir.


</p>






<h2 className="text-3xl font-bold mt-14">

Benefícios da creatina em goma

</h2>



<ul className="mt-6 space-y-4">


<li>

✓ Praticidade para incluir creatina no dia a dia.

</li>


<li>

✓ Formato diferenciado em goma.

</li>


<li>

✓ Ideal para acompanhar uma rotina de treinos.

</li>


<li>

✓ Experiência de consumo mais agradável.

</li>


</ul>







<h2 className="text-3xl font-bold mt-14">

Creatina para treino, academia e performance

</h2>



<p className="mt-5">


A creatina é utilizada por pessoas que praticam musculação, corrida, crossfit e diversos esportes. A consistência da suplementação faz parte da estratégia de quem busca evolução na performance.


</p>







<h2 className="text-3xl font-bold mt-14">

Conheça a {product.name}

</h2>



<p className="mt-5">


Descubra uma nova forma de consumir creatina com praticidade e sabor.


</p>





<Link


href={`/produto/${product.slug}`}


className="inline-block mt-10 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold"


>


Ver produto


</Link>





</article>



</main>


);


}
