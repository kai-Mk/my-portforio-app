'use client';

import React, { useState } from 'react';
import Section from '../section/Section';
import s from './contact.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactData, contactSchema } from '@/lib/validations/contact';
import ConfirmModal from './modal/confirmModal/ConfirmModal';
import ResultModal from './modal/resultModal/ResultModal';

const Contact = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pendingData, setPendingData] = useState<ContactData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactData) => {
    setPendingData(data);
    setShowConfirmModal(true);
  };

  const handleConfirm = async () => {
    if (!pendingData) return;

    setShowConfirmModal(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pendingData),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      setIsSuccess(false);
    }

    setShowResultModal(true);
    setPendingData(null);
  };

  const handleCloseConfirm = () => {
    setShowConfirmModal(false);
    setPendingData(null);
  };

  const handleCloseResult = () => {
    setShowResultModal(false);
  };

  return (
    <Section title='Contact'>
      <div className={s.contact_container}>
        <form className={s.contact_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form_group}>
            <label htmlFor='name' className={s.form_label}>
              名前
            </label>
            <input
              type='text'
              id='name'
              className={s.form_input}
              {...register('name')}
              disabled={isSubmitting}
            />
            {errors.name && <span className={s.error_message}>{errors.name.message}</span>}
          </div>

          <div className={s.form_group}>
            <label htmlFor='email' className={s.form_label}>
              メールアドレス
            </label>
            <input
              type='email'
              id='email'
              className={s.form_input}
              {...register('email')}
              disabled={isSubmitting}
            />
            {errors.email && <span className={s.error_message}>{errors.email.message}</span>}
          </div>

          <div className={s.form_group}>
            <label htmlFor='message' className={s.form_label}>
              お問い合わせ内容
            </label>
            <textarea
              id='message'
              rows={5}
              className={s.form_textarea}
              {...register('message')}
              disabled={isSubmitting}
            />
            {errors.message && <span className={s.error_message}>{errors.message.message}</span>}
          </div>

          <button type='submit' disabled={isSubmitting} className={s.form_button}>
            {isSubmitting ? '送信中...' : 'メッセージを送信'}
          </button>
        </form>
      </div>

      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={handleCloseConfirm}
        onConfirm={handleConfirm}
      />

      <ResultModal
        isOpen={showResultModal}
        onClose={handleCloseResult}
        isSuccess={isSuccess}
      />
    </Section>
  );
};

export default Contact;
