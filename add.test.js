const add = require('./dist/facerecognition-sdk').add;

test('adds 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
})