import { contactSchema } from '@/lib/validations/contact';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'バリデーションエラー',
          details: validationResult.error,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    const data = await resend.emails.send({
      from: 'ポートフォリオサイト <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL_ADDRESS as string],
      subject: `新しいお問い合わせ: ${name}様より`,
      html: `
        <h2>ポートフォリオから新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ message: 'メッセージを送信しました', id: data }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'メール送信に失敗しました' }, { status: 500 });
  }
};
