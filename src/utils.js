import { getCollection } from "astro:content";

// Get all published articles
export const allArticles = await getCollection("articles", ({ data }) => {
  return data.published == true;
});

// Sort articles
export const sortedArticles = allArticles.sort((a, b) => {
  return b.data.pubDate - a.data.pubDate;
});

// Filter only featured articles
export const featuredArticles = sortedArticles.filter((a) => {
  return a.data.featured === true;
});

// Get all published podcasts
export const allPodcasts = await getCollection("podcasts", ({ data }) => {
  return data.published == true;
});

// Function to generate excerpt from article content
export function generateExcerpt(content, maxLength = 200) {
  // Remove HTML tags and markdown formatting
  const cleanContent = content
    .replace(/---[\s\S]*?---/, '') // Remove frontmatter
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*{1,2}(.*?)\*{1,2}/g, '$1') // Remove bold/italic
    .replace(/\n\s*\n/g, ' ') // Replace multiple newlines with space
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();

  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  
  // Find the last complete sentence within the limit
  const truncated = cleanContent.substring(0, maxLength);
  const lastSentenceEnd = Math.max(
    truncated.lastIndexOf('.'),
    truncated.lastIndexOf('!'),
    truncated.lastIndexOf('?')
  );
  
  if (lastSentenceEnd > maxLength * 0.7) {
    return truncated.substring(0, lastSentenceEnd + 1);
  } else {
    // If no good sentence break, just truncate at word boundary
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpace) + '...';
  }
}

// Function to convert markdown formatting in titles to HTML
export function formatTitle(title) {
  if (!title) return title;
  
  // Convert markdown italics (*text*) to HTML italics (<i>text</i>)
  return title.replace(/\*([^*]+)\*/g, '<i>$1</i>');
}
