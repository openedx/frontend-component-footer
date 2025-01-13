/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { initializeMockApp } from '@edx/frontend-platform/testing';

import Footer from './Footer';

const FooterWithContext = ({ locale = 'es' }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config: {
      LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
      LMS_BASE_URL: process.env.LMS_BASE_URL,
    },
  }), []);

  return (
    <IntlProvider locale={locale}>
      <AppContext.Provider
        value={contextValue}
      >
        <Footer />
      </AppContext.Provider>
    </IntlProvider>
  );
};

const { LANGUAGE_PREFERENCE_COOKIE_NAME } = process.env;
const FooterWithLanguageSelector = ({ authenticatedUser = null }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser,
    config: {
      ENABLE_FOOTER_LANG_SELECTOR: true,
      LANGUAGE_PREFERENCE_COOKIE_NAME,
      LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
      LMS_BASE_URL: process.env.LMS_BASE_URL,
      SITE_SUPPORTED_LANGUAGES: ['es', 'en'],
    },
  }), [authenticatedUser]);

  return (
    <IntlProvider locale="en">
      <AppContext.Provider
        value={contextValue}
      >
        <Footer />
      </AppContext.Provider>
    </IntlProvider>
  );
};

describe('<Footer />', () => {
  describe('renders correctly', () => {
    it('renders without a language selector', () => {
      const tree = renderer
        .create(<FooterWithContext locale="en" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders without a language selector in es', () => {
      const tree = renderer
        .create(<FooterWithContext locale="es" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with a language selector', () => {
      initializeMockApp();
      const tree = renderer
        .create(<FooterWithLanguageSelector />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
