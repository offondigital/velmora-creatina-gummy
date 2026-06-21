interface SchemaValidatorProps {

  schema?: any;

}



export default function SchemaValidator({

  schema

}: SchemaValidatorProps) {



  const defaultSchema = {


    "@context":

    "https://schema.org",



    "@type":

    "WebSite",



    "name":

    "Creatina Gummy",



    "url":

    "https://creatinagummy.com.br"



  };





  const finalSchema = schema || defaultSchema;





  return (


    <script


      type="application/ld+json"


      dangerouslySetInnerHTML={{


        __html:

        JSON.stringify(finalSchema)



      }}


    />


  );


}
