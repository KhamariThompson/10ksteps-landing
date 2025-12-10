# Universal Links Setup Guide for 10k Steps

## Overview
This guide will help you set up Universal Links so that when users click `https://10ksteps.site/groups/{id}`, they'll either:
- **Open your app** (if installed) and join the group
- **See a web preview** (if not installed) with a download button

---

## ✅ What's Already Done

The following files have been created in your Vercel project:

1. **`src/app/groups/[groupId]/page.tsx`** - Web preview page for groups
2. **`public/.well-known/apple-app-site-association`** - Universal Links config
3. **`vercel.json`** - Routing configuration

---

## 🎯 Step 1: Get Your Apple Team ID

Your Team ID is needed for Universal Links to work.

### How to find it:

1. **Open Xcode**
2. **Open your 10k Steps project**
3. **Click on the project** in the left sidebar (top item)
4. **Click on your app target** (usually named "10k Steps" or similar)
5. **Go to "Signing & Capabilities" tab**
6. **Look for "Team"** - you'll see something like:
   ```
   Team: Khamari Thompson (ABC123XYZ)
   ```
   The part in parentheses `ABC123XYZ` is your **Team ID**

### Alternative method:
1. Go to [Apple Developer](https://developer.apple.com/account)
2. Sign in with your Apple ID
3. Go to **Membership** section
4. Your Team ID is listed there

---

## 🎯 Step 2: Update apple-app-site-association File

1. **Open the file:**
   ```
   /Users/khamarit/Desktop/10ksteps-landing/public/.well-known/apple-app-site-association
   ```

2. **Replace `YOUR_TEAM_ID` with your actual Team ID:**

   **Before:**
   ```json
   {
     "applinks": {
       "apps": [],
       "details": [
         {
           "appID": "YOUR_TEAM_ID.com.KhamariT.10k-Steps",
           "paths": ["/groups/*"]
         }
       ]
     }
   }
   ```

   **After** (example with Team ID `ABC123XYZ`):
   ```json
   {
     "applinks": {
       "apps": [],
       "details": [
         {
           "appID": "ABC123XYZ.com.KhamariT.10k-Steps",
           "paths": ["/groups/*"]
         }
       ]
     }
   }
   ```

3. **Save the file**

---

## 🎯 Step 3: Deploy to Vercel

Since your site is already deployed, just push the changes:

```bash
cd /Users/khamarit/Desktop/10ksteps-landing
git add .
git commit -m "Add Universal Links support for groups"
git push
```

Vercel will automatically deploy the changes.

### Verify the deployment:

After deployment completes (1-2 minutes), check this URL in your browser:
```
https://10ksteps.site/.well-known/apple-app-site-association
```

You should see your JSON configuration with your Team ID.

---

## 🎯 Step 4: Enable Associated Domains in Xcode

1. **Open your 10k Steps iOS project in Xcode**

2. **Select your app target**

3. **Go to "Signing & Capabilities" tab**

4. **Click the "+ Capability" button**

5. **Search for and add "Associated Domains"**

6. **Add these domains:**
   - `applinks:10ksteps.site`
   - `applinks:www.10ksteps.site`

   It should look like this:
   ```
   Associated Domains
   ┌─────────────────────────────────┐
   │ applinks:10ksteps.site          │
   │ applinks:www.10ksteps.site      │
   └─────────────────────────────────┘
   ```

7. **Save your project** (⌘ + S)

---

## 🎯 Step 5: Build and Install on Real Device

**IMPORTANT:** Universal Links ONLY work on real devices, NOT on simulators!

1. **Connect your iPhone** to your Mac

2. **Select your iPhone** as the build target in Xcode

3. **Build and Run** (⌘ + R)

4. **Wait for the app to install** on your device

---

## 🎯 Step 6: Test Universal Links

### Test 1: Create a Group

1. **Open your app** on your iPhone
2. **Create a new group** (follow the normal flow)
3. **Share the link** - it should be: `https://10ksteps.site/groups/XXXXXX`
4. **Check the share sheet** - verify the URL format is correct

### Test 2: Open Link With App Installed

1. **Send the link to yourself** via Messages or Notes
2. **Tap the link**
3. **First time:** You may need to **long-press** and select "Open"
4. **The app should open** and show the join confirmation screen

### Test 3: Open Link in Safari

1. **Open Safari** on your iPhone
2. **Paste the group URL**: `https://10ksteps.site/groups/XXXXXX`
3. **You should see the web preview page** with:
   - Group name and description
   - Member count
   - Days remaining
   - "Open in App" button
   - "Download 10k Steps" button

### Test 4: Open Link Without App

To test the web fallback:
1. **Use a different device** that doesn't have the app
2. **Open the group URL** in Safari
3. **You should see the web preview page**
4. **"Download 10k Steps" button** should go to App Store search

---

## 📱 When Your App is Published on App Store

After you publish your app, you need to update two things:

### 1. Update the Group Preview Page

Open: `src/app/groups/[groupId]/page.tsx`

**Find line 77-83** and update:
```typescript
const downloadApp = () => {
  // TODO: Replace with your actual App Store ID
  // Get from: https://apps.apple.com/app/idYOUR_APP_ID

  // BEFORE (current):
  window.location.href = 'https://apps.apple.com/search?term=10k+steps';

  // AFTER (replace 123456789 with your actual App Store ID):
  window.location.href = 'https://apps.apple.com/app/id123456789';
};
```

**Find line 117** and uncomment:
```typescript
// BEFORE:
{/* TODO: Add your App Store ID when published */}
{/* <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" /> */}

// AFTER (replace 123456789 with your actual App Store ID):
<meta name="apple-itunes-app" content="app-id=123456789" />
```

This will add a smart banner at the top of the web page for iOS users.

### 2. How to Get Your App Store ID

1. **Go to App Store Connect**
2. **Find your app**
3. **Copy the App ID** (it's a number like `123456789`)
4. **Or** get it from your app's URL: `apps.apple.com/app/id123456789`

### 3. Deploy Changes

```bash
git add .
git commit -m "Update App Store ID for Universal Links"
git push
```

---

## 🐛 Troubleshooting

### Universal Links Not Working?

**Problem:** Links open in Safari instead of the app

**Solutions:**
1. **Delete and reinstall the app** - This often fixes Universal Links issues
2. **Check Settings → Developer → Universal Links** - Verify your domain is listed
3. **Clear Safari cache** - Settings → Safari → Clear History and Website Data
4. **Wait 1-2 minutes** after installation - iOS needs time to verify the association
5. **Long-press the link** and select "Open in 10k Steps"

### Web Page Not Showing?

**Problem:** 404 or blank page when opening group link

**Solutions:**
1. **Check Vercel deployment logs** - Make sure deployment succeeded
2. **Verify the file exists:**
   - Go to: `https://10ksteps.site/.well-known/apple-app-site-association`
   - Should show JSON (not 404)
3. **Check group ID** - Make sure the group exists in Firebase
4. **Open browser console** (Safari → Develop) to see errors

### "Group Not Found" Error

**Problem:** Web page shows "Group not found"

**Solutions:**
1. **Check Firebase Project ID** - Verify `k-steps-efc1d` is correct
2. **Check Firebase permissions** - Make sure the Firestore API is publicly accessible for reads
3. **Verify group exists** - Check Firebase Console → Firestore → `challenges` collection
4. **Check the URL** - Make sure group ID is correct

### Links Open in Safari, Not App

**Problem:** Links always open in browser

This usually means:
1. **Associated Domains not enabled** - Go back to Step 4
2. **Team ID is wrong** - Double-check Step 2
3. **App wasn't built with new config** - Rebuild in Xcode
4. **Apple hasn't verified the association yet** - Wait 1-2 minutes, try again

---

## 📋 Console Logs to Look For

When testing, check Xcode console logs:

**Good signs:**
- `📱 Handling URL: https://10ksteps.site/groups/XXXXX`
- `✅ Universal Link - Group ID: XXXXX`
- `Attempting to join group with ID: XXXXX`

**Bad signs:**
- `❌ Invalid group URL format`
- `⚠️ Malformed URL`
- No logs at all (means Universal Link didn't trigger)

---

## 🎨 Customizing the Web Preview Page

The web preview page is at: `src/app/groups/[groupId]/page.tsx`

You can customize:
- **Colors** - Change the gradient in `styles.container.background`
- **Fonts** - Modify `styles.container.fontFamily`
- **Layout** - Edit the JSX and styles
- **Meta tags** - Update Open Graph images, descriptions
- **Buttons** - Change button text, styles, colors

---

## 📂 Project Structure

```
10ksteps-landing/
├── src/
│   └── app/
│       └── groups/
│           └── [groupId]/
│               └── page.tsx              # Group preview page
├── public/
│   ├── .well-known/
│   │   └── apple-app-site-association   # Universal Links config
│   └── 10kstepsappicon.png              # Used in web preview
├── vercel.json                           # Vercel routing config
└── UNIVERSAL_LINKS_SETUP.md             # This file
```

---

## ✅ Final Checklist

Before testing, make sure:

- [ ] Got Apple Team ID from Xcode
- [ ] Updated `apple-app-site-association` with Team ID
- [ ] Pushed changes to GitHub/Vercel
- [ ] Verified `https://10ksteps.site/.well-known/apple-app-site-association` returns JSON
- [ ] Added Associated Domains capability in Xcode
- [ ] Added both domains: `applinks:10ksteps.site` and `applinks:www.10ksteps.site`
- [ ] Built app on **REAL DEVICE** (not simulator!)
- [ ] Created a test group and got share link
- [ ] Tested link in Messages/Notes (not Xcode console)

---

## 🚀 How It All Works

```
User taps: https://10ksteps.site/groups/ABC123
                    ↓
            iOS checks domain
                    ↓
    Fetches: /.well-known/apple-app-site-association
                    ↓
         Verifies Team ID + Bundle ID
                    ↓
        ┌───────────────────────┐
        │   App Installed?      │
        └───────────────────────┘
                ↓           ↓
            YES            NO
                ↓           ↓
        Opens App      Opens Safari
        Join Screen    Web Preview
```

---

## 🆘 Need Help?

If you're stuck:

1. **Check the troubleshooting section above**
2. **Verify all checklist items**
3. **Check Xcode console logs** when testing
4. **Test on a real device** (never simulator)
5. **Wait 1-2 minutes** after installing app
6. **Try long-pressing the link** and selecting "Open"

---

## 🎉 Success!

Once working, your users will:
1. **Receive share link**: `https://10ksteps.site/groups/{id}`
2. **Tap the link**
3. **App opens instantly** (if installed)
4. **See join confirmation** and join the group
5. **Or see beautiful web page** with download button (if not installed)

This makes sharing groups super smooth!

---

**Last Updated:** December 10, 2024
**Your Firebase Project ID:** k-steps-efc1d
**Your Bundle ID:** com.KhamariT.10k-Steps
**Your Domain:** 10ksteps.site
