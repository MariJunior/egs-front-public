/**
 * Returns the value of `props[name]` or `defaultValue`
 *
 * @param name - prop name
 * @param [defaultValue] - default value if the property is not found
 * @example
 * const Button = styled.button<{ color?: string }>`
 *   color: ${prop('color', 'red')};
 * `;
 *
 * <Button /> // color = 'red'
 * <Button color='blue' /> // color = 'blue'
 */
export function prop<P extends Object, K extends keyof P = keyof P>(name: K, defaultValue?: P[K]) {
  return (props: P) => {
    if (typeof props[name] !== 'undefined') {
      return props[name];
    }

    return defaultValue;
  };
}
