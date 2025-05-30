import React from 'react';
import {
  Container,
  TransitionReplace,
} from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import StudioFooterHelpButtonSlot from '../../../plugin-slots/StudioFooterHelpButtonSlot';
import StudioFooterHelpContentlot from '../../../plugin-slots/StudioFooterHelpContentSlot';

const HelpSection = ({ containerProps }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { containerClassName, ...restContainerProps } = containerProps || {};
  return (
    <>
      <div className="m-0 mt-6 row align-items-center justify-content-center">
        <div className="col border-top mr-2" />
        <StudioFooterHelpButtonSlot
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
        {isOpen && <TransitionReplace><StudioFooterHelpContentlot /></TransitionReplace> }
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
