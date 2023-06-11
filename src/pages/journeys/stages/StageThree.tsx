import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Component
import RoundButton from '@components/round_button/RoundButton';
import ProgressBar from '@components/progress_bar/ProgressBar';
import ChallengeBox from '@components/challenge_box/ChallengeBox';

//Styles
import StageStyles from './Stage.module.css';

interface StageThreeProps {
  handleSubmit: () => void;
}

const StageThree: React.FC<StageThreeProps> = ({ handleSubmit }) => {
  const [progressVal] = useState<number>(50);
  const navigate = useNavigate();

  const addFreak = (): void => {
    // Navigate to the challenge route or any other page
    navigate('/challenge');
  };

  return (
    <>
      <div className={StageStyles.challenge__container}>
        <div className={StageStyles.text__row}>
          <h2>select up to X challenges to include in your freak journey </h2>
          <h2>click the plus button to create custom challenges</h2>
          <ProgressBar value={progressVal} />
          {/* TODO: DISPLAY ADDED CHALLENGES HERE */}
          <div className={StageStyles.challenge__container__list}>
            <ChallengeBox children={<h3>Challenege one</h3>}/>
            <ChallengeBox children={<h3>Challenege one</h3>}/>
            <ChallengeBox children={<h3>Challenege one</h3>}/>
          </div>
        </div>
        <div className={StageStyles.wrapper__roundButton}>
          <RoundButton onClick={addFreak} />
        </div>
      </div>
    </>
  );
};

export default StageThree;
