import Link from '~/__mocks__/Link';

// mocking Link module because there is no wrapper
// like BrowserRouter or MemoryRouter for routing in remix for now
vi.mock('~/components/MotionLink', () => ({
	default: Link,
}));

window.IntersectionObserver = vi.fn(() => ({
	root: null,
	rootMargin: '',
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
	thresholds: [],
	takeRecords: vi.fn(() => []),
}));
