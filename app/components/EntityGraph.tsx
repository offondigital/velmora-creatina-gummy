import Link from "next/link";

import entities from "@/data/entities.json";


const relations = [

{
title:"Creatina",
href:"/beneficios/creatina-gummy-beneficios",
description:
"Ingrediente principal relacionado à suplementação esportiva, força e performance física."
},


{
title:"Creatina em goma",
href:"/creatina-gummy",
description:
"Formato inovador de suplementação com creatina em pastilhas de goma."
},


{
title:"Performance física",
href:"/clusters/objetivo",
description:
"Conceito relacionado ao uso da creatina para suporte à rotina esportiva."
},


{
title:"Treinamento esportivo",
href:"/clusters/modalidade",
description:
"Contexto relacionado a exercícios, treinos e desempenho físico."
},


{
title:"Corrida",
href:"/creatina-gummy-para-corrida",
description:
"Aplicação da creatina em goma para praticantes de corrida."
},


{
title:"Crossfit",
href:"/creatina-gummy-para-crossfit",
description:
"Uso relacionado a treinos intensos e alta demanda física."
}


];





export default function EntityGraph(){


return (


<section className="mt-16">


<h2 className="text-3xl font-bold">

Grafo de entidades relacionadas

</h2>



<p className="mt-4">

A Creatina Gummy está conectada a entidades de creatina, suplementação esportiva, performance física e modalidades esportivas.

</p>





<div className="grid gap-6 mt-8 md:grid-cols-2">



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
