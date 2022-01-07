/**
 * A function that chains the return of a function with another
 * function. The length of this chain depending on how many functions
 * you want to pass.
 *
 * @parm {Function[]} args - As many function as you want to pass.
 * @return {Function} Function that wrappers all other functions,
 * this function accepts as many params as you want.
 */
export function compose(...args: Function[]): Function;

