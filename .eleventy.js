
module.exports = function(eleventyConfig) {
  // Passthrough copy for images and styles
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Shortcode for reusable callouts
  eleventyConfig.addShortcode("callout", function(text) {
      return `<div class="callout">${text}</div>`;
  });
};
