# Barone Legacy Group

## Consultation form setup

The consultation form sends submissions through the self-hosted `/api/contact`
route using SMTP. Copy `.env.example` to `.env.local` and set `SMTP_HOST`,
`SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, and `SMTP_FROM_EMAIL` using the
credentials and verified sender address from your mail provider. The form
delivers requests to `CONTACT_EMAIL`.

Configure the same environment variables in the production hosting environment.
Keep `.env.local` and all SMTP credentials out of version control.
