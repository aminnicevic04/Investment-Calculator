import React, { useState } from "react";

const initialUserInput = {
  "current-saving": 0,
  "yearly-contribution": 0,
  "expected-return": 0,
  duration: 0,
};
function UserInput(props) {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: [+value],
      };
    });
  };
  {
    console.log(typeof userInput["current-saving"]);
    console.log(typeof userInput["yearly-contribution"]);
    console.log(typeof userInput["expected-return"]);
    console.log(typeof userInput["duration"]);
  }
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-saving">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-saving", event.target.value)
            }
            value={userInput["current-saving"]}
            type="number"
            id="current-saving"
            placeholder=""
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
            placeholder=""
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
            placeholder=""
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
            type="number"
            id="duration"
            placeholder=""
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;
