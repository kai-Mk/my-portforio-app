import Header from '@/components/ui/header/Header';
import s from './home.module.scss';
import { About, Contact, Hero, PersonalProject, Work } from '@/components/ui';

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
    </div>
  );
}
