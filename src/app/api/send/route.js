import { NextResponse } from "next/server";
import mailer from "nodemailer";

// const resend = new Resend("re_ZLVPmAkd_FQ34jHxgkuVbDGuHquG9LA3m");
const fromEmail = "deepaksharma83407@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  const transporter = mailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "deepakvand6112002@gmail.com",
      pass: "Abc@61122",
    },
    secure: true,
  });

  const mailData = {
    from: email,
    to: fromEmail,
    subject: subject,
    text: message,
    html: <div>{message}</div>,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return NextResponse.json(err);
    } else {
      console.log(info);
      return NextResponse.json(info);
    }
  });

  // try {
  //   const data = await resend.emails.send({
  //     from: fromEmail,
  //     to: [fromEmail, email],
  //     subject: subject,
  //     react: (
  //       <>
  //         <h1>{subject}</h1>
  //         <p>Thank you for contacting us!</p>
  //         <p>New message submitted:</p>
  //         <p>{message}</p>
  //       </>
  //     ),
  //   });
  //   console.log(data);
  //   return NextResponse.json(data);
  // } catch (error) {
  //   return NextResponse.json({ error });
  // }
}
