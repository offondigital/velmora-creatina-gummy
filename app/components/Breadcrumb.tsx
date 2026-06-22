export default function Breadcrumb({

items

}:{

items:{
name:string;
url:string;
}[]

}){


return (

<nav className="text-sm mb-8">


{items.map((item,index)=>(


<span key={item.url}>


<a href={item.url}

className="underline"


>

{item.name}

</a>


{index < items.length-1 && " / "}


</span>


))}


</nav>


);


}
