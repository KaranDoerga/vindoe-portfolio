# Contact Form Setup Instructions

## Overview
The contact form has been successfully implemented with the following features:
- Client-side form validation using React Hook Form + Zod
- Server-side validation for security
- Email sending via Resend API
- Toast notifications for user feedback
- Responsive design matching portfolio aesthetics

## Resend API Setup (Required)

To make the contact form functional, you need to set up a Resend account and add your API key:

### Step 1: Create Resend Account
1. Visit [https://resend.com](https://resend.com)
2. Sign up for a free account
3. The free tier includes 100 emails/day (3,000 emails/month)

### Step 2: Get API Key
1. Log in to your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the generated API key (starts with `re_`)

### Step 3: Add API Key to Environment
1. Open `.env.local` in the project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file

### Step 4: Restart Development Server
```bash
# Stop the current dev server (Ctrl+C)
# Then restart it
npm run dev
```

## Email Configuration

### Default Settings
- **From**: `Portfolio Contact <onboarding@resend.dev>` (Resend's test domain)
- **To**: `karanv29@hotmail.com`
- **Subject**: `Portfolio Contact: [User's Subject]`

### Using Your Own Domain (Optional)
For production, you can verify your own domain in Resend:

1. Go to Resend dashboard → **Domains**
2. Click **Add Domain**
3. Follow the DNS setup instructions
4. Once verified, update the `from` address in `src/app/actions/contact.ts`:
   ```typescript
   from: 'Contact <noreply@yourdomain.com>',
   ```

## Testing the Contact Form

### Manual Testing Steps
1. Start the development server: `npm run dev`
2. Click the email icon in the social bar at the bottom
3. Fill out the contact form with test data:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Subject**: Test Message
   - **Message**: This is a test message from the contact form
4. Click **Send Message**
5. You should see a success toast notification
6. Check `karanv29@hotmail.com` for the email

### Validation Testing
Test the form validation by:
- Submitting empty fields → Should show error messages
- Entering invalid email → Should show "Please enter a valid email address"
- Entering short inputs → Should show minimum length errors
- All fields valid → Should successfully send email

## Form Features

### Client-Side Validation
- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Subject**: Minimum 3 characters
- **Message**: Minimum 10 characters
- Validation triggers on blur and submit

### Server-Side Validation
- Same validation rules enforced on the server
- Prevents bypassing client-side validation
- Security best practice

### User Feedback
- **Success**: Green toast "Message sent successfully! I'll get back to you soon."
- **Error**: Red toast "Failed to send message. Please try again."
- **Loading**: Button shows "Sending..." while submitting
- **Form Reset**: Clears form only on successful submission

### Navigation
- **Back Button**: Returns to main portfolio page
- **Email Icon**: Routes to `/contact` page

## Troubleshooting

### Email Not Sending
1. **Check API Key**: Ensure `RESEND_API_KEY` in `.env.local` is correct
2. **Restart Server**: After adding API key, restart dev server
3. **Check Console**: Look for error messages in browser console and terminal
4. **Verify Resend Account**: Ensure account is active and not rate-limited

### Form Validation Not Working
1. **Check Browser Console**: Look for JavaScript errors
2. **Verify Dependencies**: Run `npm install` to ensure all packages installed
3. **Clear Cache**: Try clearing browser cache or hard refresh (Ctrl+Shift+R)

### Toast Notifications Not Showing
1. **Check Toaster**: Verify `<Toaster />` is in `layout.tsx`
2. **Sonner Import**: Ensure `import { Toaster } from 'sonner'` is correct
3. **Browser Console**: Check for React errors

## File Structure

```
vindoe-portfolio/
├── src/app/
│   ├── actions/
│   │   └── contact.ts           # Server Action for email sending
│   ├── components/
│   │   └── SocialBar.tsx        # Updated with Link to /contact
│   ├── contact/
│   │   └── page.tsx             # Contact form page
│   └── layout.tsx               # Added Toaster provider
├── .env.local                   # Resend API key (git-ignored)
└── CONTACT_SETUP.md            # This file
```

## Security Notes

- `.env.local` is git-ignored (sensitive data not committed)
- Server-side validation prevents malicious submissions
- Resend API handles email sending securely
- No sensitive information exposed to client

## Future Enhancements (Optional)

Consider adding in the future:
- Rate limiting to prevent spam
- CAPTCHA or honeypot for bot prevention
- Email verification before sending
- Save messages to a database
- Admin dashboard to view submissions
- Auto-reply to sender
- Custom email templates with better styling

## Support

If you encounter issues:
1. Check Resend dashboard for API errors
2. Review browser console for client errors
3. Check terminal for server errors
4. Verify environment variables are loaded correctly

For Resend-specific issues, visit:
- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference)
