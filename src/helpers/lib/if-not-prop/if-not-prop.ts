import { ifProp } from '../if-prop';

/**
 * Returns `fail` if prop is truthy. Otherwise returns `pass`
 *
 * @example
 * const Button = styled.button`
 *   color: ${ifNotProp('transparent', 'transparent', 'black')};
 * `;
 *
 * <Button /> // color = 'transparent';
 * <Button transparent /> // color = 'black';
 */
export const ifNotProp: typeof ifProp = (name, pass = '', fail = '') => ifProp(name, fail, pass);
