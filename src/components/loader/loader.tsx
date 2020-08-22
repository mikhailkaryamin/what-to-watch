import * as React from 'react';

import UserPage from '../user-page/user-page';

const Loader = () => {
  return (
    <UserPage>
      <div className="lds-ring">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </UserPage>
  )
}

export default Loader;