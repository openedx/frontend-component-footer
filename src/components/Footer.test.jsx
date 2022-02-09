import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import Footer from './Footer';

describe('<Footer />', () => {
  describe('renders correctly', () => {
    it('renders without a language selector', () => {
      const tree = renderer
        .create((
          <IntlProvider locale="en">
            <AppContext.Provider
              value={{
                authenticatedUser: null,
                config: {
                  LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
                  LMS_BASE_URL: process.env.LMS_BASE_URL,
                },
              }}
            >
              <Footer />
            </AppContext.Provider>
          </IntlProvider>
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders without a language selector in es', () => {
      const tree = renderer
        .create((
          <IntlProvider locale="es">
            <AppContext.Provider
              value={{
                authenticatedUser: null,
                config: {
                  LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
                  LMS_BASE_URL: process.env.LMS_BASE_URL,
                },
              }}
            >
              <Footer />
            </AppContext.Provider>
          </IntlProvider>
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with a language selector', () => {
      const tree = renderer
        .create((
          <IntlProvider locale="en">
            <AppContext.Provider
              value={{
                authenticatedUser: null,
                config: {
                  LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
                  LMS_BASE_URL: process.env.LMS_BASE_URL,
                },
              }}
            >
              <Footer
                onLanguageSelected={() => {}}
                supportedLanguages={[
                  { label: 'English', value: 'en' },
                  { label: 'Español', value: 'es' },
                ]}
              />
            </AppContext.Provider>
          </IntlProvider>
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('handles language switching', () => {
    it('calls onLanguageSelected prop when a language is changed', () => {
      const mockHandleLanguageSelected = jest.fn();
      const wrapper = mount((
        <IntlProvider locale="en">
          <AppContext.Provider
            value={{
              authenticatedUser: null,
              config: {
                LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
                LMS_BASE_URL: process.env.LMS_BASE_URL,
              },
            }}
          >
            <Footer
              onLanguageSelected={mockHandleLanguageSelected}
              supportedLanguages={[
                { label: 'English', value: 'en' },
                { label: 'Español', value: 'es' },
              ]}
            />
          </AppContext.Provider>
        </IntlProvider>
      ));

      wrapper.find('form').simulate('submit', {
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
