// +page.server.js (location: src/routes/admin/references/%2Bpage.server.js)
export const prerender = false;
import transporter from "$lib/emailSetup.server.js";
import { NEMA_EMAIL } from "$env/static/private";

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const refEmail = formData.get("refEmail");
            const refName = formData.get("refName");
            const applicantName = formData.get("applicantName");
            const position = formData.get("position");
            const attachment = formData.get("attachment");

            const body = `${applicantName} has applied for the ${position} position and has listed ${refName} as a reference.`;

            const message = {
                from: NEMA_EMAIL,
                to: refEmail,
                bcc: "alexandersimpson65.ts@gmail.com",
                subject: refName,
                text: body,
                html: body,
                attachments: [{
                    filename: 'reference_attachment.pdf',
                    path: attachment,
                    encoding: 'base64'
                }],
            };
            
            const sendEmail = (message) => {
                return new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };


            await sendEmail(message);


            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
};
