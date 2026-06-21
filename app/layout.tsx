import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import OrganizationSchema from "./components/OrganizationSchema";

const geistSans = Geist({

variable:"--font-geist-sans",

subsets:["latin"],

});


const geistMono = Geist_Mono({

variable:"--font-geist-mono",

subsets:["latin"],

});



export const metadata: Metadata = {


metadataBase:new URL(

"https://creatinagummy.com.br"

),



title:{


default:"Creatina Gummy | Creatina em goma",

template:"%s | Creatina Gummy"


},



description:


"Creatina Gummy: creatina em goma para quem busca praticidade, performance e uma nova experiência de suplementação.",




keywords:[


"creatina gummy",

"creatina em goma",

"creatina gummy essential",

"suplemento de creatina",

"creatina para treino",

"creatina para corrida"


]



};




const entitySchema = {


"@context":"https://schema.org",


"@graph":[


{


"@type":"Organization",


"@id":"https://creatinagummy.com.br/#organization",


"name":"Creatina Gummy",


"url":"https://creatinagummy.com.br",


"description":

"Marca de suplementação esportiva especializada em creatina em formato gummy.",



"brand":{


"@id":"https://creatinagummy.com.br/#brand"


}



},




{


"@type":"Brand",


"@id":"https://creatinagummy.com.br/#brand",


"name":"Creatina Gummy",


"url":"https://creatinagummy.com.br"


},




{


"@type":"WebSite",


"@id":"https://creatinagummy.com.br/#website",


"url":"https://creatinagummy.com.br",


"name":"Creatina Gummy",


"publisher":{


"@id":"https://creatinagummy.com.br/#organization"


},


"potentialAction":{


"@type":"SearchAction",


"target":{


"@type":"EntryPoint",


"urlTemplate":

"https://creatinagummy.com.br/?s={search_term_string}"


},


"query-input":

"required name=search_term_string"


}



}



]


};




export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode;

}>) {



return (


<html lang="pt-BR">


<body

className={`${geistSans.variable} ${geistMono.variable}`}

>

<OrganizationSchema />

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(entitySchema)

}}

/>



<Header />


{children}


<Footer />


</body>


</html>


);


}
