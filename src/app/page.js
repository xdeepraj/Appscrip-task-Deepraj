import Head from "next/head";

import Hero from "@/components/Hero";
import Filter from "@/components/Filter";

import ProductList from "@/components/ProductList";

export default async function HomePage() {
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
        <Hero />
        <Filter />
        <ProductList />
      </main>
    </>
  );
}
