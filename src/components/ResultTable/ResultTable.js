import React from "react";

function ResultTable(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* {console.log(
          yearData.savingsEndOfYear,
          props.initialInvestment,
          yearData.year
        )} */}
        {props.data.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year.toFixed(2)}</td>
              <td>{yearData.savingsEndOfYear.toFixed(2)}</td>
              <td>{yearData.yearlyInterest.toFixed(2)}</td>
              <td>
                {yearData.savingsEndOfYear.toFixed(2) -
                  props.initialInvestment -
                  yearData.yearlyContribution.toFixed(2) *
                    yearData.year.toFixed(2)}
              </td>
              <td>
                {props.initialInvestment +
                  yearData.yearlyContribution * yearData.year}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultTable;
