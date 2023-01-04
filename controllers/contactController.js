const nodemailer = require("nodemailer");

const contact = async (req, res) => {
  // send contact info to mail
  const sendContact = async (name, email, phone, message) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "harshitclub@gmail.com",
          pass: "vzzkqrmddvmzncqq",
        },
      });
      const mailOptions = {
        from: "harshitclub@gmail.com", // sender address
        to: "ishika.jaiswal@3alearningsolutions.com", // list of receivers
        subject: "3a Learning Solutions Contact Page", // Subject line
        html: `<html>
                <body>
                <p><b>Name: </b>${name}</p>
                <p><b>Email: </b>${email}</p>
                <p><b>Number: </b>${phone}</p>
                <p><b>Message: </b>${message}</p>
                </body>
                </head>
                </html>
                `,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email Sent ${info}`);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    res.status(422).json({ error: "Fill All The Details" });
  }

  sendContact(req.body.name, req.body.email, req.body.phone, req.body.message);
  res.status(201).json({ status: "201" });
};

module.exports = contact;
