import React from 'react';
import Section from '../section/Section';
import s from './work.module.scss';

const Work = () => {
  return (
    <Section title='Work'>
      <div>実際にはたらいた案件</div>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.item}>
            <h3>タイトル</h3>
            <img src='' alt='' />
            <div>リンク</div>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Work;
