import React from "react";
import JourneysStyles from "./Journeys.module.css";
import useAuth from "@hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Journey } from "@types/UserType";
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
            <h2>{journey.name}</h2>
            <br />
            <small
              style={{
                color: `${
                  journey.milestone === "completed"
                    ? "var(--app-green)"
                    : "var(--app-orange)"
                }`,
              }}
            >
              {journey.milestone}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journeys;
