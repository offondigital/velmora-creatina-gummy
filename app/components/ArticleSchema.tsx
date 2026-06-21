import SchemaValidator from "./SchemaValidator";



export default function ArticleSchema({

page

}:{

page:any;

}){



const schema = {



"@context":"https://schema.org",



"@type":"Article",




"@id":

`https://creatinagummy.com.br/${page.slug}#article`,





"headline":

page.title,





"description":

page.metaDescription,





"about":{


"@type":"Thing",


"name":

"Creatina Gummy"



},





"author":{


"@id":

"https://creatinagummy.com.br/#author"


},





"publisher":{


"@id":

"https://creatinagummy.com.br/#organization"


}





};





return (

<SchemaValidator schema={schema}/>

);



}
