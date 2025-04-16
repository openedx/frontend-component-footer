import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import SocialLinks from './SocialLinks';

const footerIcons = [
  { url: 'https://example.com/facebook', title: 'Facebook', icon: 'facebook' },
  { url: 'https://example.com/twitter', title: 'Twitter', icon: 'twitter' },
];

const svgSprite = '/path/to/sprite.svg';

const Component = () => (
  <IntlProvider locale="en">
    <SocialLinks footerIcons={footerIcons} svgSprite={svgSprite} />
  </IntlProvider>
);

describe('SocialLinks component', () => {
  it('renders a list of social links', () => {
    render(<Component />);
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(footerIcons.length);
  });

  it('renders each social link inside an li element', () => {
    render(<Component />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(footerIcons.length);
  });
});
