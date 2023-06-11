import React from 'react';
import './progress-bar.css';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const progressStyle = {
    width: `${value}%`,
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
