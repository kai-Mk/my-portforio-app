import React from 'react';
import Section from '../section/Section';
import s from './contact.module.scss';

const Contact = () => {
  return (
    <Section title='Contact'>
      <div className={s.contact_container}>
        <form className={s.contact_form}>
          <div className={s.form_group}>
            <label htmlFor='name' className={s.form_label}>
              名前
            </label>
            <input type='text' id='name' name='name' className={s.form_input} />
          </div>

          <div className={s.form_group}>
            <label htmlFor='email' className={s.form_label}>
              メールアドレス
            </label>
            <input type='email' id='email' name='email' className={s.form_input} />
          </div>

          <div className={s.form_group}>
            <label htmlFor='message' className={s.form_label}>
              お問い合わせ内容
            </label>
            <textarea id='message' name='message' rows={5} className={s.form_textarea} />
          </div>

          <button type='submit' className={s.form_button}>
            送信
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
