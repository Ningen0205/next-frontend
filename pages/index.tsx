import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {
  console.log(title);
  return <h1 className='text-2xl font-bold underline'></h1>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      title: 'hello world',
    },
  };
};

export default Home;
