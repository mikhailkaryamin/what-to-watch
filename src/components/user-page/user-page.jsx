import React from 'react';
import {node} from 'prop-types';

const UserPage = (props) => {
  const {
    children: Component,
  } = props;

  return (
    <div className="user-page">
      {Component}
    </div>
  );
};

UserPage.propTypes = {
  children: node.isRequired,
};

export default UserPage;
