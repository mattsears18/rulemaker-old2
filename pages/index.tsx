import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="items-center">RuleMaker.io</div>
    </div>
    // <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    //   <div className="shrink-0">
    //     {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
    //   </div>
    //   <div>
    //     <div className="text-xl font-medium text-black">ChitChat</div>
    //     <p className="text-slate-500">You have a new message!</p>
    //   </div>
    // </div>
  );
};

export default Home;
