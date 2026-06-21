import organization from "@/data/organization.json";


export default function OrganizationSchema(){


const schema = {


"@context":"https://schema.org",

"@type":organization.type,

"@id":"https://creatinagummy.com.br/#organization",

"name":organization.name,

"url":organization.url,

"logo":organization.logo,

"description":organization.description,


"sameAs":organization.sameAs,


"knowsAbout":organization.knowsAbout,


"foundingDate":"2026",


"areaServed":{

"@type":"Country",

"name":"Brasil"

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
