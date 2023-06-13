// Import the required types
import { Journey, JourneyFreak } from './types';

// Import useAuth hook
import useAuth from "@hooks/useAuth";

// Import styles
import HomeStyles from "../homestyles.module.css";

const DareCreatedScreen = () => {
  const { auth } = useAuth();

  // Filter journeys based on the current date
  const currentDate = new Date().toISOString().split("T")[0];
  const currentJourneys = auth.journeys.filter((journey: Journey) => journey.start_date === currentDate);
  console.log(currentJourneys)

  // Compute metrics for each current journey
  const metrics: JourneyMetricsType[] = currentJourneys.map((journey: Journey) => {
    const swaps: number = journey.swaps_made;
    const jname = journey.name
    const miles: string = journey.milestone;
    const passed: number = journey.journey_freaks.filter((freak: JourneyFreak) => freak.milestone === "passed").length;
    const aborted: number = journey.journey_freaks.filter((freak: JourneyFreak) => freak.milestone === "aborted").length;
    const missed: number = journey.journey_freaks.filter((freak: JourneyFreak) => freak.milestone === "missed").length;

    const startDate = new Date(journey.start_date);
    const endDate = new Date(journey.end_date);
    const timeLeft = endDate.getTime() - startDate.getTime();

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const timeLeftFormatted = `${hours}:${minutes}:${seconds}`;

    return {
      journeyId:journey.id,
      name: jname,
      swapsMade: swaps,
      milestone: miles,
      passedFreaks: passed,
      abortedFreaks: aborted,
      missedFreaks: missed,
      timeLeftFormatted: timeLeftFormatted,
    };
  });

  return (
    <main className={HomeStyles.home__container}>
      <div className={HomeStyles.home__wrapper}>
        {metrics.map((metric) => (
          <div className={HomeStyles.home__journey} key={metric.journeyId}>
            <h2>Mission: {metric.name}</h2>
            <p>Swaps Made: {metric.swapsMade}</p>
            <p>Milestone: {metric.milestone}</p>
            <p>Passed Freaks: {metric.passedFreaks}</p>
            <p>Aborted Freaks: {metric.abortedFreaks}</p>
            <p>Missed Freaks: {metric.missedFreaks}</p>
            <p>Time Left: {metric.timeLeftFormatted}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DareCreatedScreen;
