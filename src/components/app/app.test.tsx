import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {App} from './app';

describe(`Render App`, () => {

  test(`should render app`, () => {
    const wrapper = renderer
      .create(
          <App
            authStatus={`Auth`}
            films={[]}
            loadFavorite={()=> {}}
            signIn={()=>{}}
            statusLoadFilms={`success`}
            statusLoadPromo={`success`}
            statusUploadComment={`success`}
            uploadComment={() => {}}
          />
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

