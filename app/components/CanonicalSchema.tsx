export default function CanonicalSchema({

path,

title,

description

}:{

path:string;

title:string;

description:string;

}){



const url =

`https://creatinagummy.com.br${path}`;






const schema = {



"@context":

"https://schema.org",




"@graph":[





{


"@type":

"WebPage",



"@id":

`${url}#webpage`,




"url":

url,




"name":

title,




"description":

description,





"isPartOf":{


"@id":

"https://creatinagummy.com.br/#website"


},





"about":{


"@id":

"https://creatinagummy.com.br/#creatina-gummy-entity"


},





"publisher":{


"@id":

"https://creatinagummy.com.br/#organization"


}





},






{


"@type":

"Thing",




"@id":

"https://creatinagummy.com.br/#creatina-gummy-entity",




"name":

"Creatina Gummy",




"description":

"Creatina em goma voltada para praticidade, suplementação esportiva e performance física."



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

