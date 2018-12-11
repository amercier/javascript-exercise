const resolveObjectsReal = require('./resolve-objects-real.js');
const resolveObjectsImplementation = require('./resolve-objects.js');

[
  ['Real-world solution', resolveObjectsReal],
  ['Own implementation', resolveObjectsImplementation],
].forEach(([description, resolveObjects]) =>
  describe(description, () => {
    it('works', () => {
      const tests = [
        {
          input: {
            a: {
              b: {
                c: 'z',
              },
            },
            'a.b.d': 'y',
          },
          output: {
            a: {
              b: {
                c: 'z',
                d: 'y',
              },
            },
          },
        },
      ];
      tests.forEach(test => {
        expect(resolveObjects(test.input)).toEqual(test.output);
      });
    });
  }),
);
