export interface IfProps {
  children: React.ReactNode;
  condition: boolean;
  elseChildren?: React.ReactNode;
}

/**
 * @example
 * Use the component as follows:
 * Without 'elseChildren' prop, equivalent to
 * {condition && <Greeter  username={user.name} />}
 *
 * <IF condition={condition}>
 *   <Greeter username={user.name} />
 * </IF>
 *
 * With 'elseChildren' prop, equivalent to
 * {condition ? <Greeter  username={user.name} /> : <LoginButton />}
 *
 * const renderElse = () => <LoginButton />
 * <IF condition={condition} else={renderElse}>
 *   <Greeter username={user.name} />
 * </IF>
 */

export function If({ condition, children, elseChildren = null }: IfProps) {
  if (condition) {
    return <>{children}</>;
  }

  return <>{elseChildren}</>;
}
