export default function WebSiteSchema(){


const schema={


"@context":

"https://schema.org",


"@type":

"WebSite",


"name":

"Creatina Gummy",


"url":

"https://velmora-creatina-gummy.vercel.app",



"potentialAction":{


"@type":

"SearchAction",


"target":{


"@type":

"EntryPoint",


"urlTemplate":

"https://velmora-creatina-gummy.vercel.app/busca?q={search_term_string}"


},


"query-input":

"required name=search_term_string"



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
