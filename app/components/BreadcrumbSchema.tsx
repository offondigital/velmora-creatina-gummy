interface BreadcrumbSchemaProps {

items:any[];

}



export default function BreadcrumbSchema({

items

}:BreadcrumbSchemaProps){



if(!items || items.length===0){

return null;

}




const schema = {


"@context":

"https://schema.org",



"@type":

"BreadcrumbList",



"@id":

"https://creatinagummy.com.br/#breadcrumb",




"itemListElement":



items.map((item:any,index:number)=>(



{


"@type":"ListItem",



"position":

index+1,



"name":

item.name,



"item":{


"@id":

item.url


}



}



))




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
