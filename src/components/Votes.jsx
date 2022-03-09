import { useState } from "react";
import { patchVotes } from "../utils/api";

export default function Votes({ articleId, votes }) {
  const [voteDisp, setVoteDisp] = useState(votes);
  const [buttonDisabled, setButtonDisabled] = useState({
    plus: false,
    minus: true,
  });
  const handleClick = (voteInc) => {
    setVoteDisp(voteDisp + voteInc);
    setButtonDisabled((currentButtonDisabled) => {
      const newButtonDisabled = { ...currentButtonDisabled };
      if (voteInc === 1) {
        newButtonDisabled.plus = true;
        newButtonDisabled.minus = false;
      }
      if (voteInc === -1) {
        newButtonDisabled.minus = true;
        newButtonDisabled.plus = false;
      }
      return newButtonDisabled;
    });
    patchVotes(articleId, voteInc).catch((err) => {
      console.log(err);
    });
  };

  return (
    <section>
      <h4>Likes {voteDisp}</h4>
      
      <button
        className={`button--disabled_${buttonDisabled.plus}`}
        
        onClick={() => {
          handleClick(1);
        }}
      >
        👍 Like
      </button>
      <p className={`button--disabled_${buttonDisabled.minus}`}>👍 Liked!</p>
      <button
      className={`button--disabled_${buttonDisabled.minus}`}
        
        onClick={() => {
          handleClick(-1);
        }}
        
      >
        Unlike
      </button>
    </section>
  );
}
