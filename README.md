# Barone Legacy Group

## Contact form email setup

The contact form sends submissions through the server-side `/api/contact`
route using Nodemailer and Google Workspace SMTP at `smtp.gmail.com:465` with
TLS. Copy `.env.example` to `.env.local` and set:

- `SMTP_USER`: the Google Workspace mailbox used to authenticate
- `SMTP_PASSWORD`: that account's Google Workspace app password
- `SMTP_FROM`: the authorized sender address
- `CONTACT_TO`: the mailbox that receives inquiries

For this site, the intended mailbox is `Stephanie@baronelegacygroup.com`.
Google Workspace may require 2-Step Verification and an app password; a normal
account password may not work. Ensure `SMTP_FROM` is authorized for the
authenticated mailbox.

Configure these variables in the production hosting environment as well.
Credentials are used only by the server API route; never add them to
`NEXT_PUBLIC_*` variables or commit real secrets. The API only reports success
after Nodemailer accepts the email for sending.
