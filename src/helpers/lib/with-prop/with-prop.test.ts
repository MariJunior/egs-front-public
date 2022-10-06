import { withProp } from './with-prop';

interface MockType {
  name: unknown;
}

describe('withProp', () => {
  const applicableFunction = (prop: unknown) => `newProp: ${prop}`;

  it('should return function after first call', () => {
    expect(typeof withProp<MockType>('name', applicableFunction)).toBe('function');
  });

  it('should applay fn to string needle', () => {
    expect(withProp<MockType>('name', applicableFunction)({ name: 42 })).toBe('newProp: 42');
    expect(withProp<MockType>('name', applicableFunction)({ name: 'someName' })).toBe('newProp: someName');
  });

  it('should applay fn to function needle', () => {
    expect(withProp<MockType>((props) => props.name, applicableFunction)({ name: 42 })).toBe('newProp: 42');
  });

  it('should pass undefined to fn', () => {
    expect(withProp<MockType>('name', applicableFunction)({} as MockType)).toBe('newProp: undefined');
    expect(withProp<MockType>((props) => props.name, applicableFunction)({} as MockType)).toBe('newProp: undefined');
  });
});
