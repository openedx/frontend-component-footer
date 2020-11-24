import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import Footer from '@edx/frontend-component-footer';

import './index.scss';

const App = () => (
  <div>
    <IntlProvider locale="en">
      <Footer
        onLanguageSelected={() => {}}
        supportedLanguages={[
          { label: 'English', value: 'en' },
          { label: 'Español', value: 'es' },
        ]}
      />
    </IntlProvider>
  </div>
);

render(<App />, document.getElementById('root'));
