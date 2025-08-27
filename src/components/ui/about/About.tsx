import React from 'react';
import s from './about.module.scss';
import Section from '../section/Section';

const About = () => {
  return (
    <Section title='About'>
      <div className={s.inner}>
        <div className={s.column}>
          <div className={s.introduction_container}>自己紹介</div>
        </div>
        <div className={s.column}>
          <div className='skill_container'>得意技術</div>
          <div className={s.certifications_container}>資格</div>
        </div>
      </div>
    </Section>
  );
};

export default About;
