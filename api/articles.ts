import { NowRequest, NowResponse } from "@vercel/node";
import { addHeaders } from "../utils/header";
import { getArticlesEndpoint } from "../utils/endpoint";
import xray from "x-ray";

const x = xray();

module.exports = (req: NowRequest, res: NowResponse) => {
  addHeaders(res);
  const tag = req.query.tag as string;

  x(getArticlesEndpoint(tag), ".post-block", [
    {
      title: ".post-block__header h2",
      link: ".post-block__title a@href",
      timestamp: "time@datetime",
      author: x(".river-byline__authors a", ["@html"]),
      description: ".post-block__content @text",
      image: ".post-block__media img@src",
    },
  ])((err, articles) => {
    if (err) res.json(err);
    var responseJson = new Object();
    var str = JSON.stringify(articles);
    var convertedStr = str.replace(/(\\n)*(\\t)*/g, "");
    responseJson["total"] = Object.keys(articles).length;
    responseJson["articles"] = JSON.parse(convertedStr);
    res.json(responseJson);
  });
};
