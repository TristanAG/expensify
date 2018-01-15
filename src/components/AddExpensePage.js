import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Expense Page</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        console.log('updated', expense)
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
