export function productSchema(product:any){

  return {

    "@context":"https://schema.org",

    "@type":"Product",

    "name": product.name,

    "description": product.description,


    "brand":{

      "@type":"Brand",

      "name":"Crea Gummy"

    },


    "category": product.category,


    "offers":{

      "@type":"Offer",

      "priceCurrency":"BRL",

      "availability":
      "https://schema.org/InStock"

    }

  }

}



export function organizationSchema(){

  return {

    "@context":"https://schema.org",

    "@type":"Organization",

    "name":"Crea Gummy",

    "url":"https://seudominio.com"

  }

}
