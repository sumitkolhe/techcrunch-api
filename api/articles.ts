import { VercelRequest, VercelResponse } from "@vercel/node";
import { addHeaders } from "../utils/header";
import { getArticlesEndpoint } from "../utils/endpoint";
import xray from "x-ray";

const x = xray();

module.exports = (req: VercelRequest, res: VercelResponse) => {
  addHeaders(res);
  const tag = req.query.tag as string;

  try {
    x(getArticlesEndpoint(tag), ".post-block", [
      {
        title: ".post-block__header h2",
        link: ".post-block__title a@href",
        timestamp: "time@datetime",
        author: x(".river-byline__authors a", ["@html"]),
        description: ".post-block__content @text",
        image: ".post-block__media img@src",
      },
    ])((error, articles) => {
      let responseJson = new Object();
      let articlesArray = new Array();
      let str = JSON.stringify(articles).replace(/(\\n)*(\\t)*/g, "");

      JSON.parse(str).forEach((article: any) => {
        article.image = sanitizeImage(article.image);
        articlesArray.push(article);
      });

      responseJson["total"] = Object.keys(articles).length;
      responseJson["articles"] = articlesArray;

      res.json(responseJson);
    });
  } catch (error) {
    res.json(error);
  }
};

const sanitizeImage = (imageLink: string) => {
  return imageLink.split("?")[0];
};
