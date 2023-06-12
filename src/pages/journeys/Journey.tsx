// libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import StageCircle from "@components/stage_circle/StageCircle";
import StageOne from "./stages/StageOne";
import StageThree from "./stages/StageThree";
import StageTwo from "./stages/StageTwo";


// styles
import JourneyStyles from './Journey.module.css';
import StageFour from './stages/StageFour';

const Journey: React.FC = () => {
    const [stage, setStage] = useState<number>(1);
    const navigate = useNavigate();


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
        // navigate(-1); // Go back to the previous page
    };

    const renderStage = (): JSX.Element => {
        switch (stage) {
            case 1:
                return <StageOne handleSubmit={handleSubmit} handleGoBack={handleGoBack} />;
            case 2:
                return <StageTwo handleSubmit={handleSubmit} handleGoBack={handleGoBack} />;
            case 3:
                return <StageThree handleSubmit={handleSubmit} handleGoBack={handleGoBack} />;
            case 4:
                return <StageFour handleGoBack={handleGoBack} />;
            default:
                return <StageOne handleSubmit={handleSubmit} handleGoBack={handleGoBack} />;
        }
    };

    return (
        <main className={JourneyStyles.journeys}>
            <StageCircle stage={stage} />
            <section>{renderStage()}</section>
        </main>
    );
};

export default Journey;
