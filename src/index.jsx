import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from '@edx/frontend-i18n';

import SiteFooter from './lib';
import './index.scss';

const App = () => (
  <SiteFooter
    handleAllTrackEvents={() => {}}
    supportedLanguages={[
      { label: 'English', value: 'en' },
      { label: 'Español', value: 'es-419' },
    ]}
    onLanguageSelected={() => {}}
  />
);

render(<IntlProvider locale="en"><App /></IntlProvider>, document.getElementById('root'));
