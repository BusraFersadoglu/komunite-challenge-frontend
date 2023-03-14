// Next
import Head from "next/head";

//Tailwind CSS
import "tailwindcss/tailwind.css";

// Components
import HomeTemplate from "@/components/templates/HomeTemplate";

// Types
import type { NextPage } from "next";

type Props = {};

const Home: NextPage = ({}: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>Komünite Challange Front-End</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </div>
  );
};

export default Home;
