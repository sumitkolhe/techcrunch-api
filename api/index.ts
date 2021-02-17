import { NowRequest, NowResponse } from "@vercel/node";
import { addHeaders } from "../utils/header";
import xray from "x-ray";

const x = xray();

module.exports = (req: NowRequest,res: NowResponse) => {
  addHeaders(res);
  res.json({
    status: "online",
    Documentation: "https://github.com/sumitkolhe/techcrunch-api",
  });
};
