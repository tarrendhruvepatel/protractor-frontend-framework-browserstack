var nodemailer = require("nodemailer");
var faker = require("faker");
var day = faker.random.number({ min: 1, max: 28 });
var month = faker.random.number({ min: 1, max: 12 });
var yearsArray = ['2020', '2021', '2022'];
var year = yearsArray[Math.floor(Math.random() * yearsArray.length)];
var firstname = faker.name.firstName();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cytora.automation@gmail.com',
        pass: 'Acumen1994'
    }
});

if (day < 10) {
    day = `0${day}`;
};

if (month < 10) {
    month = `0${month}`;
};

var mailOptions = {
    from: `${firstname} Patel <cytora.automation@gmail.com>`,
    to: 'tarren.patel@gmail.com',
    subject: 'Testing',
    text: `Hi, 
    Could you send me this by ${day}/${month}/${year}?`
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        // console.log('Email sent: ' + info.response);
    }
});

module.exports = {
    day,
    month,
    year,
    firstname
};