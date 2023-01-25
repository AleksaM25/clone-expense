import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const enteredTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const enteredAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const enteredDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmitedExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expenses__controls">
        <div className="new-expenses__control">
          <label>Title</label>
          {/* Two way binding nam omogucava da za inpute ne slusamo samo na promene nego mozemo i da vratimo/ ubacimo novu vrednost, kako bi mogli da resetujemo input  */}
          <input
            type="text"
            value={enteredTitle}
            onChange={enteredTitleHandler}
          />
        </div>
        <div className="new-expenses__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={enteredAmountHandler}
          />
        </div>
        <div className="new-expenses__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={enteredDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        {/* Ako je dugme vrste submit pritisnuto unutar forma onda forma obezbedjije event listener (submit e) */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
