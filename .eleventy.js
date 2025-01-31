module.exports = function(eleventyConfig) {
    // Add a collection for posts
    eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
    });

    const { DateTime } = require("luxon");
    
    eleventyConfig.addFilter("postDate", dateObj => {
      return DateTime.fromJSDate(dateObj).setZone("UTC").toFormat('yyyy · MM · dd')
    })

    // Copy assets and css to the output folder
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
  
    // Set input and output directories
    return {
      dir: {
        pathPrefix: "/shoreleave/",
        input: ".",       // Source files location
        includes: "_includes", // Layout templates location
        output: "_site"   // Output folder for the generated site
      }
    };
  };  