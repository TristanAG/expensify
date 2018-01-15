import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>the info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>t h i s i s p r i v a t e</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

//require authentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>please login first ya ding dong</p>
      )}

    </div>
  );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="terp$" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="terp$" />, document.getElementById('app'));
