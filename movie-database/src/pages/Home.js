import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";
import AddMoviewForm from "../components/AddMoviewForm/AddMoviewForm";

function Main() {
  return (
    <main>
      <Hero />
      <Movies />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <AddMoviewForm />
      <Footer />
    </>
  );
}

export default Home;
