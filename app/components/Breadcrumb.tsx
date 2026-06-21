"use client";

import Link from "next/link";


export default function Breadcrumb({
items
}:{
items:{
label:string;
href:string;
}[]
}){


return (

<nav
aria-label="breadcrumb"
className="text-sm text-gray-500 mb-8"
>


<ol className="flex gap-2 flex-wrap">


{items.map((item,index)=>(


<li key={item.href} className="flex gap-2">


<Link
href={item.href}
className="hover:underline"
>

{item.label}

</Link>


{index < items.length -1 && (

<span>
/
</span>

)}


</li>


))}


</ol>


</nav>


);


}
