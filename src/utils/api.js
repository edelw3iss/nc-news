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
  if (topic_slug === undefined) {
    return api.get("/articles").then((res) => {
      return res.data.articles;
    });
  } else {
    return api.get(`/articles?topic=${topic_slug}`).then((res) => {
      return res.data.articles;
    });
  }
}

export function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
}

export function patchVotes(article_id, inc_votes) {
  console.log({ inc_votes }, "inc_votes in api");
  return api.patch(`/articles/${article_id}`, { inc_votes }).then((res) => {
    console.log(res.data.article, "in patch votes");
    return res.data.article;
  });
}

export function getCommentsByArticleId(article_id) {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
}

export function postCommentByArticleId(article_id, newComment) {
  return api
    .post(`/articles/${article_id}/comments`, newComment)
    .then((res) => {
      return res.data.comment;
    });
}
