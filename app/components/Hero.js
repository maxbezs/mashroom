import React from "react";
import Image from "next/image";
import back from "../../public/back.jpg";

const Hero = () => {
  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        <li className="slider-item active" data-hero-slider-item>
          <div className="slider-bg">
            <Image
              src={back}
              alt=""
              quality={70}
              sizes="100vw"
              className="img-cover"
              style={{ filter: "brightness(40%)", objectFit: "cover" }}
              loading="eager"
              priority={true}
            />
          </div>

          <h1 className="display-1 hero-title slider-reveal">
            Zanurz sie w Mash Room - Odjazdowe Nocne Mashynowanie!
          </h1>

          <p className="body-2 hero-text slider-reveal">
            Gotowi na imprezę? Przybywajcie z ekipą na epicką noc!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <a
              href="#rezerwuj"
              className="btn btn-secondary slider-reveal"
              style={{ marginInline: "0px" }}
            >
              <span className="text text-1">Rezerwuj</span>

              <span className="text text-2" aria-hidden="true">
                Rezerwuj
              </span>
            </a>
            <a
              href="#menu"
              className="btn btn-primary slider-reveal"
              style={{ marginInline: "0px" }}
            >
              <span className="text text-1">Zobacz Menu</span>

              <span className="text text-2" aria-hidden="true">
                Zobacz Menu
              </span>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
