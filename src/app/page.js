import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        {/* <Cta /> */}
      </main>
      <Footer />
    </>
  );
}
