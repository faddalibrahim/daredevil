//libraries
import React, { useState } from 'react';

//components
import StageCircle from '@components/stage_circle/StageCircle';
import StageOne from './stages/StageOne';
import StageThree from './stages/StageThree';
import StageTwo from './stages/StageTwo';

//styles
import JourneyStyles from './Journey.module.css'


const Journey: React.FC = () => {
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

    const renderStage = (): JSX.Element => {
        switch (stage) {
            case 1:
                return <StageOne handleSubmit={handleSubmit}/>;
            case 2:
                return <StageTwo handleSubmit={handleSubmit}/>;
            case 3:
                return <StageThree handleSubmit={handleSubmit}/>;
            default:
                return <StageOne handleSubmit={handleSubmit} />;
        }
    };


    return (
        <main className={JourneyStyles.journeys}>
            <StageCircle stage={stage} />
            <section>
                {renderStage()}
            </section>
        </main>
    );
};

export default Journey;
