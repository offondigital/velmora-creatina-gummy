import Link from "next/link";


const topics = [
  {
    title: "Creatina Gummy",
    href: "/creatina-gummy",
    description: `Guia completo sobre creatina em goma.`
  },

  {
    title: "Benefícios da Creatina",
    href: "/beneficios/creatina-gummy-beneficios",
    description: `Conteúdos educativos sobre creatina e 
performance.`
  },

  {
    title: "Creatina para corrida",
    href: "/creatina-gummy-para-corrida",
    description: `Informações sobre creatina em goma para 
corredores.`
  },

  {
    title: "Creatina para crossfit",
    href: "/creatina-gummy-para-crossfit",
    description: `Conteúdo para praticantes de treinos intensos.`
  },

  {
    title: "Revisão científica",
    href: "/institucional/revisao-cientifica",
    description: `Base científica sobre creatina e suplementação.`
  }
];


export default function TopicAuthority(){


return (

<section>


<h2>
Explore o universo da Creatina Gummy
</h2>


<p>
Conteúdos organizados sobre creatina em goma e suplementação 
esportiva.
</p>


<div>


{topics.map((topic)=>(


<article key={topic.href}>


<Link href={topic.href}>


<h3>
{topic.title}
</h3>


<p>
{topic.description}
</p>


</Link>


</article>


))}


</div>


</section>

);


}
