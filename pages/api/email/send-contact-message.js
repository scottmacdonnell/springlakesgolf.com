import sgMail from '@sendgrid/mail'

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { title, name, phone, email, message } = req.body

  const content = {
    to: process.env.NEXT_PUBLIC_EMAIL_RECIPIANT,
    from: process.env.NEXT_PUBLIC_EMAIL_RECIPIANT,
    subject: `New Message From - ${email}`,
    templateId: 'd-6160564381024ad68b640e9445214d2d',
    dynamicTemplateData: {
      title: title,
      name: name,
      phone: phone,
      email: email,
      message: message
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