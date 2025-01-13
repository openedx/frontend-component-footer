/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { initializeMockApp } from '@edx/frontend-platform/testing';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { getCookies } from '@edx/frontend-platform/i18n/lib';
import { AppContext } from '@edx/frontend-platform/react';
import '@testing-library/jest-dom';

import Footer from './Footer';
import { patchPreferences, postSetLang } from './LanguageSelector/data';

jest.mock('./LanguageSelector/data', () => ({
  patchPreferences: jest.fn(),
  postSetLang: jest.fn(),
}));

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
  beforeEach(() => {
    jest.clearAllMocks();
    initializeMockApp();
  });

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
      const tree = renderer
        .create(<FooterWithLanguageSelector />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('handles language switching', () => {
    it('calls publish with LOCALE_CHANGED when the language changed', () => {
      const setSpy = jest.spyOn(getCookies(), 'set');
      const component = render(<FooterWithLanguageSelector />);

      expect(component.queryByRole('button')).toBeInTheDocument();

      const langDropdown = component.queryByRole('button');
      fireEvent.click(langDropdown);
      fireEvent.click(component.queryByText('Español'));

      expect(setSpy).toHaveBeenCalledWith(LANGUAGE_PREFERENCE_COOKIE_NAME, 'es');
    });
    it('update the lang preference for an autheticathed user', async () => {
      const userData = { username: 'test-user' };
      const component = render(<FooterWithLanguageSelector authenticatedUser={userData} />);

      expect(component.queryByRole('button')).toBeInTheDocument();

      const langDropdown = component.queryByRole('button');
      fireEvent.click(langDropdown);
      fireEvent.click(component.queryByText('Español'));

      await waitFor(() => {
        expect(patchPreferences).toHaveBeenCalledWith(userData.username, { prefLang: 'es' });
        expect(postSetLang).toHaveBeenCalledWith('es');
      });
    });
  });
});
