import authors from "@/data/authors.json";


export default function AuthorSchema({

page

}:{

page:any

}){


const author = authors[0];



const schema = {


"@context":"https://schema.org",


"@type":"Person",


"@id":"https://creatinagummy.com.br/#author",


"name":author.name,


"jobTitle":author.jobTitle,


"description":author.description,


"knowsAbout":author.knowsAbout,


"sameAs":author.sameAs,



"worksFor":{


"@type":"Organization",


"name":"Creatina Gummy",


"url":"https://creatinagummy.com.br"


}



};



return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>

);


}
