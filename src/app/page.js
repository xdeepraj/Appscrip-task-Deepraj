import Head from "next/head";
import ProductList from "./components/ProductList";

export default async function HomePage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();

  // console.log("products: ", products);

  return (
    <>
      <Head>
        <title>Appscrip PLP Page</title>
        <meta
          name="description"
          content="Product Listing Page for Appscrip task"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container">
        <h1>Products</h1>
        <ProductList products={products} />
      </main>
    </>
  );
}
