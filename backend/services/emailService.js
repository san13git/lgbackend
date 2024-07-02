const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  // host:"smtp.gmail.com",
  auth: {
    
    user:"kushx0009@gmail.com",
    pass:"omgn lshm ifbx yrpc",
  },
  // logger: true,
  // debug: true, 

// host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'shyann14@ethereal.email',
//         pass: 'GVtXFAp37muBA9WQTx'
//     }

});
// transporter.verify((error, success) => {
//   if (error) {
//     console.error('SMTP configuration error:', error);
//   } else {
//     console.log('SMTP server is ready to take messages:', success);
//   }
// });
// const mailOptions = {
//     from: 'sbhasin656@gmail.com',
//     to: email,
//     subject: `Exclusive Discount on ${productName}`,
//     text: `Thank you for your interest in ${productName}. Use the discount code ${discountCode} to get a special discount on your next purchase.`,
//   };

const sendDiscountEmail = async (email, productName, discountCode) => {
  const mailOptions = {
    // from: 'shyann14@ethereal.email',
    from:"kushx0009@gmail.com",
    to: email,
    subject: `Exclusive Discount on ${productName}`,
    text: `Thank you for your interest in ${productName}. Use the discount code ${discountCode} to get a special discount on your next purchase.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("discount email is sent to the user")
    console.log(`Discount email sent to ${email} for ${productName}`);
  } catch (error) {
    console.error('Error sending discount email:', error);
  }
};
const email = 'sanyab1302@gmail.com'; // Replace with the recipient's email
const productName = 'SuperWidget';
const discountCode = 'SAVE20';

sendDiscountEmail(email, productName, discountCode)
  .then(() => console.log('Email send function executed successfully'))
  .catch((error) => console.error('Email send function failed:', error));

module.exports = { sendDiscountEmail };
