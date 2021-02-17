const BASE_URL = "https://techcrunch.com/";

export const getArticlesEndpoint = (tag?: string) => {
  if (tag) return BASE_URL + `tag/${tag}`;
  return BASE_URL;
};
