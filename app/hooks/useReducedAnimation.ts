import { useReducedMotion } from 'framer-motion';

export default function useReducedAnimation<T>(animation: T) {
	const shouldReduceMotion = useReducedMotion();

	return shouldReduceMotion ? undefined : animation;
}
