import Link from "next/link";


export default function Footer(){


return (


<footer className="bg-black text-white mt-20">


<div className="max-w-6xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">



<div>


<h2 className="text-2xl font-bold">

Creatina Gummy

</h2>



<p className="mt-4 text-gray-300">

Suplementação em goma para quem busca praticidade,
performance e uma nova experiência.

</p>


</div>






<div>


<h3 className="font-bold text-lg">

Produtos

</h3>


<div className="mt-4 space-y-3">


<Link

href="/produto/creatina-gummy"

className="block text-gray-300"

>

Creatina Gummy

</Link>


<Link

href="/produto/creagym"

className="block text-gray-300"

>

CreaGym

</Link>


<Link

href="/produto/velmo-black"

className="block text-gray-300"

>

Velmo Black

</Link>



</div>


</div>







<div>


<h3 className="font-bold text-lg">

Conteúdos

</h3>


<div className="mt-4 space-y-3">


<Link

href="/creatina-gummy-para-corrida"

className="block text-gray-300"

>

Creatina para corrida

</Link>



<Link

href="/creatina-gummy-para-crossfit"

className="block text-gray-300"

>

Creatina para Crossfit

</Link>



<Link

href="/creatina-gummy-para-futebol"

className="block text-gray-300"

>

Creatina para futebol

</Link>



</div>


</div>



</div>





<div className="border-t border-gray-700 py-6 text-center text-gray-400">

© Creatina Gummy. Todos os direitos reservados.

</div>



</footer>


);


}
