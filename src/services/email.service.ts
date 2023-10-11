import hbs from 'nodemailer-express-handlebars'
import nodemailer from 'nodemailer'

class EmailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'andrewkutovy237@gmail.com',
                pass: ''
            }
        })
    }
}

export const emailSer