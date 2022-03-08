import { useState } from "react";
import { patchVotes } from "../utils/api";

export default function Votes({articleId, votes}) {
  const [voteDisp, setVoteDisp] = useState(votes);
  const handleClick = (voteInc) => {
    setVoteDisp(voteDisp + voteInc);
    patchVotes(articleId, voteInc).catch((err) => {
      console.log(err);
    })
  }
  
  
  return (
    <section >
      <h4>Votes {voteDisp}</h4>
      <button onClick={() => {handleClick(1)}}>👍</button>
      <button onClick={() => {handleClick(-1)}} className=".LikeButtons__button">👎</button>
    </section>
  );
}


