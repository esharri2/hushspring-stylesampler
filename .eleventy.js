

module.exports = function (config) {
  config.addLayoutAlias("default", "default.njk");
  config.addPassthroughCopy({ "./js/main.js": "/main.js" });
  config.addNunjucksFilter("makeFontString", function(string) { 
    if (!string) return;
    return string.replace(" ", "+");
  });

  config.setUseGitIgnore(false);
  
  return {
    markdownTemplateEngine: "njk",
    dir: {
      output: "dist",
    },
  };
};
