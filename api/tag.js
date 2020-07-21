const xray = require("x-ray");
const x = xray();

module.exports = (req, res) => {
  const  tag  = req.query.tag
  console.log(tag)
  x(`https://techcrunch.com/tag/${tag}`, ".post-block", [
    {
      title: ".post-block__header h2",
      link: ".post-block__title a@href",
      time: "time@datetime",
      author: x(".river-byline__authors a", ["@html"]),
      content: ".post-block__content @text",
      image: ".post-block__media img@src",
    },
  ])(function (err, obj) {
    if (obj != "") {
      var responseJson = new Object();
      var totalArticles = Object.keys(obj).length;
      var str = JSON.stringify(obj);
      var convertedStr = str.replace(/(\\n)*(\\t)*/g, "");
      var newObj = JSON.parse(convertedStr);
      responseJson["total"] = totalArticles;
      responseJson["articles"] = newObj;
      res.json(responseJson);
    } else {
      res.json({ message: "No data found for the given tag" });
    }
  });
};
