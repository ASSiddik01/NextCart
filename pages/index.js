import Head from "next/head";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <html data-theme="cupcake"></html>
        <title>NextCart | A online store by Next JS</title>
        <meta
          name="description"
          content="nextcart.com | A online store by Next JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section id="banner">
          <Banner />
        </section>
      </main>
    </div>
  );
}
