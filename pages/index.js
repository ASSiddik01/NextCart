import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextCart | A online store by Next JS</title>
        <meta
          name="description"
          content="nextcart.com | A online store by Next JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h2>This is main</h2>
      </main>
    </div>
  );
}
