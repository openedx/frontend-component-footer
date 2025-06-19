import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import PropTypes from 'prop-types';
import LanguageSelector from '../../components/LanguageSelector';

const LanguageSelectorSlot = ({ supportedLanguages = [] }) => (
  <PluginSlot
    id="org.openedx.frontend.layout.footer_lang_selector.v1"
    idAliases={['footer_lang_selector']}
    slotOptions={{ mergeProps: true }}
  >
    <LanguageSelector supportedLanguages={supportedLanguages} />
  </PluginSlot>
);

LanguageSelectorSlot.propTypes = {
  supportedLanguages: PropTypes.arrayOf(PropTypes.string),
};

export default LanguageSelectorSlot;
