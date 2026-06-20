import Link from "next/link";


type InternalLinksProps = {


currentSlug?: string;


};



const links = [



{


href:"/creatina-gummy",


title:"Creatina Gummy",


description:

"Conheça a creatina em goma com praticidade para sua rotina de suplementação."

},





{


href:"/beneficios/creatina-gummy-beneficios",


title:"Benefícios da Creatina Gummy",


description:

"Veja como a creatina pode auxiliar desempenho, força e rotina esportiva."

},





{


href:"/produto/creatina-gummy",


title:"Produto Creatina Gummy",


description:

"Conheça detalhes do produto, composição e formato gummy."

},






{


href:"/clusters/modalidade",


title:"Creatina por modalidade esportiva",


description:

"Conteúdos para corrida, crossfit, futebol e diferentes objetivos."

},





{


href:"/institucional/revisao-cientifica",


title:"Revisão científica",


description:

"Veja a base científica relacionada à creatina e suplementação."

}



];






export default function InternalLinks({

currentSlug

}:InternalLinksProps){





return (



<section>



<h2>

Conteúdos relacionados

</h2>





<div>



{links

.filter((link)=>link.href !== `/${currentSlug}`)

.map((link)=>(




<article key={link.href}>


<Link href={link.href}>


<h3>

{link.title}

</h3>



<p>

{link.description}

</p>



</Link>



</article>



))}



</div>



</section>



);



}
