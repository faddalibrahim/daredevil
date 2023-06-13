//components
import useAuth from "@hooks/useAuth";
import NoOngoingJourney from "./no_ongoing_journey/NoOngoingJourney";
import OnGoingJourney from "./ongoing_journey/OnGoingJourney";

  const Home = () => {
  const {auth} = useAuth()
  const userHasOngoingJourney = true;

  return userHasOngoingJourney ? <OnGoingJourney /> : <NoOngoingJourney />;
};

export default Home;
