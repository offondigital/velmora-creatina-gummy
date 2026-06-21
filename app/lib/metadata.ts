import type { Metadata } from "next";



const SITE_URL =

"https://creatinagummy.com.br";



const SITE_NAME =

"Creatina Gummy";





interface MetadataInput {


title:string;


description:string;


slug:string;


image?:string;


type?:

"website" | "article" | "product";


}



export function createMetadata({

title,

description,

slug,

image,

type="website"

}:MetadataInput):Metadata{





const url =

`${SITE_URL}/${slug}`;





const imageUrl =

image ||

`${SITE_URL}/images/creatina-gummy.webp`;








return {



metadataBase:

new URL(SITE_URL),





title:{


absolute:

`${title} | ${SITE_NAME}`


},






description,






alternates:{


canonical:url


},






robots:{



index:true,


follow:true,



googleBot:{


index:true,


follow:true,


"max-image-preview":

"large",


"max-snippet":

-1,


"max-video-preview":

-1


}



},







openGraph:{



type:

type==="article"

?

"article"

:

"website",



url,



title,



description,



siteName:

SITE_NAME,



locale:

"pt_BR",




images:[

{

url:imageUrl,

width:1200,

height:630,

alt:title

}

]



},







twitter:{



card:

"summary_large_image",



title,



description,



images:[imageUrl]



},







authors:[



{

name:

"Creatina Gummy"

}

],





publisher:

SITE_NAME



};



}
