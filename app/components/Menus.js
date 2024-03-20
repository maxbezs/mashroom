import React from "react";
import Menu from "./Menu";

const Menus = () => {
  const menus = [
    { file: "menu-koktajl.jpg", name: "KOKTAJL" },
    { file: "menu-pizza.jpg", name: "PIZZA" },
    { file: "menu-klasyk.jpg", name: "KLASYK" },
  ];
  return (
    <section
      className="section service bg-black-10 text-center"
      style={{
        backgroundImage: " url(./back-2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      aria-label="menu"
    >
      <div className="container">
        <h2 className="headline-1 section-title">
          Rozgrzej się Solidnie przed Weekendem
        </h2>

        <p className="section-text">
          To, że w #MASHROOM w kranach mamy najlepsze krafty wiadomo nie od
          dziś!Od teraz „tylko jeden drin i do domu” może nabrać WIĘKSZEGO
          znaczenia… psttt KARAFKI czekają!
        </p>

        <ul className="grid-list">
          {menus.map((menu, index) => (
            <Menu key={index} file={menu.file} name={menu.name} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Menus;
