/**
 * ═══════════════════════════════════════════════════════════════
 *  A LITTLE WORLD FOR YOU ♡ — CONFIGURATION & STORY CONTENT
 * ═══════════════════════════════════════════════════════════════
 *  Personalise names, memories, letters, clues, and voice recordings here.
 *  Everything in this file feeds dynamically into the storybook.
 */

const STORY_CONFIG = {
  // ─── NAMES & IDENTITY ───────────────────────────────────────
  herName: "Bhavya",
  herNickname: "babe",
  yourName: "Your favourite person",
  storyTitle: "A Little World for You ♡",
  storyTagline: "Made with all my love, just for Bhavya.",

  // ─── COLOUR THEMES ─────────────────────────────────────────
  defaultTheme: "emerald",
  themes: {
    emerald: {
      name: "Emerald",
      swatch: "#087F78",
      glow: "rgba(8, 127, 120, 0.45)",
      description: "Deep, calming & impossible to forget",
      vars: {
        "--theme-primary": "#064E46",
        "--theme-teal": "#075D58",
        "--theme-accent": "#087F78",
        "--theme-seaglass": "#9CCFC1",
        "--theme-mint": "#DCEEE6",
        "--theme-paper": "#FFFDF9",
        "--theme-parchment": "#F7F2E7",
        "--theme-parchment-2": "#EFE8D8",
        "--theme-gold": "#C5A46D",
        "--theme-gold-light": "#E0C896",
        "--theme-gold-glow": "rgba(197, 164, 109, 0.35)",
        "--theme-blush": "#EBD0D1",
        "--theme-ink": "#142925",
        "--theme-muted": "#3D5A53",
        "--theme-border": "#D5E4DE",
        "--card-bg": "rgba(255, 253, 249, 0.92)",
        "--card-border": "rgba(8, 127, 120, 0.16)",
        "--wax-seal": "#064E46"
      }
    },
    rose: {
      name: "Rose",
      swatch: "#BD7180",
      glow: "rgba(189, 113, 128, 0.45)",
      description: "Soft, gentle petals & tender warmth",
      vars: {
        "--theme-primary": "#8E3F4F",
        "--theme-teal": "#A85365",
        "--theme-accent": "#BD7180",
        "--theme-seaglass": "#E8BCC4",
        "--theme-mint": "#F7E6E9",
        "--theme-paper": "#FFFDF9",
        "--theme-parchment": "#F9F1F0",
        "--theme-parchment-2": "#F2E2E2",
        "--theme-gold": "#C5A46D",
        "--theme-gold-light": "#E0C896",
        "--theme-gold-glow": "rgba(197, 164, 109, 0.35)",
        "--theme-blush": "#EBD0D1",
        "--theme-ink": "#381D23",
        "--theme-muted": "#6D474E",
        "--theme-border": "#E8D3D6",
        "--card-bg": "rgba(255, 253, 249, 0.92)",
        "--card-border": "rgba(189, 113, 128, 0.18)",
        "--wax-seal": "#8E3F4F"
      }
    },
    lavender: {
      name: "Lavender",
      swatch: "#837AB5",
      glow: "rgba(131, 122, 181, 0.45)",
      description: "Dreamy twilight & quiet peaceful nights",
      vars: {
        "--theme-primary": "#4F4478",
        "--theme-teal": "#645794",
        "--theme-accent": "#837AB5",
        "--theme-seaglass": "#C2BEE0",
        "--theme-mint": "#EDEAF6",
        "--theme-paper": "#FFFDF9",
        "--theme-parchment": "#F4F1F8",
        "--theme-parchment-2": "#E8E3F2",
        "--theme-gold": "#C5A46D",
        "--theme-gold-light": "#E0C896",
        "--theme-gold-glow": "rgba(197, 164, 109, 0.35)",
        "--theme-blush": "#EBD0D1",
        "--theme-ink": "#272138",
        "--theme-muted": "#534B6E",
        "--theme-border": "#DDD7EC",
        "--card-bg": "rgba(255, 253, 249, 0.92)",
        "--card-border": "rgba(131, 122, 181, 0.18)",
        "--wax-seal": "#4F4478"
      }
    },
    ocean: {
      name: "Ocean Blue",
      swatch: "#2B6E96",
      glow: "rgba(43, 110, 150, 0.45)",
      description: "Deep coastlines & endless open skies",
      vars: {
        "--theme-primary": "#1A4968",
        "--theme-teal": "#235B80",
        "--theme-accent": "#2B6E96",
        "--theme-seaglass": "#A3CEE2",
        "--theme-mint": "#E0EFF6",
        "--theme-paper": "#FFFDF9",
        "--theme-parchment": "#F0F5F8",
        "--theme-parchment-2": "#DFECF2",
        "--theme-gold": "#C5A46D",
        "--theme-gold-light": "#E0C896",
        "--theme-gold-glow": "rgba(197, 164, 109, 0.35)",
        "--theme-blush": "#EBD0D1",
        "--theme-ink": "#132533",
        "--theme-muted": "#3F5668",
        "--theme-border": "#CFE1EB",
        "--card-bg": "rgba(255, 253, 249, 0.92)",
        "--card-border": "rgba(43, 110, 150, 0.18)",
        "--wax-seal": "#1A4968"
      }
    },
    golden: {
      name: "Golden Cream",
      swatch: "#B88E3E",
      glow: "rgba(184, 142, 62, 0.45)",
      description: "Warm sunlight & antique candlelit parchment",
      vars: {
        "--theme-primary": "#6B4E1B",
        "--theme-teal": "#8C6A2A",
        "--theme-accent": "#B88E3E",
        "--theme-seaglass": "#E0C896",
        "--theme-mint": "#F7EED9",
        "--theme-paper": "#FFFDF9",
        "--theme-parchment": "#F9F5EB",
        "--theme-parchment-2": "#EFE7D2",
        "--theme-gold": "#C5A46D",
        "--theme-gold-light": "#E0C896",
        "--theme-gold-glow": "rgba(197, 164, 109, 0.35)",
        "--theme-blush": "#EBD0D1",
        "--theme-ink": "#2D220E",
        "--theme-muted": "#614F2F",
        "--theme-border": "#EADEC3",
        "--card-bg": "rgba(255, 253, 249, 0.92)",
        "--card-border": "rgba(184, 142, 62, 0.2)",
        "--wax-seal": "#6B4E1B"
      }
    }
  },

  // ─── OPENING WELCOME SCREEN ────────────────────────────────
  welcome: {
    promptLead: "Before we begin, babe...",
    promptTitle: "What's your favourite colour?",
    promptSubtitle: "I made this little world for you. Let's give it your favourite colours first.",
    emeraldSelectedNote: "Of course, my emerald girl. 💚",
    emeraldCompliment: "I think this colour suits you. Beautiful, calming, and impossible to forget.",
    otherSelectedNote: "A beautiful choice, my love. 💫",
    otherCompliment: "Every colour looks prettier when it belongs to your world.",
    beginButton: "Let's begin our little story ♡"
  },

  // ─── HOMEPAGE HERO ─────────────────────────────────────────
  hero: {
    kicker: "a storybook written just for you",
    headline: "Welcome to our little world, my love.",
    subheading: "A little place filled with pieces of us, memories I keep close, words I sometimes struggle to say, and all the love I have for you.",
    signature: "Made with all my love, just for you. ♡",
    ctaButton: "Turn the page ↓"
  },

  // ─── CHAPTERS ──────────────────────────────────────────────
  chapters: [
    { id: "memories", number: "1", title: "Video-call memories", icon: "📷", short: "Our calls" },
    { id: "portrait", number: "2", title: "My favourite picture of you", icon: "✨", short: "Your picture" },
    { id: "the-hug", number: "3", title: "About that hug", icon: "🫂", short: "That hug" },
    { id: "letters", number: "4", title: "Letters for you", icon: "💌", short: "Letters" },
    { id: "voice", number: "5", title: "A voice message", icon: "🎙️", short: "Voice hug" },
    { id: "garden", number: "6", title: "A little garden of love", icon: "🌿", short: "Magic garden" },
    { id: "treasure", number: "7", title: "The little adventure", icon: "🗝️", short: "Treasure hunt" },
    { id: "giggles", number: "8", title: "Certified silly medicine", icon: "🤧", short: "Sneeze jokes" },
    { id: "final-letter", number: "9", title: "One last thing", icon: "♡", short: "To you, always" }
  ],

  // ─── SECTION 4: VIDEO CALL MEMORIES ────────────────────────
  videoCalls: {
    heading: "Little moments I never want to forget.",
    intro: "Some moments are too precious to just let them pass.",
    poeticParagraph: `Sometimes I take screenshots or record our little moments, not because I want to stop time, but because I wish I could keep a little piece of it.

The way you look at me, the way we talk, the random smiles, the laughter, even the ordinary seconds when we're doing absolutely nothing...

I save them because they mean something to me.

One day, when I miss you, I want to be able to open these memories and feel close to you again.

Even when you're behind a screen, you make some of my favourite moments.`,
    handwrittenCaption: "Little pieces of us, safely kept in my heart. ♡",
    photos: [
      {
        src: "assets/images/video-call-1.jpg",
        title: "Your soft smile & the little penguin",
        tag: "Call · 37:23",
        caption: "Resting your hand on your cheek, smiling softly with the plushie. The sweetest screenshot I have of our call."
      },
      {
        src: "assets/images/video-call-2.jpg",
        title: "Eyes gently closed in quiet happiness",
        tag: "Call · 38:15",
        caption: "That serene, peaceful moment where neither of us had to say anything to feel completely at home."
      },
      {
        src: "assets/images/video-call-3.jpg",
        title: "Late night talks & sleepy giggles",
        tag: "Late night · 2:20",
        caption: "When the clock says it's late, but neither of us wants to hang up. Looking right into your eyes."
      },
      {
        src: "assets/images/video-call-4.jpg",
        title: "Quiet moments when words aren't needed",
        tag: "Late night · 2:19",
        caption: "Just seeing your face on my phone screen makes the longest day feel gentle again."
      }
    ],
    // Extra special scrapbook keepsakes
    scrapbookPhotos: [
      {
        src: "assets/images/those-eyes.jpg",
        title: "Those eyes & that tiny bindi",
        tag: "Special keepsake",
        caption: "I could look into your eyes forever. Beautiful, deep, and carrying so much gentleness."
      },
      {
        src: "assets/images/portrait-fairy-lights.jpg",
        title: "Fairy lights & your warm glow",
        tag: "Favourite memories",
        caption: "The way the warm lights fall on your hair and your smile. You glow without even trying."
      },
      {
        src: "assets/images/mirror-selfie.jpg",
        title: "Glasses, oversized tee & adorable curls",
        tag: "Casual perfection",
        caption: "Effortlessly cute, unmistakably you. You are my favourite view in every mirror."
      }
    ]
  },

  // ─── SECTION 5: FAVOURITE BLACK & WHITE PICTURE ────────────
  favouriteBw: {
    src: "assets/images/favourite-bw.jpg",
    heading: "My favourite picture of you.",
    caption: `There are so many beautiful pictures of you, but this one has a special place in my heart.

Something about this photograph makes me stop and look at it a little longer.

Maybe it's the simplicity. Maybe it's the way you look. Maybe it's just because it's you.

Even without colours, you somehow make the whole picture feel beautiful.

I don't know how to explain it, babe. I just really, really love this picture of you.`,
    handwritten: "My favourite girl, in my favourite frame. ♡"
  },

  // ─── SECTION 6: THE HUG WE DIDN'T GET THAT DAY ────────────
  theHug: {
    heading: "About that hug, babe...",
    paragraphs: [
      "I know you wanted to hug me that day, and I know we couldn't because there were people around.",
      "But sweetheart, it's okay. Please don't feel bad about it.",
      "We have time, and we have love, both.",
      "We don't have to rush our little moments. There will be a day when I can hold you without worrying about who's around, when you can hug me for as long as you want, and neither of us will have to let go too soon.",
      "And until that day comes, I want you to know that the hug you couldn't give me that day didn't mean any less to me.",
      "I still carry the thought of it with me.",
      "We'll have our moment, love. And many, many more after that."
    ],
    highlight: "We have time, and we have love, both.",
    buttonText: "Sending you a virtual hug ♡",
    hugResponse: "Consider yourself hugged, my love. I'm saving the real one for later. 🫂"
  },

  // ─── SECTION 7: LOVE LETTERS (OPEN WHEN...) ────────────────
  letters: [
    {
      id: "sad",
      seal: "🌿",
      envelopeLabel: "Open when you're sad",
      tagline: "For the heavy, quiet days",
      letterTitle: "When you're sad, my love...",
      content: `Sweetheart,

You don't have to turn your mood around for me. You don't have to be smiling, cheerful, or full of energy to deserve love.

If today felt heavy, if your heart feels a little tender or bruised, please let yourself rest. You don't have to figure anything out right now.

Main yahin hoon, okay? Even if I'm not physically sitting next to you, my heart is right there, sitting quietly in the corner, keeping you safe.

Take a deep breath, unclench your jaw, drop your shoulders. You are doing so much better than you give yourself credit for.

And remember: no bad day can ever take away how special you are to me.

Bas thoda sa aaram karo, meri jaan. I love you so much.`
    },
    {
      id: "miss-me",
      seal: "🌙",
      envelopeLabel: "Open when you miss me",
      tagline: "When distance feels a little too loud",
      letterTitle: "When you miss me...",
      content: `Babe,

Put your hand over your heart for five seconds. Do you feel that steady beat? That's where I live.

Distance can keep us from holding hands right this second, but it cannot touch what we have. Every time you miss me, know that somewhere on the other side of your screen, I'm thinking about you too. Probably smiling at a screenshot of us or replaying your laugh in my head.

Whenever you miss me, open our video call photos. Look at how happy you make me. Look at how lucky I am.

We are under the same sky, counting down the days until the screen disappears and it's just the two of us.

Sending you the warmest, tightest hug right across the distance.`
    },
    {
      id: "cant-sleep",
      seal: "✨",
      envelopeLabel: "Open when you can't sleep",
      tagline: "For late nights & running thoughts",
      letterTitle: "When sleep won't come easy...",
      content: `Hey sleepyhead,

Close your eyes for just a moment and imagine this: a cool, quiet room, soft blankets pulled up warm, the lights turned low, and me gently running my fingers through your hair.

Whatever made your mind race today — it is finished. You survived it. Tomorrow doesn't need to be solved tonight.

Let your thoughts drift like leaves on quiet water. You are safe. You are deeply cherished. And someone is ending their day with your name as their favourite thought.

Unclench your brow. Take a slow, gentle breath.

Goodnight, my emerald girl. Sweet dreams of us.`
    },
    {
      id: "need-a-smile",
      seal: "🌷",
      envelopeLabel: "Open when you need a smile",
      tagline: "A little dose of joy",
      letterTitle: "Emergency smile delivery!",
      content: `Breaking news, meri jaan:

Official authorities have issued an urgent alert: a girl of ridiculous beauty and unmatched sweetness has been caught looking adorable without a valid permit.

Witnesses report that her smile causes spontaneous cardiac flutter in her boyfriend, and her laugh is officially classified as a national treasure.

Penalties include:
1. 100 mandatory kisses upon arrival.
2. Unlimited warm hugs with no expiry date.
3. Being told she is loved until she rolls her eyes.

Did it work? Did you smile even a little bit?

That smile of yours makes my whole universe brighter. Keep it close today.`
    },
    {
      id: "not-well",
      seal: "🍵",
      envelopeLabel: "Open when you don't feel well",
      tagline: "For sniffles, tummy aches & low energy",
      letterTitle: "When you're not feeling well...",
      content: `Bless you, sweetheart.

I wish I could be right there right now to tuck you under warm blankets, hand you a hot cup of something soothing, bring you tissues, and rub your forehead until you fall asleep.

Please don't force yourself to do anything today. Don't worry about pending chores or replying quickly to messages. Your only job today is to rest, sip some water, and let your body heal.

Even when you're sneezing, sniffling, or have sleepy messy hair, you are still the cutest human in existence.

I'm sending you all my healing energy and a thousand gentle forehead kisses. Bas aaram karo.`
    },
    {
      id: "remember-love",
      seal: "♡",
      envelopeLabel: "Open to remember my love",
      tagline: "In case you ever forget",
      letterTitle: "How much I love you...",
      content: `My love,

If you ever find yourself questioning your worth, or wondering if you're enough, read this as many times as you need:

You are loved beyond measure. Not because you are always cheerful, productive, or composed, but simply because you exist as you are.

I love the way your eyes crinkle when you laugh. I love the way you talk about small things. I love your kindness, your silly side, your quiet moments, and the way you make ordinary days feel like poetry.

You don't have to perform for my love. You don't have to prove anything to me. You already have my whole heart, completely and without hesitation.

Today, tomorrow, and every day that follows: you are my person. Always.`
    }
  ],

  // ─── SECTION 8: PERSONAL VOICE MESSAGE ─────────────────────
  voiceMessage: {
    heading: "A little voice hug from me.",
    subtitle: "Some feelings are easier to say when you can hear my voice.",
    audioPath: "assets/audio/my-voice-message.mp3",
    audioTitle: "From my heart to yours, Bhavya",
    audioNote: "Press play whenever you want to hear me say it. ♡",
    emptyStateMessage: "My voice is missing from this little corner for now...\n\nBut I'll leave you something here soon, so whenever you miss hearing me, you can press play and feel a little closer.",
    note: "Tip: Add your audio recording to assets/audio/my-voice-message.mp3, or use the interactive buttons below to test/record on this device."
  },

  // ─── SECTION 9: THE MAGIC GARDEN (20 REASONS) ──────────────
  garden: {
    heading: "A little garden of love.",
    subtitle: "Tap each delicate bud. A flower and a reason I love you will bloom.",
    progressTemplate: "Flowers bloomed: {count}/20",
    completedMessage: "You've grown an entire garden, but somehow you're still my favourite flower. 🌿🌸",
    reasons: [
      "Your smile makes my day better.",
      "Your laughter is one of my favourite sounds.",
      "I love the way you make ordinary moments special.",
      "Your voice makes me feel close to you.",
      "I love all your little expressions.",
      "I love talking to you, even when we're saying nothing important.",
      "You make me want to become a better person.",
      "I love the way you care.",
      "You deserve all the gentleness in the world.",
      "I love being part of your little world.",
      "Your presence makes things feel lighter.",
      "I love your silly side.",
      "I love your sleepy side.",
      "I love the little things you probably don't notice about yourself.",
      "You make my favourite memories.",
      "I love hearing about your day.",
      "I love how special you are to me.",
      "You deserve to feel loved every single day.",
      "I love you on the easy days and the difficult ones.",
      "Simply because you're you."
    ]
  },

  // ─── SECTION 10: CLIMAX MESSAGE ────────────────────────────
  oneThing: {
    heading: "One thing I never want you to forget.",
    kicker: "chapter nine · from my heart to yours",
    message: [
      "Babe, I love you so, so much.",
      "I can never see you sad and not wish I could take every little thing that's hurting you away.",
      "I want to do everything I can to make you feel loved, cared for and happy.",
      "You have my attention, my time, and a heart that genuinely wants to make you feel special.",
      "You never have to pretend to be happy around me. You don't have to be okay all the time. Even on your tired days, your sad days, your quiet days, I love you just the same.",
      "I want to be someone you can come to when the world feels a little too heavy.",
      "I want to make memories with you, laugh with you, hold you, listen to your random stories, and experience all those little things that make life beautiful.",
      "I don't want you to feel like you have to earn my love or compete for my attention.",
      "You already have it, babe.",
      "All of it.",
      "I love you a lot. More than I manage to put into words sometimes.",
      "And I hope this little world reminds you of that whenever you need it."
    ],
    signatureLead: "Forever cheering for you,",
    signatureName: "Your favourite person. ♡"
  },

  // ─── SECTION 11: TREASURE HUNT ─────────────────────────────
  treasureHunt: {
    heading: "The Love Treasure Hunt",
    kicker: "chapter seven · a tiny adventure",
    subtitle: "Five little clues. One very loved girl.",
    clues: [
      {
        q: "First clue: Find the place where our story feels happiest. What is one place or memory we both love?",
        a: ["our favourite place", "our first meeting", "our first call", "video call", "call", "our calls", "home"],
        hint: "Think of a place or a first we both keep close in our hearts."
      },
      {
        q: "Second clue: What tiny thing can instantly make me think of you?",
        a: ["your smile", "your laugh", "your voice", "smile", "laugh", "eyes", "your eyes"],
        hint: "It's one of your most lovely little superpowers."
      },
      {
        q: "Third clue: Complete this: you are my favourite ______.",
        a: ["person", "human", "girl", "emerald girl", "favourite person", "human being"],
        hint: "It's what you are to me, every single day."
      },
      {
        q: "Fourth clue: What do you deserve today, tomorrow, and always?",
        a: ["love", "happiness", "care", "gentleness", "peace", "all the love"],
        hint: "Something this whole little website was made of."
      },
      {
        q: "Final clue: Who is ridiculously lucky to have you in their life?",
        a: ["you", "me", "your boyfriend", "your person", "us", "your favourite person", "me!"],
        hint: "The person who built this entire little world for you."
      }
    ],
    wonTitle: "You found the treasure! 🗝️💌",
    wonMessage: "Surprise: the greatest treasure isn't at the end of a map. It's the fact that I get to love you. You are my favourite plot twist, meri jaan."
  },

  // ─── SILLY MEDICINE / SNEEZE JOKES ─────────────────────────
  giggles: {
    heading: "Certified silly medicine",
    kicker: "chapter eight · prescription: laughter",
    subtitle: "Doctor's orders: one tiny giggle, whenever possible.",
    jokes: [
      { q: "Why did the tissue blush?", a: "Because it saw you looking ridiculously cute. 🤧" },
      { q: "Achoo!", a: "Even your sneezes have main-character energy, babe." },
      { q: "Official doctor's prescription:", a: "One warm cuddle, two forehead kisses, and absolutely zero overthinking." },
      { q: "Are you a soft blanket?", a: "Because just thinking about you makes everything feel cosy and safe." },
      { q: "Your nose called HR today...", a: "It says it wants a paid holiday. Please approve its leave immediately." },
      { q: "I tried to send you 100 hugs across the internet...", a: "The server crashed because that's too much love for one network to handle. 💗" },
      { q: "What's my favourite kind of green?", a: "Emerald... especially when it's lighting up your favourite little world." },
      { q: "Why do we take screenshots on video calls?", a: "Because when a moment is this sweet, you have to frame it in your heart." }
    ]
  }
};

// Export to window
if (typeof window !== "undefined") {
  window.STORY_CONFIG = STORY_CONFIG;
}
