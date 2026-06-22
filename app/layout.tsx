import type { Metadata } from "next";


import { Geist, Geist_Mono } from "next/font/google";


import "./globals.css";



import Header from "./components/Header";

import Footer from "./components/Footer";



import OrganizationSchema from "./components/OrganizationSchema";

import TopicAuthoritySchema from "./components/TopicAuthoritySchema";

import GlobalEntityGraph from "./components/GlobalEntityGraph";

import SchemaValidator from "./components/SchemaValidator";

import SEOHealthCheck from "./components/SEOHealthCheck";

import RouteAudit from "./components/RouteAudit";

import EntityContextSchema from "./components/EntityContextSchema";




const geistSans = Geist({

variable:"--font-geist-sans",

subsets:["latin"],

});




const geistMono = Geist_Mono({

variable:"--font-geist-mono",

subsets:["latin"],

});






export const metadata:Metadata = {


metadataBase:new URL(

"https://velmora-creatina-gummy.vercel.app"

),



title:{


default:

"Creatina Gummy | Creatina em goma",


template:

"%s | Creatina Gummy"


},



description:


"Creatina Gummy: creatina em goma para praticidade, performance esportiva e suplementação moderna.",




keywords:[


"creatina gummy",

"creatina em goma",

"melhor creatina gummy",

"creatina gummy feminina",

"creatina gummy musculação",

"creatina para treino",

"suplemento de creatina"


],



robots:{


index:true,

follow:true


}



};







const schema = {


"@context":"https://schema.org",


"@type":"Organization",


"name":"Creatina Gummy",


"url":

"https://velmora-creatina-gummy.vercel.app",



"description":

"Marca especializada em creatina em goma e suplementação esportiva.",



"sameAs":[]



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


<EntityContextSchema />



<SchemaValidator schema={schema}/>



<SEOHealthCheck />


<RouteAudit />





<Header />



{children}



<Footer />





</body>


</html>


);


}
