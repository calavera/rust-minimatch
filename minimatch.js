import { minimatch } from 'https://esm.run/minimatch';

export function match_with_minimatch(literal, expr) {
  return minimatch(literal, expr);
}
