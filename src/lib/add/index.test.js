import add from './index';

describe('Add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
