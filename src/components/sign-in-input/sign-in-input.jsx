import React from 'react';
import {func} from 'prop-types';

const FIELDS = [
  {
    type: `email`,
    description: `Email address`
  },
  {
    type: `password`,
    description: `Password`
  },
];

const getMarkupField = (type, description, onChange) => {
  return (
    <div
      className="sign-in__field"
      key={type}
    >
      <input className="sign-in__input"
        type={type}
        placeholder={description}
        name={`user-${type}`}
        id={`user-${type}`}
        onChange={(evt) => onChange({
          type,
          value: evt.target.value,
        })}
      />
      <label className="sign-in__label visually-hidden" htmlFor={`user-${type}`}>
        {description}
      </label>
    </div>
  );
};

const SignInInput = (props) => {
  const {
    onChange,
  } = props;

  return (
    <div className="sign-in__fields">
      {FIELDS.map((field) => getMarkupField(field.type, field.description, onChange))}
    </div>
  );
};

SignInInput.propTypes = {
  onChange: func.isRequired,
};

export default SignInInput;

