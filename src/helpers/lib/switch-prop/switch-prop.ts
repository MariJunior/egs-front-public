import { Interpolation, FunctionInterpolation } from '@emotion/styled';

type CaseKey<V> = Extract<V, string | number>;
type Cases<P, V> = Partial<Record<CaseKey<V>, Interpolation<P>>>;

export function switchProp<P extends Object, K extends keyof P = keyof P>(
  needle: K,
  cases: Cases<P, P[K]>,
  defaultCase?: Interpolation<P>,
): FunctionInterpolation<P>;
export function switchProp<P extends Object, K extends keyof P = keyof P, V extends CaseKey<P[K]> = CaseKey<P[K]>>(
  needle: (props: P) => V,
  cases: Cases<P, V>,
  defaultCase?: Interpolation<P>,
): FunctionInterpolation<P>;

/**
 * Switches on a given prop. Returns the value or function for a given prop value. Third parameter is default value.
 *
 * @example
 * const Button = styled.button`
 *   font-size: ${switchProp(prop('size', 'medium'), {
 *     small: font('sm'),
 *     medium: font('md'),
 *     large: font('lg')
 *   }};
 *
 *   ${switchProp('type', {
 *     light: css`
 *       color: white;
 *     `,
 *     dark: css`
 *       color: black;
 *     `
 *   }, css`color: yellow;`)}
 * `;
 *
 * <Button size='large' theme={{ kind: 'light' }} />
 */
export function switchProp(needle: any, cases: any, defaultCase: any) {
  return (props: any) => {
    const value = typeof needle === 'function' ? needle(props) : props[needle];

    if (value in cases) {
      return cases[value];
    }

    return defaultCase;
  };
}
