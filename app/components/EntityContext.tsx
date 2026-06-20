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


<section className="mt-14 border rounded-3xl p-8">


<h2 className="text-3xl font-bold">

Sobre este conteúdo

</h2>



<p className="mt-4">

Este conteúdo aborda a entidade:

<strong> {entity}</strong>

</p>



<p className="mt-3">

Categoria:

<strong> {category}</strong>

</p>



<div className="mt-5">


<p className="font-bold">

Relacionado a:

</p>


<ul className="mt-3 space-y-2">


{related.map((item)=>(


<li key={item}>

✓ {item}

</li>


))}


</ul>


</div>


</section>


);


}
