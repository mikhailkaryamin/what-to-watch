import * as React from 'react';

type Props = {
  onChange: () => void,
}

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

const getMarkupField = (type: string, description: string, onChange: (arg0: {}) => void) => {
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

const SignInInput: React.FC<Props> = (props: Props) => {
  const {
    onChange,
  } = props;

  return (
    <div className="sign-in__fields">
      {FIELDS.map((field) => getMarkupField(field.type, field.description, onChange))}
    </div>
  );
};

export default SignInInput;

