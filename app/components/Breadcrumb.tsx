import Link from "next/link";


interface BreadcrumbProps {

items:{
name:string;
url:string;
}[];

}



export default function Breadcrumb({

items

}:BreadcrumbProps){



return (

<nav

aria-label="breadcrumb"

className="text-sm text-gray-600 mb-8"

>


<ol className="flex gap-2 flex-wrap">


<li>

<Link href="/">

Home

</Link>

</li>



{items.map((item,index)=>(


<li

key={item.url}

className="flex gap-2"

>


<span>

&gt;

</span>



{index === items.length - 1 ? (


<span className="font-semibold">

{item.name}

</span>


):(


<Link href={item.url}>

{item.name}

</Link>


)}



</li>


))}



</ol>


</nav>


);


}
