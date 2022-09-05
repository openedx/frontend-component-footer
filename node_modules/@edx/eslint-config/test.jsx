/* eslint-disable no-unused-vars */

// Tests for custom rules in .eslintrc.js

// arrow-parens
const foo = bar => bar.id;

// class-methods-use-this
class MethodDoesNotUseThis {
  foo() {
    const bar = 'hah';
  }

  render() {
    return (
      <>
        <label htmlFor="the-input">The input</label>
        <input id="the-input" type="text" value="hi" />
      </>
    );
  }
}

// disable no-plusplus
let i = 0;
i++;
