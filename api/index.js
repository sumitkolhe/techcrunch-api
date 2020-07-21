const xray = require("x-ray");
const x = xray();

module.exports = (req, res) => {
  x("https://techcrunch.com", ".post-block", [
    {
      title: ".post-block__header h2",
      link: ".post-block__title a@href",
      timestamp: "time@datetime",
      author: x(".river-byline__authors a", ["@html"]),
      description: ".post-block__content @text",
      image: ".post-block__media img@src",
    },
  ])(function (err, obj) {
    var responseJson = new Object();
    var totalArticles = Object.keys(obj).length;
    var str = JSON.stringify(obj);
    var convertedStr = str.replace(/(\\n)*(\\t)*/g, "");
    var newObj = JSON.parse(convertedStr);  
    responseJson["total"] = totalArticles;
    responseJson["articles"] = newObj;
    res.json(responseJson);
  });
};
