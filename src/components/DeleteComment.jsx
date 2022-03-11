import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function ({comment, setComments}) {
    const {loggedInUser} = useContext(UserContext);
    console.log(comment.comment_id, comment.author, loggedInUser.username, "in delete comment")
    
    // const handleClick = () => {
    //     setComments()
    // }

    if (loggedInUser.username === comment.author) {
        return <button>Delete Comment</button>
      }
    else return <></>
}