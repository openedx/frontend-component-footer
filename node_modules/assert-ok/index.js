'use strict'

module.exports = function assertOk (value, message) {
  if (!value) {
    throw new Error(message || 'Expected true, got ' + value)
  }
}
