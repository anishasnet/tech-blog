const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-06-14 16:11:50');
    expect(format_date(date)).toBe('6/14/2020');
});

test('format_plural() returns a string with correct pluralization', () => {
    expect(format_plural('comment', 2)).toBe('comments')
})