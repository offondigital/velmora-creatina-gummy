import Link from "next/link";


export default function Header(){


return (


<header className="border-b bg-white">


<div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">


<Link

href="/"

className="text-2xl font-bold"

>

Creatina Gummy

</Link>




<nav className="hidden md:flex gap-8 text-sm font-medium">


<Link href="/produto/creatina-gummy">

Produto

</Link>



<Link href="/creatina-gummy-para-corrida">

Benefícios

</Link>



<Link href="/creatina-gummy-para-crossfit">

Performance

</Link>



</nav>





<Link

href="/produto/creatina-gummy"

className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold"

>

Comprar

</Link>



</div>


</header>


);


}
