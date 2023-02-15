import { type NextPage } from "next";
import Head from "next/head";
import { signIn } from "next-auth/react";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "../utils/api";

const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Budget-Tracker-3tapp
        <button onClick={()=>signIn()}>Login</button>
      </div>
    </>
  );
};

export default Home;

