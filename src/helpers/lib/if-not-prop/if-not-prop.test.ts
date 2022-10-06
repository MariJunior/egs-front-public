import { ifNotProp } from './if-not-prop';

interface MockType {
  foo: unknown;
}

describe('ifNotProp', () => {
  it('should return fail', () => {
    expect(ifNotProp<MockType>('foo', 'yes', 'no')({ foo: true })).toBe('no');
  });

  it('should return pass', () => {
    expect(ifNotProp<MockType>('foo', 'yes', 'no')({ foo: undefined })).toBe('yes');
    expect(ifNotProp<MockType>('foo', 'yes', 'no')({ foo: false })).toBe('yes');
    expect(ifNotProp<MockType>('foo', 'yes', 'no')({} as MockType)).toBe('yes');
  });

  it('should call only fail', () => {
    const mockPass = jest.fn();
    const mockFail = jest.fn();

    ifNotProp('foo', mockPass, mockFail)({ foo: true });

    expect(mockFail).toHaveBeenCalled();
    expect(mockPass).not.toHaveBeenCalled();
  });

  it('should call only pass', () => {
    const mockPass = jest.fn();
    const mockFail = jest.fn();

    ifNotProp<MockType>('foo', mockPass, mockFail)({ foo: false });

    expect(mockFail).not.toHaveBeenCalled();
    expect(mockPass).toHaveBeenCalled();
  });

  it('should return empty string if pass & fail is not passed', () => {
    expect(ifNotProp<MockType>('foo')({ foo: true })).toBe('');
  });
});
