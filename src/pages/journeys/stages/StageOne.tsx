import StageStyles from "./Stage.module.css";
import Cover from "@assets/images/man-smiling-and-holding-smartphone.png";
import Button from "@components/button/Button";
import Input from "@components/input/Input";

interface StageOneProps {
  handleSubmit: () => void;
}

const StageOne: React.FC<StageOneProps> = ({ handleSubmit }) => {

  return (
    <div className={StageStyles.container}>
      <div className={StageStyles.textColumn}>
        <h2>What do you wanna call the Journey?</h2>
        <br />
        <Input name="name" placeholder="name" style={{ width: "13rem" }} />
        <br />
        <Button onClick={handleSubmit} style={{ width: "13rem" }}>
          next
        </Button>
      </div>
      <div className={StageStyles.imageColumn}>
        <img src={Cover} alt="Stage One" />
      </div>
    </div>
  );
};

export default StageOne;