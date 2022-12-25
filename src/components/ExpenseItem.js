import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const updateAllocation = (name, value) => {
    const expense = {
      name: name,
      cost: value,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          size={30}
          style={{ color: "green" }}
          onClick={(event) => updateAllocation(props.name, 10)}
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          size={30}
          style={{ color: "maroon" }}
          onClick={(event) => updateAllocation(props.name, -10)}
        ></FaMinusCircle>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
