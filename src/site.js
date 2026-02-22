export const site = {
  title: "Folly Magazine",
  description: "An Oxford student publication focused on ambitious, long-form creative work in literature, politics, and the arts.",
  author: "Malaika Aiyar", // Used for SEO and RSS
  address: "folly-seven.vercel.app", // change this to be smth like "yourdomain.com"

  // Navigation — columnar links in left sidebar
  navigation: [
    // { title: "Home", url: "/" },
    { title: "Vol. 2", url: "/magazine/volume-2" },
    { title: "Vol. 1", url: "/magazine/volume-1" },
    { title: "About", url: "/about" },
  ],

  // Images for right column — keyed by path (article pages pass image via Layout prop)
  pageImages: {
    // "/support": "/images/cover.webp",
  },

  // Article order on volume pages — slugs in print order (as they appear in the magazine)
  volumeOrder: {
    1: [
      "elite-paralyis",
      "switch-ignition",
      "mating-in-the-rearview-mirror",
      "mila",
      "from-the-bronx-to-the-world",
      "kostumjude",
      "on-the-imminent-death-of-my-grandfather",
      "lake-atitlan",
      "afire",
      "built-on-quicksand",
    ],
    2: [
      "minimalist-intervention",
      "boyish-sun",
      "cradle-song",
      "cruisers",
      "nature-as-witness",
      "north-shore",
      "whitewash",
      "education",
      "alienation-effect",
      "joshua-freeman",
    ],
  },

  // Pages titles and desripriptions — used for SEO (ONLY!)
  // That is, if you want to change the title displayed on the website for the "support" page, change it in the `support.md` file
  pages: {
    index: {
      title: "Home",
      description: "Home page for the Folly Magazine",
    },
    // stories: {
    //   title: "Magazine",
    //   description: "Everything we've ever written",
    // },
    magazine: {
      title: "Magazine",
      description: "Read Folly Magazine",
    },
    about: {
      title: "Masthead",
      description: "A short story of the project or whatever",
    },
    support: {
      title: "Support",
      description: "Support independent media",
    },
  },
  
};
