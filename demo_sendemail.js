var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'test1@gmail.com',
        pass: 'test1pass'
    }
});

var mailOption = {
    from: 'test1@gmail.com',
    to: 'test2@gmail.com, test3@gmail.com',
    subject: 'Sending Email using Node.js again',
    //text: 'That was easy!'
    html: '<h1>Welcome!</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOption, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: ' + info.response);
    }
});