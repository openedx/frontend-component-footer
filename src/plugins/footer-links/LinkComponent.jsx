/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const LinkComponent = ({ data }) => (
  <ul className="nav nav-list">
    {
      data.navigationLinks?.map((link) => (
        <li className="nav-item" key={link.name}>
          <a className="nav-link" href={link.url}>{link.title}</a>
        </li>
      ))
    }
    {
      data.legalLinks?.map((link) => (
        <li className="nav-item" key={link.name}>
          <a className="nav-link" href={link.url}>{link.title}</a>
        </li>
      ))
    }
  </ul>
);

LinkComponent.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    businessLinks: PropTypes.array,
    connectLinks: PropTypes.array,
    copyright: PropTypes.string,
    edxOrgLink: PropTypes.objectOf(PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })),
    legalLinks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })),
    logoImage: PropTypes.string,
    mobileLinks: PropTypes.array,
    moreInfoLinks: PropTypes.array,
    navigationLinks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })),
    openedxLink: PropTypes.objectOf(PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })),
    socialLinks: PropTypes.array,
  })),
};

LinkComponent.defaultProps = {
  data: {
    navigationLinks: [],
    legalLinks: [],
  },
};

// eslint-disable-next-line import/prefer-default-export
export { LinkComponent };
