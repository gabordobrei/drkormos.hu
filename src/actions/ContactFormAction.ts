'use server';

import { Config } from '@/Config';

export async function ContactFormAction(formData: FormData) {
  const contactFormConfig = Config.get().contactForm;

  await fetch('https://api.sendgrid.com/v3/mail/send', {
    body: JSON.stringify({
      personalizations: [{ to: [{ email: contactFormConfig.to }] }],
      from: { email: 'gabor.dobrei@pepperlabs.io' },
      subject: 'Üzenetet kaptál a honlapról',
      content: [{ type: 'text/html', value: generateHtmlEmail() }]
    }),
    headers: { Authorization: `Bearer ${contactFormConfig.sendgridApiKey}`, 'Content-Type': 'application/json' },
    method: 'POST'
  })
    .then(res => res.text())
    .catch(e => console.error(e));

  function generateHtmlEmail() {
    return `
      <strong>Vezetéknév:</strong> ${formData.get('last-name')}<br/>
      <strong>Keresztnév:</strong> ${formData.get('first-name')}<br/>
      <strong>Email:</strong> ${formData.get('email')}<br/>
      <strong>Telefonszám:</strong> ${formData.get('phone-number')}<br/>
      
      <strong>Üzenet:</strong> <pre>${formData.get('message')}</pre>
      
      <p>Üdvözlettel,</p>
      <p>Kedves Öcséd</p>
      `;
  }
}
