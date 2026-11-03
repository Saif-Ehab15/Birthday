# ✨ Sara's Birthday Experience — Premium React Web App

A production-ready, handcrafted digital birthday celebration made for **Sara**. Features an editorial aesthetic combining soft blush pinks, rose, mauve, soft cream, and deep plum tones with rich micro-animations, interactive scrapbook cards, a custom audio system, and a heartfelt love letter sealed in an interactive envelope.

---

## 🎨 Creative Direction & Aesthetic

- **Primary Mood:** Modern birthday celebration — joyful, vibrant, luxurious, and playful.
- **Color Palette:**
  - Blush Pink (`#F7C6D0`)
  - Rose Pink (`#E88FA8`)
  - Soft Cream (`#FFF4F1`)
  - Dusty Mauve (`#B98AA6`)
  - Deep Plum (`#402B3A`)
  - White (`#FFFFFF`)
- **Important Design Rule:** The website is a birthday celebration, NOT an overly romantic template. The **ONLY** explicitly romantic part is the personal love letter envelope section (`BirthdayMessage`).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📸 Where to Add Photos

All photos are organized under `public/assets/`:

### 1. Sara's Portraits & Candids (`public/assets/her/`)
- `her-01.jpg` — Featured Hero Portrait & Main Gallery featured image
- `her-02.jpg` — Pure Joy / Final Surprise photo
- `her-03.jpg` — Quiet Elegance
- `her-04.jpg` — Sweet Spontaneity
- `her-05.jpg` — Unstoppable Sparkle

> **Note on Missing Photos:** The app features a `GracefulImage` fallback system. If photos haven't been added yet, chic editorial placeholder cards are displayed with zero broken image icons!

### 2. Couple Scrapbook Photos (`public/assets/us/`)
- `us-01.jpg` — First Scrapbook Polaroid
- `us-02.jpg` — Second Scrapbook Polaroid
- `us-03.jpg` — Third Scrapbook Polaroid
- `us-04.jpg` — Fourth Scrapbook Polaroid

---

## 🎵 Where to Add the Music File

Place the audio file here:
```
public/assets/music/birthday-song.mp3
```

- **Autoplay handling:** Music starts smoothly when Sara clicks **"ENTER YOUR SURPRISE"** on the entrance screen.
- **Synthesizer Fallback:** If `birthday-song.mp3` is not found, a soft Web Audio API music-box chime arpeggio automatically plays, ensuring the site is never silent.
- **Controls:** A floating music player dock at the bottom-right allows Sara to pause, adjust volume, or mute at any time.

---

## 💌 How to Edit the Love Letter

Open:
`src/data/birthdayConfig.ts`

Locate the `birthdayMessage` object:
```typescript
birthdayMessage: {
  sectionIntro: "A little birthday message for you.",
  buttonText: "OPEN YOUR LETTER",
  envelopeTitle: "For Sara, With All My Love",
  letterSalutation: "Dearest Sara,",
  dateText: "On Your Special Day",
  paragraphs: [
    "Your sincere personal message paragraph 1...",
    "Your sincere personal message paragraph 2...",
  ],
  closing: "Forever and always yours,",
  signOff: "With all my heart ♡",
}
```
Edit the paragraphs to write your personal love letter.

---

## ⚙️ Centralized Configuration (`birthdayConfig.ts`)

Everything on the website is customized in one single file:
`src/data/birthdayConfig.ts`

You can change:
- `herName`: Sara's name (used dynamically across the app)
- `birthdayDate`: Configurable birthday date string
- `landingScreenText`: Entrance screen greetings and CTA
- `heroText`: Main headlines and subtitles
- `herGallery`: Photo captions and titles
- `ourMoments`: Scrapbook Polaroid captions, dates, and locations
- `specialThings`: Compliments and qualities
- `finalMessage`: Final surprise modal wishes and message
- `finalSecret`: Secret easter egg star note

---

## 🌐 Deploying to Vercel

### Option 1: Deploy with Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via GitHub / GitLab
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Set:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**!

`vercel.json` is already included to ensure SPA routing works seamlessly.

---

## 📱 Mobile Responsiveness

Fully tested and optimized for:
- 360px, 375px, 390px, 430px (iPhone, Samsung Galaxy, Pixel)
- Tablets & iPads
- High-resolution desktop displays
- Touch-friendly lightboxes & accessible controls
