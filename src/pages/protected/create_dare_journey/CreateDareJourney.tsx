// libraries
import React, { useState } from "react";

//components
import StageCircle from "@components/stage_circle/StageCircle";
import StageOne from "./stages/StageOne";
import StageThree from "./stages/StageThree";
import StageTwo from "./stages/StageTwo";

// styles
import CreateDareJourneyStyles from "./CreateDareJourney.module.css";
import StageFour from "./stages/StageFour";

const CreateDareJourney: React.FC = () => {
  const [stage, setStage] = useState<number>(1);

  const handleSubmit = (): void => {
    if (stage === 0) {
      setStage(stage + 1);
      // TODO: validation
    } else if (stage === 1) {
      setStage(stage + 1);
      // TODO: validation
    } else if (stage === 2) {
      setStage(stage + 1);
      // TODO: validation
    } else {
      setStage(stage + 1);
    }
  };

  const handleGoBack = (): void => {
    setStage((prevStage) => prevStage - 1); // Reduce the stage by one
    // TODO: Additional logic if needed before navigating back
  };

  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <StageOne handleSubmit={handleSubmit} handleGoBack={handleGoBack} />
        );
      case 2:
        return (
          <StageTwo handleSubmit={handleSubmit} handleGoBack={handleGoBack} />
        );
      case 3:
        return (
          <StageThree handleSubmit={handleSubmit} handleGoBack={handleGoBack} />
        );
      case 4:
        return <StageFour handleGoBack={handleGoBack} />;
      default:
        return (
          <StageOne handleSubmit={handleSubmit} handleGoBack={handleGoBack} />
        );
    }
  };

  return (
    <main className={CreateDareJourneyStyles.journeys}>
      <StageCircle stage={stage} />
      <section>{renderStage()}</section>
    </main>
  );
};

export default CreateDareJourney;
