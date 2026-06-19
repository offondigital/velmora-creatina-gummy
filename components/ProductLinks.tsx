import Link from "next/link";


type Product = {
  slug: string;
  name: string;
  description: string;
};



export default function ProductLinks({
  products,
}: {
  products: Product[];
}) {


  return (

    <section className="mt-12">


      <h2 className="text-2xl font-bold">
        Produtos relacionados
      </h2>



      <div className="grid gap-4 mt-5">


        {products.map((product) => (


          <Link
            key={product.slug}
            href={`/produto/${product.slug}`}
            className="border p-5 rounded-lg"
          >


            <h3 className="font-bold text-xl">
              {product.name}
            </h3>


            <p className="mt-2">
              {product.description}
            </p>


          </Link>


        ))}


      </div>


    </section>

  );

}
