export default function AeoSchema({

page

}:{

page:any;

}){



const schema = {



"@context":"https://schema.org",



"@graph":[





{


"@type":"WebPage",



"@id":

`https://creatinagummy.com.br/${page.slug}#webpage`,




"url":

`https://creatinagummy.com.br/${page.slug}`,



"name":

page.title,



"description":

page.metaDescription,





"about":{


"@type":"Product",


"@id":

"https://creatinagummy.com.br/produto/creatina-gummy#product",


"name":

"Creatina Gummy"


},





"mentions":[



{


"@type":"Thing",

"name":"Creatina em goma"


},


{


"@type":"Thing",

"name":"Suplementação esportiva"


}



],





"isPartOf":{


"@type":"WebSite",


"@id":

"https://creatinagummy.com.br/#website"


}




},








{


"@type":"FAQPage",


"@id":

`https://creatinagummy.com.br/${page.slug}#faq`,



"mainEntity":


(page.faq || []).map((item:any)=>(



{


"@type":"Question",


"name":item.question,



"acceptedAnswer":{


"@type":"Answer",


"text":item.answer


}


}



))



},








{


"@type":"Product",


"@id":

"https://creatinagummy.com.br/produto/creatina-gummy#product",




"name":"Creatina Gummy",




"description":

"Creatina em goma desenvolvida para praticidade, performance esportiva e rotina de suplementação.",




"brand":{


"@type":"Brand",


"name":"Creatina Gummy"


}




}







]




};






return (


<script

type="application/ld+json"


dangerouslySetInnerHTML={{


__html:

JSON.stringify(schema)


}}


/>


);


}
