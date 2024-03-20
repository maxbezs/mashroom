import React from "react";
import Event from "./Event";

const Events = () => {
  const events = [
    {
      img: "event1.jpg",
      title: "MASH DECKI I GRAJ",
      subtitle: "TAX FREE!",
      day: "27",
      month: "07",
      year: "2023",
    },
    {
      img: "event2.jpg",
      title: "MASH DECKI I GRAJ | TECHNO EDITION",
      subtitle: "TAX FREE!",
      day: "20",
      month: "07",
      year: "2023",
    },
    {
      img: "event3.jpg",
      title: "Technodelic",
      subtitle: "Tax: 20",
      day: "21",
      month: "07",
      year: "2023",
    },
  ];
  return (
    <section className="section event bg-black-10" aria-label="eventy">
      <div className="container" style={{ paddingInline: "0px" }}>
        <h2 className="section-title headline-1 text-center">
          Nadchodzace Eventy
        </h2>

        <ul className="grid-list">
          {events.map((event, index) => (
            <Event
              key={index}
              img={event.img}
              title={event.title}
              subtitle={event.subtitle}
              day={event.day}
              month={event.month}
              year={event.year}
            />
          ))}
        </ul>

        <a
          href="https://www.facebook.com/mashroomkrakow/events"
          className="btn btn-primary"
        >
          <span className="text text-1">Wszystkie Eventy</span>

          <span className="text text-2" aria-hidden="true">
            Wszystkie Eventy
          </span>
        </a>
      </div>
    </section>
  );
};

export default Events;
