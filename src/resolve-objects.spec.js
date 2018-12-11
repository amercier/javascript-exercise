const resolveObjects = require('./resolve-objects-real.js');

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
