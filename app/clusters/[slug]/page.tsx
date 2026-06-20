import Link from "next/link";
import clusters from "@/data/clusters.json";


export function generateStaticParams(){

return Object.keys(clusters).map((slug)=>({

slug

}));

}



export async function generateMetadata({

params

}:{

params:Promise<{slug:string}>

}){


const {slug}=await params;

const cluster:any = clusters[slug as keyof typeof clusters];


if(!cluster){

return {};

}


return {

title:cluster.title,

description:cluster.description,

alternates:{

canonical:`https://creatinagummy.com.br/clusters/${slug}`

}

};

}





export default async function ClusterPage({

params

}:{

params:Promise<{slug:string}>

}){


const {slug}=await params;


const cluster:any = clusters[slug as keyof typeof clusters];


if(!cluster){

return null;

}



return (


<main className="max-w-5xl mx-auto px-8 py-16">


<h1 className="text-5xl font-bold">

{cluster.title}

</h1>



<p className="mt-8 text-xl text-gray-700">

{cluster.description}

</p>



<section className="mt-12">


<h2 className="text-3xl font-bold">

Conteúdos relacionados

</h2>



<div className="grid md:grid-cols-2 gap-6 mt-8">


{cluster.pages.map((page:string)=>(


<Link

key={page}

href={`/${page}`}

className="border rounded-xl p-6 hover:bg-gray-50"

>


Creatina Gummy para {page
.replace("creatina-gummy-para-","")
.replaceAll("-"," ")}


</Link>


))}



</div>


</section>


</main>


);

}
