import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { IntlProvider } from '@edx/frontend-i18n';

import Footer from './Footer';

describe('<Footer />', () => {
  describe('renders correctly', () => {
    it('renders without a language selector', () => {
      const mockHandleAllTrackEvents = jest.fn();
      const tree = renderer
        .create((
          <IntlProvider locale="en">
            <Footer handleAllTrackEvents={mockHandleAllTrackEvents} />
          </IntlProvider>
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders without a language selector in es', () => {
      const mockHandleAllTrackEvents = jest.fn();
      const tree = renderer
        .create((
          <IntlProvider locale="es">
            <Footer handleAllTrackEvents={mockHandleAllTrackEvents} />
          </IntlProvider>
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with a language selector', () => {
      const mockHandleAllTrackEvents = jest.fn();
      const tree = renderer
        .create((
          <IntlProvider locale="en">
            <Footer
              handleAllTrackEvents={mockHandleAllTrackEvents}
              onLanguageSelected={() => {}}
              supportedLanguages={[
                { label: 'English', value: 'en' },
                { label: 'Español', value: 'es' },
              ]}
            />
          </IntlProvider>
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('handles language switching', () => {
    it('calls onLanguageSelected prop when a language is changed', () => {
      const mockHandleAllTrackEvents = jest.fn();
      const mockHandleLanguageSelected = jest.fn();
      const wrapper = mount((
        <IntlProvider locale="en">
          <Footer
            handleAllTrackEvents={mockHandleAllTrackEvents}
            onLanguageSelected={mockHandleLanguageSelected}
            supportedLanguages={[
              { label: 'English', value: 'en' },
              { label: 'Español', value: 'es' },
            ]}
          />
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
