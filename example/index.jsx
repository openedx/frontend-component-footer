import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { initialize, getConfig, subscribe, APP_READY } from '@edx/frontend-platform';
import { AppContext, AppProvider } from '@edx/frontend-platform/react';
import Footer from '@edx/frontend-component-footer';

import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <AppContext.Provider value={{
        authenticatedUser: null,
        config: getConfig(),
      }}>
        <Footer />
      </AppContext.Provider>
    </AppProvider>,
    document.getElementById('root'),
  );
});

initialize({
  messages: []
});
