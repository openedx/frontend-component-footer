import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '@openedx/paragon';

const SocialLinks = ({ footerIcons, svgSprite }) => (
  <ul className="footer-social-list">
    {footerIcons.map(link => (
      <li key={link.title} className="footer-social-list__item">
        <Hyperlink
          destination={link.url}
          title={link.title}
          target="_blank"
          showLaunchIcon={false}
          className="footer-social-list__link"
        >
          <svg viewBox="0 0 35 35" className="footer-social-list__svg">
            <use href={`${svgSprite}#${link.icon}`} />
            <title>{link.title}</title>
          </svg>
        </Hyperlink>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  footerIcons: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
  svgSprite: PropTypes.string.isRequired,
};

export default SocialLinks;
