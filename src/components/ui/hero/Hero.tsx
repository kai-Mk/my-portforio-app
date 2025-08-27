import React from 'react';
import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <p className={s.hero_text}>
        <span className={s.first_text}>ご覧いただきありがとうございます。</span>
        <br />
        私は、寺社仏閣と旅行（特に一人旅）が好きな、webエンジニアです。
        <br />
        ReactやNext.jsを中心にweb開発の経験を積んできました。
        <br />
        旅先で触れる人々の温かさや地域の魅力に触れる中で、「技術で人と地域をつなぐ」
        <br />
        ことに関心が高まりました。
        <br />
        技術を通じて、人と地域をつなぎ、新しい価値を生み出していきたいと考えています。
      </p>
    </section>
  );
};

export default Hero;
