// These configuration values are usually set in webpack's EnvironmentPlugin however
// Jest does not use webpack so we need to set these so for testing
process.env.ACCESS_TOKEN_COOKIE_NAME = 'edx-jwt-cookie-header-payload';
process.env.BASE_URL = 'localhost:1995';
process.env.CREDENTIALS_BASE_URL = 'http://localhost:18150';
process.env.CSRF_TOKEN_API_PATH = '/csrf/api/v1/token';
process.env.ECOMMERCE_BASE_URL = 'http://localhost:18130';
process.env.LANGUAGE_PREFERENCE_COOKIE_NAME = 'openedx-language-preference';
process.env.LMS_BASE_URL = 'http://localhost:18000';
process.env.LOGIN_URL = 'http://localhost:18000/login';
process.env.LOGOUT_URL = 'http://localhost:18000/login';
process.env.MARKETING_SITE_BASE_URL = 'http://localhost:18000';
process.env.ORDER_HISTORY_URL = 'localhost:1996/orders';
process.env.REFRESH_ACCESS_TOKEN_ENDPOINT = 'http://localhost:18000/login_refresh';
process.env.SEGMENT_KEY = 'segment_whoa';
process.env.SITE_NAME = 'edX';
process.env.USER_INFO_COOKIE_NAME = 'edx-user-info';
process.env.LOGO_URL = 'https://edx-cdn.org/v3/default/logo.svg';
process.env.LOGO_TRADEMARK_URL = 'https://edx-cdn.org/v3/default/logo-trademark.svg';
process.env.LOGO_WHITE_URL = 'https://edx-cdn.org/v3/default/logo-white.svg';
process.env.FAVICON_URL = 'https://edx-cdn.org/v3/default/favicon.ico';
process.env.ABOUT_US_URL = 'http://localhost:18000/about';
process.env.PRIVACY_POLICY_URL = 'http://localhost:18000/privacy';
process.env.HONOR_CODE_URL = 'http://localhost:18000/honor';
process.env.TERMS_OF_SERVICE_URL = 'http://localhost:18000/terms-of-service';
process.env.CONTACT_URL = 'http://localhost:18000/contact';
process.env.SUPPORT_CENTER_URL = 'http://localhost:18000/contact';
process.env.SUPPORT_CENTER_TEXT = 'SUPPORT CENTER';
process.env.TRADEMARK_TEXT = 'Trade Mark text';
process.env.FOOTER_LOGO_ALT_TEXT = 'Powered by Open edX';
process.env.SHOW_FOOTER_LOGO = true;
process.env.SUPPORT_EMAIL = 'webmaster@email.com';
process.env.ACCESSIBILITY_URL = 'https://www.edx.org/accessibility';

jest.mock('@edx/frontend-platform/config', () => ({
  ...jest.requireActual('@edx/frontend-platform/config'),
  getConfig: jest.fn(() => ({
    ABOUT_US_URL: process.env.ABOUT_US_URL,
    PRIVACY_POLICY_URL: process.env.PRIVACY_POLICY_URL,
    HONOR_CODE_URL: process.env.HONOR_CODE_URL,
    TERMS_OF_SERVICE_URL: process.env.TERMS_OF_SERVICE_URL,
    CONTACT_URL: process.env.CONTACT_URL,
    SUPPORT_CENTER_URL: process.env.SUPPORT_CENTER_URL,
    SUPPORT_CENTER_TEXT: process.env.SUPPORT_CENTER_TEXT,
    TRADEMARK_TEXT: process.env.TRADEMARK_TEXT,
    FOOTER_LOGO_ALT_TEXT: process.env.FOOTER_LOGO_ALT_TEXT,
    SHOW_FOOTER_LOGO: process.env.SHOW_FOOTER_LOGO,
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
    ACCESSIBILITY_URL: process.env.ACCESSIBILITY_URL,
  })),
}));
