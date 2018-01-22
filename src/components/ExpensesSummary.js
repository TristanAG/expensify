import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

//in order for ExpensesSummary to render it needs the props, in this case destructured, expenseCount and expensesTotal
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  //expense word is just here to say wheteher or not you are rendering the word 'expense' or 'expenses' if there are multiple
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  //this very simply just formats the numeral into money using numeral.js
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  //here's where we return the jsx to render
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
