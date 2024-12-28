import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from '../components/Footer/Footer'
import HomeCards from "../components/HomeCards/HomeCards";
import Welcome from "../components/Welcome/Welcome";
import About from "../components/About/About";


const HomePage = () => {

  return (
    <>
      <MainNavigation />
      <Welcome/>
      <About />
      <HomeCards/>
      <Footer/>
    </>
  );
};

export default HomePage;