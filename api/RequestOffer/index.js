const sgMail = require('@sendgrid/mail');

module.exports = {
    requestOffer(req, res) {
        try {
            console.log("requestOffer in api called");
            var request = req.body;
            var firstName = request.firstName;
            var lastName = request.lastName;
            var fullName = firstName+" "+lastName;
            var email = request.email;
            var phone = request.phone;
            var description = request.description;
            var state = request.state;
            var county = request.county;
            var acres = request.acres;
            var leased = request.leased;
            var producing = request.producing;
            var comments = request.comments;

			sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            var message = {
				//to: 'info@mavmp.com',
				to: 'warnerh1576@gmail.com',
                from: 'offerrequest@mavmp.com',
                subject: 'Offer Request from '+fullName,
                html:
                    '<strong>Offer Request</strong>'+
                    '<b><p> Name: </b>'+fullName+'<br><br>'+
                    '<b><p> Email: </b>'+email+'<br><br>'+
                    '<b><p> Phone: </b>'+phone+'<br><br>'+
                    '<b><p> Property description: </b>'+description+'<br><br>'+
                    '<b><p> County: </b>'+county+'<br><br>'+
                    '<b><p> State: </b>'+state+'<br><br>'+
                    '<b><p> Is your property currently leased?: </b>'+leased+'<br><br>'+
                    '<b><p> Is your property currently producing?: </b>'+producing+'<br><br>'+
                    '<b><p> Number of acres: </b>'+acres+'<br><br><br>'+
                    '<b><p> Addtional comments: </b>'+comments+'<br>'+
                    '</p>',
            };
			sgMail.send(message);
			
			context.res = {
				body: {
					status: 200,
					text: "Hello from the API"
				}
			};

            //return res.status(200).send("Email successfully sent.");

        } catch(err) {
            console.log(err);
            //return res.status(400).send(err);
        }
    },

    // contactUs(req, res) {
    //     try {
    //         console.log("contactUs called");
    //         var request = req.body;
    //         var name = request.name;
    //         var email = request.email;
    //         var phone = request.phone;
    //         var question = request.question;

    //         sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //         var message = {
    //             to: 'info@mavmp.com',
    //             from: 'contactus@mavmp.com',
    //             subject: 'New Question from '+ name,
    //             text: 
    //                 'Contact Us Form Submittal'+
    //                 'Name: '+ name +
    //                 'Email: '+ email +
    //                 'Phone: '+ phone +
    //                 'How can we help you?: '+question,
    //             html:
    //                 '<strong>Contact Us Form Submittal</strong>'+
    //                 '<b><p> Name: </b>'+ name +'<br>'+
    //                 '<b><p> Email: </b>'+ email +'<br>'+
    //                 '<b><p> Phone: </b>'+ phone +'<br>'+
    //                 '<b><p> How can we help you?: </b>'+ question +'<br>'+
    //                 '</p>',
    //         };
    //         sgMail.send(message);

    //         return res.status(200).send("Email successfully sent.");

    //     } catch(err) {
    //         console.log(err);
    //         return res.status(400).send(err);
    //     }
    // }
}