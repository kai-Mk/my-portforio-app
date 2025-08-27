import Header from '@/components/ui/header/Header';
import s from './home.module.scss';
import Hero from '@/components/ui/hero/Hero';

export default function Home() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.main}>
        <Hero />
      </div>
    </div>
  );
}
