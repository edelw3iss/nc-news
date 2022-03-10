import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import {postCommentByArticleId} from "../utils/api"

export default function CommentAdder({ articleId, setComments }) {
  const [comment, setComment] = useState("");
  const { loggedInUser } = useContext(UserContext);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { username: loggedInUser.username, body: comment };
    console.log(loggedInUser, "user")
    addComment(newComment);
    setComment("");
  };

  const addComment = (commentToAdd) => {
    const formattedComment = {
      votes: 0,
      author: commentToAdd.username,
      body: commentToAdd.body,
      created_at: new Date().toISOString(),
    };
    setIsError(false);
    setComments((currentComments) => {
      return [formattedComment, ...currentComments];
    });
    postCommentByArticleId(articleId, commentToAdd).catch((error) => {
      setIsError(true);
      setComments((currentComments) => {
        return currentComments.slice(1);
      })
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add comment about article</legend>
        <label htmlFor="comment">Comment:</label>
        <input
          id="comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button type="submit">add comment</button>
        {isError ? <p>Your comment was not submitted</p> : ""}
      </fieldset>
    </form>
  );
}
