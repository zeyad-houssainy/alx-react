import {getFooterCopy, getLatestNotification, getFullYear} from './utils';

// Testing getFooterCopy function
test('if index is true', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');
});

test('if index is False', () => {
	expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Testing getFooterCopy function
test('Get the current year value', () => {
	expect(getFullYear()).toBe(2024);
});

// Testing getFooterCopy function
test('Function get specific value', () => {
	expect(getLatestNotification()).toBe(
		'<strong>Urgent requirement</strong> - complete by EOD',
	);
});
