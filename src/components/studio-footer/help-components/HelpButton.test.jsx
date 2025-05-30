import React, { useMemo } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import HelpButton from './HelpButton';
import '@testing-library/jest-dom';

// eslint-disable-next-line react/prop-types
const ButtonWithContext = ({ locale = 'en', isOpen, setIsOpen }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser: null,
    config: { },
  }), []);

  return (
    <IntlProvider locale={locale}>
      <AppContext.Provider
        value={contextValue}
      >
        <HelpButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </AppContext.Provider>
    </IntlProvider>
  );
};

describe('HelpButton', () => {
  const mockSetIsOpen = jest.fn();

  beforeEach(() => {
    mockSetIsOpen.mockClear();
  });

  it('renders with "open" label when isOpen is false', () => {
    render(<ButtonWithContext isOpen={false} setIsOpen={mockSetIsOpen} />);
    expect(screen.getByTestId('helpToggleButton')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/help|open/i);
  });

  it('renders with "close" label when isOpen is true', () => {
    render(<ButtonWithContext isOpen setIsOpen={mockSetIsOpen} />);
    expect(screen.getByTestId('helpToggleButton')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/close|help/i);
  });

  it('calls setIsOpen with the toggled value when clicked', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<ButtonWithContext isOpen={false} setIsOpen={mockSetIsOpen} />);
    await user.click(screen.getByTestId('helpToggleButton'));
    expect(mockSetIsOpen).toHaveBeenCalledWith(true);
    rerender(<ButtonWithContext isOpen setIsOpen={mockSetIsOpen} />);
    await user.click(screen.getByTestId('helpToggleButton'));
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });
});
