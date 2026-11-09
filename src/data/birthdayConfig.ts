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
   * THE LOVE LETTER (Romantic & Heartfelt bilingual mix: Arabic & English):
   * =====================================================================
   */
  birthdayMessage: {
    sectionIntro: "A little birthday message for you.",
    buttonText: "OPEN YOUR LETTER",
    envelopeTitle: "For Sara, With All My Love",
    letterSalutation: "Dearest Sara,",
    dateText: "On Your Special Day",
    paragraphs: [
      "Happy Birthday, my love ✨\nكل سنة وإنتي حبيبتي، وكل سنة وإنتي أجمل وأغلى نعمة دخلت حياتي. اليوم ده مش بس يوم عيد ميلادك، ده اليوم اللي اتولدت فيه أحلى صدفة وأطيب قلب في الدنيا.. اليوم اللي بسببه حياتي بقى ليها طعم وشكل تاني خالص.",
      "From the very first moment, you brought something so special into my world. عينيكي لما بتضحك، وصوتك وإنتي بتتكلمي بحماس، ورقتك اللي ملهاش شبه.. كل تفصيلة فيكي بتخليني أحبك أكتر من اليوم اللي قبله. You are not just someone I love; you are my safe place, my comfort, and the sweetest part of every single day.",
      "I fall in love with you all over again in the quietest, simplest moments. في كل مرة بتبصيلي فيها وتطمنيني، في كل ضحكة من القلب بنضحكها سوا، وفي كل وقت بكون فيه تعبان وبمجرد ما أسمع صوتك الدنيا بتهدى في عيني. بحب حنيتك، وبحب عفويتك، وبحب إنك دايماً إنتي.. وبحب قد إيه قلبي بيطمن وهو جنبك ومعاكي.",
      "On your special day, I want to promise you that I will always love you, cherish you, and be right by your side through it all. أتمنى ليكي سنة مليانة حب، وسعادة، وكل الأحلام اللي بتتمناها روحك الحلوة تتحقق قدام عينيكي. تفضلي دايماً منورة قلبي، يا حبيبتي وسندي وأجمل ما في أيامي."
    ],
    closing: "Forever and always in love with you,",
    signOff: "Yours, with all my heart & soul ♡",
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
