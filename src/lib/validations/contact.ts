import z from 'zod';

// より厳密なメール正規表現
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'お名前を入力してください')
    .min(2, 'お名前は2文字以上で入力してください')
    .max(50, 'お名前は50文字以内で入力してください'),

  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .regex(emailRegex, { message: '有効なメールアドレスを入力してください' }),

  message: z
    .string()
    .min(1, 'メッセージを入力してください')
    .min(10, 'メッセージは10文字以上で入力してください')
    .max(1000, 'メッセージは1000文字以内で入力してください'),
});

export type ContactData = z.infer<typeof contactSchema>;
