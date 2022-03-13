import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { deleteComment } from "../utils/api";

export default function ({ comment, index, setComments }) {
  const { comment_id, author } = comment;
  const { loggedInUser } = useContext(UserContext);
  const [isError, setIsError] = useState(false);

  console.log(comment_id, author, "in delete comment");
  const handleClick = () => {
    console.log(comment_id, "in delete button");
    setIsError(false);
    setComments((currComments) =>
      currComments.filter((comment) => comment.comment_id !== comment_id)
    );
    deleteComment(comment_id).catch((err) => {
      setIsError(true);
      setComments((currentComments) => {
        const newComments = [...currentComments]
        newComments.splice(index, 0, comment);
        return newComments;
      });
    });
  };

  if (loggedInUser.username === author) {
    return <button onClick={handleClick}>Delete Comment</button>;
  } else return <></>;
}
