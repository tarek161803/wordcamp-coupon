var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hr@webappick.com",
    pass: "9MrY7c@J*khTBys",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready send mail");
  }
});

const sendMail = async (email, coupon) => {
  options = {
    from: {
      name: "WebAppick",
      address: "hr@webappick.com",
    },
    to: email,
    subject: "Wordcamp 2024",
    text: "",
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body style="font-family: 'Inter', sans-serif">
    <div style="display: block; margin: auto; max-width: 600px" class="main">
      <div></div>
      <div>
        <p>Hey there, Tarekul Islam</p>
        <p style="margin-top: 32px">
          You did it! Not only have you
          <span style="color: #0a8adf; font-weight: 700">Rocked WordCamp Sylhet (2024),</span> but also snagged some
          sweet swag by scanning our QR code - double win! We're thrilled to have you on board and appreciate your
          enthusiasm.
        </p>
        <p style="color: #ff485e; font-weight: 700; margin-top: 32px">
          You've won a ____. Please collect your Swag from Webappick Stall
        </p>
        <p style="margin-top: 32px">
          But that's not all! As a token of our appreciation, we've included
          <span style="color: #ff485e; font-weight: 700">a special coupon</span> for the raffle draw
          <span style="color: #0a8adf; font-weight: 700">later today at 4 PM.</span> Who knows, you might be the lucky
          winner of an awesome iPad too!
        </p>
        <p style="margin-top: 32px">Here's your Coupon —</p>
        <p style="margin-top: 32px">
          We had a blast connecting with you and are excited to see what you create next! Stay tuned for more updates
          and keep an eye out for that swag reveal. See you at the next WordCamp!
        </p>
        <p style="margin-top: 32px; margin-bottom: 6px">See you online</p>
        <p style="font-weight: 700; font-style: italic; margin: 0px">WebAppick</p>
      </div>
      <div>
        <p>WebAppick - Unlimited Business Booster Plugin</p>
      </div>
    </div>

    <style>
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
      .main {
        background-color: white;
      }
      a:hover {
        border-left-width: 1em;
        min-height: 2em;
      }
    </style>
  </body>
</html>
`,
  };

  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error.message);
    }
  });
};

module.exports = { sendMail };
