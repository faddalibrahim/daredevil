import { useNavigate } from "react-router-dom";

//components
import Button from "@components/button/Button";
import Cover from "@assets/images/man-standing-with-hands-in-pockets.png";
import useAuth from "@hooks/useAuth";

//style
import HomeStyles from "../Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const {auth} = useAuth()

  const buttonStyle = {
    marginBottom: "1rem",
  };

  const handleClick = () => {
    navigate("/dashboard/create-freak-journey");
  };

  return (
    <main className={HomeStyles.home__container}>
      <div className={HomeStyles.home__wrapper}>
        <section className={HomeStyles.home__wrapper__text}>
          <h2>
            Welcome, <span>{auth.name}</span>
          </h2>
          <p>umm, it seems you haven't created a freak journey yet</p>
          <br />
          <Button
            style={buttonStyle}
            children={<p>create freak journey</p>}
            type={"solid"}
            onClick={handleClick}
          />{" "}
          <br />
          <a href="">what's a freak journey?</a>
        </section>
        <section className={HomeStyles.home__wrapper__image}>
          <img src={Cover} alt="Stage One" />
        </section>
      </div>
    </main>
  );
};

export default Home;
