type RelatedContentProps = {

items:{
title:string;
description:string;
url:string;
}[];

};


export default function RelatedContent({

items

}:RelatedContentProps){



return (

<section className="mt-16">


<h2 className="text-3xl font-bold">

Conteúdos relacionados

</h2>



<div className="grid md:grid-cols-3 gap-6 mt-8">


{items.map((item)=>(


<a

href={item.url}

key={item.url}

className="border rounded-xl p-6 hover:shadow-lg transition"

>


<h3 className="font-bold text-xl">

{item.title}

</h3>


<p className="mt-3">

{item.description}

</p>


</a>


))}



</div>


</section>


);


}
