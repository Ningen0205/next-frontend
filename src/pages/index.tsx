import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {
  return <h1 className='text-2xl font-bold underline'>eeeddd</h1>;
};

export default Home;
