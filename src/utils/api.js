import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-ec.herokuapp.com/api",
});

export function getTopics() {
  return api.get("/topics").then((res) => {
    return res.data.topics;
  });
}

export function getArticlesByTopic(topic_slug, sort_by, order_by) {
  let topicString = `topic=${topic_slug}&`;
  const sortByString = `sort_by=${sort_by}`;
  const orderByString = `&order=${order_by}`;
  if (topic_slug === undefined) topicString = "";
  return api
    .get(`/articles?${topicString}${sortByString}${orderByString}`)
    .then((res) => {
      return res.data.articles;
    });
  // }
}

export function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
}

export function patchVotes(article_id, inc_votes) {
  return api.patch(`/articles/${article_id}`, { inc_votes }).then((res) => {
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

export function deleteComment(comment_id) {
  return api.delete(`/comments/${comment_id}`)
}
