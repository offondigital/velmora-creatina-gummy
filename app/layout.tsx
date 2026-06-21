import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";


import Header from "./components/Header";
import Footer from "./components/Footer";


import OrganizationSchema from "./components/OrganizationSchema";
import GlobalEntityGraph from "./components/GlobalEntityGraph";
import TopicAuthoritySchema from "./components/TopicAuthoritySchema";
import KnowledgeGraphSchema from "./components/KnowledgeGraphSchema";
import SEOHealthCheck from "./components/SEOHealthCheck";
import SchemaValidator from "./components/SchemaValidator";





const geistSans = Geist({

variable:"--font-geist-sans",

subsets:["latin"],

});





const geistMono = Geist_Mono({

variable:"--font-geist-mono",

subsets:["latin"],

});








export const metadata: Metadata = {


metadataBase:

new URL(
"https://creatinagummy.com.br"
),




title:{


default:

"Creatina Gummy | Creatina em goma",


template:

"%s | Creatina Gummy"


},





description:


"Creatina Gummy: creatina em goma para praticidade, performance esportiva e suplementação.",






keywords:[


"creatina gummy",

"creatina em goma",

"creatina para treino",

"creatina para corrida",

"creatina para crossfit",

"suplemento de creatina"



],





robots:{


index:true,

follow:true


},





openGraph:{


type:"website",


url:"https://creatinagummy.com.br",


title:"Creatina Gummy | Creatina em goma",


description:

"Creatina em goma para performance esportiva e rotina de suplementação.",


siteName:

"Creatina Gummy"



},






twitter:{


card:"summary_large_image",


title:"Creatina Gummy | Creatina em goma",


description:

"Creatina gummy para praticidade e performance."

}




};









const globalSchema = {


"@context":

"https://schema.org",



"@graph":[




{


"@type":

"WebSite",



"@id":

"https://creatinagummy.com.br/#website",



"url":

"https://creatinagummy.com.br",



"name":

"Creatina Gummy",



"publisher":{


"@id":

"https://creatinagummy.com.br/#organization"

}



},





{


"@type":

"Organization",



"@id":

"https://creatinagummy.com.br/#organization",



"name":

"Creatina Gummy",



"url":

"https://creatinagummy.com.br",




"description":

"Marca especializada em creatina em goma e conteúdos educativos sobre suplementação esportiva."



}





]

};









export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode;

}>){



return (




<html lang="pt-BR">



<body



className={`${geistSans.variable} ${geistMono.variable}`}



>



<OrganizationSchema />



<GlobalEntityGraph />



<TopicAuthoritySchema />



<KnowledgeGraphSchema />





<script


type="application/ld+json"


dangerouslySetInnerHTML={{


__html:

JSON.stringify(globalSchema)


}}



/>





<SchemaValidator

schema={globalSchema}

/>





<Header />





{children}





<SEOHealthCheck />





<Footer />




</body>




</html>



);


}
