import * as React from 'react';

import Logotype from '../logotype/logotype';

type Props = {
  isLink: boolean,
}

const MODIFICATOR_CLASS = `logo__link--light`;

const Footer: React.FC<Props> = (props: Props) => {
  const {
    isLink
  } = props;

  return (
    <footer className="page-footer">

      <Logotype
        isLink={isLink}
        modificatorClass={MODIFICATOR_CLASS}
      />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
