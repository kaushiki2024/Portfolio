# EmailJS Setup Guide for Contact Form

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. **Copy your Public Key** (e.g., `user_def456`)

### Step 5: Update Your Code
Replace the placeholder values in `src/components/sections/contact.tsx`:

```typescript
const result = await emailjs.send(
  "service_abc123",        // Your Service ID
  "template_xyz789",       // Your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: "Kaushiki Mishra",
  },
  "user_def456"            // Your Public Key
);
```

## 🔧 Alternative: Formspree (Even Easier)

If you prefer a simpler solution, use Formspree:

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up and create a new form
3. **Copy your form endpoint** (e.g., `https://formspree.io/f/xayzwpvd`)

### Step 2: Update Contact Component
Replace the EmailJS code with this simpler version:

```typescript
// Remove EmailJS import and replace handleSubmit with:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Form submission failed:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

## 📱 Testing Your Form

1. **Local Testing**: Run `npm run dev` and test the form
2. **Production Testing**: Deploy to Vercel and test the live form
3. **Check Email**: Verify you receive emails when forms are submitted

## 🛡️ Security & Best Practices

- **Rate Limiting**: Both EmailJS and Formspree have built-in rate limiting
- **Spam Protection**: Forms include basic validation
- **Privacy**: No data is stored on your server
- **Backup**: Keep your email credentials secure

## 🆘 Troubleshooting

### Common Issues:
1. **Form not sending**: Check your API keys and service IDs
2. **Emails not received**: Check spam folder and email service settings
3. **Validation errors**: Ensure all required fields are filled correctly

### Support:
- **EmailJS**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **Formspree**: [https://formspree.io/docs/](https://formspree.io/docs/)

## 🎯 Recommended Setup

For a portfolio website, I recommend **Formspree** because:
- ✅ **Free tier**: 50 submissions/month
- ✅ **Simple setup**: Just one endpoint URL
- ✅ **No API keys**: Less configuration needed
- ✅ **Reliable**: Used by thousands of developers

## 🚀 Next Steps

1. Choose your preferred solution (EmailJS or Formspree)
2. Follow the setup steps above
3. Test your form locally
4. Deploy to production
5. Remove the setup instructions from your contact form

Your contact form will then be fully functional! 🎉