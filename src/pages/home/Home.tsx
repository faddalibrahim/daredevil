import Button from "@components/button/Button";
import Cover from '@assets/images/man-standing-with-hands-in-pockets.png'

//style
import HomeStyles from './Home.module.css'

const Home = () => {

  const buttonStyle = {
    marginBottom: '1rem',
  };

  return (
    <main className={HomeStyles.home__container}>
      <div className={HomeStyles.home__wrapper}>
        <section className={HomeStyles.home__wrapper__text}>
          <h2>Welcome, <span>Fred</span></h2>
          <p>umm, it seems you haven't created a freak journey yet</p><br />
          <Button style={buttonStyle} children={<p>create freak journey</p>} type={"solid"} /> <br />
          <a href="">what's a freak journey?</a>
        </section>
        <section className={HomeStyles.home__wrapper__image}>
          <img src={Cover} alt="Stage One" />
        </section>
      </div>
    </main>

  )
};

export default Home;