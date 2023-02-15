import { type NextPage } from "next";
import Head from "next/head";
import { signIn, useSession  } from "next-auth/react";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "../utils/api";

const Home: NextPage = () => {
  const userAuthenticated = useSession()

  
  return (
    <>
      <Head>
        <title>Budget Tracker</title>
        <meta name="description" content="Documented your income and expensive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Budget-Tracker-3tapp</h1>
        {JSON.stringify(userAuthenticated)}
        <button 
          className="p-2 border border-slate-400 rounded"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={()=>signIn()}>LOGIN</button>
      </div>
    </>
  );
};

export default Home;

