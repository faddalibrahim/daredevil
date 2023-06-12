import React from 'react';
import StageStyles from  './Stage.module.css';
import Cover from '@assets/images/man-smiling-and-holding-smartphone.png';
import Button from '@components/button/Button';
import Input from '@components/input/Input';

interface StageOneProps {
  handleSubmit: () => void;
}

const StageOne: React.FC<StageOneProps> = ({ handleSubmit, handleGoBack }) => {
  return (
    <div className={StageStyles.container}>
      <div className={StageStyles.textColumn}>
        <h2>What do you wanna call the Journey?</h2>
        <Input type="text" name="name"  placeholder = "name"/>
        <Button onClick={handleSubmit}>next</Button>
      </div>
      <div className={StageStyles.imageColumn}>
        <img src={Cover} alt="Stage One" />
      </div>
    </div>
  );
};

export default StageOne;
