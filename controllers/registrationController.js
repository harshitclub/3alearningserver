const nodemailer = require("nodemailer");

const registration = async (req, res) => {
  const sendJoinUsInfo = async (
    name,
    email,
    phone,
    program,
    company,
    location
  ) => {
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
        subject: "3a Learning Solutions Program Registration Information", // Subject line
        html: `<html>
                    <body>
                    <p><b>Name: </b>${name}</p>
                    <p><b>Email: </b>${email}</p>
                    <p><b>Phone: </b>${phone}</p>
                    <p><b>Program: </b>${program}</p>
                    <p><b>Company: </b>${company}</p>
                    <p><b>Location: </b>${location}</p>
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

  const { name, email, phone, program, company, location } = req.body;
  if (!name || !email || !phone || !program || !company || !location) {
    res.status(422).json({ error: "Fill All The Details" });
  }

  sendJoinUsInfo(
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.program,
    req.body.company,
    req.body.location
  );
  res.status(201).json({ status: "201" });
};

module.exports = registration;
