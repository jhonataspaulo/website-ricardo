import {About} from '../components/About';
import {Classes} from '../components/Classes';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {Skills} from '../components/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Classes />
      <Skills />
      <Footer />
    </>
  );
}
