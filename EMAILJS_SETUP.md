# EmailJS Setup Guide

## Overview
The contact form is integrated with EmailJS to send emails directly from the website without a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (up to 200 emails/month)

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{name}}

From: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}

---
Sent from IMMOVABLES REALTY website
```

4. Save and copy your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `abc123XYZ456`)

### 5. Configure Environment Variables
1. Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123XYZ456
```

2. Replace the values with your actual EmailJS credentials

### 6. Test the Form
1. Run the development server: `npm run dev`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Template Variables
The form sends these fields to EmailJS:
- `name` - User's full name
- `email` - User's email address
- `phone` - User's phone number
- `message` - User's message

## Troubleshooting

### Form submits but no email received
- Check your EmailJS dashboard for delivery status
- Verify email service is properly connected
- Check spam/junk folder

### "EmailJS not configured" in console
- Ensure `.env.local` file exists
- Verify all three environment variables are set
- Restart development server after adding env variables

### Build/deployment issues
- Environment variables must start with `NEXT_PUBLIC_` to be accessible in the browser
- Add environment variables to your hosting platform (Vercel, Netlify, etc.)

## Free Tier Limits
- 200 emails per month
- Upgrade to paid plan for more emails

## Security Notes
- Public key is safe to expose in client-side code
- Never expose your Private Key
- EmailJS handles rate limiting automatically
