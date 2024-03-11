export const prerender = false;
// import transporter from "$lib/emailSetup.server.js";
import { NEMA_EMAIL, NEMA_KEY } from "$env/static/private";
// import { render } from 'svelte-email';
import sendgrid from '@sendgrid/mail';

// console.log(NEMA_KEY);

// const userEmail = "vercel";

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const refEmail = formData.get("refEmail");
            const refName = formData.get("refName");
            const applicantName = formData.get("applicantName");
            const position = formData.get("position");
            // const attachment = formData.get("attachment");


            // let html = `<h2>Hi!</h2><pre>${refName}</pre>`;
            const body = `${applicantName} has applied for the ${position} position and has listed ${refName} as a reference.`;
            // const body = `<h2>Hi!</h2><pre>${refName}</pre>`;

            const message = {
                from: NEMA_EMAIL,
                to: refEmail,
                bcc: "tami.b.simpson@gmail.com",
                subject: refName,
                text: body,
                html: body,
            };

            const sendEmail = async (message) => {
                // await new Promise((resolve, reject) => {
                //     transporter.sendMail(message, (err, info) => {
                //         if (err) {
                //             console.error(err);
                //             reject(err);
                //         } else {
                //             resolve(info);
                //         }
                //     });
                // });

                sendgrid.setApiKey(NEMA_KEY);

                try {
                    await sendgrid.send(message);
                    console.log('Email sent successfully!');
                } catch (error) {
                    console.error('Error sending email:', error);
                }

            };

            await sendEmail(message);

            // await sendEmail(message);

            

            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
};
