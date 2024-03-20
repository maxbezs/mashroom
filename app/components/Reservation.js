import React from "react";
import Form from "./Form";
import Contact from "./Contact";

const Reservation = () => {
  return (
    <section className="reservation" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="form reservation-form">
          <Form />
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
