## Jest vs RTL(React-Testing-Library)

### Jest
Jest is a javascript testing framework

Jest is a test runner that find tests, runs the tests, determines whether the tests passed or failed and reports it back in a human readable manner

### RTL
Javascript testing utility that provides virtual DOM for testing React components

RTL provides a virtual DOM which we can use to interact with and verify the behavior of a react component


## Types of tests

### Unit tests
Focus is on testing the individual building blocks of an application such as a class or function or a component

Isolation, independent

### Integration tests
Focus is on testing a combination of units and ensuring they work together

Take longer than unit tests

### E2E tests
Focus is on testing the entire application flow and ensuring it works as designed from start to finish

Involves in a real UI, a real backend database, real services etc

Take the longest as they cover the most amount of code

Have a cost implication as yo interact with real APIs that may charge based on the number of requests

## TDD(Test Driven Development)
TDD is a software development precess where you write tests before writing the software code

Once the tests have been written, you then write the code to ensure the tests pass

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run the tests successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue to pass 

## function

### test
test(name, fn, timeout)

