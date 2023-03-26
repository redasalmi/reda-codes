const Link = vi.fn(({ children }: { children: React.ReactNode }) => (
	<a href="/test-link">{children}</a>
));

export default Link;
