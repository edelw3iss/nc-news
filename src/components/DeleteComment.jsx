import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { deleteComment } from "../utils/api";

export default function ({ comment, index, setComments }) {
  const { comment_id, author } = comment;
  const { loggedInUser } = useContext(UserContext);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setComments((currComments) =>
      currComments.filter((comment) => comment.comment_id !== comment_id)
    );
    deleteComment(comment_id)
      .then(() => {
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setComments((currentComments) => {
          const newComments = [...currentComments];
          newComments.splice(index, 0, comment);
          return newComments;
        });
      });
  };

  if (loggedInUser.username === author) {
    return (
      <div>
        <button onClick={handleClick}>Delete Comment</button>
        {isError ? <h3>Problem deleting comment - please try again</h3> : ""}
      </div>
    );
  } else return <></>;
}
