import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Reservation from "./components/Reservation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div
          style={{ marginTop: "-100px", position: "absolute" }}
          id="menu"
        ></div>
        <Menus />
        <div
          style={{ marginTop: "-100px", position: "absolute" }}
          id="eventy"
        ></div>

        <Events />
        <div
          style={{ marginTop: "-100px", position: "absolute" }}
          id="rezerwuj"
        ></div>
        <Reservation />
      </main>
      <div
        style={{ marginTop: "-100px", position: "absolute" }}
        id="contact"
      ></div>
      <Footer />

      <a href="#rezerwuj" className="hero-btn back-top-btn active">
        <Image
          src="/reservation-icon.png"
          width="48"
          height="48"
          alt="booking icon"
        />

        <span className="label-2 text-center span">Rezerwuj</span>
      </a>
    </>
  );
}
