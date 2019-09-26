import React from 'react';
import PropTypes from 'prop-types';

const LinkList = ({
  title: listTitle, links = [], ...props
}) => (
  <div {...props}>
    <h2>{listTitle}</h2>
    <ul className="list-unstyled p-0 m-0">
      {links.map(({
        title, href, hidden, ...linkProps
      }) => {
        if (hidden) return null;
        return (
          <li key={`${href}${title}`} {...linkProps}>
            <a href={href}>{title}</a>
          </li>
        );
      })}
    </ul>
  </div>
);

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hidden: PropTypes.bool,
  })),
};

LinkList.defaultProps = {
  links: [],
};

export default LinkList;
