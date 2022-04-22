/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Global from "../components/Global/Global";
import Provinces from "../components/Provinces/Provinces";
import CovidForm from "../components/CovidForm/CovidForm";
import data from "../utils/constants/provinces";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Global />
      <Provinces provinces={provinces} setProvinces={setProvinces} />
      <CovidForm provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
