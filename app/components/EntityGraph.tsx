import Link from "next/link";

import entities from "@/data/entities.json";



const relations = [

{
title:"Creatina",
href:"/beneficios/creatina-gummy-beneficios",
description:
"Ingrediente principal relacionado à suplementação esportiva."
},


{
title:"Suplementação esportiva",
href:"/clusters/objetivo",
description:
"Categoria relacionada ao uso do produto."
},


{
title:"Treinamento físico",
href:"/clusters/modalidade",
description:
"Contexto relacionado à performance esportiva."
}


];





export default function EntityGraph(){


return (


<section className="mt-16">


<h2 className="text-3xl font-bold">

Entidades relacionadas

</h2>



<p className="mt-4">

A Creatina Gummy está conectada a conceitos de suplementação,
performance e treinamento físico.

</p>





<div className="grid gap-6 mt-8">



{relations.map((item)=>(



<article

key={item.title}

className="border rounded-xl p-6"

>



<Link href={item.href}>


<h3 className="text-xl font-bold">

{item.title}

</h3>


<p className="mt-2">

{item.description}

</p>



</Link>



</article>



))}



</div>



</section>


);


}
