import CanonicalSchema from "../components/CanonicalSchema";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import FaqSchema from "../components/FaqSchema";
import AeoSchema from "../components/AeoSchema";
import SchemaValidator from "../components/SchemaValidator";

import AnswerBox from "../components/AnswerBox";
import EntityContext from "../components/EntityContext";

import pages from "../../data/seoPages.json";


export async function generateStaticParams(){

return pages.map((page:any)=>({

slug:page.slug

}));

}



export default async function Page({

params,

}:{

params:{
slug:string
}

}){



const {slug}=await params;



const page:any = pages.find(

(item:any)=>item.slug===slug

);



if(!page){

return null;

}





const breadcrumb = [


{

name:"Home",

url:"https://velmora-creatina-gummy.vercel.app"

},


{

name:page.title,

url:

`https://velmora-creatina-gummy.vercel.app/${page.slug}`

}


];







const schema = {


"@context":"https://schema.org",


"@type":"WebPage",


"name":page.title,


"description":page.metaDescription,


"url":

`https://velmora-creatina-gummy.vercel.app/${page.slug}`



};








return (

<>


<CanonicalSchema

path={page.slug}

title={page.title}

description={page.metaDescription}

/>





<BreadcrumbSchema

items={breadcrumb}

/>





<FaqSchema

faq={page.faq}

/>





<AeoSchema

page={page}

/>





<SchemaValidator

schema={schema}

/>









<main className="max-w-5xl mx-auto px-6 py-12">





<h1 className="text-5xl font-bold">


{page.title}


</h1>







<p className="mt-6 text-xl">


{page.metaDescription}


</p>









<AnswerBox


title="Resposta rápida"


answer={

page.answer ||

"Creatina Gummy é uma forma prática de consumir creatina em goma, unindo suplementação e facilidade na rotina."

}


/>









<EntityContext


entity="Creatina Gummy"


category="Suplementação esportiva"


related={[

"Creatina em goma",

"Performance física",

"Força muscular",

"Treino esportivo"

]}


/>









<section className="mt-14">





<h2 className="text-3xl font-bold">


Perguntas frequentes


</h2>








<div className="mt-6 space-y-6">





{

page.faq?.map((item:any)=>(



<div

key={item.question}

>


<h3 className="font-bold text-xl">


{item.question}


</h3>





<p className="mt-2">


{item.answer}


</p>





</div>



))

}






</div>






</section>








</main>





</>


);


}
