const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider here
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Hardcoded news headlines
const headlines = [
  'Breaking News: Major earthquake hits city center',
  'Sports: Local team wins championship',
  'Weather: Expect heavy rains tomorrow',
  'Technology: New smartphone released with advanced features',
  'Finance: Stock market reaches all-time high'
].join('\n');

async function sendEmail() {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'daniel@thefullwiki.org',
    subject: 'Today\'s News Headlines',
    text: `Here are today's top news headlines:\n\n${headlines}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
