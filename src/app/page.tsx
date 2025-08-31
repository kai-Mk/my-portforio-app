import Header from '@/components/layout/header/Header';
import s from './home.module.scss';
import { About, Contact, Hero, PersonalProject, Work } from '@/components/ui';
import Footer from '@/components/layout/footer/Footer';

export default function Home() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.main}>
        <Hero />
        <About />
        <Work />
        <PersonalProject />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
