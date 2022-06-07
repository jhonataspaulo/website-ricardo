import Head from 'next/head';
import {About} from '../components/About';
import {Classes} from '../components/Classes';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {Skills} from '../components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricardo Albertini | Designer Gráfico</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <About />
      <Classes />
      <Skills />
      <Footer />
    </>
  );
}
