import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);
  const [currbudget, setBudget] = useState(budget);
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const updateBudget = (event) => {
    const value = event.target.value;
    if (value < totalExpenses) {
      alert("You cannot reduce the budget lower than the spending");
      return;
    }
    setBudget(value);
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          type="number"
          id="budget"
          value={budget}
          style={{ size: 10 }}
          onChange={updateBudget}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
