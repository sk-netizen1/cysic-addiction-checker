import Head from 'next/head';
import InputForm from '../components/InputForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-orange-50 relative">
      <Head>
        <title>Cysic Addiction Checker</title>
      </Head>
      <h1 className="text-5xl font-bold text-center text-black">ARE YOU CYSIC-PILLED?</h1>
      <p className="mt-4 text-xl text-center text-gray-700">Find out how deep your zk addiction goes.</p>
      <div className="mt-10 w-full max-w-md">
        <InputForm />
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-500">made by vasu_web3</footer>
    </div>
  );
}
