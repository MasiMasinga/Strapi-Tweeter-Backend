module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                    ACL: env('AWS_ACL', 'public-read'),
                    signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                    Bucket: env('AWS_BUCKET'),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    email: {
        // provider: 'email',
        // provider: env('SMTP_PROVIDER'),
        provider: 'nodemailer',
        providerOptions: {
            host: env('SMTP_HOST'),
            port: env('SMTP_PORT'),
            auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
            },
            secure: false,
        },
        settings: {
            defaultFrom: 'fanomasibongemasinga@gmail.com',
            defaultReplyTo: 'fanomasibongemasinga@gmail.com',
        },
    },
});