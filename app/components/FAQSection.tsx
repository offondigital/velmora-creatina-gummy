export default function FAQSection({

faq

}:{

faq:{
question:string;
answer:string;
}[]

}){


return (

<section className="mt-16">


<h2 className="text-3xl font-bold mb-8">

Perguntas frequentes sobre Creatina Gummy

</h2>



<div className="space-y-6">


{faq.map((item)=>(


<article

key={item.question}

className="border rounded-xl p-6"

>


<h3 className="text-xl font-semibold">

{item.question}

</h3>



<p className="mt-3">

{item.answer}

</p>


</article>


))}


</div>


</section>


);


}
