import { prop } from './prop';

interface MockType {
  color: unknown;
}

describe('prop', () => {
  it('should return function after first call', () => {
    expect(typeof prop<MockType>('color')).toBe('function');
  });

  it('should return prop', () => {
    const color = prop<MockType>('color')({ color: '#fff' });

    expect(color).toBe('#fff');
  });

  it('should return undefined for nonexistent prop', () => {
    expect(prop<MockType>('color')({} as MockType)).toBeUndefined();
  });

  it('should return default value', () => {
    expect(prop<MockType>('color', 'someColor')({} as MockType)).toBe('someColor');
  });
});
