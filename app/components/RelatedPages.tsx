export default function RelatedPages({

currentSlug

}:{

currentSlug:string;

}){


const pages=[


{

title:"Melhor Creatina Gummy",

url:"/melhor-creatina-gummy"

},


{

title:"Creatina Gummy feminina",

url:"/creatina-gummy-feminina"

},


{

title:"Creatina Gummy musculação",

url:"/creatina-gummy-musculacao"

}


];



return (

<section className="mt-12">


<h2 className="text-3xl font-bold">

Continue lendo

</h2>


<div className="grid md:grid-cols-3 gap-5 mt-6">


{pages

.filter(p=>p.url !== `/${currentSlug}`)

.map(page=>(


<a

key={page.url}

href={page.url}

className="border rounded-xl p-5"


>


{page.title}


</a>


))}


</div>


</section>


);


}
