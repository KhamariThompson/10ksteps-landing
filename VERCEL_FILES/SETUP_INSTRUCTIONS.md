# Universal Links + Groups Setup Instructions

## What Was Changed in the iOS App:

✅ **DeepLinkHandler.swift** - Now handles both `10ksteps://` AND `https://10ksteps.site/`
✅ **Info.plist** - Added Associated Domains for Universal Links
✅ **All Share Links** - Changed from `10ksteps://groups/{id}` to `https://10ksteps.site/groups/{id}`
✅ **UI Improvements** - Better Continue buttons, step progress indicators (1 of 3, 2 of 3)

---

## What You Need To Do:

### Step 1: Get Your Apple Team ID

1. Open Xcode
2. Select your project in the navigator
3. Go to "Signing & Capabilities"
4. Your Team ID is shown next to your team name (looks like: `ABC123XYZ`)
5. **COPY THIS - YOU'LL NEED IT!**

### Step 2: Update the apple-app-site-association File

1. Open `apple-app-site-association` file (in VERCEL_FILES folder)
2. Replace `TEAM_ID` with your actual Team ID:
   ```json
   "appID": "YOUR_TEAM_ID.com.KhamariT.10k-Steps"
   ```
   Example: `"appID": "ABC123XYZ.com.KhamariT.10k-Steps"`

### Step 3: Deploy to Vercel

**Option A: Using Vercel UI (Easiest)**

1. Copy these files to your Vercel project:
   - `apple-app-site-association` → `public/.well-known/apple-app-site-association`
   - `groups-[groupId].tsx` → `pages/groups/[groupId].tsx`
   - `vercel.json` → root of your project

2. Update `groups-[groupId].tsx`:
   - Line 35: Replace `YOUR_FIREBASE_PROJECT_ID` with your actual Firebase project ID
   - Line 83: Replace `YOUR_APP_ID` with your App Store ID (when available)
   - Line 91: Replace `YOUR_APP_ID` again

3. Commit and push to GitHub (Vercel will auto-deploy)

**Option B: Using Vercel CLI**

```bash
cd your-vercel-project
npm install -g vercel
vercel deploy
```

### Step 4: Verify the apple-app-site-association File

After deployment, visit:
```
https://10ksteps.site/.well-known/apple-app-site-association
```

You should see JSON with your Team ID. If you see 404, the file isn't in the right place.

**Common Issues:**
- Make sure file is in `public/.well-known/` folder
- File has NO extension (not .json)
- vercel.json is configured correctly

### Step 5: Enable Associated Domains in Xcode

1. Open your Xcode project
2. Select your target (10k Steps)
3. Go to "Signing & Capabilities" tab
4. Click "+ Capability"
5. Add "Associated Domains"
6. Add these domains:
   - `applinks:10ksteps.site`
   - `applinks:www.10ksteps.site`

**Screenshot:**
```
Domains:
  applinks:10ksteps.site
  applinks:www.10ksteps.site
```

### Step 6: Build and Test

1. Build the app in Xcode
2. Install on a **REAL DEVICE** (Universal Links don't work in Simulator!)
3. Test the flow:

**Test 1: Create and Share**
- Create a new group in the app
- Copy the share link
- Should look like: `https://10ksteps.site/groups/ABC123`

**Test 2: Open Link with App Installed**
- Paste the link in Notes app
- Long-press the link → "Open"
- Should open the app directly
- Should show join confirmation

**Test 3: Open Link in Safari**
- Paste link in Safari
- Should see the web preview page
- "Open in App" button should work
- "Download" button goes to App Store

### Step 7: Troubleshooting Universal Links

If Universal Links aren't working:

1. **Clear the App**
   - Delete app from device
   - Reinstall

2. **Clear iOS Cache**
   - Settings → Safari → Clear History and Website Data

3. **Test in Safari First**
   - Open `https://10ksteps.site/groups/SOME_GROUP_ID` in Safari
   - If you see the web page → association file works
   - If app opens → Universal Links work!

4. **Verify Association**
   - Go to Settings → Developer → Universal Links → 10k Steps
   - Should see "10ksteps.site" listed

5. **Check Logs**
   - In Xcode, watch the console when clicking links
   - Look for "📱 Handling URL:" log messages

---

## How It Works Now:

### For Users WITH the App:

1. User clicks `https://10ksteps.site/groups/ABC123`
2. iOS sees the domain is associated with your app
3. Opens app directly (no browser)
4. App shows join confirmation
5. User joins the group

### For Users WITHOUT the App:

1. User clicks `https://10ksteps.site/groups/ABC123`
2. Opens in browser
3. Shows group preview (name, members, etc.)
4. Smart App Banner appears (iOS)
5. "Download App" button → App Store
6. After installing → Link opens in app automatically

---

## Testing Checklist:

- [ ] apple-app-site-association file is accessible at the URL
- [ ] Team ID is correct in the file
- [ ] Associated Domains enabled in Xcode
- [ ] App builds without errors
- [ ] Create a group and get share link (should be HTTPS)
- [ ] Link opens app on device with app installed
- [ ] Link shows web page on device without app
- [ ] Link works when shared via Messages
- [ ] Link works when shared via social media

---

## Firebase Project ID:

You can find your Firebase Project ID:
1. Go to Firebase Console (console.firebase.google.com)
2. Click your project
3. Project Settings → General tab
4. Project ID is shown there (e.g., `10k-steps-app-12345`)

---

## App Store ID:

Once your app is live on the App Store:
1. The URL will be: `https://apps.apple.com/app/idXXXXXXXXXX`
2. The numbers after "id" are your App Store ID
3. Update the Next.js page with this ID

---

## Questions?

- If links aren't working → Check Console logs in Xcode
- If web page not showing → Check Vercel deployment logs
- If association file 404 → Check file location in Vercel project

**Need help?** Check the logs and let me know what errors you see!
