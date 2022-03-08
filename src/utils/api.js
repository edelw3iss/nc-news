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
  return api.get(`/articles?topic=${topic_slug}`).then((res) => {
    return res.data.articles;
  });
}

export function getArticles() {
  return api.get("/articles").then((res) => {
    return res.data.articles;
  });
}

export function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  })
}

