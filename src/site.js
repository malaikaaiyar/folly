export const site = {
  title: "Folly Magazine",
  description: "An Oxford student publication focused on ambitious, long-form creative work in literature, politics, and the arts.",
  author: "Malaika Aiyar", // Used for SEO and RSS
  address: "folly-seven.vercel.app", // change this to be smth like "yourdomain.com"

  // Navigation — contains titles and links for the menu bar on the top:
  navigation: [
    { title: "home", url: "/" },
    { title: "Magazine", url: "/magazine" },
    { title: "About", url: "/about" },
  ],

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
