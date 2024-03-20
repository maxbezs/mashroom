import React from "react";
import Image from "next/image";

const Menu = (props) => {
  return (
    <li>
      <div className="service-card">
        <a href={props.file} className="has-before hover:shine">
          <figure className="card-banner img-holder">
            <Image
              src={`/${props.file}`}
              width="285"
              height="336"
              loading="lazy"
              alt={props.name}
              className="img-cover"
            />
          </figure>
        </a>

        <div className="card-content">
          <h3 className="title-4 card-title">
            <a href={props.file}>{props.name}</a>
          </h3>

          <a href={props.file} className="btn-text hover-underline label-2">
            Zobacz Menu
          </a>
        </div>
      </div>
    </li>
  );
};

export default Menu;
