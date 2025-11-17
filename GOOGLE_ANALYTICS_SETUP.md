# Google Analytics Setup Guide

## Quick Setup Steps

### 1. Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter account details:
   - Account name: "IMMOVABLES REALTY"
   - Choose data sharing settings

### 2. Set Up Property

1. Property name: "IMMOVABLES REALTY Website"
2. Reporting time zone: (GMT+01:00) West Central Africa
3. Currency: Nigerian Naira (NGN)

### 3. Set Up Data Stream

1. Choose platform: **Web**
2. Website URL: `https://immovablesrealty.com`
3. Stream name: "IMMOVABLES REALTY Main Website"
4. Enable Enhanced Measurement (recommended)

### 4. Get Measurement ID

After creating the data stream, you'll see a Measurement ID like:
```
G-XXXXXXXXXX
```

Copy this ID.

### 5. Configure Environment Variable

Add your Measurement ID to `.env.local`:

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### 6. Deploy and Verify

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   Open your browser and check the Network tab for requests to `google-analytics.com`

2. **Production:**
   After deploying, verify tracking is working:
   - Go to Google Analytics
   - Navigate to Reports > Realtime
   - Visit your website
   - You should see your visit appear in real-time

## What Gets Tracked

With the current setup, Google Analytics will automatically track:

- **Page Views**: Every page a user visits
- **Sessions**: User sessions and duration
- **User Demographics**: Location, device, browser
- **Traffic Sources**: How users found your site
- **Bounce Rate**: Single-page sessions
- **Events** (if Enhanced Measurement is enabled):
  - Scroll depth
  - Outbound clicks
  - Site search
  - Video engagement
  - File downloads

## Custom Event Tracking (Optional)

To track custom events (e.g., button clicks, form submissions):

```typescript
// Example: Track contact form submission
gtag('event', 'contact_form_submit', {
  'event_category': 'engagement',
  'event_label': 'Contact Form'
});

// Example: Track property inquiry
gtag('event', 'property_inquiry', {
  'event_category': 'conversion',
  'property_id': 'prime-haven-grove',
  'property_price': '₦4.5M'
});
```

## Privacy Considerations

### GDPR/CCPA Compliance

If required, add a cookie consent banner:
1. Install a consent management tool
2. Only load Google Analytics after user consent
3. Update privacy policy to mention Google Analytics

### IP Anonymization

Google Analytics 4 (GA4) automatically anonymizes IP addresses in regions requiring it.

## Monitoring Setup

### Key Metrics to Monitor

1. **Traffic Sources**:
   - Organic search performance
   - Social media referrals
   - Direct traffic

2. **User Behavior**:
   - Most visited properties
   - Blog engagement
   - Contact form submissions

3. **Conversions**:
   - Set up goals for:
     - Contact form submissions
     - WhatsApp clicks
     - Phone number clicks
     - Property page views

### Setting Up Conversions

1. Go to Admin > Events
2. Click "Create Event"
3. Define custom events for important actions:
   - Contact form submit
   - Property inquiry
   - WhatsApp message initiated
   - Phone call initiated

## Troubleshooting

### Analytics Not Working

1. **Check Measurement ID**: Ensure it's correctly set in `.env.local`
2. **Restart Dev Server**: After adding env variables, restart with `npm run dev`
3. **Check Browser Console**: Look for any JavaScript errors
4. **Ad Blockers**: Some users have ad blockers that prevent Google Analytics
5. **Deployment**: Ensure environment variable is set in your hosting platform

### Common Issues

**Issue**: "Measurement ID not found"
**Solution**: Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in `.env.local` and restart server

**Issue**: "No data in Google Analytics"
**Solution**:
- Wait 24-48 hours for initial data collection
- Check Realtime reports for immediate feedback
- Verify website is publicly accessible

## Integration with Google Search Console

1. Link Google Analytics with Google Search Console
2. Benefits:
   - See search queries driving traffic
   - Monitor organic search performance
   - Identify keyword opportunities

## Next Steps

1. Set up conversion tracking
2. Create custom dashboards
3. Set up automated reports
4. Link with Google Ads (if running ads)
5. Monitor and optimize based on data

## Resources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Event Tracking Guide](https://developers.google.com/analytics/devguides/collection/ga4/events)
