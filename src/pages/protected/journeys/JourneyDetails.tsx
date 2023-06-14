import React from "react";
import { useLocation } from "react-router-dom";
import { Journey, JourneyFreak } from "@types/UserType";
import JourneysStyles from "./Journeys.module.css";
import { StarIcon } from "@assets/icons/Icons";

type JourneyDetailsProps = {};

const JourneyDetails: React.FC<JourneyDetailsProps> = () => {
  const location = useLocation();
  const journey = location.state?.journey as Journey;
  console.log(location.state);

  const passedDares = journey?.journey_freaks.filter(
    (freak) => freak.milestone === "passed"
  ).length;
  const abortedDares = journey?.journey_freaks.filter(
    (freak) => freak.milestone === "passed"
  ).length;

  return (
    <div
      style={{ color: "white" }}
      className={JourneysStyles.journey_details_wrapper}
    >
      <div className={JourneysStyles.journey_details_metadata}>
        <h1>{journey?.name}</h1>
        <br />
        <div style={{ columns: 2 }}>
          <section>
            <small>start date</small>
            <p>{journey?.start_date}</p>
          </section>
          <section>
            <small>end date</small>
            <p>{journey?.end_date}</p>
          </section>
          <section>
            <small>swaps made</small>
            <p>{journey?.swaps_made}</p>
          </section>
          <section>
            <small>mlestone</small>
            <p>{journey?.milestone}</p>
          </section>
          <section>
            <small>passed dares</small>
            <p>{passedDares}</p>
          </section>
          <section>
            <small>aborted dares</small>
            <p>{abortedDares}</p>
          </section>
        </div>
      </div>
      <br />
      <div className={JourneysStyles.daresList}>
        {journey?.journey_freaks.map((freak: JourneyFreak) => (
          <div key={freak.id} className={JourneysStyles.dare}>
            <h2>{freak.name}</h2>
            <small
              style={{
                color: `${
                  freak.milestone === "missed"
                    ? "var(--app-yellow)"
                    : freak.milestone === "passed"
                    ? "var(--app-green)"
                    : "var(--app-orange)"
                }`,
              }}
            >
              {freak.milestone}
            </small>
            <section className={JourneysStyles.stars}>
              {freak.rating &&
                Array(freak.rating)
                  .fill("")
                  .map((_, i) => (
                    <p key={i}>
                      <StarIcon />
                    </p>
                  ))}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyDetails;
