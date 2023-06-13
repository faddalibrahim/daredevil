import useAuth from "@hooks/useAuth";

const Homepage = () => {
  const { auth } = useAuth();
  return <div style={{ color: "red" }}>{auth}</div>;
};

export default Homepage;
