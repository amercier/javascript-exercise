/**
 * Actual implementation of `resolveObjects`, for the purpose of the exercise.
 */

/**
 * Expand an object's keys into nested objects.
 *
 * @example
 *
 *     resolveObjects({
 *       'id': 1,
 *       'contact.name.first': 'John',
 *       'contact.name.last': 'Doe'
 *     })
 *
 *     =>
 *     {
 *       id: 1,
 *       contact: {
 *         name: {
 *           first: 'John',
 *           last: 'Doe'
 *         },
 *       },
 *     }
 *
 * @param {Object} object Input object
 * @param {string} [separator='.'] Separator
 * @returns {Object} Input object where all keys containing `separator` are expanded into nested
 * objects.
 */
function resolveObjects(object, separator = '.') {
  const result = {};
  let currentResult = result;
  Object.entries(object).forEach(([key, value]) => {
    key.split(separator).forEach((currentKey, keyIndex, allKeys) => {
      if (keyIndex === allKeys.length - 1) {
        currentResult[currentKey] = value;
      } else {
        currentResult[currentKey] = currentResult[currentKey] || {};
        currentResult = currentResult[currentKey];
      }
    });
  });
  return result;
}

module.exports = resolveObjects;
