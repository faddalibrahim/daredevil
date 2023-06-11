import React from 'react';
import ButtonStyles from './RoundButton.module.css'

interface RoundButtonProps {
  onClick: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ onClick }) => {
  return (
    <button className={ButtonStyles.round__button} onClick={onClick}>
      <span className={ButtonStyles.plus__icon}>&#43;</span>
    </button>
  );
};

export default RoundButton;
