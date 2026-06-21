import Link from "next/link";


const topics = [

{
title:"Creatina Gummy",
href:"/creatina-gummy",

entity:"Product",

description:
"Guia principal sobre creatina em goma, benefícios, uso e características da suplementação gummy."
},


{
title:"Benefícios da Creatina",

href:"/beneficios/creatina-gummy-beneficios",

entity:"Topic",

description:
"Conteúdo educativo sobre creatina, força, performance física e adaptação aos treinos."
},


{
title:"Creatina para Corrida",

href:"/creatina-gummy-para-corrida",

entity:"Sport Application",

description:
"Informações sobre creatina em goma aplicada à rotina de corredores e esportistas."
},


{
title:"Creatina para Crossfit",

href:"/creatina-gummy-para-crossfit",

entity:"Sport Application",

description:
"Conteúdos sobre creatina e treinos de alta intensidade."
},


{
title:"Creatina para Futebol",

href:"/creatina-gummy-para-futebol",

entity:"Sport Application",

description:
"Uso da creatina relacionado à performance, explosão e treinamento esportivo."
},


{
title:"Revisão Científica",

href:"/institucional/revisao-cientifica",

entity:"Research",

description:
"Referências e informações científicas relacionadas à creatina e suplementação."
}

];





export default function TopicAuthority(){


return (

<section className="mt-16">


<h2 className="text-3xl font-bold">

Autoridade em Creatina Gummy

</h2>



<p className="mt-4">

Explore conteúdos conectados por temas, entidades e aplicações
da creatina em goma.

</p>




<div className="grid md:grid-cols-2 gap-6 mt-8">



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
