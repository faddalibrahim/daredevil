import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Component
import RoundButton from '@components/round_button/RoundButton';
import ProgressBar from '@components/progress_bar/ProgressBar';
import ChallengeBox from '@components/challenge_box/ChallengeBox';
import { GoBack } from '@assets/icons/Icons';


//Styles
import StageStyles from "./Stage.module.css";

interface StageThreeProps {
  handleSubmit: () => void;
  handleGoBack: () => void;
}

const StageThree: React.FC<StageThreeProps> = ({ handleSubmit, handleGoBack }) => {
  const [progressVal] = useState<number>(50);

  return (
    <>
      <div className={StageStyles.challenge__container}>
      <div className={StageStyles.arrow} onClick={handleGoBack}>
        &larr; Go Back
      </div>
        <div className={StageStyles.text__row}>
          <small>
            select up to X challenges to include in your freak journey{" "}
          </small>
          <small>click the plus button to create custom challenges</small>
          <ProgressBar value={progressVal} />
          {/* TODO: DISPLAY ADDED CHALLENGES HERE */}
          <div className={StageStyles.challenge__container__list}>
            <ChallengeBox children={<h3>Challenege one</h3>} />
            <ChallengeBox children={<h3>Challenege one</h3>} />
            <ChallengeBox children={<h3>Challenege one</h3>} />
          </div>
        </div>
        <div className={StageStyles.wrapper__roundButton}>
          <RoundButton onClick={handleSubmit} children = {<a title='add'>&#43;</a>} />
        </div>
      </div>
    </>
  );
};

export default StageThree;




