import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-ec.herokuapp.com/api",
});

export function getTopics() {
  return api.get("/topics").then((res) => {
    return res.data.topics;
  });
}

export function getArticlesByTopic(topic_slug) {
  console.log(topic_slug, "in get function")
  return api.get(`/articles?topic=${topic_slug}`).then((res) => {
    return res.data.articles;
  });
}

export function getArticles() {
  return api.get("/articles").then((res) => {
    return res.data.articles;
  });
}
