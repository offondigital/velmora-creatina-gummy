interface SchemaValidatorProps {

schema:any;

}



export default function SchemaValidator({

schema

}:SchemaValidatorProps){



if(!schema){

return null;

}





const cleanSchema = JSON.parse(

JSON.stringify(

schema,

(_,value)=>{


if(value === undefined){

return undefined;

}


if(value === null){

return undefined;

}


return value;


}

)

);





return (


<script


type="application/ld+json"


dangerouslySetInnerHTML={{


__html:

JSON.stringify(cleanSchema)



}}



/>


);



}
