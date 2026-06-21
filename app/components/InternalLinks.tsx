import Link from "next/link";


type InternalLinksProps = {

currentSlug?:string;

entity?:string;

};



const links = [


{


href:"/creatina-gummy",


title:"Creatina Gummy",


entity:"Produto principal",


description:
"Creatina em goma desenvolvida para praticidade, performance e rotina de suplementação."

},



{


href:"/produto/creatina-gummy",


title:"Produto Creatina Gummy",


entity:"Produto",


description:
"Conheça composição, características e informações do suplemento em formato gummy."

},




{


href:"/beneficios/creatina-gummy-beneficios",


title:"Benefícios da Creatina",


entity:"Benefício esportivo",


description:
"Conteúdo educativo sobre creatina, força, desempenho e rotina de treino."

},





{


href:"/clusters/modalidade",


title:"Creatina por modalidade esportiva",


entity:"Modalidade esportiva",


description:
"Conteúdos relacionados a corrida, crossfit, futebol e performance."

},





{


href:"/clusters/objetivo",


title:"Objetivos com creatina",


entity:"Intenção de busca",


description:
"Guias sobre força, resistência, recuperação e performance física."

},





{


href:"/institucional/revisao-cientifica",


title:"Revisão científica da creatina",


entity:"E-E-A-T",


description:
"Base científica e referências sobre suplementação esportiva."

}



];






export default function InternalLinks({

currentSlug,

entity="Creatina Gummy"

}:InternalLinksProps){





return (



<section className="mt-16">


<h2 className="text-3xl font-bold">

Conteúdos relacionados a {entity}

</h2>




<p className="mt-4">

Explore conteúdos conectados semanticamente dentro do universo da Creatina Gummy.

</p>





<div className="grid gap-6 mt-8">



{links

.filter(

(link)=>link.href !== `/${currentSlug}`

)

.map((link)=>(



<article

key={link.href}

className="border rounded-2xl p-6"

>



<Link href={link.href}>


<h3 className="text-xl font-bold">

{link.title}

</h3>



<p className="mt-2">

{link.description}

</p>



<span className="text-sm">

Entidade: {link.entity}

</span>



</Link>



</article>



))}



</div>




</section>



);



}
