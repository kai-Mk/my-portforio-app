import React from 'react';
import s from './confirmModal.module.scss';

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmModal = ({ isOpen, onClose, onConfirm }: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={s.modal_overlay} onClick={onClose}>
      <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
        <h3 className={s.modal_title}>送信確認</h3>
        <p className={s.modal_message}>メッセージを送信しますか？</p>
        <div className={s.modal_actions}>
          <button className={s.cancel_button} onClick={onClose}>
            キャンセル
          </button>
          <button className={s.confirm_button} onClick={onConfirm}>
            送信する
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;