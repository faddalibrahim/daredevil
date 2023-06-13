import React from "react";
import { useLocation } from "react-router-dom";
import { Journey, JourneyFreak } from "@types/UserType";

type JourneyDetailsProps = {};

const JourneyDetails: React.FC<JourneyDetailsProps> = () => {
  const location = useLocation();
  const journey = location.state?.journey as Journey;
  console.log(location.state)

  return (
    <div>
      <h2>Journey Details - {journey?.name}</h2>
      <p>Start Date: {journey?.start_date}</p>
      <p>End Date: {journey?.end_date}</p>
      <p>Swaps Made: {journey?.swaps_made}</p>
      <p>Milestone: {journey?.milestone}</p>
      <h3>Journey Freaks:</h3>
      {journey?.journey_freaks.map((freak: JourneyFreak) => (
        <div key={freak.id}>
          <p>Freak ID: {freak.freak_id}</p>
          <p>Milestone: {freak.milestone}</p>
          {freak.rating && <p>Rating: {freak.rating}</p>}
        </div>
      ))}
    </div>
  );
};

export default JourneyDetails;
