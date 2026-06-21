import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import OrganizationSchema from "./components/OrganizationSchema";

import KnowledgeGraphSchema from "./components/KnowledgeGraphSchema";

import TopicAuthoritySchema from "./components/TopicAuthoritySchema";

import GlobalEntityGraph from "./components/GlobalEntityGraph";



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


default:

"Creatina Gummy | Creatina em goma",


template:

"%s | Creatina Gummy"


},




description:


"Creatina Gummy: creatina em goma para praticidade, performance esportiva e uma nova experiência de suplementação.",





keywords:[


"creatina gummy",

"creatina em goma",

"creatina gummy essential",

"suplemento de creatina",

"creatina para treino",

"creatina para corrida",

"creatina para crossfit"


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



<KnowledgeGraphSchema />



<GlobalEntityGraph />



<TopicAuthoritySchema />





<Header />



{children}



<Footer />





</body>



</html>





);



}
