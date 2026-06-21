type BreadcrumbProps = {

items:{
name:string;
url:string;
}[];

};


export default function Breadcrumb({
items
}:BreadcrumbProps){


return (

<nav aria-label="breadcrumb">


<ol className="flex gap-2 text-sm">


{items.map((item,index)=>(


<li key={item.url}>


<a href={item.url}>

{item.name}

</a>


{index < items.length-1 && (
<span> / </span>
)}


</li>


))}


</ol>


</nav>

);


}
