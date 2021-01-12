const sgMail = require('@sendgrid/mail');

module.exports = {
    contactUs(context, res) {
        try {
            var reqBody = context.req.body;
            var name = reqBody.name;
            var email = reqBody.email || "";
            var phone = reqBody.phone || "";
            var question = reqBody.question;

            sgMail.setApiKey(process.env["SENDGRID_API_KEY"]);

            var message = {
                //to: 'info@mavmp.com',
				to: 'warnerh1576@gmail.com',
                from: 'contactus@mavmp.com',
                subject: 'New Question from '+ name,
                text: 
                    'Contact Us Form Submittal'+
                    'Name: '+ name +
                    'Email: '+ email +
                    'Phone: '+ phone +
                    'How may we assist you?: '+ question,
                html:
                    '<strong>Contact Us Form Submittal</strong>'+
                    '<b><p> Name: </b>'+ name +'<br>'+
                    '<b><p> Email: </b>'+ email +'<br>'+
                    '<b><p> Phone: </b>'+ phone +'<br>'+
                    '<b><p> How can we help you?: </b>'+ question +'<br>'+
                    '</p>',
            };
            sgMail.send(message);

            context.res = {
				body: {
					status: 200,
					text: "Email successfully sent."
                },
                headers: {
                    'Access-Control-Allow-Origin': process.env.ORIGIN
                }
			};

        } catch(err) {
            console.log(err);
			context.res = {
				body: {
					status: 500,
					text: err.message
				}
			};

        } finally {
            context.done();
        }
    }
}