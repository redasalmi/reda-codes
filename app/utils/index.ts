export { default as useReducedAnimation } from './useReducedAnimation';

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}
