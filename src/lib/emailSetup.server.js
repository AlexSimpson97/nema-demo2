export const prerender = false;
import nodemailer from "nodemailer";
import { NEMA_EMAIL, NEMA_PASSWORD } from "$env/static/private";

console.log(NEMA_EMAIL, NEMA_PASSWORD);

const transporter = nodemailer.createTransport({
    host: "mail.loybhosting.com",
    port: 465,
    secure: true,
    auth: {
        user: NEMA_EMAIL,
        pass: NEMA_PASSWORD,
    },
});




await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
        if (error) {
            console.error(error);
            reject(error);
        } else if (success) {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

export default transporter;
