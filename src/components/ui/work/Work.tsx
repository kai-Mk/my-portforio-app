import React from 'react';
import Section from '../section/Section';
import s from './work.module.scss';
import { workData } from './workData';

const Work = () => {
  return (
    <Section title='Work'>
      <div className={s.work_container}>
        <ul className={s.work_list}>
          {workData && workData.length > 0 ? (
            workData.map(work => (
              <li key={work.name} className={s.work_item}>
                <h3 className={s.work_name}>{work.name}</h3>
                <p className={s.work_description}>説明: {work.description ?? '不明'}</p>
                <p className={s.work_tech}>使用技術: {work.tech ?? '不明'}</p>
              </li>
            ))
          ) : (
            <p>案件情報がありません</p>
          )}
        </ul>
      </div>
    </Section>
  );
};

export default Work;
