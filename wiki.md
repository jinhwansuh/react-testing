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

### describe
describe(name, fn)

## Jest Watch Mode
Watch mode is an option that we can pass to Jest asking to watch files that have changed since the last commit and execute tests related only to those changed files

An optimization designed to make your tests run fast regardless of how many tests you have


## Filename Conventions

Files with .test.js or .test.tsx suffix

Files with .spec.js or .spec.tsx suffix

Files with .js or .tsx suffix in __tests__ folders

## Code Coverage

A metric that can help you understand how much of your software code is tested

- Statement coverage

how many of the statements in the software code have been executed

- Branches coverage

how many of the branches of the control structures (if statements for instance) have been executed

- Function coverage

how many of the functions defined have been called and finally

- Line coverage

how many of lines of source code have been tested

## Assertions

When writing tests, we often need to check that values meet certain conditions

Assertions decide if a test passes or fails

## expect

expect(value)

The argument should be the value that your code produces

Typically, you will use expect along with a 'matcher' function to assert something about a value

[jest matchers Link](https://jestjs.io/docs/using-matchers)

[jest Dom matchers Link](https://github.com/testing-library/jest-dom)

## What to test?

- Test component renders
- Test component renders with props
- Test component renders in different states
- Test component reacts to events

## What not to test?

- Implementation details
- Third party code
- Code that is not important from a user point of view

