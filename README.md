# SoloHive - Self Hosted Personal Blog

A self-hosted blog that displays your Hive content on your own domain.
Your posts live on the Hive blockchain — this script just presents them beautifully.

No database. No server-side code. Works on any web host.

---

## Quick Start (5 minutes)

### 1. Download the files

You need these 5 files:

```
index.html
post.html
app.js
style.css
config.js   ← the only file you need to edit
```

### 2. Edit config.js

Open `config.js` in any text editor (Notepad, TextEdit, VS Code, anything).

Change these lines:

```js
hiveUsername: "yourusername",   // ← your Hive account name, no @
siteTitle:    "My Blog",        // ← whatever you want to call your site
siteTagline:  "Thoughts, ideas, and more.",
siteUrl:      "https://yourdomain.com",
```

Add your social links (just the username, no full URL needed):

```js
social: {
  hive:      "yourusername",
  twitter:   "yourtwitter",
  instagram: "",   // leave blank to hide
},
```

Write a short about blurb:

```js
aboutText: "Hi! I write about tech and travel. All my posts live on the Hive blockchain.",
```

### 3. Add sidebar widgets (optional)

Got an AdSense snippet? A Buy Me a Coffee button? An email signup form?
Paste the HTML code between the backticks in config.js:

```js
widget1: `
  <!-- paste your snippet here, for example: -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins class="adsbygoogle" ...></ins>
`,
```

Leave it as `` `` (empty backticks) to hide the widget slot entirely.

### 4. Upload to your host

Upload all 5 files to your web host's public folder (usually `public_html` or `www`).

That's it. Visit your domain and your Hive posts will appear.

---

## Hosting Options

| Host | Cost | Notes |
|------|------|-------|
| GitHub Pages | Free | Upload files, enable Pages in repo settings |
| Netlify | Free | Drag & drop your folder to deploy |
| Cloudflare Pages | Free | Connect to GitHub or upload directly |
| Any shared host | $3–5/mo | Upload via FTP/cPanel File Manager |
| Your own server | Varies | Drop files in the web root |

---

## Customizing the Design

All visual settings are CSS variables at the top of `style.css`.
Open the file and look for the `:root { }` block near the top.

```css
:root {
  --color-accent: #c0392b;  /* ← your brand color — change this! */
  --color-bg:     #faf9f7;  /* page background */
  --color-text:   #1a1815;  /* main text */
  /* ... */
}
```

Change `--color-accent` to match your brand and you're already halfway there.

---

## How It Works

When someone visits your site:
1. Their browser loads your HTML/CSS/JS files from your host
2. `app.js` calls the Hive public API (`api.hive.blog`) directly
3. Your posts are fetched and rendered right in the browser
4. No data ever touches your server — it goes straight from Hive to your visitor

Your Hive posts are **never copied or stored** anywhere by this script.
They always come fresh from the blockchain.

---

## FAQ

**Do I need to be technical?**
If you can edit a text file and upload files to a web host, you're good.

**Will this affect my Hive account or reputation?**
No. This script only *reads* from Hive. It never writes anything.

**Can I still earn Hive rewards?**
Yes. Your posts earn rewards normally through Hive. This site is separate.

**Can I run ads?**
Yes — paste ad code into the widget slots in `config.js`. Since the ads
are on *your website* (not in the Hive post itself), there's nothing
for anyone on Hive to downvote.

**What if Hive's API is down?**
Visitors will see a "could not load posts" message. Your actual posts
are still safe on the blockchain — they never go away.

**Can I use a custom domain?**
Yes, that's the whole point. Point your domain at your host and upload
the files. Works with any domain registrar.

**Can I show only posts with a specific tag?**
Yes — set `defaultTag: "photography"` (or whatever) in `config.js`.

---

## Files

| File | Purpose | Edit it? |
|------|---------|----------|
| `config.js` | Your settings | ✅ Yes — this is your main setup file |
| `style.css` | Visual design | ✅ Optional — change CSS variables to restyle |
| `index.html` | Post list page | ⚠️ Only if adding custom HTML sections |
| `post.html` | Single post page | ⚠️ Only if adding custom HTML sections |
| `app.js` | Hive API logic | ❌ No need to touch this |

---

## License

MIT — free to use, modify, and distribute.
