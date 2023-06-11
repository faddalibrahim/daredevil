import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@components/input/Input';
import ChallengeStyles from './Custom.module.css';
import Button from '../../components/button/Button';

const CustomChallenge: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const titleInputStyle = {
    width: '40rem',
  };

  const descriptionInputStyle = {
    display: 'flex',
    boxSizing: 'border-box',
    background: '#1E1E1E',
    width: '40rem',
    height: '10rem',
    input: {
      height: '10rem',
    },
  };

  const buttonStyle = {
    width: '40rem',
    background: 'var(--app-green)',
    marginTop: '1rem',
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  function handleSubmit(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={ChallengeStyles.challenge__wrapper}>
      <div className={ChallengeStyles.arrow} onClick={handleGoBack}>
        &larr; Go Back
      </div>
      <Input
        name="title"
        value={title}
        onChange={handleTitleChange}
        placeholder="custom challenge"
        style={titleInputStyle} // Apply custom style for title input
      />
      <Input
        name="description"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="challenge description"
        style={descriptionInputStyle} // Apply custom style for description input
      />
      <Button
        onClick={handleSubmit}
        children={<h3>Add Challenge</h3>}
        type={''}
        style={buttonStyle}
      ></Button>
    </div>
  );
};

export default CustomChallenge;
