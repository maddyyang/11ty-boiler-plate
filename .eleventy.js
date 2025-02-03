module.exports = function(eleventyConfig) {
  // Create a "posts" collection from Markdown files in the posts folder
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  // Tell Eleventy to copy the "styles" folder to "_site"
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes"
    }
  };
};

