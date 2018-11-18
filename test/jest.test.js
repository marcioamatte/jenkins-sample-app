describe('Testing with jest for CI/CD with Jenkins and GitHub', () => {
    test('Test result of sum', () => {
        const {
            sum
        } = require('../src/operations')
        let result = sum(2, 2)
        expect(result).toBe(4)
    })

    test('Result of sum is different of 4', () => {
        const {
            sum
        } = require('../src/operations')
        let result = sum(2, 1)
        expect(result).not.toBe(4)
    })

    test('Result should be 0', () => {
        const {
            sum
        } = require('../src/operations')
        let result = sum(1, -1)
        expect(result).toBe(0)
    })
})