import React from 'react';

import Logotype from '../logotype/logotype.jsx';

const MODIFICATOR_CLASS = `logo__link--light`;

const Footer = () => {
  return (
    <footer className="page-footer">

      <Logotype
        modificatorClass={MODIFICATOR_CLASS}
      />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
