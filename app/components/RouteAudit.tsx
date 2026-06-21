const routes = [

"/",

"/creatina-gummy",

"/produto/creatina-gummy",

"/beneficios/creatina-gummy-beneficios",

"/clusters/modalidade",

"/clusters/objetivo",

"/clusters/publico",

"/institucional/sobre-creatina-gummy",

"/institucional/quem-somos",

"/institucional/metodologia",

"/institucional/revisao-cientifica"

];



export default function RouteAudit(){


return (

<section className="mt-12 p-8 border rounded-3xl">


<h2 className="text-3xl font-bold">

SEO Route Audit

</h2>



<ul className="mt-6 space-y-2">


{routes.map(route=>(


<li key={route}>

✅ {route}

</li>


))}


</ul>


</section>


);


}
