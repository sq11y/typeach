import { kebabCase } from "change-case";

export type BemModifier = boolean | string | number | undefined | null;

export type BemModifiers = Record<string, BemModifier>;

/**
 * Helps you create class names
 * following the BEM convention.
 *
 * @see https://getbem.com/naming/
 */
export const useBemClass = (name: string, prefix?: string) => {
  const formattedName = prefix ? `${prefix}-${name}` : name;

  return (...inputs: (BemModifiers | string)[]) => {
    const name = [formattedName, ...inputs]
      .filter((c): c is string => typeof c === "string")
      .map((c) => kebabCase(c))
      .join("__");

    const classes: Record<string, boolean> = { [name]: true };

    for (const modifiers of inputs.filter((c) => typeof c === "object")) {
      for (const modifier of Object.keys(modifiers)) {
        const value = modifiers[modifier];

        if (typeof value === "string") {
          classes[`${name}--${value}`] = true;
        }

        if (typeof value === "number") {
          classes[`${name}--${kebabCase(modifier)}-${value}`] = true;
        }

        if (typeof value === "boolean") {
          classes[`${name}--${kebabCase(modifier)}`] = value;
        }
      }
    }

    return classes;
  };
};

/**
 * A wrapper for `useBemClass` to provide
 * a global prefix for all classes.
 */
export const useGlobalBemClass = (prefix: string) => {
  return <C extends string>(name: C) => {
    return useBemClass(name, prefix);
  };
};
