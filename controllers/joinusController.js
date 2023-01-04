const nodemailer = require("nodemailer");

const joinUs = async (req, res) => {
  // send joinus info to mail
  const sendJoinUsInfo = async (name, email, phone, address, role, message) => {
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
        to: "gautamharshit41@gmail.com", // list of receivers
        subject: "3a Learning Solutions Join Us Information", // Subject line
        html: `<html>
                <body>
                <p><b>Name: </b>${name}</p>
                <p><b>Email: </b>${email}</p>
                <p><b>Number: </b>${phone}</p>
                <p><b>Address: </b>${address}</p>
                <p><b>Apply For: </b>${role}</p>
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

  const { name, email, phone, address, role, message } = req.body;
  if (!name || !email || !phone || !address || !role || !message) {
    res.status(422).json({ error: "Fill All The Details" });
  } else {
    sendJoinUsInfo(
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.address,
      req.body.role,
      req.body.message
    );
    res.status(201).json({ status: "201" });
  }
};

module.exports = joinUs;
