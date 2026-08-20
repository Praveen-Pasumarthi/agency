# FormSubmit — Setup & Reference

## What is FormSubmit?
Free form backend. Unlimited submissions, no signup, no credit card.
Just set the form action to your email — submissions arrive in your inbox.

## Setup (per client)
1. Get the client's email address (Gmail, Outlook, anything works)
2. Replace `yourgmail@gmail.com` in the template's Appointment.jsx with their email
3. Build + deploy
4. First submission triggers a confirmation email — client clicks "Activate"
5. Done — all future submissions go to their inbox

## API Details
- Endpoint: `https://formsubmit.co/{client@email.com}`
- Method: POST
- Content-Type: multipart/form-data
- No API key needed

## Free Tier
- Unlimited submissions
- Unlimited forms
- Email notifications
- Spam protection (honeypot + optional reCAPTCHA)
- File uploads (10MB per file)
- AJAX/JSON support

## Honeypot Field
Always include this hidden field to catch bots:
```html
<input type="text" name="_gotcha" style="display:none" />
```

## Redirect After Submission
Add a hidden field to redirect users after submission:
```html
<input type="hidden" name="_next" value="https://yoursite.com/thank-you" />
```

## Subject Line
Customize the email subject:
```html
<input type="hidden" name="_subject" value="New Appointment Request" />
```

## Useful Links
- Website: https://formsubmit.co
- Docs: https://formsubmit.co/documentation
