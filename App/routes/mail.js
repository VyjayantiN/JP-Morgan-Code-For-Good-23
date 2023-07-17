const router = require("express").Router();
const nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "goudanikunal3@gmail.com", // generated ethereal user
    pass: "mhetxyhenmiyqvdz", // generated ethereal password
  },
  secure: true,
});

router.post("/text-mail", (req, res) => {
  const { to, subject, text } = req.body;
  const mailData = {
    from: "noreply@gmail.com", // sender address
    to: to, // list of receivers
    subject: subject,
    text: text,
    html: "<b>Hey there!</b><br> This is our first message sent with Nodemailer<br/>",
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else
      res
        .status(200)
        .send({ message: "Mail send", message_id: info.messageId });
  });
});

module.exports = router;
