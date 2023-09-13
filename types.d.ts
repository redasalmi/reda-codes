export declare global {
	interface Window {
		__theme__: {
			toggleTheme: () => void;
			reflectThemePreference: () => void;
		};
	}
}
