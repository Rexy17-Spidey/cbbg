# A Little World for You ♡
### An intimate, vintage romantic storybook gift for my girlfriend

This website is a handcrafted, mobile-first interactive storybook built with pure HTML5, CSS3, and modern vanilla JavaScript. It is designed around her favourite colour (**Emerald**) with antique gold details, vintage parchment textures, delicate botanical illustrations, and heartfelt personal chapters.

---

## 📁 Project Structure

```
a-little-world-for-you/
├── index.html          # Main storybook HTML entrypoint
├── style.css           # Mobile-first emerald & antique gold design system
├── config.js           # Easy-to-edit configuration (names, letters, clues, garden reasons)
├── app.js              # Interactive animations, themes, garden, audio player & modals
├── serve.ps1           # Optional local preview server script
├── original-version.html # Reference backup of the original version
└── assets/
    ├── images/
    │   ├── favourite-bw.jpg          # Her favourite black-and-white portrait
    │   ├── video-call-1.jpg          # Video call screenshot (37:23 - plushie smile)
    │   ├── video-call-2.jpg          # Video call screenshot (38:15 - gentle peaceful smile)
    │   ├── video-call-3.jpg          # Late night video call (2:20)
    │   ├── video-call-4.jpg          # Late night video call (2:19)
    │   ├── those-eyes.jpg            # Panoramic close-up of her eyes & bindi
    │   ├── portrait-fairy-lights.jpg # Warm fairy lights portrait
    │   └── mirror-selfie.jpg         # Cute mirror selfie with glasses
    └── audio/
        └── my-voice-message.mp3      # Place your recorded MP3 here whenever ready!
```

---

## 🌟 Key Features

1. **Opening Screen: Her Favourite Colour**
   - The very first screen greets her and asks for her favourite colour.
   - **Emerald** is prominently showcased with a soft emerald glow and antique gold border.
   - When chosen, it says: *"Of course, my emerald girl. 💚 I think this colour suits you. Beautiful, calming, and impossible to forget."*
   - Remembers her choice using `localStorage`.
   - Includes a floating palette button (🎨) so she can explore the other palettes (Rose, Lavender, Ocean Blue, Golden Cream) anytime.

2. **Our Video-Call Memories**
   - Photo scrapbook layout featuring real, unfiltered screenshots from actual video calls.
   - Tap any photo to open the high-resolution full-screen **Lightbox**.
   - Includes an expandable drawer to view extra scrapbook keepsakes (*Those eyes*, *Fairy lights*, *Mirror selfie*).

3. **My Favourite Picture of You**
   - Editorial museum-grade spotlight section for her winking black-and-white portrait.
   - Elegant antique frame with subtle film grain and botanical corners.

4. **About That Hug**
   - Tender, intimate letter reassuring her about the hug that couldn't happen that day in public.
   - Features the highlighted handwritten promise: *"We have time, and we have love, both."*
   - Interactive button: **Sending you a virtual hug ♡** triggers a warm embrace modal with particles.

5. **Open When... Love Letters**
   - 6 emerald envelopes sealed with gold wax stamps:
     - *Open when you're sad.*
     - *Open when you miss me.*
     - *Open when you can't sleep.*
     - *Open when you need a smile.*
     - *Open when you don't feel well.*
     - *Open when you need to remember how much I love you.*
   - Conversational, warm language with tender Hindi expressions (*meri jaan*, *bas thoda sa pyaar*, *main yahin hoon*).

6. **Personal Voice Message Section**
   - Graceful empty state: *"My voice is missing from this little corner for now... But I'll leave you something here soon, so whenever you miss hearing me, you can press play and feel a little closer."*
   - Ready for your recording: simply drop `my-voice-message.mp3` into `assets/audio/` and the live player will automatically activate with waveform visualization, play/pause, and scrubber bar.
   - Also includes a built-in browser recorder and audio tester.

7. **The Magic Garden (20 Reasons)**
   - 20 interactive flower buds. Tapping each bud blooms a flower and reveals one of the 20 reasons why you love her.
   - Live counter: `Flowers bloomed: 0/20`.
   - When all 20 bloom: *"You've grown an entire garden, but somehow you're still my favourite flower."*

8. **One Thing I Never Want You to Forget**
   - Dedicated emotional climax chapter with your complete love letter and animated handwritten signature: *"Forever cheering for you, Your favourite person. ♡"*

9. **The Love Treasure Hunt & Silly Medicine**
   - Upgraded 5-clue interactive treasure hunt with hints and progress bar.
   - Sneeze jokes ("Certified silly medicine") to bring a smile on sick days.

---

## 🚀 How to Run & View

### Option 1: Direct in Browser (Fastest)
Just double-click `index.html` in Windows File Explorer! It works standalone without needing any server or dependencies.

### Option 2: Run Local Server
Open PowerShell in this folder and run:
```powershell
.\serve.ps1
```
Then open `http://localhost:3333` in your browser.

---

## ✍️ How to Personalise or Edit
Open `config.js` in any text editor. All text, clues, letters, names, and reasons are neatly organized with descriptive comments so you can customize them anytime.
