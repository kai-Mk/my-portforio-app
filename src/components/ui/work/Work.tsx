import React from 'react';
import Section from '../section/Section';
import s from './work.module.scss';

const Work = () => {
  return (
    <Section title='Work'>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.item}>
            <h3>タイトル</h3>
            <div className={s.image}></div>
            <div>リンク</div>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Work;
