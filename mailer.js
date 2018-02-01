const nodemailer = require('nodemailer');
const { mailer: { departure, destinations, transport } } = require('./server.config');

const transporter = nodemailer.createTransport(transport);

function parseTemplateData(data) {
  return Object.entries(data);
}

function createEmailTemplate(data = []) {
  const templateData = parseTemplateData(data);

  return templateData
    .map(
      ([title, value]) => `
      <b>${title.toUpperCase()}:</b>
      <br/>
      ${value}<br/>
    `
    )
    .join('<br/>');
}

module.exports = ({ title, emailData }) => {
  const mailOptions = {
    from: departure, // sender address
    to: destinations, // list of receivers
    subject: title, // Subject line
    html: createEmailTemplate(emailData) // plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
};
