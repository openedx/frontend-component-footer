/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import {
  act, fireEvent, render, waitFor,
} from '@testing-library/react';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { getCookies } from '@edx/frontend-platform/i18n/lib';
import { AppContext } from '@edx/frontend-platform/react';
import { initializeMockApp } from '@edx/frontend-platform/testing';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

import '@testing-library/jest-dom';

import LanguageSelector from '.';

jest.mock('@edx/frontend-platform/auth', () => ({
  ...jest.requireActual('@edx/frontend-platform/auth'),
  getAuthenticatedHttpClient: jest.fn(),
}));

jest.mock('@openedx/paragon/icons', () => ({
  Language: () => <div>LanguageIcon</div>,
}));

const { LANGUAGE_PREFERENCE_COOKIE_NAME } = process.env;

const LanguageSelectorContext = ({ authenticatedUser = null }) => {
  const contextValue = useMemo(() => ({
    authenticatedUser,
    config: {
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
        <LanguageSelector
          options={['es', 'en']}
          username={authenticatedUser?.username}
          langCookieName={LANGUAGE_PREFERENCE_COOKIE_NAME}
        />
      </AppContext.Provider>
    </IntlProvider>
  );
};

describe('LanguageSelector', () => {
  let initService;

  beforeEach(() => {
    jest.clearAllMocks();
    initService = initializeMockApp();
  });

  it('change the language for a non authenticated user', () => {
    const setSpy = jest.spyOn(getCookies(), 'set');
    const component = render(<LanguageSelectorContext />);

    expect(component.queryByRole('button')).toBeInTheDocument();

    const langDropdown = component.queryByRole('button');
    fireEvent.click(langDropdown);
    fireEvent.click(component.queryByText('Español'));

    expect(setSpy).toHaveBeenCalledWith(LANGUAGE_PREFERENCE_COOKIE_NAME, 'es');
  });

  it('update the lang preference for an autheticathed user', async () => {
    const userData = { username: 'test-user' };
    const processedParams = {
      'pref-lang': 'es',
    };
    getAuthenticatedHttpClient.mockReturnValue({
      patch: jest.fn(),
      post: jest.fn(),
    });
    const formData = new FormData();
    formData.append('language', 'es');

    const component = render(<LanguageSelectorContext authenticatedUser={userData} />);

    expect(component.queryByRole('button')).toBeInTheDocument();

    const langDropdown = component.queryByRole('button');
    fireEvent.click(langDropdown);
    fireEvent.click(component.queryByText('Español'));

    await waitFor(() => {
      expect(getAuthenticatedHttpClient().patch)
        .toHaveBeenCalledWith(`${process.env.LMS_BASE_URL}/api/user/v1/preferences/${userData.username}`, processedParams, {
          headers: { 'Content-Type': 'application/merge-patch+json' },
        });
      expect(getAuthenticatedHttpClient().post)
        .toHaveBeenCalledWith(
          `${process.env.LMS_BASE_URL}/i18n/setlang/`,
          formData,
          { headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' } },
        );
    });
  });

  it('call logError if it can not update the user preference', async () => {
    const { loggingService } = initService;
    const userData = { username: 'test-user' };
    const component = render(<LanguageSelectorContext authenticatedUser={userData} />);
    getAuthenticatedHttpClient.mockReturnValue({
      patch: jest.fn().mockRejectedValue(new Error('Error')),
    });
    expect(component.queryByRole('button')).toBeInTheDocument();

    const langDropdown = component.queryByRole('button');
    fireEvent.click(langDropdown);
    fireEvent.click(component.queryByText('Español'));

    await waitFor(() => {
      expect(loggingService.logError).toHaveBeenCalled();
    });
  });

  it('should disp,ay the language icon and modify the label according to the screen size', () => {
    const component = render(<LanguageSelectorContext />);
    expect(component.queryByRole('button').textContent).toBe('LanguageIconEnglish');

    act(() => {
      global.innerWidth = 700;
      global.dispatchEvent(new Event('resize'));
    });
    expect(component.queryByRole('button').textContent).toBe('LanguageIconEN');
    act(() => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));
    });
    expect(component.queryByRole('button').textContent).toBe('LanguageIcon');
  });
});
