type InternalLinksProps = {
  links: {
    title:string;
    url:string;
  }[];
};


export default function InternalLinks({
  links
}:InternalLinksProps){


return (

<section className="mt-14">


<h2 className="text-3xl font-bold">
Conteúdos relacionados
</h2>



<ul className="mt-6 space-y-3">


{links.map((link)=>(


<li key={link.url}>


<a

href={link.url}

className="text-blue-600 underline"

>

{link.title}

</a>


</li>


))}


</ul>


</section>

);


}
