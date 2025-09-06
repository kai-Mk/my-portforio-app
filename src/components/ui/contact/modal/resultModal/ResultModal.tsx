import React from 'react';
import s from './resultModal.module.scss';

type ResultModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
};

const ResultModal = ({ isOpen, onClose, isSuccess }: ResultModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={s.modal_overlay} onClick={onClose}>
      <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={`${s.icon} ${isSuccess ? s.success_icon : s.error_icon}`}>
          {isSuccess ? '✓' : '✕'}
        </div>
        <h3 className={s.modal_title}>
          {isSuccess ? '送信完了' : '送信失敗'}
        </h3>
        <p className={s.modal_message}>
          {isSuccess 
            ? 'メッセージが正常に送信されました。お返事をお待ちください。' 
            : 'メッセージの送信に失敗しました。もう一度お試しください。'
          }
        </p>
        <button className={s.close_button} onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default ResultModal;