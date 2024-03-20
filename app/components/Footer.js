import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="footer section has-bg-image text-center"
      style={{ paddingBlock: "30px", backgroundImage: "url(./back-3.jpg)" }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand ">
            <a href="#" className="logo">
              <Image
                src="/mushroom-logo.jpg"
                width="160"
                height="50"
                loading="lazy"
                alt="grilli home"
              />
            </a>

            <address className="body-4">
              ul. Pl. Wolnica 10 31-060 Kraków, Polska
            </address>

            <a
              href="mailto:rezerwacje@mashroom.pl"
              className="body-4 contact-link"
            >
              rezerwacje@mashroom.pl
            </a>

            <a href="tel:+48534053355" className="body-4 contact-link">
              Contact: +48 534 053 355
            </a>

            <p className="title-1">Eventy i Unikalne Oferty</p>

            <p className="label-1">
              Zapisz się i uzyskaj
              <span className="span"> 10% zniżki!</span>
            </p>

            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <input
                  type="email"
                  name="email_address"
                  placeholder="Email"
                  autoComplete="off"
                  className="input-field"
                />
              </div>

              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Zapisz</span>

                <span className="text text-2" aria-hidden="true">
                  Zapisz
                </span>
              </button>
            </form>
          </div>
          <ul className="footer-list has-before has-after">
            <li>
              <a href="#menu" className="label-2 footer-link hover-underline">
                Menu
              </a>
            </li>

            <li>
              <a
                href="#rezerwuj"
                className="label-2 footer-link hover-underline"
              >
                REZERWUJ
              </a>
            </li>

            <li>
              <a href="#eventy" className="label-2 footer-link hover-underline">
                EVENTY
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="label-2 footer-link hover-underline"
              >
                Contact
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <a
                href="https://www.facebook.com/mashroomkrakow"
                className="label-2 footer-link hover-underline"
                target="_blank"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/mashroomkrakow"
                className="label-2 footer-link hover-underline"
                target="_blank"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@mashgarden"
                className="label-2 footer-link hover-underline"
                target="_blank"
              >
                TikTok
              </a>
            </li>

            <li>
              <a
                href="https://goo.gl/maps/vAPekwFqHD8PyUvz8"
                className="label-2 footer-link hover-underline"
                target="_blank"
              >
                Google Map
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023 Mash Room. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
