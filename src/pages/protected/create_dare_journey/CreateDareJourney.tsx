import React, { useState } from "react";

import StageCircle from "@components/stage_circle/StageCircle";
import StageOne from "./stages/StageOne";
import StageThree from "./stages/StageThree";
import StageTwo from "./stages/StageTwo";
import StageFour from "./stages/StageFour";

import CreateDareJourneyStyles from "./CreateDareJourney.module.css";

const CreateDareJourney: React.FC = () => {
  const [stage, setStage] = useState<number>(1);
  const [formData, setFormData] = useState<any>({});

  const handleSubmit = (data: any): void => {
    setFormData((prevData:any) => ({ ...prevData, [stage]: data }));

    if (stage < 3) {
      setStage((prevStage) => prevStage + 1);
    } else {
      // Make API request to post formData
      console.log("Posting data to API:", formData);
    }
  };

  const handleGoBack = (): void => {
    setStage((prevStage) => prevStage - 1);
  };

  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <StageOne
            handleSubmit={handleSubmit}
            handleGoBack={handleGoBack}
          />
        );
      case 2:
        return (
          <StageTwo
            handleSubmit={handleSubmit}
            handleGoBack={handleGoBack}
          />
        );
      case 3:
        return (
          <StageThree
            handleSubmit={handleSubmit}
            handleGoBack={handleGoBack}
          />
        );
      case 4:
        return <StageFour handleGoBack={handleGoBack} />;
      default:
        return (
          <StageOne
            handleSubmit={handleSubmit}
            handleGoBack={handleGoBack}
          />
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
