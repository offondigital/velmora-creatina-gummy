import Link from "next/link";


const pages = {


"sobre-creatina-gummy":{


title:"Sobre a Creatina Gummy",

description:
"A Creatina Gummy apresenta uma nova forma de consumir creatina com praticidade, informação e foco em suplementação esportiva.",


content:[
"A Creatina Gummy nasceu com a proposta de tornar o consumo de creatina mais simples e agradável dentro de uma rotina esportiva.",

"A marca busca unir praticidade, informação e uma experiência diferente para pessoas que desejam incluir creatina no dia a dia.",

"O desenvolvimento do conteúdo segue uma abordagem baseada em educação sobre suplementação, hábitos esportivos e informações científicas."
]

},



"quem-somos":{


title:"Quem somos",

description:
"Conheça a equipe por trás da Creatina Gummy e nossa visão sobre suplementação esportiva.",


content:[

"A Creatina Gummy é uma marca focada em apresentar informações claras sobre creatina, suplementação e rotina esportiva.",

"Nosso objetivo é ajudar consumidores a entender melhor o contexto da suplementação antes de escolher produtos.",

"Acreditamos que informação de qualidade faz parte de uma experiência de compra mais consciente."

]

},



"metodologia":{


title:"Metodologia de conteúdo",

description:
"Entenda como os conteúdos da Creatina Gummy são estruturados com foco em experiência, informação e confiança.",


content:[

"Os conteúdos são desenvolvidos considerando intenção de busca, contexto esportivo e informações relacionadas à creatina.",

"A estrutura combina experiência prática, referências científicas e linguagem acessível para diferentes públicos.",

"O objetivo é entregar conteúdos úteis para quem pesquisa sobre creatina em goma, suplementação e performance."

]

},



"revisao-cientifica":{


title:"Revisão científica sobre creatina",

description:
"Informações sobre creatina, estudos científicos e contexto de suplementação esportiva.",


content:[

"A creatina é um dos suplementos esportivos mais estudados dentro da área de nutrição esportiva.",

"Pesquisas avaliam sua relação com desempenho físico, disponibilidade energética muscular e treinamento.",

"A Creatina Gummy utiliza esse conhecimento como base para produzir conteúdos educativos sobre suplementação."

]

}



};



export function generateStaticParams(){


return Object.keys(pages).map((slug)=>({

slug

}));

}



export async function generateMetadata({

params

}:{

params:Promise<{slug:string}>

}){


const {slug}=await params;


const page:any = pages[slug as keyof typeof pages];


return{


title:page.title,


description:page.description,


alternates:{


canonical:
`https://creatinagummy.com.br/institucional/${slug}`


}


};


}




export default async function InstitutionalPage({

params

}:{

params:Promise<{slug:string}>

}){


const {slug}=await params;


const page:any =
pages[slug as keyof typeof pages];



return(


<main className="max-w-5xl mx-auto px-8 py-16">



<h1 className="text-5xl font-bold">

{page.title}

</h1>



<section className="mt-10 space-y-6 text-lg text-gray-700">


{page.content.map((text:string)=>(


<p key={text}>

{text}

</p>


))}


</section>





<section className="mt-16 bg-purple-100 rounded-3xl p-10">


<h2 className="text-3xl font-bold">

Conheça a Creatina Gummy

</h2>


<p className="mt-4">

Suplementação em goma para quem busca praticidade, sabor e uma nova experiência.

</p>



<Link


href="/produto/creatina-gummy"


className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold"


>


Ver Creatina Gummy


</Link>


</section>



</main>


);


}
