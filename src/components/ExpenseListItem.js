import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

// const mapStateToProps = (state) => {
//   return {
//     actions: state.actions
//   };
// };

export default ExpenseListItem;


//so the mistake that i had here was that I didn't.. well i'm not sure yet.
//i basically had all this, i just was not destructuring the  props
