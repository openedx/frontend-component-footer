import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  openHelpButtonLabel: {
    id: 'authoring.footer.help.openHelp.button.label',
    defaultMessage: 'Looking for help with Studio?',
    description: 'Label for button that opens the collapsed section with help buttons',
  },
  closeHelpButtonLabel: {
    id: 'authoring.footer.help.closeHelp.button.label',
    defaultMessage: 'Hide Studio help',
    description: 'Label for button that closes the collapsed section with help buttons',
  },
  educatorsDocsButtonLabel: {
    id: 'authoring.footer.help.educatorsDocs.button.label',
    defaultMessage: 'Open edX Educators Docs',
    description: 'Label for button that links to the build a course quickstart site',
  },
  openEdxDemoCourseButtonLabel: {
    id: 'authoring.footer.help.openEdxDemoCourse.button.label',
    defaultMessage: 'Open edX Demo Course',
    description: 'Label for button that links to the open edX demo course portal',
  },
  contactUsButtonLabel: {
    id: 'authoring.footer.help.contactUs.button.label',
    defaultMessage: 'Contact us',
    description: 'Label for button that links to the email for partner support',
  },
  termsOfServiceLinkLabel: {
    id: 'authoring.footer.termsOfService.link.label',
    defaultMessage: 'Terms of Service',
    description: 'Label for button that links to the terms of service page',
  },
  privacyPolicyLinkLabel: {
    id: 'authoring.footer.privacyPolicy.link.label',
    defaultMessage: 'Privacy Policy',
    description: 'Label for button that links to the privacy policy page',
  },
  accessibilityRequestLinkLabel: {
    id: 'authoring.footer.accessibilityRequest.link.label',
    defaultMessage: 'Accessibility Accomodation Request',
    description: 'Label for button that links to the accessibility accomodation requests page',
  },
  trademarkMessage: {
    id: 'authoring.footer.trademark.message',
    defaultMessage: 'edX and Open edX, and the edX and Open edX logos are registered trademarks of',
    description: 'Message about the use of logos and names edX and Open edX',
  },
});

export default messages;
