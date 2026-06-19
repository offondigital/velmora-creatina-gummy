import Link from "next/link";


export default function Home(){


return (


<main className="max-w-6xl mx-auto px-8 py-16">



<section>


<h1 className="text-6xl font-bold leading-tight">


Creatina Gummy: creatina em goma para performance e praticidade


</h1>




<p className="mt-8 text-xl text-gray-600">


Uma nova forma de consumir creatina com sabor, praticidade e uma rotina de suplementação mais simples para quem busca evolução nos treinos.


</p>




<Link


href="/produto/creatina-gummy"


className="inline-block mt-10 bg-purple-600 text-white px-10 py-5 rounded-xl font-bold"


>


Conhecer Creatina Gummy


</Link>


</section>







<section className="mt-24">


<h2 className="text-4xl font-bold">


Por que escolher Creatina Gummy?


</h2>



<div className="grid md:grid-cols-3 gap-8 mt-10">


<div className="p-8 rounded-2xl border">


<h3 className="text-2xl font-bold">


Praticidade


</h3>


<p className="mt-4">


Formato em goma fácil de consumir no dia a dia.


</p>


</div>





<div className="p-8 rounded-2xl border">


<h3 className="text-2xl font-bold">


Performance


</h3>


<p className="mt-4">


Ideal para acompanhar uma rotina esportiva consistente.


</p>


</div>





<div className="p-8 rounded-2xl border">


<h3 className="text-2xl font-bold">


Sabor


</h3>


<p className="mt-4">


Uma experiência diferente da creatina tradicional.


</p>


</div>



</div>



</section>







<section className="mt-24">


<h2 className="text-4xl font-bold">


Creatina Gummy para diferentes esportes


</h2>




<div className="grid md:grid-cols-3 gap-6 mt-10">



<Link className="p-8 border rounded-xl" href="/creatina-gummy-para-corrida">


Creatina Gummy para Corrida


</Link>



<Link className="p-8 border rounded-xl" href="/creatina-gummy-para-crossfit">


Creatina Gummy para Crossfit


</Link>



<Link className="p-8 border rounded-xl" href="/creatina-gummy-para-futebol">


Creatina Gummy para Futebol


</Link>



</div>


</section>







<section className="mt-24 bg-purple-100 p-12 rounded-3xl">


<h2 className="text-4xl font-bold">


Conheça a Creatina Gummy


</h2>


<p className="mt-5 text-lg">


Descubra uma forma prática de incluir creatina na sua rotina.


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
