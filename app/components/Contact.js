import React from "react";

const Contact = () => {
  return (
    <div
      className="form-right text-center"
      style={{
        backgroundImage: " url(./back-2.jpg)",
      }}
    >
      <h2 className="headline-1 text-center">Contact </h2>

      <a
        href="tel:+48534053355"
        className="body-1 contact-number hover-underline"
      >
        +48 534 053 355
      </a>

      <p className="contact-label" style={{ marginBlockStart: "40px" }}>
        Lokacja
      </p>

      <address className="body-4">
        ul. Pl. Wolnica 10 31-060 Kraków, Polska
      </address>

      <p className="contact-label">Czas Otwarcia</p>

      <p className="body-4">
        Poniedziałek - Środa <br />
        15:00 - 23:00
      </p>
      <p className="body-4">
        Czwartek <br />
        15:00 - 00:00
      </p>
      <p className="body-4">
        Piątek <br />
        14:00 - 02:00
      </p>
      <p className="body-4">
        Sobota <br />
        12:00 - 02:00
      </p>
      <p className="body-4">
        Niedziela <br />
        12:00 - 22:00
      </p>
    </div>
  );
};

export default Contact;
