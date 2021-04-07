import sgMail from '@sendgrid/mail'

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { title, name, email, phone, previousCourse, referral, comments } = req.body

  const content = {
    to: process.env.NEXT_PUBLIC_EMAIL_RECIPIANT,
    from: process.env.NEXT_PUBLIC_EMAIL_RECIPIANT,
    subject: `New Message From - ${email}`,
    templateId: 'd-7494c29493204336a5cc5faad098c2a8',
    dynamicTemplateData: {
      title: title,
      name: name,
      email: email,
      phone: phone,
      previousCourse: previousCourse,
      referral: referral,
      comments: comments
    },
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}