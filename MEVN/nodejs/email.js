var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '1903106@ritindia.edu',
    pass: 'Bullet@0635'
  }
});

var mailOptions = {
  from: '1903106@ritindia.edu',
  to: 'ganeshsuryawanshi2308@gmail.com',
  subject: 'Sending My First Email using Node.js',
  text: 'Hello I am Ganesh which is using Nodejs for sending emails'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});