const sgMail = require('@sendgrid/mail');

module.exports = {
    requestOffer(context, res) {
        try {
            var reqBody = context.req.body;
			var firstName = reqBody.firstName;
            var lastName = reqBody.lastName;
            var fullName = firstName+" "+lastName;
            var email = reqBody.email || "";
            var phone = reqBody.phone || "";;
            var description = reqBody.description || "";;
            var state = reqBody.state || "";;
            var county = reqBody.county || "";;
            var acres = reqBody.acres || "";;
            var leased = reqBody.leased || "";;
            var producing = reqBody.producing || "";;
            var comments = reqBody.comments || "";;

			sgMail.setApiKey(process.env["SENDGRID_API_KEY"]);

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
					text: "Email successfully sent."
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