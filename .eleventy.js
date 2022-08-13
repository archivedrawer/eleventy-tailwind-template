module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add("*.md");
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy("assets");
}
