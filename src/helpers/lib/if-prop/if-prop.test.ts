import { ifProp } from './if-prop';

interface MockType {
  foo: unknown;
}

describe('ifProp', () => {
  it('should return function after first call', () => {
    expect(typeof ifProp<MockType>('foo')).toBe('function');
  });

  it('should return pass', () => {
    expect(ifProp<MockType>('foo', 'yes', 'no')({ foo: true })).toBe('yes');
    expect(ifProp<MockType>('foo', 'yes', 'no')({ foo: 'someString' })).toBe('yes');
  });

  it('should return fail', () => {
    expect(ifProp<MockType>('foo', 'yes', 'no')({ foo: false })).toBe('no');
    expect(ifProp<MockType>('foo', 'yes', 'no')({ foo: undefined })).toBe('no');
    expect(ifProp<MockType>('foo', 'yes', 'no')({} as MockType)).toBe('no');
  });

  it('should call only pass', () => {
    const mockPass = jest.fn();
    const mockFail = jest.fn();

    ifProp<MockType>('foo', mockPass, mockFail)({ foo: true });

    expect(mockFail).not.toHaveBeenCalled();
    expect(mockPass).toHaveBeenCalledWith({ foo: true });
  });

  it('should call only fail', () => {
    const mockPass = jest.fn();
    const mockFail = jest.fn();

    ifProp('foo', mockPass, mockFail)({ foo: false });

    expect(mockPass).not.toHaveBeenCalled();
    expect(mockFail).toHaveBeenCalledWith({ foo: false });
  });

  it('should return empty string if pass & fail is not passed', () => {
    expect(ifProp<MockType>('foo')({ foo: true })).toBe('');
  });
});
