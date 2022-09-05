import { act } from 'react-dom/test-utils';
import { CheckboxControl } from '../../../Form'; // eslint-disable-next-line import/prefer-default-export

export var toggleCheckbox = function toggleCheckbox(_ref) {
  var isChecked = _ref.isChecked,
      wrapper = _ref.wrapper;
  act(function () {
    wrapper.find(CheckboxControl).simulate('change', {
      target: {
        checked: isChecked
      }
    });
  });
  wrapper.update();
  expect(wrapper.find(CheckboxControl).prop('checked')).toEqual(isChecked);
};
//# sourceMappingURL=utils.js.map