export default function EntityContext({

entity,

category,

related

}:{

entity:string;

category:string;

related:string[];

}){



return (


<section

className="mt-14 border rounded-3xl p-8"

itemScope

itemType="https://schema.org/Thing"

>


<h2 className="text-3xl font-bold">

Contexto da entidade

</h2>




<p className="mt-4">

Este conteúdo está relacionado à entidade:

<strong itemProp="name">

{" "}{entity}

</strong>


</p>




<p className="mt-3">

Categoria:

<strong>

{" "}{category}

</strong>


</p>





<div className="mt-6">


<h3 className="font-bold">

Entidades relacionadas

</h3>



<ul className="mt-3 space-y-2">



{related.map((item)=>(


<li

key={item}

itemProp="relatedLink"

>

✓ {item}

</li>



))}




</ul>



</div>




</section>


);



}
