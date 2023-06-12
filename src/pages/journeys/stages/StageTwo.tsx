import { useState, ChangeEvent } from "react";
import Cover from "@assets/images/man-smiling-and-holding-smartphone.png";
import StageStyles from "./Stage.module.css";
import Input from "@components/input/Input";
import Button from "@components/button/Button";

interface RadioOption {
  label: string;
  value: string;
}

const StageTwo = ({ handleSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const radioOptions: RadioOption[] = [
    { label: "week", value: "week" },
    { label: "fortnight", value: "fortnight" },
    { label: "month", value: "month" },
  ];

  return (
    <div className={StageStyles.container}>
      <div className={StageStyles.textColumn}>
        <h2>How long do you wanna go at it?</h2>
        <br />
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
        <br />
        <Button onClick={handleSubmit}>Next</Button>
      </div>
      <div className={StageStyles.imageColumn}>
        <img src={Cover} alt="Stage One" />
      </div>
    </div>
  );
};

export default StageTwo;
