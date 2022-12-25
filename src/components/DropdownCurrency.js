import React, { useState, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AppContext } from "../context/AppContext";

const DropdownCurrency = () => {
  const [currCurrency, setCurrency] = useState("Currency (£ Pound)");
  const { currency, dispatch } = useContext(AppContext);

  const updateCurrency = (newCurr, symbol) => {
    setCurrency(`Currency (${symbol} ${newCurr})`);

    dispatch({
      type: "CHG_CURRENCY",
      payload: symbol,
    });
  };

  return (
    <DropdownButton
      variant="success"
      id="dropdown-basic-button"
      title={currCurrency}
    >
      <Dropdown.Item
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => updateCurrency("Dollar", "$")}
      >
        $ Dollar
      </Dropdown.Item>
      <Dropdown.Item
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => updateCurrency("Pound", "£")}
      >
        £ Pound
      </Dropdown.Item>
      <Dropdown.Item
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => updateCurrency("Euro", "€")}
      >
        € Euro
      </Dropdown.Item>
      <Dropdown.Item
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => updateCurrency("Ruppee", "₹")}
      >
        ₹ Ruppee
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownCurrency;
