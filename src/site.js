export const site = {
  title: "Folly Magazine",
  description: "An Oxford student publication focused on ambitious, long-form creative work in literature, politics, and the arts.",
  author: "Malaika Aiyar", // Used for SEO and RSS
  address: "folly-seven.vercel.app", // change this to be smth like "yourdomain.com"

  // Navigation — contains titles and links for the menu bar on the top:
  navigation: [
    { title: "home", url: "/" },
    { title: "stories", url: "/stories" },
    // { title: "podcast", url: "/podcast" },
    { title: "about", url: "/about" },
    // { title: "support", url: "/support" },
  ],

  // Footer — the section at the bottom of the page. Usually contains some important links.

  // footer: [
  //   { title: "rhizoma", url: "https://rhizoma.cc/" },
  //   { title: "mastodon", url: "https://mastodon.social/@essens" },
  //   { title: "makertube", url: "https://makertube.net/c/essens.cc/videos" },
  //   { title: "website", url: "https://essens.cc/" },
  //   { title: "rss", url: "/rss.xml" },
  //   { title: "email", url: "mailto:hi@essens.dev" },
  // ],

  // Pages titles and desripriptions — used for SEO (ONLY!)
  // That is, if you want to change the title displayed on the website for the "support" page, change it in the `support.md` file
  pages: {
    index: {
      title: "Home",
      description: "Home page for the Folly Magazine",
    },
    stories: {
      title: "Stories",
      description: "Everything we've ever written",
    },
    // If you want to get rid of the podcast section, remove it here, from Navigation section above, as well as delete the "src/pages/podcast" folder
    // podcast: {
    //   title: "Podcast",
    //   description: "Our little tiny podcast",
    // },
    about: {
      title: "About",
      description: "A short story of the project or whatever",
    },
    support: {
      title: "Support",
      description: "Support independent media",
    },
  },
};
