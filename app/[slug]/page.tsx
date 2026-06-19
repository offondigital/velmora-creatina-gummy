import Link from "next/link";
import products from "@/data/products.json";


export function generateStaticParams(){


return [

{
slug:"creatina-gummy-para-corrida"
},

{
slug:"creatina-gummy-para-crossfit"
},

{
slug:"creatina-gummy-para-futebol"
}

];


}





export default function IntentPage({

params

}:{

params:{slug:string}

}){



const content:any = {


"creatina-gummy-para-corrida":{

title:"Creatina Gummy para Corrida",

sport:"corrida"

},


"creatina-gummy-para-crossfit":{

title:"Creatina Gummy para Crossfit",

sport:"crossfit"

},


"creatina-gummy-para-futebol":{

title:"Creatina Gummy para Futebol",

sport:"futebol"

}


};




const page=content[params.slug];



if(!page){

return null;

}





const product=products.find(

item=>item.slug==="creatina-gummy"

);





return (


<main className="max-w-5xl mx-auto px-8 py-16">



<h1 className="text-5xl font-bold">

{page.title}: performance e praticidade


</h1>





<p className="mt-8 text-xl text-gray-600">


A Creatina Gummy é uma forma prática de incluir creatina na rotina de quem pratica {page.sport} e busca evolução nos treinos e desempenho esportivo.


</p>






<h2 className="text-3xl font-bold mt-14">


Por que usar creatina para {page.sport}?


</h2>



<p className="mt-5">


Atletas e praticantes de atividades físicas utilizam creatina como parte da estratégia de suplementação para apoiar uma rotina de treinos consistente.


</p>







<h2 className="text-3xl font-bold mt-14">


Benefícios da Creatina Gummy


</h2>



<ul className="mt-5 space-y-3">


<li>✓ Praticidade no consumo</li>

<li>✓ Formato em goma fácil de incluir na rotina</li>

<li>✓ Ideal para diferentes modalidades esportivas</li>

<li>✓ Experiência de consumo agradável</li>


</ul>







<section className="mt-16 bg-purple-100 rounded-3xl p-10">



<h2 className="text-3xl font-bold">


Conheça a Creatina Gummy


</h2>



<Link


href={`/produto/${product?.slug}`}


className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold"


>


Ver Creatina Gummy


</Link>




</section>





</main>


);


}
