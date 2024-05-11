module.exports = {
	setupFiles: ['<rootDir>/config/setupTests.js'],
	moduleNameMapper: {
		'\\.(css|sass)$': '<rootDir>/__mocks__/styleMock.js',
		'\\.(jpg|jpeg|png|gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
	},
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	testEnvironment: 'jsdom',
	collectCoverage: true,
	coverageDirectory: '<rootDir>/coverage/',
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
