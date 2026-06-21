import Link from "next/link";


const topics = [

{
title:"Creatina Gummy",
href:"/creatina-gummy",
entity:"Produto principal",
description:
"Página central sobre creatina em goma, formato gummy, praticidade e suplementação esportiva."
},


{
title:"Creatina",
href:"/beneficios/creatina-gummy-beneficios",
entity:"Ingrediente principal",
description:
"Conteúdo educativo sobre creatina, seus benefícios e relação com performance física."
},


{
title:"Creatina em goma",
href:"/produto/creatina-gummy",
entity:"Formato do produto",
description:
"Informações sobre creatina gummy como alternativa prática de consumo."
},


{
title:"Suplementação esportiva",
href:"/clusters/objetivo",
entity:"Categoria temática",
description:
"Conteúdos relacionados a suplementos, objetivos esportivos e rotina de treino."
},


{
title:"Treinamento esportivo",
href:"/clusters/modalidade",
entity:"Contexto esportivo",
description:
"Relação entre creatina, modalidades esportivas e desempenho físico."
},


{
title:"Performance física",
href:"/clusters/publico",
entity:"Objetivo",
description:
"Conteúdos sobre força, resistência e evolução nos treinos."
},


{
title:"Revisão científica",
href:"/institucional/revisao-cientifica",
entity:"Autoridade",
description:
"Base científica utilizada para conteúdos sobre creatina e suplementação."
}


];





export default function TopicAuthority(){


return (

<section className="mt-16">


<h2 className="text-3xl font-bold">

Autoridade temática: Creatina Gummy

</h2>



<p className="mt-4">

Explore conteúdos conectados por entidades, conceitos e temas relacionados
à creatina em goma, suplementação esportiva e performance.

</p>





<div className="grid gap-6 mt-8 md:grid-cols-2">



{topics.map((topic)=>(


<article

key={topic.href}

className="border rounded-xl p-6"


>


<Link href={topic.href}>


<span className="text-sm">

{topic.entity}

</span>



<h3 className="text-xl font-bold mt-2">

{topic.title}

</h3>



<p className="mt-3">

{topic.description}

</p>


</Link>


</article>



))}



</div>



</section>


);


}
