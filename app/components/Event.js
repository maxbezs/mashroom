import Image from "next/image";
import React from "react";
const Event = (props) => {
  return (
    <li>
      <div className="event-card has-before hover:shine">
        <div className="card-banner img-holder" style={{ height: "350px" }}>
          <Image
            src={`/${props.img}`}
            loading="lazy"
            alt={`${props.title} ${props.subtitle} ${props.day}/${props.month}/${props.year}`}
            className="img-cover"
            width={"960"}
            height={"502"}
          />

          <time
            className="publish-date label-2"
            dateTime={`${props.year}-${props.month}-${props.day}`}
          >
            {`${props.day}/${props.month}/${props.year}`}
          </time>
        </div>

        <div className="card-content">
          <p className="card-subtitle label-2 text-center">{props.subtitle}</p>

          <h3 className="card-title title-2 text-center">{props.title}</h3>
        </div>
      </div>
    </li>
  );
};

export default Event;
