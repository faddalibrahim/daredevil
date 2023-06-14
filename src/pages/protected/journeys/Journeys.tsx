import React from "react";
import JourneysStyles from "./Journeys.module.css";
import useAuth from "@hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Journey } from "@types/UserType";

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
    navigate(`/dashboard/journeys/${journey.id}`, { state: {journey} });
  };

  return (
    <div className={JourneysStyles.container}>
      <div className={JourneysStyles.completed}>
        <div className={JourneysStyles.metric}>
          <div className={JourneysStyles.metricValue}>
            {completedJourneys.length}/{auth.journeys.length}
          </div>
          <div className={JourneysStyles.metricLabel}>Journeys Completed</div>
        </div>
      </div>
      <div className={JourneysStyles.abandoned}>
        <div className={JourneysStyles.metric}>
          <div className={JourneysStyles.metricValue}>
            {abandonedJourneys.length}/{auth.journeys.length}
          </div>
          <div className={JourneysStyles.metricLabel}>Journeys Abandoned</div>
        </div>
      </div>
      <div className={JourneysStyles.journeyList}>
        {auth.journeys.map((journey: Journey) => (
          <div
            className={JourneysStyles.journey}
            key={journey.id}
            onClick={() => handleJourneyClick(journey)}
          >
            {journey.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journeys;
