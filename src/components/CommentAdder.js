import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function CommentAdder({ addComment }) {
  const [comment, setComment] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { username: loggedInUser.username, body: comment };
    console.log(loggedInUser, "user")
    addComment(newComment);
    setComment("");
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
      </fieldset>
    </form>
  );
}
