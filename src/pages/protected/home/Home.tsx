//components
import useAuth from "@hooks/useAuth";
import NoOngoingJourney from "./no_ongoing_journey/NoOngoingJourney";
import OnGoingJourney from "./ongoing_journey/OnGoingJourney";
import { useEffect, useState } from "react";
import AW_API from "../../../appwrite/api";

const Home = () => {
  const { auth,  setAuth} = useAuth();
  const [journeys, setJourneys] = useState({})

  const getJourneys = () =>{
    setJourneys(async () => await AW_API.getUserJourneys(auth.user.id));
    setAuth({...auth, journeys:journeys})
  }
  
  useEffect(() => {
    getJourneys()
  }, [journeys])
  

  // Check if there is at least one ongoing journey
  const hasOngoingJourney = auth?.journeys?.some(
    (journey:Journey) => journey.milestone !== "completed" && journey.milestone !== "abandoned"
  );

  return hasOngoingJourney ? <OnGoingJourney /> : <NoOngoingJourney />;
};

export default Home;
