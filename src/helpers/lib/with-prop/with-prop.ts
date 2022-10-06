import { FunctionInterpolation } from '@emotion/styled';

interface FnType<V> {
  (v: V): any;
}

export function withProp<P extends Object, K extends keyof P = keyof P>(
  needle: K,
  fn: FnType<P[K]>,
): FunctionInterpolation<P>;
export function withProp<P extends Object, K extends keyof P = keyof P, V extends P[K] = P[K]>(
  needle: (props: P) => V,
  fn: FnType<P[K]>,
): FunctionInterpolation<P>;

/**
 * Calls a function passing properties values as arguments.
 *
 * @example *
 * const Button = styled.button`
 *   font-size: ${withProp('size', size => `${size}rem`)};
 *   border-color: ${withProp(color('primary', 'blue'), darken(0.5))};
 * `;
 */
export function withProp(needle: any, fn: any) {
  return (props: any) => {
    if (typeof needle === 'function') {
      return fn(needle(props));
    }

    return fn(props[needle]);
  };
}
