import * as React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.tsx';

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
            statusUploadComment={`success`}
            uploadComment={() => {}}
          />
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

