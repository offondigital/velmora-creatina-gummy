import Link from "next/link";


export const metadata = {


title:
"Creatina Gummy: creatina em goma para performance e praticidade",


description:
"Conheça a Creatina Gummy, uma forma prática de consumir creatina em goma com sabor, praticidade e informações sobre suplementação esportiva.",


alternates:{


canonical:
"https://creatinagummy.com.br/creatina-gummy"


}


};



export default function CreatinaGummyPage(){



return(


<main className="max-w-6xl mx-auto px-8 py-16">



<section>


<h1 className="text-6xl font-bold leading-tight">


Creatina Gummy: creatina em goma para performance e praticidade


</h1>



<p className="mt-8 text-xl text-gray-700">


A Creatina Gummy apresenta uma nova experiência de suplementação em goma,
unindo praticidade, sabor e uma forma simples de incluir creatina na rotina esportiva.


</p>


<Link


href="/produto/creatina-gummy"


className="inline-block mt-10 bg-purple-600 text-white px-10 py-5 rounded-xl font-bold"


>


Conhecer produto


</Link>


</section>





<section className="mt-20">


<h2 className="text-4xl font-bold">


O que é Creatina Gummy?


</h2>



<p className="mt-5 text-lg">


Creatina Gummy é um suplemento alimentar em formato de goma desenvolvido para
quem busca consumir creatina de uma maneira mais prática dentro da rotina.


</p>


</section>






<section className="mt-20 grid md:grid-cols-3 gap-8">


<div className="border rounded-2xl p-8">


<h3 className="text-2xl font-bold">

Praticidade

</h3>


<p className="mt-4">

Formato em goma fácil de incluir no dia a dia.

</p>


</div>



<div className="border rounded-2xl p-8">


<h3 className="text-2xl font-bold">

Performance

</h3>


<p className="mt-4">

Criada para acompanhar uma rotina esportiva consistente.

</p>


</div>



<div className="border rounded-2xl p-8">


<h3 className="text-2xl font-bold">

Experiência

</h3>


<p className="mt-4">

Uma alternativa diferente da suplementação tradicional.

</p>


</div>



</section>






<section className="mt-20">


<h2 className="text-4xl font-bold">


Benefícios da Creatina Gummy


</h2>



<ul className="mt-8 space-y-4 text-lg">


<li>
✓ Creatina em formato de goma
</li>


<li>
✓ Mais praticidade na rotina
</li>


<li>
✓ Fácil inclusão em hábitos esportivos
</li>


<li>
✓ Experiência diferenciada de consumo
</li>


</ul>


</section>






<section className="mt-20">


<h2 className="text-4xl font-bold">


Creatina Gummy para diferentes objetivos


</h2>



<div className="grid md:grid-cols-3 gap-6 mt-8">


<Link
href="/creatina-gummy-para-corrida"
className="border rounded-xl p-6"
>

Corrida

</Link>



<Link
href="/creatina-gummy-para-crossfit"
className="border rounded-xl p-6"
>

Crossfit

</Link>




<Link
href="/creatina-gummy-para-futebol"
className="border rounded-xl p-6"
>

Futebol

</Link>



</div>


</section>






<section className="mt-20">


<h2 className="text-4xl font-bold">


Informação científica sobre creatina


</h2>


<p className="mt-5 text-lg">


A creatina é um dos suplementos esportivos mais estudados mundialmente,
sendo relacionada ao contexto de energia muscular e desempenho físico.


</p>


</section>






<section className="mt-20">


<h2 className="text-4xl font-bold">


Perguntas frequentes


</h2>



<div className="mt-8 space-y-6">


<div>

<h3 className="font-bold text-xl">

Creatina Gummy é creatina?

</h3>

<p>

Sim. É uma forma de apresentação do suplemento em formato de goma.

</p>

</div>



<div>

<h3 className="font-bold text-xl">

Por que usar creatina em goma?

</h3>

<p>

O formato em goma busca oferecer praticidade dentro da rotina.

</p>

</div>



</div>


</section>







<section className="mt-20 bg-purple-100 rounded-3xl p-10">


<h2 className="text-4xl font-bold">


Conheça a Creatina Gummy


</h2>



<p className="mt-5 text-lg">


Uma nova forma de consumir creatina com praticidade, sabor e experiência.


</p>



<Link

href="/produto/creatina-gummy"

className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold"

>


Ver produto


</Link>


</section>






</main>


);


}
