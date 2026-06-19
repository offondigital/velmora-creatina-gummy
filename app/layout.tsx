import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";


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


default:"Creatina Gummy | Suplementação em goma",

template:"%s | Creatina Gummy"


},



description:


"Creatina Gummy: suplemento em goma desenvolvido para praticidade, performance e rotina de treinos.",




keywords:[


"creatina gummy",

"creatina em goma",

"suplemento de creatina",

"creatina para treino",

"creatina para corrida"


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


<Header />


{children}


<Footer />


</body>


</html>


);


}
