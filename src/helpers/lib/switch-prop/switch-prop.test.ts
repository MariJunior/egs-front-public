import { switchProp } from './switch-prop';

interface MockType {
  tone: unknown;
}

describe('switchProp', () => {
  it('should return function after first call', () => {
    expect(typeof switchProp<MockType>('tone', {})).toBe('function');
  });

  it('should return correct case', () => {
    const cases = { light: 'white', dark: 'black' };

    const expected = switchProp<MockType>('tone', cases)({ tone: 'light' });

    expect(expected).toBe(cases.light);
  });

  it('should return default value', () => {
    const defaultValue = 'someValue';
    const cases = { light: 'white', dark: 'black' };

    const expected = switchProp<MockType>('tone', cases, defaultValue)({ tone: 'gray' });

    expect(expected).toBe(defaultValue);
  });

  it('should return undefined if default value is not passed', () => {
    const cases = { light: 'white', dark: 'black' };

    const expected = switchProp<MockType>('tone', cases)({ tone: 'gray' });

    expect(expected).toBeUndefined();
  });

  it('should call needle with props', () => {
    const needle = jest.fn().mockImplementation((props) => props.tone);
    const cases = { light: 'white', dark: jest.fn() };

    switchProp(needle, cases)({ tone: 'dark' });

    expect(needle).toHaveBeenCalledWith({ tone: 'dark' });
  });
});
