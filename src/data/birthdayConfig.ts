import { BirthdayConfig } from '../types/birthday';

export const birthdayConfig: BirthdayConfig = {
  herName: "Sara",
  birthdayDate: "November 14, 2026",

  landingScreenText: {
    greeting: "HEY SARA!",
    question: "Ready for your surprise?",
    subtext: "I made something special for your birthday.",
    ctaText: "ENTER YOUR SURPRISE",
    footerText: "Made just for you ♡",
  },

  heroText: {
    badge: "Special Day Edition ✨",
    mainTitle: "HAPPY BIRTHDAY, SARA!",
    highlightSubtitle: "Today is YOUR day.",
    message: "Let's make this one unforgettable. A celebration of your laughter, your light, and everything that makes you unique.",
    featuredPortrait: "/assets/her/sara-portrait.jpg",
  },

  musicSrc: "/assets/music/kalam-eneih.mp3",
  musicTitle: "كلام عينيه • شيرين عبد الوهاب",
  musicStartTime: 11,

  herGallery: {
    sectionTitle: "A Little Collection of You",
    sectionSubtitle: "Every photograph holds a glimpse of your warmth, your smile, and your spontaneous charm.",
    photos: [
      {
        id: "her-1",
        src: "/assets/her/golden-hour.jpg",
        title: "Golden Hour Glow",
        caption: "ملامحك الهادية وإنتي مبسوطة.. إشراقة طبيعية مفيش زيها.",
        aspect: "square",
        featured: true,
      },
      {
        id: "her-2",
        src: "/assets/her/pure-joy.jpg",
        title: "Pure Joy",
        caption: "ضحكة من القلب بتنور اليوم وتغير المود كله في لحظة.",
        aspect: "square",
      },
      {
        id: "her-3",
        src: "/assets/her/quiet-elegance.jpg",
        title: "Quiet Elegance",
        caption: "هدوء ورقي مفيش أرق منه.. دايماً مميزة بطبيعتك.",
        aspect: "tall",
        objectPosition: "object-bottom",
      },
      {
        id: "her-4",
        src: "/assets/her/sweet-spontaneity.jpg",
        title: "Sweet Spontaneity",
        caption: "العفوية اللي بتخليكي دايماً قريبة للقلب ومريحة لأي حد حواليكي.",
        aspect: "square",
      },
      {
        id: "her-5",
        src: "/assets/her/unstoppable-sparkle.jpg",
        title: "Unstoppable Sparkle",
        caption: "طاقة حلوة وروح جميلة بتسيب أثر لطيف في كل مكان.",
        aspect: "portrait",
      },
    ],
  },

  ourMoments: {
    sectionTitle: "Our Favorite Moments",
    sectionSubtitle: "ذكريات من أيام ما بتتمسحش من البال، وكل صورة وراها قصة وضحكة حقيقية عشناها سوا.",
    photos: [
      {
        id: "us-1",
        src: "/assets/us/us-01.jpg",
        title: "The Very Beginning",
        caption: "من أول الأيام والذكريات اللي بدأت من سنين.. كل يوم بيعدي بيثبت إن وجودك في حياتي كان أحلى صدفة وأغلى مكسب.",
        rotationDeg: -2.5,
        location: "Where it all started",
        aspectClass: "aspect-square",
      },
      {
        id: "us-2",
        src: "/assets/us/us-02.jpg",
        title: "Unfiltered Laughter",
        caption: "اليوم ده والضحك اللي كان من القلب ومن غير أي ترتيب.. مفيش وقت بيعدي معاكي إلا ويسيب أثر مريح وذكرى بتفرّح.",
        rotationDeg: 2.8,
        location: "Winter Walks",
        aspectClass: "aspect-[4/5]",
        objectPosition: "object-bottom",
      },
      {
        id: "us-3",
        src: "/assets/us/us-03.jpg",
        title: "In My Biggest Moments",
        caption: "وجودك جنبي في أهم وأحلى لحظات حياتي كان هو المعنى الحقيقي للفرحة.. دايماً شريكة أهم تفاصيلي ونجاحاتي وسندي في كل خطوة.",
        rotationDeg: -1.8,
        location: "Special Milestone",
        aspectClass: "aspect-[4/5]",
        objectPosition: "object-top",
      },
      {
        id: "us-4",
        src: "/assets/us/us-04.jpg",
        title: "Peace & Golden Moments",
        caption: "في كل صورة سكون وراحة بال مش بلاقيهم في أي مكان تاني.. أيام حلوة عشناها سوا، ولسه اللي جاي أجمل وأهدى بكتير.",
        rotationDeg: 3.2,
        location: "Good Memories",
        aspectClass: "aspect-[4/5]",
        objectPosition: "object-top",
      },
    ],
  },

  /*
   * =====================================================================
   * THE LOVE LETTER:
   * Clean English editorial UI / envelope elements, with deep heartfelt
   * Arabic & English message paragraphs inside the letter content.
   * =====================================================================
   */
  birthdayMessage: {
    sectionIntro: "A little birthday message for you.",
    buttonText: "OPEN YOUR LETTER",
    envelopeTitle: "For Sara, With All My Love",
    letterSalutation: "Dearest Sara,",
    dateText: "On Your Special Day",
    paragraphs: [
      "Happy Birthday, Sara ✨\nكل سنة وإنتي طيبة وبخير ودايماً منورة الدنيا. حبيت أعملك حاجة بسيطة في اليوم ده تفرحك، لأن وجودك بجد بيفرق في كل حاجة حواليكي وبيديها طعم ومعنى ألطف.",
      "You have this quiet, calming presence that makes everything feel simpler and lighter. وسط زحمة الأيام والدوشة، القعدة معاكي والضحكة التلقائية وطريقتك وإنتي بتحكي بتدّي راحة بال حقيقية مش سهل الواحد يلاقيها. I truly appreciate who you are — your kindness, your genuine heart, and the effortless warmth you bring into my life.",
      "I didn't want this letter to be full of exaggerated words or clichés, because real feelings don't need noise. كل اللي عايز أقوله إني ممتن جداً لوجودك في حياتي، وممتن لكل اللحظات البسيطة والذكريات اللي عشناها سوا.. Every conversation, every shared laugh, and every quiet moment we've had means more than you probably realize.",
      "في سنتك الجديدة دي، أتمنى ليكي كل راحة البال، والتوفيق، والنجاح، وأيام هادية ومليانة طمأنينة شبه قلبك. I hope this year brings you all the peace, joy, and gentle happiness you so rightfully deserve. تفضلي دايماً سارة اللي بنحبها، بضحكتك وطاقتك الجميلة."
    ],
    closing: "Forever and always yours,",
    signOff: "Always here for you ♡",
  },

  specialThings: {
    sectionTitle: "Things That Make You Special",
    sectionSubtitle: "Just a few of the countless qualities that make you uniquely, wonderfully you.",
    items: [
      {
        id: "smile",
        title: "Your Smile",
        subtitle: "Instantly lights up any room",
        iconName: "Smile",
        compliment: "It's genuinely contagious.",
        detailText: "The kind of smile that turns any rough morning around in seconds. Natural, bright, and completely effortless.",
      },
      {
        id: "energy",
        title: "Your Energy",
        subtitle: "Vibrant and refreshingly uplifting",
        iconName: "Sun",
        compliment: "A breath of fresh air.",
        detailText: "You bring an enthusiasm and lightness of spirit that makes everyone around you feel comfortable and happy.",
      },
      {
        id: "personality",
        title: "Your Personality",
        subtitle: "Kind-hearted, witty & authentic",
        iconName: "Sparkles",
        compliment: "One in a million.",
        detailText: "You are thoughtful, hilariously quick-witted, and genuinely empathetic. You never have to pretend to be anyone else.",
      },
      {
        id: "details",
        title: "Your Little Details",
        subtitle: "The subtle quirks that are so 'you'",
        iconName: "Heart",
        compliment: "Adorably unforgettable.",
        detailText: "From your expressive gestures when telling a story to the gentle care you show to little things that matter to you.",
      },
      {
        id: "being-you",
        title: "Simply Being You",
        subtitle: "The whole wonderful picture",
        iconName: "Gem",
        compliment: "Incomparable.",
        detailText: "At the end of the day, there is nobody quite like Sara. And that is by far your greatest superpower.",
      },
    ],
  },

  finalMessage: {
    headline: "ONE MORE THING, SARA...",
    subheadline: "Hope your year is as amazing as you are.",
    buttonText: "ONE LAST SURPRISE",
    modalTitle: "Here's to Your Best Year Yet! 🥂✨",
    modalSubtitle: "Celebrating every dream, goal, and adventure waiting for you ahead.",
    photoSrc: "/assets/her/one-last-surprise.jpg",
    paragraphs: [
      "Sara, as you blow out your candles and step into this new year of your life, I hope you embrace every single opportunity that comes your way.",
      "May this chapter bring you bold achievements, effortless laughter, unforgettable travels, peaceful mornings, and memories that make your heart sing with pride.",
      "You have so much brilliance to offer the world, and there is no doubt this year will be filled with milestones worthy of celebration."
    ],
    highlightWishes: [
      "Endless Joy & Laughter",
      "Huge Personal Milestones",
      "Exciting New Adventures",
      "Peace, Health & Fulfillment"
    ],
  },

  finalSecret: {
    tooltip: "Psst... you found a hidden birthday star! Click me ✨",
    secretBadge: "SECRET BIRTHDAY NOTE",
    secretTitle: "You Found the Secret Easter Egg! 🌸",
    secretMessage: "You've always had an eye for subtle details! In case nobody has told you today: you are appreciated, celebrated, and thought of with so much admiration. Enjoy every second of your birthday!",
    authorNote: "Keep shining, Sara ✨",
  },
};
