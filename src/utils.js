import { getCollection } from "astro:content";

// Get all published articles
export const allArticles = await getCollection("articles", ({ data }) => {
  return data.published == true;
});

// Sort articles
export const sortedArticles = allArticles.sort((a, b) => {
  return b.data.created - a.data.created;
});

// Filter only featured articles
export const featuredArticles = sortedArticles.filter((a) => {
  return (a.featured = true);
});

// Gel all published podcasts
export const allPodcasts = await getCollection("podcasts", ({ data }) => {
  return data.published == true;
});

// Sort all podcasts
export const sortedPodcasts = allPodcasts.sort(function (a, b) {
  return b.data.created - a.data.created;
});
