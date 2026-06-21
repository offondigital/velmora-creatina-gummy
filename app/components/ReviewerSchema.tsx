import reviewers from "@/data/reviewers.json";


export default function ReviewerSchema({

page

}:{

page:any

}){


const reviewer = reviewers[0];



const schema = {


"@context":"https://schema.org",


"@type":"Person",


"@id":"https://creatinagummy.com.br/#reviewer",


"name":reviewer.name,


"jobTitle":reviewer.jobTitle,


"description":reviewer.description,


"knowsAbout":reviewer.knowsAbout,


"sameAs":reviewer.sameAs



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
