var nodemailer = require("nodemailer");

let credentials = {
  // email: 'wordcamp.webappick@gmail.com',
  // password: 'xb8JV1o4vzrm5nx',
  email: "azizulhasan.cr@gmail.com",
  password: "kqjxkybupmfjzaku",
};

const sendMail = async (email, coupon) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: credentials.email,
      pass: credentials.password,
    },
  });

  mailOptions = {
    from: credentials.email,
    to: email,
    subject: "Wordcamp 2024",
    text: "",
    html: `<p>From User</p>
        Your Coupon Is ${coupon}
      `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail };
