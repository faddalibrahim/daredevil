import React, { useState, ChangeEvent } from 'react';
import Cover from '@assets/images/man-smiling-and-holding-smartphone.png';
import StageStyles from './Stage.module.css';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { GoBack } from '@assets/icons/Icons';
import RoundButton from '@components/round_button/RoundButton';

interface RadioOption {
  label: string;
  value: string;
}

interface StageTwoProps {
  handleSubmit: () => void;
  handleGoBack: () => void;

}

const StageTwo: React.FC<StageTwoProps> = ({ handleSubmit, handleGoBack }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const radioOptions: RadioOption[] = [
    { label: 'week', value: 'week' },
    { label: 'fortnight', value: 'fortnight' },
    { label: 'month', value: 'month' },
  ];

  const BtnStyles = {
    width:'90%',
    marginLeft:'1rem'
  }

  return (
    <div className={StageStyles.container}>
      <div className={StageStyles.textColumn}>
        <h2>How long do you wanna go at it?</h2>
        <div className={StageStyles.radio_button}>
          {radioOptions.map((option: RadioOption) => (
            <Input
              key={option.value}
              type="radio"
              label={option.label}
              name="duration"
              value={option.value}
              onChange={handleOptionChange}
              checked={selectedOption === option.value}
            />
          ))}
        </div>
        <div className={StageStyles.wrapper__roundButton__2}>
          <RoundButton onClick={handleGoBack} children={<a title='back'><GoBack /></a>} />
          <Button style= {BtnStyles} onClick={handleSubmit} children={<h3>Next</h3>}></Button>
        </div>

      </div>

      <div className={StageStyles.imageColumn}>
        <img src={Cover} alt="Stage One" />
      </div>
    </div>
  );
};

export default StageTwo;
