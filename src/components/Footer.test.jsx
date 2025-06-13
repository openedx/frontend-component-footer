/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider, changeUserSessionLanguage } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { initializeMockApp } from '@edx/frontend-platform/testing';

import FooterSlot from '../plugin-slots/FooterSlot';
import StudioFooterHelpSectionSlot from '../plugin-slots/StudioFooterHelpSectionSlot';

jest.mock('@edx/frontend-platform/i18n', () => ({
  ...jest.requireActual('@edx/frontend-platform/i18n'),
  changeUserSessionLanguage: jest.fn(),
}));

const FooterWithContext = ({ locale = 'en' }) => {
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
        <FooterSlot />
      </AppContext.Provider>
    </IntlProvider>
  );
};

describe('<Footer />', () => {
  beforeEach(() => { initializeMockApp(); });

  it('renders correctly', () => {
    const tree = renderer
      .create(<FooterWithContext />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles language switching', async () => {
    const user = userEvent.setup();
    render(<FooterWithContext />);

    await user.click(screen.getByRole('button'), 'English');
    await user.click(screen.getByRole('button', { name: 'Español (Latinoamérica)' }));

    expect(changeUserSessionLanguage).toHaveBeenCalledWith('es-419');
  });
});

describe('<StudioFooterHelpSectionSlot />', () => {
  const SectionWithContext = ({ locale = 'es' }) => {
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
          <StudioFooterHelpSectionSlot />
        </AppContext.Provider>
      </IntlProvider>
    );
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(<SectionWithContext />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
