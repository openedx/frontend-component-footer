import React, { useMemo } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import HelpSection from './HelpSection';
import '@testing-library/jest-dom';

// eslint-disable-next-line react/prop-types
const HelpSectionWithContext = ({ locale = 'en', config = {}, containerProps = null }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config,
  }), [config]);

  return (
    <IntlProvider locale={locale}>
      <AppContext.Provider
        value={contextValue}
      >
        <HelpSection containerProps={containerProps} />
      </AppContext.Provider>
    </IntlProvider>
  );
};

describe('HelpSection', () => {
  it('renders the HelpButton', () => {
    render(<HelpSectionWithContext />);
    expect(screen.getByTestId('helpToggleButton')).toBeInTheDocument();
  });

  it('does not show HelpContent by default', () => {
    render(<HelpSectionWithContext />);
    expect(screen.queryByTestId('helpButtonRow')).not.toBeInTheDocument();
  });

  it('shows HelpContent when HelpButton is clicked', () => {
    render(<HelpSectionWithContext />);
    const button = screen.getByTestId('helpToggleButton');
    fireEvent.click(button);
    expect(screen.getByTestId('helpButtonRow')).toBeInTheDocument();
  });

  it('hides HelpContent when HelpButton is clicked twice', () => {
    render(<HelpSectionWithContext containerProps={{ containerClassName: 'container', size: 'xl' }} />);
    const button = screen.getByTestId('helpToggleButton');
    fireEvent.click(button);
    expect(screen.queryByTestId('helpButtonRow')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByTestId('helpButtonRow')).not.toBeInTheDocument();
  });
});
