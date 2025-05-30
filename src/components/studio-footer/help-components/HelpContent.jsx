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
    href: 'https://docs.openedx.org/en/latest/educators/quickstarts/build_a_course.html',
    size: 'sm',
    message: messages.educatorsDocsButtonLabel,
    dataTestid: null,
  },
  {
    as: 'a',
    href: 'https://sandbox.openedx.org/courses/course-v1:OpenedX+01-2024+2024-1/about',
    size: 'sm',
    message: messages.openEdxDemoCourseButtonLabel,
    dataTestid: 'openEdXDemoCourseButton',
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
