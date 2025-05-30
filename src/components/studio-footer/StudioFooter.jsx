import React, { useContext } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useIntl, FormattedMessage } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import {
  ActionRow,
  Container,
  Hyperlink,
} from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';
import StudioFooterLogoSlot from '../../plugin-slots/StudioFooterLogoSlot';
import StudioFooterHelpSectionSlot from '../../plugin-slots/StudioFooterHelpSectionSlot';

ensureConfig([
  'LMS_BASE_URL',
  'MARKETING_SITE_BASE_URL',
  'TERMS_OF_SERVICE_URL',
  'PRIVACY_POLICY_URL',
  'SUPPORT_EMAIL',
  'SITE_NAME',
  'STUDIO_BASE_URL',
  'ENABLE_ACCESSIBILITY_PAGE',
], 'Studio Footer component');

const StudioFooter = ({
  containerProps,
}) => {
  const intl = useIntl();
  const { config } = useContext(AppContext);

  const { containerClassName, ...restContainerProps } = containerProps || {};

  return (
    <>
      <StudioFooterHelpSectionSlot containerProps={containerProps} />
      <Container
        size="xl"
        className={classNames('px-4', containerClassName)}
        {...restContainerProps}
      >
        <ActionRow className="pt-3 m-0 x-small">
          © {new Date().getFullYear()} <Hyperlink destination={config.MARKETING_SITE_BASE_URL} target="_blank" className="ml-2">{config.SITE_NAME}</Hyperlink>
          <ActionRow.Spacer />
          {!isEmpty(config.TERMS_OF_SERVICE_URL) && (
            <Hyperlink destination={config.TERMS_OF_SERVICE_URL} data-testid="termsOfService">
              {intl.formatMessage(messages.termsOfServiceLinkLabel)}
            </Hyperlink>
          )}{!isEmpty(config.PRIVACY_POLICY_URL) && (
            <Hyperlink destination={config.PRIVACY_POLICY_URL} data-testid="privacyPolicy">
              {intl.formatMessage(messages.privacyPolicyLinkLabel)}
            </Hyperlink>
          )}
          {config.ENABLE_ACCESSIBILITY_PAGE === 'true' && (
            <Hyperlink
              destination={`${config.STUDIO_BASE_URL}/accessibility`}
              data-testid="accessibilityRequest"
            >
              {intl.formatMessage(messages.accessibilityRequestLinkLabel)}
            </Hyperlink>
          )}
          <Hyperlink destination={config.LMS_BASE_URL}>LMS</Hyperlink>
        </ActionRow>
        <ActionRow className="mt-3 pb-4 x-small">
          {/*
            Site operators: Please do not remove this paragraph! this attributes back to edX and
              makes your acknowledgement of edX's trademarks clear.
            Translators: 'edX' and 'Open edX' are trademarks of 'edX Inc.'. Please do not translate
              any of these trademarks and company names.
          */}
          <FormattedMessage {...messages.trademarkMessage} />
          <Hyperlink className="ml-1" destination="https://www.edx.org">edX Inc</Hyperlink>.
          <ActionRow.Spacer />
          <StudioFooterLogoSlot />
        </ActionRow>
      </Container>
    </>
  );
};

StudioFooter.propTypes = {
  containerProps: PropTypes.shape(Container.propTypes),
};

StudioFooter.defaultProps = {
  containerProps: {},
};

export default StudioFooter;
