import React from "react";
import "./TableDate.css";

const TableDate = ({ nbDaysAndFirstDayOnTheMonth, changeDate }) => {
  let firstDay = Number(nbDaysAndFirstDayOnTheMonth.premierJourDuMois);
  let allCase = [];
  let day = 0;

  for (let i = 1; i <= 35; i++) {
    if (firstDay > i || day >= nbDaysAndFirstDayOnTheMonth.nbJourDuMois) {
      allCase.push(null);
    } else {
      day++;
      allCase.push(day);
    }
  }

  const rows = [];
  for (let i = 0; i < allCase.length; i += 7) {
    rows.push(
      <tr key={i / 7}>
        {allCase.slice(i, i + 7).map((day, index) => (
          <td
            onClick={(e) =>
              changeDate((curr) =>
                curr.length > 2
                  ? [...curr.splice(2, 1), Number(e.target.textContent)]
                  : [...curr, Number(e.target.textContent)]
              )
            }
            key={index}
          >
            {day !== null ? day : ""}
          </td>
        ))}
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Mon</th>
          <th scope="col">Tue</th>
          <th scope="col">Wed</th>
          <th scope="col">Thu</th>
          <th scope="col">Fri</th>
          <th scope="col">Sat</th>
          <th scope="col">Sun</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TableDate;
