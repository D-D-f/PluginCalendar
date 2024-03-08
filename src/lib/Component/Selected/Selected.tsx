import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { ActiveContext } from "../../Context/ActiveContext";
import "./Selected.css";

interface SelectedProps {
  Months: string[];
  Years: number[];
  activeList: Boolean;
  currentMonth: number;
  currentYear: number;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>;
}

const Selected = ({
  Months,
  Years,
  currentMonth,
  currentYear,
  setCurrentMonth,
  setCurrentYear,
}: SelectedProps) => {
  const { activeListMonth, activeListYear, displayYearList, displayMonthList } =
    useContext(ActiveContext);

  const listMonth = Months.map((months, index) => (
    <li
      style={
        currentMonth === index
          ? { backgroundColor: "#212AFBFF", color: "white", cursor: "pointer" }
          : { backgroundColor: "", cursor: "pointer" }
      }
      className={currentMonth !== index ? "notSelected" : ""}
      onClick={() => setCurrentMonth(index)}
      key={index}
    >
      {months}
    </li>
  ));

  const listYears = Years.map((years, index) => (
    <li
      style={
        currentYear === index
          ? { backgroundColor: "#212AFBFF", color: "white", cursor: "pointer" }
          : { backgroundColor: "", cursor: "pointer" }
      }
      className={currentYear !== index ? "notSelected" : ""}
      onClick={() => setCurrentYear(index)}
      key={index}
    >
      {years}
    </li>
  ));

  return (
    <div className="selected">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div onClick={() => displayMonthList()}>
          {Months[currentMonth]}
          <FontAwesomeIcon
            icon={faSortDown}
            style={{ marginLeft: "10px" }}
            size="xs"
          />
          <ul
            style={activeListMonth ? { display: "block" } : { display: "none" }}
            className="ulMonthYear"
          >
            {listMonth}
          </ul>
        </div>

        <div onClick={() => displayYearList()}>
          {Years[currentYear]}
          <FontAwesomeIcon
            icon={faSortDown}
            style={{ marginLeft: "10px" }}
            size="xs"
          />
          <ul
            style={activeListYear ? { display: "block" } : { display: "none" }}
            className="ulYear"
          >
            {listYears}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Selected;
