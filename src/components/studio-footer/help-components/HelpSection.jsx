import React from 'react';
import {
  Container,
  TransitionReplace,
} from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import HelpContent from './HelpContent';
import HelpButton from './HelpButton';

const HelpSection = ({ containerProps }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { containerClassName, ...restContainerProps } = containerProps || {};
  return (
    <>
      <div className="m-0 mt-6 row align-items-center justify-content-center">
        <div className="col border-top mr-2" />
        <HelpButton
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <div className="col border-top ml-2" />
      </div>
      <Container
        size="xl"
        className={classNames('px-4', containerClassName)}
        {...restContainerProps}
      >
        {isOpen && <TransitionReplace><HelpContent /></TransitionReplace> }
      </Container>
    </>
  );
};

HelpSection.propTypes = {
  containerProps: PropTypes.shape(Container.propTypes),
};

HelpSection.defaultProps = {
  containerProps: {},
};

export default HelpSection;
