describe('Testing with jest for CI/CD with Jenkins and GitHub', () => {
    test('Test result of sum', () => {
        const {
            sum
        } = require('../src/operations')
        let result = sum(2, 2)
        expect(result).toBe(4)
    })
})