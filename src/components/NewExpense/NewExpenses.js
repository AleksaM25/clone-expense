import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const submitedDataHandler = (submitedData) => {
    const expanseData = {
      ...submitedData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expanseData);
  };

  return (
    <div className="new-expense ">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitedExpenseData={submitedDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {""}
    </div>
  );
}

export default NewExpenses;
