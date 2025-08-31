import React from 'react';
import s from './footer.module.scss';
import { DiGithubBadge } from 'react-icons/di';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <p className={s.copy}>&copy; 2025 Kaito Mizuuchi</p>
        <div className={s.links}>
          <a href='https://github.com/kai-Mk' target='_blank' rel='noopener noreferrer'>
            <DiGithubBadge size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
