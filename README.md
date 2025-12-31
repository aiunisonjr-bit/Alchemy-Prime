# Alchemy-Prime
Alchemy Prime is a high‑performance prompt generator for large AI models.

## Quick start (super simple)
You **must** run this project with a small local server. If you open the HTML file directly, it won’t work correctly.

### 1) Go to the project folder
Open Terminal (or PowerShell) and run:

```bash
cd /workspace/Alchemy-Prime
```

### 2) Start a tiny local server
Pick **one** of the commands below.

**Option A (Python – easiest):**
```bash
python -m http.server 8000
```

**Option B (Node):**
```bash
npx serve .
```

### 3) Open it in your browser
Go to:
```
http://localhost:8000
```

If you used `npx serve`, it will show a URL. Open that URL.

---

## Where is the code?
This project has only a few files, all in the root folder:

- `index.html` → the main page
- `app.jsx` → the React app logic (this is the big file)
- `manifest.webmanifest` → PWA settings
- `sw.js` → offline cache logic

There are no extra folders. Everything is simple and flat by design.

---

## How the app works (simple explanation)
1. **You choose a model** (for example GPT‑5.2 or Gemini).
2. **You write your intent in Persian.**
3. If “AI Refinement” is ON, it asks you 3 short questions.
4. It builds a **final prompt in English**.
5. You can **copy** the result or switch to **GPTs mode** to get JSON for GPT Apps.

---

## Why you might not see output
The code calls Gemini API **only if you add an API key**.

Inside `app.jsx`, you will see:
```js
const apiKey = '';
```
If it is empty, the app will **work**, but it will show a fallback offline message.

---

## I’m new — what should I click?
1. Open the site.
2. Click a model in the sidebar.
3. Type your idea.
4. Press **Transmute**.
5. Copy the output.

If you want a GPT builder JSON, press **GPTs** mode first.
