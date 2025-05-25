import React, { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import isEmpty from 'lodash/isEmpty';
import { ensureConfig } from '@edx/frontend-platform';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import {
  ActionRow,
  Button,
} from '@openedx/paragon';
import messages from '../messages';

ensureConfig([
  'SUPPORT_EMAIL',
], 'Studio Footer Help Content component');

const BUTTONS = [
  {
    as: 'a',
    href: 'https://docs.openedx.org/',
    size: 'sm',
    message: messages.edxDocumentationButtonLabel,
    dataTestid: null,
  },
  {
    as: 'a',
    href: 'https://openedx.org/',
    size: 'sm',
    message: messages.openEdxPortalButtonLabel,
    dataTestid: 'openEdXPortalButton',
  },
  {
    as: 'a',
    href: 'https://www.edx.org/course/edx101-overview-of-creating-an-edx-course#.VO4eaLPF-n1',
    size: 'sm',
    message: messages.edx101ButtonLabel,
    dataTestid: 'openEdXDemoCourseButton',
  },
  {
    as: 'a',
    href: 'https://www.edx.org/course/studiox-creating-a-course-with-edx-studio',
    size: 'sm',
    message: messages.studioXButtonLabel,
    dataTestid: null,
  },
];

const HelpContent = () => {
  const { config } = useContext(AppContext);
  return (
    <ActionRow key="help-link-button-row" className="py-4" data-testid="helpButtonRow">
      <ActionRow.Spacer />

      {BUTTONS.map(({
        as, href, size, message, dataTestid,
      }) => (
        <Button as={as} href={href} size={size} key={message.id} data-testid={dataTestid}>
          <FormattedMessage {...message} />
        </Button>
      ))}

      {!isEmpty(config.SUPPORT_EMAIL) && (
        <Button
          as="a"
          href={`mailto:${config.SUPPORT_EMAIL}`}
          size="sm"
          data-testid="contactUsButton"
        >
          <FormattedMessage {...messages.contactUsButtonLabel} />
        </Button>
      )}
      <ActionRow.Spacer />
    </ActionRow>
  );
};

export default HelpContent;
