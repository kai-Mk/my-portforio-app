import React from 'react';
import s from './about.module.scss';
import Section from '../section/Section';
import { Pencil, Star } from 'lucide-react';
import { skills } from './skils';

const About = () => {
  return (
    <Section title='About'>
      <div className={s.inner}>
        <div className={s.column}>
          <div className={s.introduction_container}>
            <h3 className={s.container_title}>自己紹介</h3>
            <ul className={s.introduction_list}>
              <li className={s.introduction_item}>
                <h4 className={s.item_title}>名前</h4>
                <p className={s.item_text}>
                  水内 海斗<span className={s.small_text}>みずうち かいと</span>
                </p>
              </li>
              <li className={s.introduction_item}>
                <h4 className={s.item_title}>年齢</h4>
                <p className={s.item_text}>24歳 エンジニア歴3年</p>
              </li>
              <li className={s.introduction_item}>
                <h4 className={s.item_title}>出身地</h4>
                <p className={s.item_text}>東京都八王子市</p>
              </li>
              <li className={s.introduction_item}>
                <h4 className={s.item_title}>心が躍ること</h4>
                <div className={s.item_text}>
                  <p className={s.exciting_text}>
                    <Star size={16} />
                    知らない土地を目的を決めず散歩すること
                  </p>
                  <p className={s.exciting_text}>
                    <Star size={16} />
                    寺社仏閣をめぐり建築美や自然を感じること
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.skill_container}>
            <h3 className={s.container_title}>スキル</h3>
            {skills.map((category, index) => (
              <div
                key={category.label}
                className={`${s.skill_category} ${s[`category_${index + 1}`]}`}
              >
                <h4 className={s.category_title}>{category.label}</h4>
                <ul className={s.skill_list}>
                  {category.list.map(item => (
                    <li key={item} className={s.skill_item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={s.certifications_container}>
            <h3 className={s.container_title}>資格</h3>
            <ul className={s.certifications_list}>
              <li className={s.certifications_item}>
                <Pencil size={16} />
                HTML5 プロフェッショナル認定資格 レベル1
              </li>
              <li className={s.certifications_item}>
                <Pencil size={16} />
                AWS認定 クラウドプラクティショナー
              </li>
              <li className={s.certifications_item}>
                <Pencil size={16} />
                AWS認定 ソリューションアーキテクト – アソシエイト
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
