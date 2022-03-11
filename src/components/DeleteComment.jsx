import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function ({ comment_id, author, comments, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  console.log(comment_id, author, "in delete comment");

  const handleClick = () => {
    console.log(comment_id, "in delete button");
    setComments((currComments) =>
      currComments.filter((comment) => comment.comment_id !== comment_id)
    );
  };

  if (loggedInUser.username === author) {
    return <button onClick={handleClick}>Delete Comment</button>;
  } else return <></>;
}
