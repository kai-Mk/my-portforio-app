import React, { ReactNode } from 'react';
import s from './section.module.scss';

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.container}>{children}</div>
    </section>
  );
};

export default Section;
