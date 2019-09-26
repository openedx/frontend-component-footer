import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { IntlProvider } from '@edx/frontend-i18n';

import Footer, { EVENT_NAMES } from './Footer';

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

  describe('handles analytics', () => {
    it('calls handleAllTrackEvents prop when external links clicked', () => {
      const mockHandleAllTrackEvents = jest.fn();
      const wrapper = mount((
        <IntlProvider locale="en">
          <Footer handleAllTrackEvents={mockHandleAllTrackEvents} />
        </IntlProvider>
      ));
      const externalLinks = wrapper.find("a[target='_blank']");

      expect(externalLinks.length).not.toEqual(0);

      externalLinks.forEach((externalLink) => {
        const callIndex = mockHandleAllTrackEvents.mock.calls.length;
        externalLink.simulate('click');
        expect(mockHandleAllTrackEvents.mock.calls[callIndex]).toEqual([
          EVENT_NAMES.FOOTER_LINK,
          {
            category: 'outbound_link',
            label: externalLink.prop('href'),
          },
        ]);
      });
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
