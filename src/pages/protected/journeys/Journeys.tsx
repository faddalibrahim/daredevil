import React from "react";
import JourneysStyles from "./Journeys.module.css";
import useAuth from "@hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Journey } from "./types";
import CircularProgressBar from "@components/progress_bar/circular_progress_bar/CircularProgressBar";

type JourneysProps = {};

const Journeys: React.FC<JourneysProps> = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const completedJourneys = auth.journeys.filter(
    (journey: Journey) => journey.milestone === "completed"
  );
  const abandonedJourneys = auth.journeys.filter(
    (journey: Journey) => journey.milestone === "abandoned"
  );

  const handleJourneyClick = (journey: Journey) => {
    navigate(`/dashboard/journeys/${journey.id}`, { state: { journey } });
  };

  return (
    <div className={JourneysStyles.container}>
      <div className={JourneysStyles.stats}>
        <div className={JourneysStyles.completed}>
          <div className={JourneysStyles.metric}>
            <div className={JourneysStyles.metricValue}>
              <CircularProgressBar
                chunk={completedJourneys.length}
                total={auth.journeys.length}
                label="Completed"
                arcColor="var(--app-green)"
                bgColor="rgb(191 249 231 / 0.1)"
              />
            </div>
          </div>
        </div>
        <div className={JourneysStyles.abandoned}>
          <div className={JourneysStyles.metric}>
            <div className={JourneysStyles.metricValue}>
              <CircularProgressBar
                chunk={abandonedJourneys.length}
                total={auth.journeys.length}
                label="Abandoned"
                arcColor="var(--app-orange)"
                bgColor="rgb(244 152 103 / 0.1)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={JourneysStyles.journeyList}>
        {auth.journeys.map((journey: Journey) => (
          <div
            className={JourneysStyles.journey}
            key={journey.id}
            onClick={() => handleJourneyClick(journey)}
            style={{
              borderColor: `${
                journey.milestone === "completed"
                  ? "var(--app-green)"
                  : "var(--app-orange)"
              }`,
            }}
          >
            {journey.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journeys;
