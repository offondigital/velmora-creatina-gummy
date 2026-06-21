export default function SEOHealthCheck(){

const checks = [

{
name:"Schema.org",
status:true
},

{
name:"Canonical",
status:true
},

{
name:"Sitemap",
status:true
},

{
name:"Robots",
status:true
},

{
name:"Entity Graph",
status:true
}

];



return (

<section className="mt-12 p-8 rounded-3xl border">


<h2 className="text-3xl font-bold">

SEO Technical Health

</h2>


<ul className="mt-6 space-y-3">


{checks.map((check)=>(


<li key={check.name}>


{check.status ? "✅" : "❌"}

{" "}

{check.name}


</li>


))}



</ul>


</section>


);


}
