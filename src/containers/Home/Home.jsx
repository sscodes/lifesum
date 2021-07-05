import Brands from "../../components/Brands/Brands";
import Def from "../../components/Def/Def";
import Header from "../../components/Header/Header";
import Intro from "../../components/Introduction/Intro";
import LastSec from "../../components/LastSec/LastSec";
import Quiz from "../../components/Quiz/Quiz";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Brands />
      <Def />
      <Quiz />
      <LastSec />
    </>
  );
};

export default Home;
