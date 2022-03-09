import { useState } from "react";
import { patchVotes } from "../utils/api";

export default function Votes({ articleId, votes }) {
  const [voteDisp, setVoteDisp] = useState(votes);
  const [buttonDisabled, setButtonDisabled] = useState({
    plus: false,
    minus: true,
  });
  const handleClick = (voteInc) => {
    setVoteDisp((currVoteDisp) => currVoteDisp + voteInc);
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
      setVoteDisp((currVoteDisp) => currVoteDisp - voteInc);
      setButtonDisabled((currButtDis) => {
        return {plus: false, minus: true}
      })
    });
  };

  return (
    <section>
      <h4>
        <i class="fa-solid fa-thumbs-up"></i> Likes {voteDisp}
      </h4>

      <button
        className={`button--disabled_${buttonDisabled.plus}`}
        onClick={() => {
          handleClick(1);
        }}
      >
        <i class="fa-solid fa-thumbs-up"></i> Like
      </button>

      <button
        className={`button--disabled_${buttonDisabled.minus}`}
        onClick={() => {
          handleClick(-1);
        }}
      >
        Unlike
      </button>
      <p className={`button--disabled_${buttonDisabled.minus}`}>
        <i class="fa-solid fa-thumbs-up"></i> Liked!
      </p>
    </section>
  );
}
