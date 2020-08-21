import React from 'react';
import {bool} from 'prop-types';

import Logotype from '../logotype/logotype.tsx';

const MODIFICATOR_CLASS = `logo__link--light`;

const Footer = (props) => {
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

Footer.propTypes = {
  isLink: bool.isRequired,
};

export default Footer;
