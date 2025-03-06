// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ["jaijayathilak@gmail.com", email],
      subject: subject,
      react:(
        <>
          <h1>{subject}</h1>
          <p>Thank You for contacting us!</p>
          <p>{message}</p>
        </>
      )
    });

    return (error) ? Response.json({error: "Here from error 404 try block", detail: error.message}) : Response.json(data)
  } catch (error) {
    return Response.json({err: error.Message, reason: "500 error from catch block"});
  }
}
