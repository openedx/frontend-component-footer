import React, { useMemo } from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import HelpContent from './HelpContent';
import '@testing-library/jest-dom';
import messages from '../messages';

// eslint-disable-next-line react/prop-types
const ContentWithContext = ({ locale = 'en', config = {} }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config,
  }), [config]);

  return (
    <IntlProvider locale={locale}>
      <AppContext.Provider
        value={contextValue}
      >
        <HelpContent />
      </AppContext.Provider>
    </IntlProvider>
  );
};

describe('HelpContent', () => {
  it('renders all help buttons', () => {
    const config = { SUPPORT_EMAIL: 'support@example.com' };
    render(<ContentWithContext config={config} />);
    expect(screen.getByText(messages.educatorsDocsButtonLabel.defaultMessage)).toBeInTheDocument();
    expect(screen.getByText(messages.openEdxDemoCourseButtonLabel.defaultMessage)).toBeInTheDocument();
  });

  it('does not render contact button if SUPPORT_EMAIL is empty', () => {
    render(<ContentWithContext config={{ SUPPORT_EMAIL: null }} />);
    expect(screen.queryByTestId('contactUsButton')).not.toBeInTheDocument();
  });

  it('renders ActionRow with correct test id', () => {
    render(<ContentWithContext />);
    expect(screen.getByTestId('helpButtonRow')).toBeInTheDocument();
  });
});
