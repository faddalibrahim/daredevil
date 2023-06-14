import OngoingJourneyStyles from "./OngoingJourney.module.css";
import darkBell from "@assets/images/dark-bell.png";
import darkClock from "@assets/images/dark-clock.png";
import Button from "@components/button/Button";
import { BulbIcon } from "@assets/icons/Icons";
import { CorrectIcon, SwapIcon, AbortIcon } from "@assets/icons/Icons";
import CircularProgressBar from "@components/progress_bar/circular_progress_bar/CircularProgressBar";
const OnGoingJourney = () => {
  return (
    <div className={OngoingJourneyStyles.wrapper}>
      <div className={OngoingJourneyStyles.mission_announcement}>
        <img src={darkBell} alt="" />
        <h1>Today's Mission</h1>
      </div>
      <div className={OngoingJourneyStyles.mission_display}>
        <div className={OngoingJourneyStyles.mission_content}>
          <h1>Ask your crush out</h1>
          <Button
            style={{
              backgroundColor: "rgb(255 255 255 / 0.1)",
              border: "none",
              color: "var(--app-white)",
            }}
          >
            description
          </Button>
        </div>
        <div className={OngoingJourneyStyles.mission_stats}>
          <CircularProgressBar total={28} chunk={7} label="completed" />
          <CircularProgressBar total={3} chunk={3} label="swaps" />
          <CircularProgressBar total={3} chunk={1} label="aborted" />
        </div>
      </div>
      <div className={OngoingJourneyStyles.timer_action_buttons}>
        <img src={darkClock} alt={darkClock} />
        <h1>07:04:12</h1>
        <div className={OngoingJourneyStyles.action_buttons}>
          <Button
            style={{
              backgroundColor: "rgba(191,249,231,0.1)",
              minWidth: "2rem",
              border: "none",
              color: "var(--app-green)",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <CorrectIcon /> <p>done</p>
          </Button>
          <Button
            style={{
              backgroundColor: "rgba(250,228,173,0.1)",
              minWidth: "2rem",
              border: "none",
              color: "var(--app-yellow)",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <SwapIcon /> <p>swap</p>
          </Button>
          <Button
            style={{
              backgroundColor: "rgba(244,152,103,0.1)",
              minWidth: "2rem",
              border: "none",
              color: "var(--app-orange)",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <AbortIcon /> <p>abort</p>
          </Button>
        </div>
      </div>
      <div className={OngoingJourneyStyles.shared_experience_prompt}>
        <article>
          <BulbIcon />
          <small>
            27 people have completed this challenge; they have share their
            experience and tips
          </small>
        </article>
        <br />
        <Button style={{ padding: "0.5rem" }}>read</Button>
      </div>
    </div>
  );
};

export default OnGoingJourney;
