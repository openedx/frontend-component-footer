/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import StudioFooter from './StudioFooter';
import messages from './messages';

const config = {
  LMS_BASE_URL: process.env.LMS_BASE_URL,
  MARKETING_SITE_BASE_URL: process.env.MARKETING_SITE_BASE_URL,
  TERMS_OF_SERVICE_URL: process.env.TERMS_OF_SERVICE_URL,
  PRIVACY_POLICY_URL: process.env.PRIVACY_POLICY_URL,
  SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
  SITE_NAME: process.env.SITE_NAME,
  STUDIO_BASE_URL: process.env.STUDIO_BASE_URL,
  ENABLE_ACCESSIBILITY_PAGE: process.env.ENABLE_ACCESSIBILITY_PAGE,
};

let currentConfig = config;
const Component = ({ updateVariable }) => {
  if (updateVariable) {
    const [variable, value] = updateVariable;
    currentConfig = {
      ...config,
      [variable]: value,
    };
  }
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config: currentConfig,
  }), []);

  return (
    <IntlProvider locale="en">
      <AppContext.Provider value={contextValue}>
        <StudioFooter />
      </AppContext.Provider>
    </IntlProvider>
  );
};

jest.unmock('@openedx/paragon');

describe('Footer', () => {
  describe('help section default view', () => {
    it('help button should read Looking for help with Studio?', () => {
      render(<Component />);
      expect(screen.getByText(messages.openHelpButtonLabel.defaultMessage))
        .toBeVisible();
    });
    it('help button link row should not be visible', () => {
      render(<Component />);
      expect(screen.queryByTestId('helpButtonRow')).toBeNull();
    });
  });
  describe('help section expanded view', () => {
    it('help button should read Hide Studio help', () => {
      render(<Component />);
      const helpToggleButton = screen.getByText(messages.openHelpButtonLabel.defaultMessage);
      fireEvent.click(helpToggleButton);
      expect(screen.getByText(messages.closeHelpButtonLabel.defaultMessage))
        .toBeVisible();
    });
    it('help button link row should be visible', () => {
      render(<Component />);
      const helpToggleButton = screen.getByText(messages.openHelpButtonLabel.defaultMessage);
      fireEvent.click(helpToggleButton);
      expect(screen.getByTestId('helpButtonRow')).toBeVisible();
    });
    it('Open edX portal button should be visible', () => {
      render(<Component />);
      const helpToggleButton = screen.getByText(messages.openHelpButtonLabel.defaultMessage);
      fireEvent.click(helpToggleButton);
      expect(screen.getByTestId('openEdXPortalButton')).toBeVisible();
    });
    it('should not show contact us button', () => {
      render(<Component />);
      const helpToggleButton = screen.getByText(messages.openHelpButtonLabel.defaultMessage);
      fireEvent.click(helpToggleButton);
      expect(screen.queryByTestId('contactUsButton')).toBeNull();
    });
    it('should show contact us button', () => {
      render(<Component updateVariable={['SUPPORT_EMAIL', 'support@email.com']} />);
      const helpToggleButton = screen.getByText(messages.openHelpButtonLabel.defaultMessage);
      fireEvent.click(helpToggleButton);
      expect(screen.getByTestId('contactUsButton')).toBeVisible();
    });
  });
  describe('policy link row', () => {
    it('should only show LMS link', () => {
      render(<Component />);
      expect(screen.getByText('LMS')).toBeVisible();
      expect(screen.queryByTestId('termsOfService')).toBeNull();
      expect(screen.queryByTestId('privacyPolicy')).toBeNull();
      expect(screen.queryByTestId('accessibilityRequest')).toBeNull();
    });
    it('should show terms of service link', () => {
      render(<Component updateVariable={['TERMS_OF_SERVICE_URL', 'termsofserviceurl']} />);
      expect(screen.getByText('LMS')).toBeVisible();
      expect(screen.queryByTestId('termsOfService')).toBeVisible();
      expect(screen.queryByTestId('privacyPolicy')).toBeNull();
      expect(screen.queryByTestId('accessibilityRequest')).toBeNull();
    });
    it('should show privacy policy link', () => {
      render(<Component updateVariable={['PRIVACY_POLICY_URL', 'privacypolicyurl']} />);
      expect(screen.getByText('LMS')).toBeVisible();
      expect(screen.queryByTestId('termsOfService')).toBeNull();
      expect(screen.queryByTestId('privacyPolicy')).toBeVisible();
      expect(screen.queryByTestId('accessibilityRequest')).toBeNull();
    });
    it('should show accessibilty request link', () => {
      render(<Component updateVariable={['ENABLE_ACCESSIBILITY_PAGE', 'true']} />);
      expect(screen.getByText('LMS')).toBeVisible();
      expect(screen.queryByTestId('termsOfService')).toBeNull();
      expect(screen.queryByTestId('privacyPolicy')).toBeNull();
      expect(screen.queryByTestId('accessibilityRequest')).toBeVisible();
    });
  });
});
