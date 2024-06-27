/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import Footer from './Footer';

const FooterWithContext = ({ locale = 'es' }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config: {
      LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
      LMS_BASE_URL: process.env.LMS_BASE_URL,
      ABOUT_US_URL: process.env.ABOUT_US_URL,
      ACCESSIBILITY_URL: process.env.ACCESSIBILITY_URL,
      CONTACT_URL: process.env.CONTACT_URL,
      HONOR_CODE_URL: process.env.HONOR_CODE_URL,
      FOOTER_LOGO_ALT_TEXT: process.env.FOOTER_LOGO_ALT_TEXT,
      PRIVACY_POLICY_URL: process.env.PRIVACY_POLICY_URL,
      SHOW_FOOTER_LOGO: process.env.SHOW_FOOTER_LOGO,
      SUPPORT_CENTER_TEXT: process.env.SUPPORT_CENTER_TEXT,
      SUPPORT_CENTER_URL: process.env.SUPPORT_CENTER_URL,
      TERMS_OF_SERVICE_URL: process.env.TERMS_OF_SERVICE_URL,
      TRADEMARK_TEXT: process.env.TRADEMARK_TEXT,
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

const FooterWithLanguageSelector = ({ languageSelected = () => {} }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config: {
      LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
      LMS_BASE_URL: process.env.LMS_BASE_URL,
      ABOUT_US_URL: process.env.ABOUT_US_URL,
      ACCESSIBILITY_URL: process.env.ACCESSIBILITY_URL,
      CONTACT_URL: process.env.CONTACT_URL,
      HONOR_CODE_URL: process.env.HONOR_CODE_URL,
      FOOTER_LOGO_ALT_TEXT: process.env.FOOTER_LOGO_ALT_TEXT,
      PRIVACY_POLICY_URL: process.env.PRIVACY_POLICY_URL,
      SHOW_FOOTER_LOGO: process.env.SHOW_FOOTER_LOGO,
      SUPPORT_CENTER_TEXT: process.env.SUPPORT_CENTER_TEXT,
      SUPPORT_CENTER_URL: process.env.SUPPORT_CENTER_URL,
      TERMS_OF_SERVICE_URL: process.env.TERMS_OF_SERVICE_URL,
      TRADEMARK_TEXT: process.env.TRADEMARK_TEXT,
    },
  }), []);

  return (
    <IntlProvider locale="en">
      <AppContext.Provider
        value={contextValue}
      >
        <Footer
          onLanguageSelected={languageSelected}
          supportedLanguages={[
            { label: 'English', value: 'en' },
            { label: 'Español', value: 'es' },
          ]}
        />
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
      const tree = renderer
        .create(<FooterWithLanguageSelector />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('handles language switching', () => {
    it('calls onLanguageSelected prop when a language is changed', () => {
      const mockHandleLanguageSelected = jest.fn();
      render(<FooterWithLanguageSelector languageSelected={mockHandleLanguageSelected} />);

      fireEvent.submit(screen.getByTestId('site-footer-submit-btn'), {
        target: {
          elements: {
            'site-footer-language-select': {
              value: 'es',
            },
          },
        },
      });

      expect(mockHandleLanguageSelected).toHaveBeenCalledWith('es');
    });
  });
});
