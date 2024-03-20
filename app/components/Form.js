import React from "react";

const Form = () => {
  return (
    <form action="" className="form-left">
      <h2 className="headline-1 text-center">Zarezerwuj online</h2>

      <p className="form-text text-center">
        Wniosek o rezerwację{" "}
        <a href="tel:+48534053355" className="link">
          +48 534 053 355
        </a>{" "}
        lub wypełnij formularz rezerwacyjny
      </p>

      <div className="input-wrapper">
        <input
          type="text"
          name="name"
          placeholder="Imię"
          autoComplete="off"
          className="input-field"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Numer telefonu"
          autoComplete="off"
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <div className="icon-wrapper">
          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

          <select name="person" className="input-field" aria-label="People">
            <option value="1-person">1 Osoba</option>
            <option value="2-person">2 Osoby</option>
            <option value="3-person">3 Osoby</option>
            <option value="4-person">4 Osoby</option>
            <option value="5-person">5 osob</option>
            <option value="6-person">6 Osoby</option>
            <option value="7-person">7 Osoby</option>
          </select>

          <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
        </div>

        <div className="icon-wrapper">
          <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>

          <input
            type="date"
            name="reservation-date"
            className="input-field"
            aria-label="Date"
          />

          <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
        </div>

        <div className="icon-wrapper">
          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

          <select name="person" className="input-field" aria-label="People">
            <option value="08:00am">08 : 00 </option>
            <option value="09:00am">09 : 00 </option>
            <option value="010:00am">10 : 00 </option>
            <option value="011:00am">11 : 00 </option>
            <option value="012:00am">12 : 00 </option>
            <option value="01:00pm">13 : 00 </option>
            <option value="02:00pm">14 : 00 </option>
            <option value="03:00pm">15 : 00 </option>
            <option value="04:00pm">16 : 00 </option>
            <option value="05:00pm">17 : 00 </option>
            <option value="06:00pm">18 : 00 </option>
            <option value="07:00pm">19 : 00 </option>
            <option value="08:00pm">20 : 00 </option>
            <option value="09:00pm">21 : 00 </option>
            <option value="10:00pm">22 : 00 </option>
          </select>

          <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
        </div>
      </div>

      <textarea
        name="message"
        placeholder="Wiadomość"
        autoComplete="off"
        className="input-field"
      ></textarea>

      <button type="submit" className="btn btn-secondary">
        <span className="text text-1">Rezerwuj</span>

        <span className="text text-2" aria-hidden="true">
          Rezerwuj
        </span>
      </button>
    </form>
  );
};

export default Form;
