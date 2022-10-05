import React from "react";
import Canada from "../../../assets/Flags/canada.svg";
import "./CardSave.scss";
export default function CardSave() {
  return (
    <div className="card">
      <div className="card__flag">
        <img src={Canada} alt="flag" />
        <span>USA</span>
      </div>
      <div className="card__txt">
        <div className="card__info">
          <span className="card__nbr">Principal</span>
          <span className="card__nbr">10,248.00</span>
        </div>
      </div>
    </div>
  );
}
