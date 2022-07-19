import Link from '~/__mocks__/Link';

// mocking Link module because there is no wrapper
// like BrowserRouter or MemoryRouter for routing in remix for now
vi.mock('~/components/MotionLink', () => ({
  default: Link,
}));
