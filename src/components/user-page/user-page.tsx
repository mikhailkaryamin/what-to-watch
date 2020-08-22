import * as React from 'react';

type Props = {
  children: React.ReactNode;
}

const UserPage: React.FC<Props> = (props: Props) => {
  const {
    children: Component,
  } = props;

  return (
    <div className="user-page">
      {Component}
    </div>
  );
};

export default UserPage;
