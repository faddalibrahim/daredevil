//components
import useAuth from "@hooks/useAuth";
import NoOngoingJourney from "./no_ongoing_journey/NoOngoingJourney";
import OnGoingJourney from "./ongoing_journey/OnGoingJourney";

const Home = () => {
  const { auth } = useAuth();

  // Check if there is at least one ongoing journey
  const hasOngoingJourney = auth?.journeys.some(
    (journey:Journey) => journey.milestone !== "completed" && journey.milestone !== "abandoned"
  );

  return hasOngoingJourney ? <OnGoingJourney /> : <NoOngoingJourney />;
};

export default Home;
