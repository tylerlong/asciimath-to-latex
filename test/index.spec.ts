import asciimath2latex from '../src';

describe('Address Book', () => {
  test('contacts', async () => {
    const asciimath = '2=(((3-x)xx2)/(3-x))';
    const latex = asciimath2latex(asciimath);
    expect(latex).toBe(
      String.raw`{2}={\left(\frac{{{\left({3}-{x}\right)}\times{2}}}{{{3}-{x}}}\right)}`
    );
  });
});
