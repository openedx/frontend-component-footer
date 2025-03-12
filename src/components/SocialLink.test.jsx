import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

const footerIcons = [
  { url: 'https://example.com/facebook', title: 'Facebook', icon: 'facebook' },
  { url: 'https://example.com/twitter', title: 'Twitter', icon: 'twitter' },
];

const svgSprite = '/path/to/sprite.svg';

describe('SocialLinks component', () => {
  it('renders a list of social links', () => {
    render(<SocialLinks footerIcons={footerIcons} svgSprite={svgSprite} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(footerIcons.length);
    footerIcons.forEach((icon, index) => {
      expect(links[index]).toHaveAttribute('href', icon.url);
    });
  });

  it('renders svg with correct href and title', () => {
    render(<SocialLinks footerIcons={footerIcons} svgSprite={svgSprite} />);
    footerIcons.forEach((icon, index) => {
      const svgUse = screen.getAllByRole('img')[index].querySelector('use');
      expect(svgUse).toHaveAttribute('href', `${svgSprite}#${icon.icon}`);
    });
    footerIcons.forEach((icon, index) => {
      const svgTitle = screen.getAllByRole('img')[index].querySelector('title');
      expect(svgTitle).toHaveTextContent(icon.title);
    });
  });

  it('links open in a new tab', () => {
    render(<SocialLinks footerIcons={footerIcons} svgSprite={svgSprite} />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('renders each social link inside an li element', () => {
    render(<SocialLinks footerIcons={footerIcons} svgSprite={svgSprite} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(footerIcons.length);
  });

  it('renders svg with correct class names', () => {
    render(<SocialLinks footerIcons={footerIcons} svgSprite={svgSprite} />);
    footerIcons.forEach((icon, index) => {
      const svg = screen.getAllByRole('img')[index];
      expect(svg).toHaveClass('footer-social-list__svg');
    });
  });

  it('does not render anything when footerIcons is empty', () => {
    render(<SocialLinks footerIcons={[]} svgSprite={svgSprite} />);
    const list = screen.queryByRole('list');
    expect(list).toBeNull();
  });
});
