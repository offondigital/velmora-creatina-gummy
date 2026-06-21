interface AnswerBoxProps {

title:string;

answer:string;

entity?:string;

}


export default function AnswerBox({

title,

answer,

entity="Creatina Gummy"

}:AnswerBoxProps){



return (


<section

className="mt-8 bg-purple-50 rounded-3xl p-8"

>


<h2 className="text-2xl font-bold">

{title}

</h2>



<p className="mt-4 text-lg">

{answer}

</p>




<meta

itemScope

itemType="https://schema.org/Thing"

itemProp="about"

/>



<span className="hidden">

{entity}

</span>



</section>


);


}
