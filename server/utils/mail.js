var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: "hr@webappick.com",
    pass: "9MrY7c@J*khTBys",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready send mail");
  }
});

const sendMail = async (user) => {
  options = {
    from: {
      name: "WebAppick",
      address: "hr@webappick.com",
    },
    to: user.email,
    subject: "Congrats on Winning the Swag! Bonus: You Can Win An iPad too.",
    text: "",
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body style="font-family: 'Inter', sans-serif">
    <div style="display: block; margin: auto; max-width: 600px" class="main">
      <div style="width: 100%">
        <img style="width: 100%" src="https://www.webappick.info/image/email_header.png" alt="Header Banner" />
      </div>
      <div>
        <p>Hey there, ${user.name}</p>
        <p style="margin-top: 24px">
          You Did it. Not only you have Rocked the WordCamp Sylhet (2024), but also got some cool swag.
        </p>
        <p style="color: #dd40b3; font-weight: 700; margin-top: 24px; margin-bottom: 6px">
          You've won a <span style="text-transform: capitalize"> ${user.swag}</span>
        </p>
        <p style="margin-top: 0">Collect your Swag from Our Stall.</p>
        <p style="margin-top: 24px">
          But that's not all! Use this coupon below for a chance to
          <span style="color: #0088f7; font-weight: 700">Win an iPad</span> at our bonus raffle draw
          <span style="color: #dd40b3; font-weight: 700">Today at 3 PM!</span>
        </p>
        <p style="margin-top: 24px; color: #0088f7; font-weight: 700">Your Token - ${user.coupon}</p>
        <p style="margin-top: 24px">
          We loved meeting you. Stay tuned for more updates and the cool swag reveal. See you at the next WordCamp,
          champ!
        </p>
        <p style="margin-top: 24px">T&C: Please follow all the instructions to become eligible for the raffle draw.</p>
        <p style="margin-top: 24px; margin-bottom: 6px">See you online</p>
        <p style="font-style: italic; margin: 0px">Webappick</p>
      </div>
      <div style="border-top: 1px solid #e0e3e9; margin-top: 24px">
        <p style="text-align: center; font-weight: 600; margin-bottom: 8px">WEBAPPICK</p>
        <div style="border-top: 1px solid #6e7a91; width: 10px; margin: auto"></div>
        <p style="text-align: center; font-size: 10px; color: #6e7a91">
          Growth Partner for WooCommerce <br />
          Business Across the Globe
        </p>
      </div>

      <div style="width: 86px; margin-bottom: 12px; margin: auto">
        <a style="text-decoration: none" href="https://www.facebook.com/webappick/">
          <img style="width: 24px" src="https://www.webappick.info/image/facebook.png" alt="facebook" />
        </a>

        <a style="margin-inline: 0px; text-decoration: none" href="https://bd.linkedin.com/company/webappick">
          <img style="width: 26px" src="https://www.webappick.info/image/linkedin.png" alt="facebook" />
        </a>

        <a style="text-decoration: none" href="https://twitter.com/webappick">
          <img style="width: 24px" src="https://www.webappick.info/image/twitter.png" alt="facebook" />
        </a>
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
